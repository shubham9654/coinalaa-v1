import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { toolId, prompt, context, userId } = await request.json()
    
    // Get the AI tool
    const tool = await db.aITool.findUnique({
      where: { id: toolId }
    })
    
    if (!tool) {
      return NextResponse.json(
        { error: 'AI tool not found' },
        { status: 404 }
      )
    }
    
    // Construct the full prompt
    const fullPrompt = context 
      ? `${tool.prompt}\n\nContext: ${context}\n\nUser Query: ${prompt}`
      : `${tool.prompt}\n\nUser Query: ${prompt}`
    
    // Call ZAI API
    const zai = await ZAI.create()
    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a Bitcoin expert assistant. Provide accurate, helpful, and well-structured responses about Bitcoin and cryptocurrency topics.'
        },
        {
          role: 'user',
          content: fullPrompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    })
    
    const response = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.'
    
    // Save the query to database
    await db.aIQuery.create({
      data: {
        prompt: fullPrompt,
        response,
        context,
        userId,
        toolId
      }
    })
    
    // Update tool usage count
    await db.aITool.update({
      where: { id: toolId },
      data: { usageCount: { increment: 1 } }
    })
    
    return NextResponse.json({ response })
  } catch (error) {
    console.error('Error processing AI query:', error)
    return NextResponse.json(
      { error: 'Failed to process AI query' },
      { status: 500 }
    )
  }
}