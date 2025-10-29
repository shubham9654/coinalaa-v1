'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bitcoin, Clock, TrendingUp, Blocks, Activity } from 'lucide-react'

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

export default function BitcoinClock() {
  const [stats, setStats] = useState<BitcoinStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [currentTime, setCurrentTime] = useState(new Date())

  // Bitcoin constants
  const SATOSHIS_PER_BITCOIN = 100000000
  const BLOCKS_PER_HALVING = 210000
  const INITIAL_BLOCK_REWARD = 50
  const SECONDS_PER_BLOCK = 600 // 10 minutes average
  const GENESIS_BLOCK_TIME = new Date('2009-01-03T00:00:00Z')

  // Function to estimate current block height
  const getCurrentBlockHeight = (date: Date): number => {
    const timeSinceGenesis = date.getTime() - GENESIS_BLOCK_TIME.getTime()
    const secondsSinceGenesis = timeSinceGenesis / 1000
    const estimatedBlocks = Math.floor(secondsSinceGenesis / SECONDS_PER_BLOCK)
    return estimatedBlocks
  }

  // Function to calculate total supply
  const calculateTotalSupply = (blockHeight: number, currentReward: number): number => {
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

  const calculateBitcoinStats = (): BitcoinStats => {
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
    // Progress should show how far we've come in the current era (0% to 100%)
    const startOfCurrentEra = currentHalvingIndex * BLOCKS_PER_HALVING
    const blocksInCurrentEra = currentBlockHeight - startOfCurrentEra
    const percentageToHalving = (blocksInCurrentEra / BLOCKS_PER_HALVING) * 100

    return {
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
  }

  const calculateRealTimeCountdown = (nextHalvingDate: Date): {
    years: number
    months: number
    days: number
    hours: number
    minutes: number
    seconds: number
    totalSeconds: number
  } => {
    const now = currentTime
    const totalSeconds = Math.max(0, Math.floor((nextHalvingDate.getTime() - now.getTime()) / 1000))
    
    const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60))
    const months = Math.floor((totalSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60))
    const days = Math.floor((totalSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60))
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60))
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
    const seconds = totalSeconds % 60
    
    return { years, months, days, hours, minutes, seconds, totalSeconds }
  }

  const fetchBitcoinStats = async () => {
    try {
      const response = await fetch('/api/bitcoin-stats')
      if (response.ok) {
        const data = await response.json()
        // Convert date strings back to Date objects
        const processedData = {
          ...data,
          nextHalvingDate: new Date(data.nextHalvingDate),
          lastUpdated: new Date(data.lastUpdated)
        }
        setStats(processedData)
      } else {
        // Fallback to calculated stats
        setStats(calculateBitcoinStats())
      }
    } catch (error) {
      // Fallback to calculated stats
      setStats(calculateBitcoinStats())
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Start with calculated stats immediately for better UX
    setStats(calculateBitcoinStats())
    setLoading(false)
    
    // Then try to fetch from API
    fetchBitcoinStats()
    
    // Update current time every second for the countdown
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    
    // Update Bitcoin stats every 30 seconds
    const statsInterval = setInterval(fetchBitcoinStats, 30000)
    
    return () => {
      clearInterval(timeInterval)
      clearInterval(statsInterval)
    }
  }, [])

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num)
  }

  const formatBitcoin = (btc: number): string => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 8
    }).format(btc)
  }

  const formatTimeRemaining = (countdown: {
    years: number
    months: number
    days: number
    hours: number
    minutes: number
    seconds: number
  }): string => {
    const { years, months, days, hours, minutes, seconds } = countdown
    
    if (years > 0) {
      return `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`
    } else if (months > 0) {
      return `${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`
    } else if (days > 0) {
      return `${days}d ${hours}h ${minutes}m ${seconds}s`
    } else if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`
    } else {
      return `${seconds}s`
    }
  }

  const formatCompactTime = (countdown: {
    years: number
    months: number
    days: number
    hours: number
    minutes: number
    seconds: number
  }): string => {
    const { years, months, days, hours, minutes, seconds } = countdown
    
    if (years > 0) {
      return `${years}y ${months}m ${days}d`
    } else if (months > 0) {
      return `${months}m ${days}d`
    } else if (days > 0) {
      return `${days}d ${hours}h`
    } else if (hours > 0) {
      return `${hours}h ${minutes}m`
    } else {
      return `${minutes}m ${seconds}s`
    }
  }

  const getHalvingProgressColor = (percentage: number): string => {
    if (percentage < 50) return 'bg-green-500'
    if (percentage < 80) return 'bg-yellow-500'
    return 'bg-orange-500'
  }

  if (loading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Bitcoin Clock
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error || !stats) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Bitcoin Clock
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-red-600">
            <Activity className="h-8 w-8 mx-auto mb-2" />
            <p>Unable to load Bitcoin stats</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Calculate real-time countdown
  const countdown = calculateRealTimeCountdown(stats.nextHalvingDate)

  return (
    <div className="space-y-6">
      {/* Main Bitcoin Clock Card */}
      <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-600">
            <Clock className="h-6 w-6" />
            Bitcoin Network Clock
          </CardTitle>
          <CardDescription>
            Real-time Bitcoin network statistics and halving countdown
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Supply */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Bitcoin className="h-5 w-5 text-orange-500" />
                <h3 className="font-semibold">Current Supply</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-2xl font-bold text-orange-600">
                  {formatBitcoin(stats.currentSupply)} BTC
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {formatNumber(stats.currentSupply * SATOSHIS_PER_BITCOIN)} satoshis
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {((stats.currentSupply / 21000000) * 100).toFixed(2)}% of total supply
                </div>
              </div>
            </div>

            {/* Halving Countdown */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold">Next Halving</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {formatCompactTime(countdown)}
                </div>
                <div className="text-lg font-mono text-green-500 mb-3">
                  {String(countdown.hours).padStart(2, '0')}:{String(countdown.minutes).padStart(2, '0')}:{String(countdown.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-600">
                  {stats.blocksUntilHalving.toLocaleString()} blocks remaining
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Block {stats.nextHalvingBlock.toLocaleString()} • Reward: {stats.nextReward} BTC
                </div>
              </div>
            </div>
          </div>

          {/* FIXED: Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Progress to Next Halving</span>
              <span className="text-sm text-gray-600">{stats.percentageToHalving.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-500 ${getHalvingProgressColor(stats.percentageToHalving)}`}
                style={{ width: `${stats.percentageToHalving}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Block {stats.currentBlockHeight.toLocaleString()}</span>
              <span>Block {stats.nextHalvingBlock.toLocaleString()}</span>
            </div>
            <div className="text-xs text-gray-400 mt-2 text-center">
              Era Progress: {Math.floor(stats.currentBlockHeight / BLOCKS_PER_HALVING * BLOCKS_PER_HALVING).toLocaleString()} / {stats.nextHalvingBlock.toLocaleString()} blocks
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-time Countdown Display */}
      <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <Clock className="h-6 w-6" />
            Live Halving Countdown
          </CardTitle>
          <CardDescription>
            Real-time countdown to the next Bitcoin halving event
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            <div className="bg-white p-3 rounded-lg border">
              <div className="text-2xl font-bold text-orange-600">{countdown.years}</div>
              <div className="text-xs text-gray-600">Years</div>
            </div>
            <div className="bg-white p-3 rounded-lg border">
              <div className="text-2xl font-bold text-blue-600">{countdown.months}</div>
              <div className="text-xs text-gray-600">Months</div>
            </div>
            <div className="bg-white p-3 rounded-lg border">
              <div className="text-2xl font-bold text-green-600">{countdown.days}</div>
              <div className="text-xs text-gray-600">Days</div>
            </div>
            <div className="bg-white p-3 rounded-lg border">
              <div className="text-2xl font-bold text-purple-600">{String(countdown.hours).padStart(2, '0')}</div>
              <div className="text-xs text-gray-600">Hours</div>
            </div>
            <div className="bg-white p-3 rounded-lg border">
              <div className="text-2xl font-bold text-red-600">{String(countdown.minutes).padStart(2, '0')}</div>
              <div className="text-xs text-gray-600">Minutes</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-yellow-300 bg-yellow-50">
              <div className="text-2xl font-bold text-yellow-600 animate-pulse">{String(countdown.seconds).padStart(2, '0')}</div>
              <div className="text-xs text-gray-600">Seconds</div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="text-sm text-gray-600">
              Total time remaining: <span className="font-mono font-bold text-green-600">{formatTimeRemaining(countdown)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Blocks className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">Blocks Mined</span>
            </div>
            <div className="text-xl font-bold text-blue-600">
              {stats.blocksMined.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">
              Since genesis block
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Bitcoin className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium">Current Reward</span>
            </div>
            <div className="text-xl font-bold text-orange-600">
              {stats.currentReward} BTC
            </div>
            <div className="text-xs text-gray-500">
              Per block
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">Current Time</span>
            </div>
            <div className="text-lg font-bold text-green-600">
              {currentTime.toLocaleTimeString()}
            </div>
            <div className="text-xs text-gray-500">
              Live clock • Updates every second
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Halving Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">About Bitcoin Halving</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              Bitcoin halving occurs every 210,000 blocks (approximately every 4 years), 
              reducing the block reward miners receive by 50%.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <Badge variant="outline" className="mb-2">Current Era</Badge>
                <p>Block {Math.floor(stats.currentBlockHeight / BLOCKS_PER_HALVING * BLOCKS_PER_HALVING).toLocaleString()} - {stats.nextHalvingBlock.toLocaleString()}</p>
                <p>Reward: {stats.currentReward} BTC per block</p>
                <p>Progress: {stats.percentageToHalving.toFixed(1)}% complete</p>
              </div>
              <div>
                <Badge variant="outline" className="mb-2">Next Era</Badge>
                <p>Block {stats.nextHalvingBlock.toLocaleString()} - {stats.nextHalvingBlock + BLOCKS_PER_HALVING}</p>
                <p>Reward: {stats.nextReward} BTC per block</p>
                <p>Blocks remaining: {stats.blocksUntilHalving.toLocaleString()}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Total supply will approach 21 million BTC by the year 2140.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}