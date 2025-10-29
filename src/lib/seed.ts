import { db } from '@/lib/db'

export async function seedAITools() {
  try {
    // Check if tools already exist
    const existingTools = await db.aITool.count()
    if (existingTools > 0) {
      console.log('AI tools already exist, skipping seed')
      return
    }
    
    const tools = [
      {
        name: 'Bitcoin Price Predictor',
        description: 'AI-powered price prediction using historical data and market sentiment analysis',
        prompt: 'Analyze Bitcoin price trends, market indicators, and historical patterns to provide insights on potential price movements. Consider factors like market sentiment, technical indicators, and recent news.',
        category: 'Price Analysis'
      },
      {
        name: 'Technical Analysis Assistant',
        description: 'Get comprehensive technical analysis for Bitcoin trading decisions',
        prompt: 'Provide detailed technical analysis for Bitcoin including support/resistance levels, moving averages, RSI, MACD, and other key indicators. Suggest potential entry and exit points based on current market conditions.',
        category: 'Technical Analysis'
      },
      {
        name: 'Bitcoin Educator',
        description: 'Learn Bitcoin concepts through interactive AI conversations',
        prompt: 'Explain Bitcoin concepts in simple, easy-to-understand terms. Use analogies and examples to help beginners grasp complex topics. Be patient and thorough in your explanations.',
        category: 'Education'
      },
      {
        name: 'Security Advisor',
        description: 'Get advice on Bitcoin security best practices and wallet management',
        prompt: 'Provide comprehensive advice on Bitcoin security including wallet selection, backup strategies, safe storage practices, and protection against common threats like scams and hacks.',
        category: 'Security'
      },
      {
        name: 'Mining Consultant',
        description: 'Expert guidance on Bitcoin mining operations and profitability',
        prompt: 'Provide detailed information about Bitcoin mining including hardware requirements, mining pools, profitability calculations, energy considerations, and mining difficulty adjustments.',
        category: 'Mining'
      },
      {
        name: 'Lightning Network Expert',
        description: 'Specialized knowledge about Bitcoin Lightning Network and instant payments',
        prompt: 'Explain Lightning Network concepts, channel management, routing, node operation, and how to use Lightning for instant Bitcoin transactions. Include practical examples and use cases.',
        category: 'Lightning Network'
      }
    ]
    
    for (const tool of tools) {
      await db.aITool.create({
        data: tool
      })
    }
    
    console.log('AI tools seeded successfully')
  } catch (error) {
    console.error('Error seeding AI tools:', error)
  }
}

export async function seedSampleData() {
  try {
    // Seed sample courses
    const courses = [
      {
        title: 'Bitcoin Fundamentals',
        description: 'Learn the basics of Bitcoin, blockchain technology, and digital currency',
        content: '# Bitcoin Fundamentals\n\n## Introduction\nBitcoin is a decentralized digital currency...',
        level: 'Beginner',
        duration: 120,
        price: 0,
        isPublished: true
      },
      {
        title: 'Lightning Network Deep Dive',
        description: 'Master the second layer solution for instant Bitcoin transactions',
        content: '# Lightning Network Deep Dive\n\n## Overview\nThe Lightning Network is a second-layer protocol...',
        level: 'Intermediate',
        duration: 240,
        price: 29.99,
        isPublished: true
      },
      {
        title: 'Bitcoin Security Best Practices',
        description: 'Protect your Bitcoin with proper security measures and storage solutions',
        content: '# Bitcoin Security Best Practices\n\n## Introduction\nSecurity is paramount when dealing with Bitcoin...',
        level: 'Advanced',
        duration: 180,
        price: 49.99,
        isPublished: true
      }
    ]
    
    for (const course of courses) {
      await db.course.create({
        data: course
      })
    }
    
    // Seed sample events
    const events = [
      {
        title: 'Bitcoin Conference 2024',
        description: 'The biggest Bitcoin conference of the year',
        location: 'Miami, FL',
        startDate: new Date('2024-03-15'),
        endDate: new Date('2024-03-17'),
        type: 'Conference',
        maxAttendees: 5000,
        isActive: true
      },
      {
        title: 'Lightning Hackathon',
        description: 'Build the future of Bitcoin payments',
        location: 'Austin, TX',
        startDate: new Date('2024-02-08'),
        endDate: new Date('2024-02-10'),
        type: 'Hackathon',
        maxAttendees: 200,
        isActive: true
      }
    ]
    
    for (const event of events) {
      await db.event.create({
        data: event
      })
    }
    
    // Seed sample jobs
    const jobs = [
      {
        title: 'Bitcoin Developer',
        description: 'We are looking for an experienced Bitcoin developer to join our team',
        requirements: 'Experience with Bitcoin Core, Lightning Network, and blockchain development',
        salary: '$80k - $120k',
        location: 'Remote',
        type: 'Full-time',
        company: 'Crypto Startup',
        email: 'jobs@cryptostartup.com',
        isActive: true
      },
      {
        title: 'Blockchain Researcher',
        description: 'Research and analyze blockchain technologies and trends',
        requirements: 'PhD in Computer Science or related field, strong analytical skills',
        salary: '$100k - $150k',
        location: 'San Francisco',
        type: 'Full-time',
        company: 'Bitcoin Foundation',
        email: 'careers@bitcoinfoundation.org',
        isActive: true
      }
    ]
    
    for (const job of jobs) {
      await db.job.create({
        data: job
      })
    }
    
    console.log('Sample data seeded successfully')
  } catch (error) {
    console.error('Error seeding sample data:', error)
  }
}