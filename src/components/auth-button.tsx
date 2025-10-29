'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Bitcoin, Mail, User } from 'lucide-react'

interface AuthButtonProps {
  onSignIn?: (user: any) => void
}

export default function AuthButton({ onSignIn }: AuthButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [bitcoinAddress, setBitcoinAddress] = useState('')

  const handleAuth = async () => {
    setIsLoading(true)
    
    // Simulate authentication
    setTimeout(() => {
      const mockUser = {
        id: 'demo-user',
        name: name || 'Bitcoin Enthusiast',
        email: email || 'demo@coinlaa.com',
        bitcoinAddress: bitcoinAddress || 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'
      }
      
      onSignIn?.(mockUser)
      setIsLoading(false)
    }, 1000)
  }

  if (isSignUp) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bitcoin className="h-5 w-5 text-orange-500" />
            Join Coinlaa
          </CardTitle>
          <CardDescription>
            Create your account to join the Bitcoin community
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div>
            <Label htmlFor="bitcoin">Bitcoin Address (Optional)</Label>
            <Input
              id="bitcoin"
              placeholder="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
              value={bitcoinAddress}
              onChange={(e) => setBitcoinAddress(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button 
            className="w-full" 
            onClick={handleAuth}
            disabled={isLoading || !email || !name}
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </Button>
          <Button 
            variant="ghost" 
            className="w-full"
            onClick={() => setIsSignUp(false)}
          >
            Already have an account? Sign In
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bitcoin className="h-5 w-5 text-orange-500" />
          Welcome to Coinlaa
        </CardTitle>
        <CardDescription>
          Sign in to access the Bitcoin hub
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <Button 
          className="w-full" 
          onClick={handleAuth}
          disabled={isLoading || !email}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </Button>
        <Button 
          variant="ghost" 
          className="w-full"
          onClick={() => setIsSignUp(true)}
        >
          Don't have an account? Sign Up
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" className="w-full">
          <Bitcoin className="h-4 w-4 mr-2" />
          Bitcoin Wallet
        </Button>
      </CardContent>
    </Card>
  )
}