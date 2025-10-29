'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Store, 
  Search, 
  Star, 
  MessageCircle, 
  ExternalLink, 
  Bitcoin,
  ShoppingCart,
  Package,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react'

const vendors = [
  {
    id: 1,
    name: 'Bitcoin Electronics',
    category: 'Electronics',
    description: 'Premium electronics and gadgets with Bitcoin payments',
    rating: 4.9,
    totalSales: 1250,
    products: 45,
    verified: true,
    acceptsLightning: true,
    responseTime: '2 hours',
    logo: '📱',
    specialties: ['Smartphones', 'Laptops', 'Accessories'],
    joinDate: '2023-01-15'
  },
  {
    id: 2,
    name: 'Crypto Fashion Hub',
    category: 'Fashion',
    description: 'Trendy clothing and accessories for crypto enthusiasts',
    rating: 4.7,
    totalSales: 890,
    products: 120,
    verified: true,
    acceptsLightning: true,
    responseTime: '1 hour',
    logo: '👕',
    specialties: ['T-Shirts', 'Hoodies', 'Hats'],
    joinDate: '2023-03-20'
  },
  {
    id: 3,
    name: 'Satoshi\'s Books',
    category: 'Books & Media',
    description: 'Bitcoin and cryptocurrency literature, both digital and physical',
    rating: 4.8,
    totalSales: 650,
    products: 200,
    verified: true,
    acceptsLightning: false,
    responseTime: '4 hours',
    logo: '📚',
    specialties: ['Technical Books', 'Biographies', 'Guides'],
    joinDate: '2022-11-10'
  },
  {
    id: 4,
    name: 'Lightning Games',
    category: 'Gaming',
    description: 'Video games and gaming accessories with instant Bitcoin payments',
    rating: 4.6,
    totalSales: 320,
    products: 85,
    verified: false,
    acceptsLightning: true,
    responseTime: '30 minutes',
    logo: '🎮',
    specialties: ['PC Games', 'Consoles', 'Accessories'],
    joinDate: '2023-06-01'
  },
  {
    id: 5,
    name: 'Bitcoin Home Goods',
    category: 'Home & Garden',
    description: 'Bitcoin-themed home decor and practical household items',
    rating: 4.5,
    totalSales: 440,
    products: 95,
    verified: true,
    acceptsLightning: true,
    responseTime: '3 hours',
    logo: '🏠',
    specialties: ['Decor', 'Kitchen', 'Lighting'],
    joinDate: '2023-02-28'
  },
  {
    id: 6,
    name: 'Crypto Art Gallery',
    category: 'Art & Collectibles',
    description: 'Digital and physical art from Bitcoin-inspired artists',
    rating: 4.9,
    totalSales: 180,
    products: 35,
    verified: true,
    acceptsLightning: true,
    responseTime: '6 hours',
    logo: '🎨',
    specialties: ['Digital Art', 'Prints', 'NFTs'],
    joinDate: '2023-04-15'
  }
]

const categories = ['All', 'Electronics', 'Fashion', 'Books & Media', 'Gaming', 'Home & Garden', 'Art & Collectibles']

const featuredProducts = [
  {
    id: 1,
    name: 'Bitcoin Hardware Wallet',
    vendor: 'Bitcoin Electronics',
    price: '0.0025 BTC',
    originalPrice: '0.0032 BTC',
    image: '🔐',
    rating: 4.9,
    sales: 234,
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Satoshi Signature T-Shirt',
    vendor: 'Crypto Fashion Hub',
    price: '0.00015 BTC',
    originalPrice: '0.00020 BTC',
    image: '👕',
    rating: 4.7,
    sales: 189,
    badge: 'Popular'
  },
  {
    id: 3,
    name: 'Mastering Bitcoin Book',
    vendor: 'Satoshi\'s Books',
    price: '0.0008 BTC',
    originalPrice: null,
    image: '📖',
    rating: 4.8,
    sales: 156,
    badge: 'Top Rated'
  },
  {
    id: 4,
    name: 'Bitcoin Mining Rig',
    vendor: 'Bitcoin Electronics',
    price: '0.015 BTC',
    originalPrice: '0.018 BTC',
    image: '⛏️',
    rating: 4.6,
    sales: 89,
    badge: 'Hot Deal'
  }
]

export default function BitcoinMarketplace() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || vendor.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Bitcoin Marketplace</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover trusted vendors and shops accepting Bitcoin. Shop securely with cryptocurrency payment options.
        </p>
      </div>

      <Tabs defaultValue="vendors" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="vendors">Vendor Shops</TabsTrigger>
          <TabsTrigger value="products">Featured Products</TabsTrigger>
        </TabsList>

        {/* Vendor Shops Tab */}
        <TabsContent value="vendors" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search vendor shops..."
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

          {/* Vendor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVendors.map((vendor) => (
              <Card key={vendor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{vendor.logo}</div>
                      <div>
                        <CardTitle className="text-lg">{vendor.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary">{vendor.category}</Badge>
                          {vendor.verified && (
                            <Badge variant="default" className="text-xs">
                              <Shield className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                          {vendor.acceptsLightning && (
                            <Badge variant="outline" className="text-xs">
                              <Zap className="h-3 w-3 mr-1" />
                              Lightning
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{vendor.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="mt-3">
                    {vendor.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-gray-50 rounded p-2">
                        <div className="text-lg font-semibold text-gray-900">{vendor.products}</div>
                        <div className="text-xs text-gray-600">Products</div>
                      </div>
                      <div className="bg-gray-50 rounded p-2">
                        <div className="text-lg font-semibold text-gray-900">{vendor.totalSales}</div>
                        <div className="text-xs text-gray-600">Sales</div>
                      </div>
                      <div className="bg-gray-50 rounded p-2">
                        <div className="text-lg font-semibold text-gray-900">{vendor.responseTime}</div>
                        <div className="text-xs text-gray-600">Response</div>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Specialties:</div>
                      <div className="flex flex-wrap gap-1">
                        {vendor.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="text-xs text-gray-500">
                        Joined {new Date(vendor.joinDate).toLocaleDateString()}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                        <Button size="sm">
                          <Store className="h-4 w-4 mr-1" />
                          Visit Shop
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredVendors.length === 0 && (
            <div className="text-center py-12">
              <Store className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No vendors found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </TabsContent>

        {/* Featured Products Tab */}
        <TabsContent value="products" className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Featured Products</h3>
            <p className="text-gray-600">Popular items from trusted Bitcoin vendors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="relative">
                    <div className="text-4xl text-center mb-2">{product.image}</div>
                    {product.badge && (
                      <Badge variant="default" className="absolute top-0 right-0 text-xs">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-base">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.vendor}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-orange-600">{product.price}</div>
                        {product.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </div>

                    {/* Sales */}
                    <div className="text-sm text-gray-600">
                      <TrendingUp className="h-4 w-4 inline mr-1" />
                      {product.sales} sales
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}