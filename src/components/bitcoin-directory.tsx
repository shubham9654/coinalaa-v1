'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Building, MapPin, Globe, Star, ExternalLink, Search } from 'lucide-react'

const businesses = [
  {
    id: 1,
    name: 'Bitcoin Coffee Shop',
    category: 'Food & Beverage',
    location: 'San Francisco, CA',
    description: 'First Bitcoin-only coffee shop accepting Lightning Network payments',
    rating: 4.8,
    verified: true,
    paymentMethods: ['Bitcoin', 'Lightning Network'],
    website: 'bitcoincoffee.com',
    image: '☕'
  },
  {
    id: 2,
    name: 'Crypto Gear Store',
    category: 'Retail',
    location: 'Miami, FL',
    description: 'Bitcoin merchandise and crypto-themed clothing store',
    rating: 4.5,
    verified: true,
    paymentMethods: ['Bitcoin', 'Lightning Network', 'Credit Card'],
    website: 'cryptogear.com',
    image: '👕'
  },
  {
    id: 3,
    name: 'Satoshi\'s Pizza',
    category: 'Food & Beverage',
    location: 'New York, NY',
    description: 'Pizza place accepting Bitcoin since 2018',
    rating: 4.6,
    verified: false,
    paymentMethods: ['Bitcoin', 'Lightning Network'],
    website: 'satoshispizza.com',
    image: '🍕'
  },
  {
    id: 4,
    name: 'Bitcoin Real Estate',
    category: 'Real Estate',
    location: 'Austin, TX',
    description: 'Real estate agency specializing in Bitcoin property transactions',
    rating: 4.7,
    verified: true,
    paymentMethods: ['Bitcoin', 'Wire Transfer'],
    website: 'bitcoinrealestate.com',
    image: '🏠'
  },
  {
    id: 5,
    name: 'Crypto Legal Services',
    category: 'Professional Services',
    location: 'Los Angeles, CA',
    description: 'Legal firm specializing in cryptocurrency and blockchain regulations',
    rating: 4.4,
    verified: true,
    paymentMethods: ['Bitcoin', 'Lightning Network', 'Bank Transfer'],
    website: 'cryptolegal.com',
    image: '⚖️'
  },
  {
    id: 6,
    name: 'Bitcoin Tech Repair',
    category: 'Services',
    location: 'Seattle, WA',
    description: 'Computer and tech repair shop accepting Bitcoin payments',
    rating: 4.3,
    verified: false,
    paymentMethods: ['Bitcoin', 'Lightning Network'],
    website: 'btechrepair.com',
    image: '🔧'
  }
]

const categories = ['All', 'Food & Beverage', 'Retail', 'Real Estate', 'Professional Services', 'Services']

export default function BitcoinDirectory() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || business.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Bitcoin Spaces</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover Bitcoin-friendly businesses and services worldwide. Support the Bitcoin ecosystem by shopping at these establishments.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search businesses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Business Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBusinesses.map((business) => (
          <Card key={business.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{business.image}</div>
                  <div>
                    <CardTitle className="text-lg">{business.name}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary">{business.category}</Badge>
                      {business.verified && (
                        <Badge variant="default" className="text-xs">Verified</Badge>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{business.rating}</span>
                </div>
              </div>
              <CardDescription className="mt-3">
                {business.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {business.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Building className="h-4 w-4 mr-2" />
                  {business.paymentMethods.join(' • ')}
                </div>
                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex items-center text-sm text-blue-600">
                    <Globe className="h-4 w-4 mr-1" />
                    {business.website}
                  </div>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Visit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredBusinesses.length === 0 && (
        <div className="text-center py-12">
          <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No businesses found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}