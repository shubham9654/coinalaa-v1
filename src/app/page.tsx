"use client";

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
} from "lucide-react";
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

  const features = [
    {
      icon: HandHeart,
      title: "Connect",
      description: "Connect with Bitcoin enthusiasts worldwide",
      color: "text-orange-500",
    },
    {
      icon: GraduationCap,
      title: "Academy",
      description: "Learn Bitcoin from basics to advanced concepts",
      color: "text-blue-500",
    },
    {
      icon: Briefcase,
      title: " Jobs",
      description: "Find Bitcoin-related career opportunities",
      color: "text-green-500",
    },
    {
      icon: Bot,
      title: "Bitcoin GPTs",
      description: "AI-powered Bitcoin tools and assistants",
      color: "text-cyan-500",
    },
    {
      icon: Store,
      title: "Bitcoin Marketplace",
      description: "Shop at trusted vendor stores accepting Bitcoin",
      color: "text-green-600",
    },
    {
      icon: UserCheck,
      title: "Influencers",
      description: "Follow leading Bitcoin voices and thought leaders",
      color: "text-purple-500",
    },
    {
      icon: Building,
      title: "Bitcoin Spaces",
      description: "Find Bitcoin businesses and services worldwide",
      color: "text-yellow-500",
    },
    {
      icon: Calendar,
      title: "Bitcoin Events",
      description: "Discover Bitcoin meetups and conferences",
      color: "text-purple-500",
    },
    {
      icon: Newspaper,
      title: "Bitcoin News",
      description: "Stay updated with latest Bitcoin news",
      color: "text-red-500",
    },
  ];

  const socialPosts = [
    {
      id: 1,
      author: "Bitcoin Max",
      avatar: "/api/placeholder/40/40",
      content:
        "Just finished setting up my first full node! The feeling of supporting the network is incredible 🚀",
      timestamp: "2 hours ago",
      likes: 42,
      comments: 8,
    },
    {
      id: 2,
      author: "Satoshi Jr",
      avatar: "/api/placeholder/40/40",
      content:
        "Lightning Network is changing the game. Instant, cheap transactions everywhere!",
      timestamp: "4 hours ago",
      likes: 89,
      comments: 15,
    },
    {
      id: 3,
      author: "Crypto Alice",
      avatar: "/api/placeholder/40/40",
      content:
        "Teaching my parents about Bitcoin today. They finally understand why it matters!",
      timestamp: "6 hours ago",
      likes: 156,
      comments: 23,
    },
  ];

  const academyCourses = [
    {
      title: "Bitcoin Fundamentals",
      description:
        "Learn the basics of Bitcoin, blockchain technology, and digital currency",
      level: "Beginner",
      duration: "2 hours",
      students: 1234,
    },
    {
      title: "Lightning Network Deep Dive",
      description:
        "Master the second layer solution for instant Bitcoin transactions",
      level: "Intermediate",
      duration: "4 hours",
      students: 567,
    },
    {
      title: "Bitcoin Security Best Practices",
      description:
        "Protect your Bitcoin with proper security measures and storage solutions",
      level: "Advanced",
      duration: "3 hours",
      students: 234,
    },
  ];

  const jobListings = [
    {
      title: "Bitcoin Developer",
      company: "Crypto Startup",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $120k",
      posted: "2 days ago",
    },
    {
      title: "Blockchain Researcher",
      company: "Bitcoin Foundation",
      location: "San Francisco",
      type: "Full-time",
      salary: "$100k - $150k",
      posted: "3 days ago",
    },
    {
      title: "Lightning Network Engineer",
      company: "Payment Company",
      location: "Remote",
      type: "Contract",
      salary: "$60 - $80/hour",
      posted: "1 week ago",
    },
  ];

  const events = [
    {
      title: "Bitcoin Conference 2024",
      date: "March 15-17, 2024",
      location: "Miami, FL",
      attendees: 5000,
      type: "Conference",
    },
    {
      title: "Lightning Hackathon",
      date: "February 8-10, 2024",
      location: "Austin, TX",
      attendees: 200,
      type: "Hackathon",
    },
    {
      title: "Bitcoin Meetup",
      date: "January 25, 2024",
      location: "New York, NY",
      attendees: 50,
      type: "Meetup",
    },
  ];

  const newsItems = [
    {
      title: "Bitcoin Reaches New All-Time High",
      source: "Crypto News",
      time: "1 hour ago",
      summary:
        "Bitcoin surges past previous records as institutional adoption accelerates...",
    },
    {
      title: "Lightning Network Capacity Doubles",
      source: "Bitcoin Magazine",
      time: "3 hours ago",
      summary:
        "The Lightning Network continues its growth trajectory with record capacity...",
    },
    {
      title: "El Salvador Announces New Bitcoin Initiatives",
      source: "Reuters",
      time: "5 hours ago",
      summary:
        "Government expands Bitcoin education and adoption programs nationwide...",
    },
  ];

  const fintechApps = [
    {
      name: "Cash App",
      category: "Payments",
      description: "Buy, sell, and send Bitcoin instantly with the Cash App",
      rating: 4.5,
      downloads: "10M+",
      icon: "💰",
      features: ["Bitcoin Trading", "Lightning Network", "Debit Card"],
    },
    {
      name: "Strike",
      category: "Payments",
      description: "Lightning Network payments app for global money transfers",
      rating: 4.3,
      downloads: "1M+",
      icon: "⚡",
      features: ["Lightning Network", "Global Transfers", "Bitcoin Storage"],
    },
    {
      name: "Muun Wallet",
      category: "Wallet",
      description: "Self-custody Bitcoin wallet with Lightning Network support",
      rating: 4.6,
      downloads: "500K+",
      icon: "🔐",
      features: ["Multi-signature", "Lightning Network", "Self-custody"],
    },
    {
      name: "Phoenix Wallet",
      category: "Wallet",
      description: "Simple Lightning Network wallet for everyday Bitcoin use",
      rating: 4.4,
      downloads: "100K+",
      icon: "🦅",
      features: ["Lightning Network", "Non-custodial", "Auto-channels"],
    },
    {
      name: "Zap",
      category: "Wallet",
      description: "Lightning Network desktop and mobile wallet",
      rating: 4.2,
      downloads: "50K+",
      icon: "⚡",
      features: ["Lightning Network", "Desktop App", "Node Management"],
    },
    {
      name: "BlueWallet",
      category: "Wallet",
      description:
        "Bitcoin and Lightning Network wallet with advanced features",
      rating: 4.1,
      downloads: "500K+",
      icon: "🔵",
      features: ["Multi-wallet", "Lightning Network", "Watch-only"],
    },
  ];

  const businesses = [
    {
      name: "Bitcoin Coffee Shop",
      category: "Food & Beverage",
      location: "San Francisco, CA",
      description:
        "First Bitcoin-only coffee shop accepting Lightning Network payments",
      rating: 4.8,
      verified: true,
      paymentMethods: ["Bitcoin", "Lightning Network"],
      website: "bitcoincoffee.com",
    },
    {
      name: "Crypto Gear Store",
      category: "Retail",
      location: "Miami, FL",
      description: "Bitcoin merchandise and crypto-themed clothing store",
      rating: 4.5,
      verified: true,
      paymentMethods: ["Bitcoin", "Lightning Network", "Credit Card"],
      website: "cryptogear.com",
    },
    {
      name: "Satoshi's Pizza",
      category: "Food & Beverage",
      location: "New York, NY",
      description: "Pizza place accepting Bitcoin since 2018",
      rating: 4.6,
      verified: false,
      paymentMethods: ["Bitcoin", "Lightning Network"],
      website: "satoshispizza.com",
    },
    {
      name: "Bitcoin Real Estate",
      category: "Real Estate",
      location: "Austin, TX",
      description:
        "Real estate agency specializing in Bitcoin property transactions",
      rating: 4.7,
      verified: true,
      paymentMethods: ["Bitcoin", "Wire Transfer"],
      website: "bitcoinrealestate.com",
    },
    {
      name: "Crypto Legal Services",
      category: "Professional Services",
      location: "Los Angeles, CA",
      description:
        "Legal firm specializing in cryptocurrency and blockchain regulations",
      rating: 4.4,
      verified: true,
      paymentMethods: ["Bitcoin", "Lightning Network", "Bank Transfer"],
      website: "cryptolegal.com",
    },
    {
      name: "Bitcoin Tech Repair",
      category: "Services",
      location: "Seattle, WA",
      description: "Computer and tech repair shop accepting Bitcoin payments",
      rating: 4.3,
      verified: false,
      paymentMethods: ["Bitcoin", "Lightning Network"],
      website: "btechrepair.com",
    },
  ];

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
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-32 h-12 object-contain "
                />
              </div>
              <nav className="hidden md:flex items-center">
                <Button variant="ghost">Social</Button>
                <Button variant="ghost">Academy</Button>
                <Button variant="ghost">Jobs</Button>
                <Button variant="ghost">Events</Button>
                <Button variant="ghost">News</Button>
                {/* <Button variant="ghost">Bitcoin GPTs</Button>
                <Button variant="ghost">Influencers</Button>
                <Button variant="ghost">Bitcoin Spaces</Button>
                <Button variant="ghost">Bitcoin Marketplace</Button> */}
                {/* <Button variant="ghost">Bitcoin Clock</Button> */}
              </nav>

              <div className="flex items-center space-x-4">
                {user ? (
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{user.name}</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={handleSignOut}>
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button size="sm" onClick={() => setShowAuth(true)}>
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </div>
        </header>

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
              <Button size="lg" variant="outline">
                Explore Features
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 bg-white/40 backdrop-blur-sm">
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
        </section>

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
        <section className="py-12 px-4 bg-white/60 backdrop-blur-sm">
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
        </section>

        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-center">
              <div>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-32 h-12 object-contain "
                />
                </div>
                <p className="text-gray-400">
                  The ultimate Bitcoin ecosystem platform for enthusiasts,
                  professionals, and businesses.
                </p>
              </div>
            
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Coinlaa. All rights reserved.</p>
            </div>
          </div>
        </footer>

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
