"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Bitcoin, 
  Users, 
  MessageCircle,
  GraduationCap, 
  Briefcase, 
  Calendar, 
  Newspaper, 
  Bot, 
  Search,
  TrendingUp,
  Globe,
  Zap,
  Shield,
  Clock,
  MapPin,
  ExternalLink,
  Timer,
  Building,
  Smartphone,
  Rocket,
  Star,
  HandHeart,
  UserCheck,
  Store,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Award,
  BookOpen,
  Video,
  Users2,
  MessageSquare,
  ShoppingCart,
  Package,
  CreditCard,
  Truck,
  Headphones,
  FileText,
  BarChart,
  Lightbulb,
  Globe2,
  Heart
} from 'lucide-react'
import BitcoinGPTs from "@/components/bitcoin-gpts";
import AuthButton from "@/components/auth-button";
import BitcoinClock from "@/components/bitcoin-clock";
import BitcoinDirectory from "@/components/bitcoin-directory";
import BitcoinMarketplace from "@/components/bitcoin-marketplace";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const features = [
  {
    id: 'bitcoin-connect',
    icon: HandHeart,
    title: 'Bitcoin Social',
    description: 'Connect with Bitcoin enthusiasts worldwide',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    href: 'https://app.coinlaa.com/members/',
    detailedDescription: 'Join the largest Bitcoin community platform. Connect, share, and grow with like-minded Bitcoin enthusiasts from around the world.',
    subFeatures: [
      {
        title: 'Community Feed',
        description: 'Real-time updates from Bitcoin enthusiasts',
        icon: MessageSquare,
        highlights: ['Real-time posts', 'Like & comment', 'Share content']
      },
      {
        title: 'Private Messaging',
        description: 'Direct chat with other Bitcoin enthusiasts',
        icon: MessageCircle,
        highlights: ['End-to-end encryption', 'File sharing', 'Voice notes']
      },
      {
        title: 'Bitcoin Groups',
        description: 'Join specialized Bitcoin discussion groups',
        icon: Users2,
        highlights: ['Topic-based groups', 'Events planning', 'Knowledge sharing']
      },
      {
        title: 'Networking Events',
        description: 'Virtual and physical meetups',
        icon: Calendar,
        highlights: ['Monthly meetups', 'Conference alerts', 'Local chapters']
      }
    ],
    stats: { groups: '50+', events: '100+' }
  },
  {
    id: 'bitcoin-academy',
    icon: GraduationCap,
    title: 'Bitcoin Academy',
    description: 'Learn Bitcoin from basics to advanced concepts',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    href: 'https://app.coinlaa.com/courses/',
    detailedDescription: 'Master Bitcoin with comprehensive courses, tutorials, and certifications designed for all skill levels.',
    subFeatures: [
      {
        title: 'Video Courses',
        description: 'High-quality video tutorials from Bitcoin experts',
        icon: Video,
        highlights: ['HD quality videos', 'Expert instructors', 'Downloadable content']
      },
      {
        title: 'Interactive Tutorials',
        description: 'Hands-on learning with practical exercises',
        icon: BookOpen,
        highlights: ['Step-by-step guides', 'Code examples', 'Practice projects']
      },
      {
        title: 'Certification Programs',
        description: 'Get certified in Bitcoin expertise',
        icon: Award,
        highlights: ['Industry recognized', 'Skill verification', 'Career boost']
      },
      {
        title: 'Live Workshops',
        description: 'Interactive sessions with Bitcoin experts',
        icon: Users2,
        highlights: ['Q&A sessions', 'Real-time interaction', 'Recorded sessions']
      }
    ],
    stats: { courses: '100+'}
  },
  {
    id: 'bitcoin-jobs',
    icon: Briefcase,
    title: 'Bitcoin Jobs',
    description: 'Find Bitcoin-related career opportunities',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    href: '/#bitcoin-jobs',
    detailedDescription: 'Discover career opportunities in the Bitcoin ecosystem. Connect with top companies building the future of finance.',
    subFeatures: [
      {
        title: 'Job Board',
        description: 'Curated Bitcoin and crypto job listings',
        icon: Briefcase,
        highlights: ['Daily updates', 'Remote options', 'All levels']
      },
      {
        title: 'Company Profiles',
        description: 'Detailed information about Bitcoin companies',
        icon: Building,
        highlights: ['Company culture', 'Benefits info', 'Team details']
      },
      {
        title: 'Resume Builder',
        description: 'Create Bitcoin-focused professional profiles',
        icon: FileText,
        highlights: ['Bitcoin skills', 'Project showcase', 'Certification display']
      },
      {
        title: 'Career Resources',
        description: 'Guidance and tips for Bitcoin careers',
        icon: Lightbulb,
        highlights: ['Interview prep', 'Salary guides', 'Career paths']
      }
    ],
    stats: {}
  },
  {
    id: 'bitcoin-gpts',
    icon: Bot,
    title: 'Bitcoin GPTs',
    description: 'AI-powered Bitcoin tools and assistants',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50',
    href: 'https://app.coinlaa.com/courses/',
    detailedDescription: 'Leverage AI-powered tools for Bitcoin analysis, trading, and education. Get instant insights and assistance.',
    subFeatures: [
      {
        title: 'Bitcoin Assistant',
        description: 'AI chatbot for Bitcoin questions and guidance',
        icon: Bot,
        highlights: ['24/7 availability', 'Expert knowledge', 'Multi-language']
      },
      {
        title: 'Price Analysis',
        description: 'AI-powered market analysis and predictions',
        icon: BarChart,
        highlights: ['Technical analysis', 'Market trends', 'Risk assessment']
      },
      {
        title: 'Portfolio Optimizer',
        description: 'AI-driven portfolio management suggestions',
        icon: Target,
        highlights: ['Risk analysis', 'Asset allocation', 'Performance tracking']
      },
      {
        title: 'Learning Assistant',
        description: 'Personalized Bitcoin education AI tutor',
        icon: BookOpen,
        highlights: ['Adaptive learning', 'Progress tracking', 'Quiz generation']
      }
    ],
    stats: { tools: '20+', accuracy: '95%' }
  },
  {
    id: 'bitcoin-marketplace',
    icon: Store,
    title: 'Bitcoin Marketplace',
    description: 'Shop at trusted vendor stores accepting Bitcoin',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    href: '/#bitcoin-marketplace',
    detailedDescription: 'Discover and shop from verified Bitcoin vendors. Buy products and services using Bitcoin with secure transactions.',
    subFeatures: [
      {
        title: 'Vendor Shops',
        description: 'Verified Bitcoin-accepting stores',
        icon: Store,
        highlights: ['Verified vendors', 'Quality assurance', 'Customer reviews']
      },
      {
        title: 'Product Catalog',
        description: 'Wide range of products and services',
        icon: Package,
        highlights: ['Multiple categories', 'Detailed descriptions', 'High-quality images']
      },
      {
        title: 'Secure Payments',
        description: 'Safe Bitcoin payment processing',
        icon: Shield,
        highlights: ['Escrow service', 'Instant confirmations', 'Refund policy']
      },
      {
        title: 'Order Tracking',
        description: 'Real-time order and delivery tracking',
        icon: Truck,
        highlights: ['Live tracking', 'Delivery updates', 'Customer support']
      }
    ],
    stats: { products: '100+'}
  },
  {
    id: 'influencers',
    icon: UserCheck,
    title: 'Influencers',
    description: 'Follow leading Bitcoin voices and thought leaders',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    href: '/https://app.coinlaa.com/all-listings/',
    detailedDescription: 'Connect with and follow influential Bitcoin personalities. Get insights, analysis, and updates from trusted voices.',
    subFeatures: [
      {
        title: 'Influencer Profiles',
        description: 'Detailed profiles of Bitcoin thought leaders',
        icon: UserCheck,
        highlights: ['Background info', 'Expertise areas', 'Social links']
      },
      {
        title: 'Content Feed',
        description: 'Aggregated content from Bitcoin influencers',
        icon: MessageSquare,
        highlights: ['Real-time updates', 'Multiple platforms', 'Curated content']
      },
      {
        title: 'Trending Analysis',
        description: 'What is trending in the Bitcoin community',
        icon: TrendingUp,
        highlights: ['Hot topics', 'Sentiment analysis', 'Viral content']
      },
      {
        title: 'Direct Engagement',
        description: 'Interact directly with influencers',
        icon: Heart,
        highlights: ['Q&A sessions', 'AMAs', 'Direct messages']
      }
    ],
    stats: { engagement: '85%' }
  },
  {
    id: 'bitcoin-spaces',
    icon: Building,
    title: 'Bitcoin Spaces',
    description: 'Find Bitcoin businesses and services worldwide',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    href: 'https://app.coinlaa.com/all-listings/',
    detailedDescription: 'Discover Bitcoin-friendly businesses and services in your area and worldwide. Support the Bitcoin ecosystem.',
    subFeatures: [
      {
        title: 'Business Directory',
        description: 'Comprehensive listing of Bitcoin businesses',
        icon: Building,
        highlights: ['Verified listings', 'Contact info', 'Services offered']
      },
      {
        title: 'Map Integration',
        description: 'Find Bitcoin businesses near you',
        icon: MapPin,
        highlights: ['Interactive maps', 'Distance calculation', 'Route planning']
      },
      {
        title: 'Reviews & Ratings',
        description: 'Community-driven business reviews',
        icon: Star,
        highlights: ['User reviews', 'Rating system', 'Photo uploads']
      },
      {
        title: 'Business Verification',
        description: 'Verified Bitcoin-accepting businesses',
        icon: CheckCircle,
        highlights: ['Verification badges', 'Payment methods', 'Business hours']
      }
    ],
    stats: { }
  },
  {
    id: 'bitcoin-events',
    icon: Calendar,
    title: 'Bitcoin Events',
    description: 'Discover Bitcoin meetups and conferences',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    href: 'https://app.coinlaa.com/events/',
    detailedDescription: 'Find and attend Bitcoin events worldwide. Network with enthusiasts and learn from industry experts.',
    subFeatures: [
      {
        title: 'Event Calendar',
        description: 'Comprehensive Bitcoin events listing',
        icon: Calendar,
        highlights: ['Global events', 'Filter options', 'Calendar sync']
      },
      {
        title: 'Conference Tickets',
        description: 'Buy tickets for Bitcoin conferences',
        icon: CreditCard,
        highlights: ['Bitcoin payments', 'Early bird discounts', 'Group rates']
      },
      {
        title: 'Event Networking',
        description: 'Connect with attendees before events',
        icon: Users2,
        highlights: ['Attendee list', 'Meeting scheduler', 'Discussion forums']
      },
      {
        title: 'Live Streaming',
        description: 'Watch events remotely',
        icon: Video,
        highlights: ['HD streaming', 'Live chat', 'Recorded sessions']
      }
    ],
    stats: { events: '10+/month' }
  },
  {
    id: 'bitcoin-news',
    icon: Newspaper,
    title: 'Bitcoin News',
    description: 'Stay updated with latest Bitcoin news',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    href: 'https://app.coinlaa.com/crypto-news/',
    detailedDescription: 'Get the latest Bitcoin news, analysis, and updates from trusted sources worldwide. Stay informed about the ecosystem.',
    subFeatures: [
      {
        title: 'News Aggregator',
        description: 'Bitcoin news from multiple sources',
        icon: Newspaper,
        highlights: ['Multiple sources', 'Real-time updates', 'Categorized news']
      },
      {
        title: 'Market Analysis',
        description: 'In-depth Bitcoin market analysis',
        icon: BarChart,
        highlights: ['Technical analysis', 'Market insights', 'Expert opinions']
      },
      {
        title: 'Breaking Alerts',
        description: 'Instant notifications for important news',
        icon: Sparkles,
        highlights: ['Push notifications', 'Email alerts', 'SMS alerts']
      },
      {
        title: 'Opinion Pieces',
        description: 'Editorial content from Bitcoin experts',
        icon: FileText,
        highlights: ['Expert analysis', 'Thought leadership', 'Community discussions']
      }
    ],
    stats: { articles: '20+/day', sources: '100+', alerts: '10+' }
  },
  {
    id: 'bitcoin-incubation',
    icon: Rocket,
    title: 'Bitcoin Incubation',
    description: 'Launch, accelerate, and scale Bitcoin ventures',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    href: 'https://app.coinlaa.com/all-listings/',
    detailedDescription: 'Empowering founders with mentorship, capital, and growth resources to build impactful Bitcoin projects from idea to scale.',
    subFeatures: [
      {
        title: 'Startup Accelerator',
        description: 'Structured cohort-based programs driving rapid product and market validation.',
        icon: Rocket,
        highlights: ['12-week cohorts', 'Weekly mentor syncs', 'Demo day showcase']
      },
      {
        title: 'Technical Guild',
        description: 'Hands-on support for Lightning, wallet, and Bitcoin infrastructure integrations.',
        icon: Lightbulb,
        highlights: ['Architecture reviews', 'Security audits', 'Integration playbooks']
      },
      {
        title: 'Funding Network',
        description: 'Warm introductions to Bitcoin-focused angels, DAOs, and venture partners.',
        icon: Target,
        highlights: ['Investor matching', 'Pitch workshops', 'Term sheet guidance']
      },
      {
        title: 'Go-To-Market Lab',
        description: 'Strategic support for positioning, launches, and ecosystem partnerships.',
        icon: Briefcase,
        highlights: ['Growth roadmaps', 'Partnership pipelines', 'Media amplification']
      }
    ],
    stats: {}
  }
]

export default function Home() {
  const [activeTab, setActiveTab] = useState("social");
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState<any>(null);
  const [showAuth, setShowAuth] = useState(false);

  const handleSignIn = (userData: any) => {
    setUser(userData);
    setShowAuth(false);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Bitcoin Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Additional floating Bitcoin icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-orange-200 text-4xl animate-pulse">
          ₿
        </div>
        <div
          className="absolute top-32 right-20 text-orange-200 text-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          ₿
        </div>
        <div
          className="absolute bottom-20 left-32 text-orange-200 text-5xl animate-pulse"
          style={{ animationDelay: "2s" }}
        >
          ₿
        </div>
        <div
          className="absolute top-64 left-64 text-orange-200 text-2xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        >
          ₿
        </div>
        <div
          className="absolute bottom-32 right-40 text-orange-200 text-4xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        >
          ₿
        </div>
        <div
          className="absolute top-96 right-64 text-orange-200 text-3xl animate-pulse"
          style={{ animationDelay: "2.5s" }}
        >
          ₿
        </div>
        <div
          className="absolute bottom-64 left-20 text-orange-200 text-2xl animate-pulse"
          style={{ animationDelay: "3s" }}
        >
          ₿
        </div>
        <div
          className="absolute top-48 right-32 text-orange-200 text-5xl animate-pulse"
          style={{ animationDelay: "0.3s" }}
        >
          ₿
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 bg-gradient-to-br from-orange-50/30 to-white/30">
        <SiteHeader
          user={user ? { name: user.name } : null}
          onSignIn={() => setShowAuth(true)}
          onSignUp={() => setShowAuth(true)}
          onSignOut={handleSignOut}
        />

        {/* Hero Section */}
        <section className="pt-20 px-4">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-100 rounded-full">
                <Bitcoin className="h-16 w-16 text-orange-500" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Ultimate Bitcoin Hub
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect, Learn, Work, and Grow in the Bitcoin ecosystem.
              Everything you need in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://app.coinlaa.com/" target="_self">Explore Features</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Accordion */}
      <section id="features" className="py-16 px-4 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Bitcoin Ecosystem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive suite of Bitcoin tools and services. Each feature is designed to enhance your Bitcoin experience.
            </p>
          </div>
          
          <Accordion
            type="single"
            collapsible
            className="features-accordion grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature) => (
              <AccordionItem
                key={feature.id}
                value={feature.id}
                id={feature.id}
                className="border border-gray-100 rounded-xl bg-white shadow-sm"
              >
                <AccordionTrigger className="hover:no-underline group py-6 px-6">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="flex items-center space-x-6">
                      <div className={`p-4 rounded-2xl ${feature.bgColor} group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                        <feature.icon className={`h-8 w-8 ${feature.color}`} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-base text-gray-600 mt-2">{feature.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-500">
                        {Object.entries(feature.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="font-bold text-gray-900 text-base">{value}</div>
                            <div className="capitalize text-xs">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-6 pt-0 space-y-6 text-sm text-gray-600">
                  <p className="text-base leading-relaxed text-gray-700">
                    {feature.detailedDescription}
                  </p>

                  <div className="grid grid-cols-1 gap-5">
                    {feature.subFeatures.map((subFeature, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${feature.bgColor} shrink-0 shadow-sm`}>
                          <subFeature.icon className={`h-5 w-5 ${feature.color}`} />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h4 className="text-base font-semibold text-gray-900">
                            {subFeature.title}
                          </h4>
                          <p>{subFeature.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {subFeature.highlights.map((highlight, highlightIndex) => (
                              <span
                                key={highlightIndex}
                                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {Object.keys(feature.stats).length > 0 && (
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-4">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        {Object.entries(feature.stats).map(([key, value]) => (
                          <span key={key} className="flex items-center gap-2">
                            <span className={`inline-block h-2.5 w-2.5 rounded-full ${feature.color.replace('text', 'bg')}`}></span>
                            <span>
                              <span className="font-semibold text-gray-900">{value}</span> {key}
                            </span>
                          </span>
                        ))}
                      </div>
                      <Button
                        asChild
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        <Link
                          href={feature.href ?? `/#${feature.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Explore {feature.title}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

        {/* Features Grid */}
        {/* <section className="py-16 px-4 bg-white/40 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardHeader>
                    <feature.icon
                      className={`h-12 w-12 ${feature.color} mb-4`}
                    />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Main Content Tabs */}
        {/* <section className="py-16 px-4 bg-white/20 backdrop-blur-sm">
          <div className="container mx-auto">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-10">
                <TabsTrigger value="social">Bitcoin Connect</TabsTrigger>
                <TabsTrigger value="academy">Academy</TabsTrigger>
                <TabsTrigger value="jobs">Bitcoin Jobs</TabsTrigger>
                <TabsTrigger value="events">Bitcoin Events</TabsTrigger>
                <TabsTrigger value="news">Bitcoin News</TabsTrigger>
                <TabsTrigger value="ai">Bitcoin GPTs</TabsTrigger>
                <TabsTrigger value="agents">Influencers</TabsTrigger>
                <TabsTrigger value="directory">Bitcoin Spaces</TabsTrigger>
                <TabsTrigger value="marketplace">
                  Bitcoin Marketplace
                </TabsTrigger>
                <TabsTrigger value="clock">Bitcoin Clock</TabsTrigger>
              </TabsList>

              {/* Bitcoin Connect Tab */}
              {/* <TabsContent value="social" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MessageCircle className="h-5 w-5" />
                          Bitcoin Community Feed
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {socialPosts.map((post) => (
                          <div
                            key={post.id}
                            className="border-b pb-4 last:border-b-0"
                          >
                            <div className="flex items-start space-x-3">
                              <Avatar>
                                <AvatarImage src={post.avatar} />
                                <AvatarFallback>
                                  {post.author[0]}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-semibold">
                                    {post.author}
                                  </h4>
                                  <span className="text-sm text-gray-500">
                                    {post.timestamp}
                                  </span>
                                </div>
                                <p className="mt-2 text-gray-700">
                                  {post.content}
                                </p>
                                <div className="flex items-center space-x-4 mt-3">
                                  <Button variant="ghost" size="sm">
                                    <TrendingUp className="h-4 w-4 mr-1" />
                                    {post.likes}
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <MessageCircle className="h-4 w-4 mr-1" />
                                    {post.comments}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Trending Topics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <Badge variant="secondary">#LightningNetwork</Badge>
                          <Badge variant="secondary">#BitcoinMining</Badge>
                          <Badge variant="secondary">#CryptoAdoption</Badge>
                          <Badge variant="secondary">#DeFi</Badge>
                          <Badge variant="secondary">#BitcoinETF</Badge>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Active Members</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {["Bitcoin Max", "Satoshi Jr", "Crypto Alice"].map(
                            (name) => (
                              <div
                                key={name}
                                className="flex items-center space-x-2"
                              >
                                <Avatar className="h-8 w-8">
                                  <AvatarFallback>{name[0]}</AvatarFallback>
                                </Avatar>
                                <span className="text-sm">{name}</span>
                              </div>
                            )
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent> */}

              {/* Academy Tab */}
              {/* <TabsContent value="academy" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {academyCourses.map((course, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge
                            variant={
                              course.level === "Beginner"
                                ? "default"
                                : course.level === "Intermediate"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {course.level}
                          </Badge>
                          <GraduationCap className="h-8 w-8 text-blue-500" />
                        </div>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {course.students} students
                          </span>
                        </div>
                        <Button className="w-full mt-4">Start Learning</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent> */}

              {/* Jobs Tab */}
              {/* <TabsContent value="jobs" className="mt-8">
                <div className="space-y-4">
                  {jobListings.map((job, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">
                              {job.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{job.company}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <Badge
                                variant="outline"
                                className="flex items-center gap-1"
                              >
                                <MapPin className="h-3 w-3" />
                                {job.location}
                              </Badge>
                              <Badge variant="outline">{job.type}</Badge>
                              <Badge variant="outline">{job.salary}</Badge>
                            </div>
                            <p className="text-sm text-gray-500">
                              Posted {job.posted}
                            </p>
                          </div>
                          <Button>Apply Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent> */}

              {/* Bitcoin Events Tab */}
              {/* <TabsContent value="events" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.map((event, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{event.type}</Badge>
                          <Calendar className="h-8 w-8 text-purple-500" />
                        </div>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription>
                          <div className="space-y-1">
                            <p className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {event.date}
                            </p>
                            <p className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </p>
                            <p className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {event.attendees} attendees
                            </p>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full">Register</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent> */}

              {/* Bitcoin News Tab */}
              {/* <TabsContent value="news" className="mt-8">
                <div className="space-y-4">
                  {newsItems.map((news, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">
                              {news.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{news.summary}</p>
                            <div className="flex items-center justify-between">
                              <Badge variant="outline">{news.source}</Badge>
                              <span className="text-sm text-gray-500">
                                {news.time}
                              </span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent> */}

              {/* Bitcoin GPTs Tab */}
              {/* <TabsContent value="ai" className="mt-8">
                <BitcoinGPTs />
              </TabsContent> */}

              {/* Bitcoin Clock Tab */}
              {/* <TabsContent value="clock" className="mt-8">
                <BitcoinClock />
              </TabsContent> */}

              {/* Influencers Tab */}
              {/* <TabsContent value="agents" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="default">Top Voice</Badge>
                        <UserCheck className="h-8 w-8 text-purple-500" />
                      </div>
                      <CardTitle>Michael Saylor</CardTitle>
                      <CardDescription>
                        CEO of MicroStrategy, Bitcoin advocate
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          2.5M followers
                        </span>
                        <Button size="sm">Follow</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">Educator</Badge>
                        <UserCheck className="h-8 w-8 text-blue-500" />
                      </div>
                      <CardTitle>Andreas M. Antonopoulos</CardTitle>
                      <CardDescription>
                        Bitcoin educator, author, and speaker
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          1.2M followers
                        </span>
                        <Button size="sm">Follow</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="destructive">Developer</Badge>
                        <UserCheck className="h-8 w-8 text-red-500" />
                      </div>
                      <CardTitle>Adam Back</CardTitle>
                      <CardDescription>
                        CEO of Blockstream, cypherpunk pioneer
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          850K followers
                        </span>
                        <Button size="sm">Follow</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">Analyst</Badge>
                        <UserCheck className="h-8 w-8 text-green-500" />
                      </div>
                      <CardTitle>Willy Woo</CardTitle>
                      <CardDescription>
                        Bitcoin on-chain analyst and researcher
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          750K followers
                        </span>
                        <Button size="sm">Follow</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="default">Journalist</Badge>
                        <UserCheck className="h-8 w-8 text-orange-500" />
                      </div>
                      <CardTitle>Max Keiser</CardTitle>
                      <CardDescription>
                        Financial broadcaster and Bitcoin promoter
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          600K followers
                        </span>
                        <Button size="sm">Follow</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">Content Creator</Badge>
                        <UserCheck className="h-8 w-8 text-cyan-500" />
                      </div>
                      <CardTitle>Anthony Pompliano</CardTitle>
                      <CardDescription>
                        Bitcoin investor and podcast host
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          1.8M followers
                        </span>
                        <Button size="sm">Follow</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent> */}

              {/* Bitcoin Spaces Tab */}
              {/* <TabsContent value="directory" className="mt-8">
                <BitcoinDirectory />
              </TabsContent> */}

              {/* Bitcoin Marketplace Tab */}
              {/* <TabsContent value="marketplace" className="mt-8">
                <BitcoinMarketplace />
              </TabsContent>
            </Tabs>
          </div> */}
        {/* </section> */}

        {/* Bitcoin Clock - Moved to Bottom */}
        {/* <section className="py-12 px-4 bg-white/60 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Bitcoin Halving Clock
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Track the next Bitcoin halving event with real-time countdown
                and blockchain metrics
              </p>
            </div>
            <BitcoinClock />
          </div>
        </section> */}

        {/* Footer */}
        {/* FAQ Accordion (above footer) */}
        {/* <section className="py-12 px-4 bg-white/60 backdrop-blur-sm">
          <div className="container mx-auto max-w-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Accordian
            </h3>
            <Accordion type="single" collapsible defaultValue="faq-1" className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>What is Coinlaa?</AccordionTrigger>
                <AccordionContent>
                  Coinlaa is a Bitcoin ecosystem platform bringing together
                  community, education, jobs, and marketplace features to help
                  users learn and participate in the Bitcoin economy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger>How do I get started?</AccordionTrigger>
                <AccordionContent>
                  Create an account using the Sign In button, explore features
                  like Academy and Bitcoin GPTs, and join the community feed to
                  connect with others.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger>Where can I get support?</AccordionTrigger>
                <AccordionContent>
                  For support, check our documentation or contact the team via
                  the support channels listed in your account settings.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section> */}

        <SiteFooter />

        {/* Auth Modal */}
        {showAuth && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Sign In</h2>
                <Button variant="ghost" onClick={() => setShowAuth(false)}>
                  ×
                </Button>
              </div>
              <AuthButton onSignIn={handleSignIn} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
