import { NextRequest, NextResponse } from 'next/server'

// Bitcoin constants
const SATOSHIS_PER_BITCOIN = 100000000
const BLOCKS_PER_HALVING = 210000
const INITIAL_BLOCK_REWARD = 50
const SECONDS_PER_BLOCK = 600 // 10 minutes average
const GENESIS_BLOCK_TIME = new Date('2009-01-03T00:00:00Z')

interface BitcoinStats {
  currentSupply: number
  blocksMined: number
  currentBlockHeight: number
  nextHalvingBlock: number
  nextHalvingDate: Date
  blocksUntilHalving: number
  daysUntilHalving: number
  currentReward: number
  nextReward: number
  percentageToHalving: number
  lastUpdated: Date
}

// Function to estimate current block height
function getCurrentBlockHeight(date: Date): number {
  const timeSinceGenesis = date.getTime() - GENESIS_BLOCK_TIME.getTime()
  const secondsSinceGenesis = timeSinceGenesis / 1000
  const estimatedBlocks = Math.floor(secondsSinceGenesis / SECONDS_PER_BLOCK)
  return estimatedBlocks
}

// Function to calculate total supply
function calculateTotalSupply(blockHeight: number, currentReward: number): number {
  let totalSupply = 0
  let reward = INITIAL_BLOCK_REWARD
  let blocks = 0
  
  while (blocks < blockHeight && reward > 0) {
    const blocksInThisEra = Math.min(BLOCKS_PER_HALVING, blockHeight - blocks)
    totalSupply += blocksInThisEra * reward
    blocks += blocksInThisEra
    reward /= 2
  }
  
  return totalSupply
}

export async function GET(request: NextRequest) {
  try {
    const now = new Date()
    const currentBlockHeight = getCurrentBlockHeight(now)
    const currentHalvingIndex = Math.floor(currentBlockHeight / BLOCKS_PER_HALVING)
    const currentReward = INITIAL_BLOCK_REWARD / Math.pow(2, currentHalvingIndex)
    const nextReward = currentReward / 2
    
    // Calculate blocks until next halving
    const nextHalvingBlock = (currentHalvingIndex + 1) * BLOCKS_PER_HALVING
    const blocksUntilHalving = nextHalvingBlock - currentBlockHeight
    
    // Calculate time until halving
    const secondsUntilHalving = blocksUntilHalving * SECONDS_PER_BLOCK
    const nextHalvingDate = new Date(now.getTime() + secondsUntilHalving * 1000)
    const daysUntilHalving = Math.ceil(secondsUntilHalving / (24 * 60 * 60))
    
    // Calculate current supply
    const totalSupply = calculateTotalSupply(currentBlockHeight, currentReward)
    
    // FIXED: Calculate progress to next halving correctly
    // Progress should show how far we've come in the current era, not how much is left
    const startOfCurrentEra = currentHalvingIndex * BLOCKS_PER_HALVING
    const blocksInCurrentEra = currentBlockHeight - startOfCurrentEra
    const percentageToHalving = (blocksInCurrentEra / BLOCKS_PER_HALVING) * 100

    const bitcoinStats: BitcoinStats = {
      currentSupply: totalSupply,
      blocksMined: currentBlockHeight,
      currentBlockHeight,
      nextHalvingBlock,
      nextHalvingDate,
      blocksUntilHalving,
      daysUntilHalving,
      currentReward,
      nextReward,
      percentageToHalving,
      lastUpdated: now
    }

    return NextResponse.json(bitcoinStats)
  } catch (error) {
    console.error('Error calculating Bitcoin stats:', error)
    return NextResponse.json(
      { error: 'Failed to calculate Bitcoin stats' },
      { status: 500 }
    )
  }
}