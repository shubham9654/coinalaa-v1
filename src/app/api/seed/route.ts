import { NextResponse } from 'next/server'
import { seedAITools, seedSampleData } from '@/lib/seed'

export async function POST() {
  try {
    await seedAITools()
    await seedSampleData()
    
    return NextResponse.json({ 
      message: 'Database seeded successfully' 
    })
  } catch (error) {
    console.error('Error seeding database:', error)
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    )
  }
}