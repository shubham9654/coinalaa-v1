'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Bot, Zap, Loader2, Send } from 'lucide-react'

interface AITool {
  id: string
  name: string
  description: string
  category: string
  usageCount: number
}

interface AIResponse {
  response: string
}

export default function BitcoinGPTs() {
  const [tools, setTools] = useState<AITool[]>([])
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null)
  const [prompt, setPrompt] = useState('')
  const [context, setContext] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchTools()
  }, [])

  const fetchTools = async () => {
    try {
      const response = await fetch('/api/ai-tools')
      if (response.ok) {
        const data = await response.json()
        setTools(data)
      }
    } catch (error) {
      console.error('Error fetching tools:', error)
    }
  }

  const handleToolSelect = (tool: AITool) => {
    setSelectedTool(tool)
    setResponse('')
    setError('')
  }

  const handleSubmit = async () => {
    if (!selectedTool || !prompt.trim()) return

    setLoading(true)
    setError('')
    setResponse('')

    try {
      const response = await fetch('/api/ai-query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toolId: selectedTool.id,
          prompt: prompt.trim(),
          context: context.trim(),
          userId: 'demo-user' // In a real app, this would come from authentication
        })
      })

      if (response.ok) {
        const data: AIResponse = await response.json()
        setResponse(data.response)
      } else {
        setError('Failed to get response from AI. Please try again.')
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSeed = async () => {
    try {
      const response = await fetch('/api/seed', {
        method: 'POST'
      })
      if (response.ok) {
        await fetchTools()
      }
    } catch (error) {
      console.error('Error seeding data:', error)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                Bitcoin AI Tools
              </CardTitle>
              <Button variant="outline" size="sm" onClick={handleSeed}>
                Seed Tools
              </Button>
            </div>
            <CardDescription>
              Choose an AI tool to get Bitcoin insights and assistance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {tools.length === 0 ? (
              <div className="text-center py-8">
                <Bot className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">No AI tools available yet</p>
                <Button onClick={handleSeed}>Load Default Tools</Button>
              </div>
            ) : (
              tools.map((tool) => (
                <Card 
                  key={tool.id} 
                  className={`cursor-pointer transition-all ${
                    selectedTool?.id === tool.id 
                      ? 'ring-2 ring-orange-500 bg-orange-50' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => handleToolSelect(tool)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{tool.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{tool.category}</Badge>
                          <span className="text-xs text-gray-500">
                            {tool.usageCount} uses
                          </span>
                        </div>
                      </div>
                      {selectedTool?.id === tool.id && (
                        <div className="h-2 w-2 bg-orange-500 rounded-full" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedTool ? selectedTool.name : 'Select a Tool'}
            </CardTitle>
            <CardDescription>
              {selectedTool 
                ? selectedTool.description 
                : 'Choose an AI tool from the left to get started'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedTool ? (
              <>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Your Question
                  </label>
                  <Textarea 
                    placeholder="Ask anything about Bitcoin..."
                    className="min-h-[100px]"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Context (Optional)
                  </label>
                  <Input 
                    placeholder="Additional context for better responses..."
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <Button 
                  className="w-full" 
                  onClick={handleSubmit}
                  disabled={loading || !prompt.trim()}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Zap className="h-4 w-4 mr-2" />
                      Generate Response
                    </>
                  )}
                </Button>
              </>
            ) : (
              <div className="text-center py-8">
                <Bot className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  Select an AI tool to start asking questions
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {response && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-green-500" />
                AI Response
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-wrap text-gray-700">
                  {response}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {error && (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-4">
              <p className="text-red-600 text-sm">{error}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}