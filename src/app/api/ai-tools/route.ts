import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const tools = await db.aITool.findMany({
      where: { isActive: true },
      orderBy: { usageCount: 'desc' }
    })
    
    return NextResponse.json(tools)
  } catch (error) {
    console.error('Error fetching AI tools:', error)
    return NextResponse.json(
      { error: 'Failed to fetch AI tools' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, description, prompt, category } = await request.json()
    
    const tool = await db.aITool.create({
      data: {
        name,
        description,
        prompt,
        category
      }
    })
    
    return NextResponse.json(tool)
  } catch (error) {
    console.error('Error creating AI tool:', error)
    return NextResponse.json(
      { error: 'Failed to create AI tool' },
      { status: 500 }
    )
  }
}