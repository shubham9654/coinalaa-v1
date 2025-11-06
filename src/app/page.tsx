"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { 
  Bitcoin, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  Newspaper, 
  Bot, 
  Globe,
  Building,
  Rocket,
  UserCheck,
  Store,
  ChevronRight,
  ArrowRight,
  Zap,
  ChevronDown,
  Monitor,
  Cloud,
  Lock,
  FileText,
  TrendingUp,
  MessageCircle,
  MessageSquare,
  Users2,
  Video,
  BookOpen,
  Award,
  Building2,
  MapPin,
  Star,
  Lightbulb,
  FileText as FileTextIcon,
  BarChart,
  Target,
  ShoppingCart,
  Package,
  Shield,
  Truck,
  Heart
} from 'lucide-react';
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const features = [
  {
    id: 'bitcoin-social',
    icon: Users,
    title: 'Bitcoin Social',
    description: 'Connect with Bitcoin enthusiasts worldwide',
    stats: { groups: '50+', events: '100+' },
    href: 'https://app.coinlaa.com/members/',
    detailedDescription: 'Join the largest Bitcoin community platform. Connect, share, and grow with like-minded Bitcoin enthusiasts from around the world.',
    subFeatures: [
      { title: 'Community Feed', description: 'Real-time updates from Bitcoin enthusiasts', icon: MessageSquare },
      { title: 'Private Messaging', description: 'Direct chat with other Bitcoin enthusiasts', icon: MessageCircle },
      { title: 'Bitcoin Groups', description: 'Join specialized Bitcoin discussion groups', icon: Users2 },
      { title: 'Networking Events', description: 'Virtual and physical meetups', icon: Calendar }
    ]
  },
  {
    id: 'bitcoin-academy',
    icon: GraduationCap,
    title: 'Bitcoin Academy',
    description: 'Learn Bitcoin from basics to advanced concepts',
    stats: { courses: '100+' },
    href: 'https://app.coinlaa.com/courses/',
    detailedDescription: 'Master Bitcoin with comprehensive courses, tutorials, and certifications designed for all skill levels.',
    subFeatures: [
      { title: 'Video Courses', description: 'High-quality video tutorials from Bitcoin experts', icon: Video },
      { title: 'Interactive Tutorials', description: 'Hands-on learning with practical exercises', icon: BookOpen },
      { title: 'Certification Programs', description: 'Get certified in Bitcoin expertise', icon: Award },
      { title: 'Live Workshops', description: 'Interactive sessions with Bitcoin experts', icon: Users2 }
    ]
  },
  {
    id: 'bitcoin-jobs',
    icon: Briefcase,
    title: 'Bitcoin Jobs',
    description: 'Find Bitcoin-related career opportunities',
    stats: {},
    href: 'https://app.coinlaa.com/',
    detailedDescription: 'Discover career opportunities in the Bitcoin ecosystem. Connect with top companies building the future of finance.',
    subFeatures: [
      { title: 'Job Board', description: 'Curated Bitcoin and crypto job listings', icon: Briefcase },
      { title: 'Company Profiles', description: 'Detailed information about Bitcoin companies', icon: Building2 },
      { title: 'Resume Builder', description: 'Create Bitcoin-focused professional profiles', icon: FileTextIcon },
      { title: 'Career Resources', description: 'Guidance and tips for Bitcoin careers', icon: Lightbulb }
    ]
  },
  {
    id: 'bitcoin-gpts',
    icon: Bot,
    title: 'Bitcoin GPTs',
    description: 'AI-powered Bitcoin tools and assistants',
    stats: { tools: '20+', accuracy: '95%' },
    href: 'https://app.coinlaa.com/courses/',
    detailedDescription: 'Leverage AI-powered tools for Bitcoin analysis, trading, and education. Get instant insights and assistance.',
    subFeatures: [
      { title: 'Bitcoin Assistant', description: 'AI chatbot for Bitcoin questions and guidance', icon: Bot },
      { title: 'Price Analysis', description: 'AI-powered market analysis and predictions', icon: BarChart },
      { title: 'Portfolio Optimizer', description: 'AI-driven portfolio management suggestions', icon: Target },
      { title: 'Learning Assistant', description: 'Personalized Bitcoin education AI tutor', icon: BookOpen }
    ]
  },
  {
    id: 'bitcoin-marketplace',
    icon: Store,
    title: 'Bitcoin Marketplace',
    description: 'Shop at trusted vendor stores accepting Bitcoin',
    stats: { products: '100+' },
    href: 'https://app.coinlaa.com/',
    detailedDescription: 'Discover and shop from verified Bitcoin vendors. Buy products and services using Bitcoin with secure transactions.',
    subFeatures: [
      { title: 'Vendor Shops', description: 'Verified Bitcoin-accepting stores', icon: Store },
      { title: 'Product Catalog', description: 'Wide range of products and services', icon: Package },
      { title: 'Secure Payments', description: 'Safe Bitcoin payment processing', icon: Shield },
      { title: 'Order Tracking', description: 'Real-time order and delivery tracking', icon: Truck }
    ]
  },
  {
    id: 'influencers',
    icon: UserCheck,
    title: 'Influencers',
    description: 'Follow leading Bitcoin voices and thought leaders',
    stats: { engagement: '85%' },
    href: 'https://app.coinlaa.com/all-listings/',
    detailedDescription: 'Connect with and follow influential Bitcoin personalities. Get insights, analysis, and updates from trusted voices.',
    subFeatures: [
      { title: 'Influencer Profiles', description: 'Detailed profiles of Bitcoin thought leaders', icon: UserCheck },
      { title: 'Content Feed', description: 'Aggregated content from Bitcoin influencers', icon: MessageSquare },
      { title: 'Trending Analysis', description: 'What is trending in the Bitcoin community', icon: TrendingUp },
      { title: 'Direct Engagement', description: 'Interact directly with influencers', icon: Heart }
    ]
  },
  {
    id: 'bitcoin-spaces',
    icon: Globe,
    title: 'Bitcoin Spaces',
    description: 'Find Bitcoin businesses and services worldwide',
    stats: {},
    href: 'https://app.coinlaa.com/all-listings/',
    detailedDescription: 'Discover Bitcoin-friendly businesses and services in your area and worldwide. Support the Bitcoin ecosystem.',
    subFeatures: [
      { title: 'Business Directory', description: 'Comprehensive listing of Bitcoin businesses', icon: Building2 },
      { title: 'Map Integration', description: 'Find Bitcoin businesses near you', icon: MapPin },
      { title: 'Reviews & Ratings', description: 'Community-driven business reviews', icon: Star },
      { title: 'Business Listings', description: 'Detailed business information and services', icon: Building }
    ]
  },
  {
    id: 'bitcoin-events',
    icon: Calendar,
    title: 'Bitcoin Events',
    description: 'Discover Bitcoin events and conferences',
    stats: { events: '10+/month' },
    href: 'https://app.coinlaa.com/',
    detailedDescription: 'Stay updated with Bitcoin events, conferences, and meetups happening around the world.',
    subFeatures: [
      { title: 'Event Calendar', description: 'Comprehensive calendar of Bitcoin events', icon: Calendar },
      { title: 'Conference Listings', description: 'Major Bitcoin conferences and summits', icon: Building2 },
      { title: 'Local Meetups', description: 'Find Bitcoin meetups in your area', icon: MapPin },
      { title: 'Virtual Events', description: 'Online Bitcoin events and webinars', icon: Monitor }
    ]
  },
  {
    id: 'bitcoin-news',
    icon: Newspaper,
    title: 'Bitcoin News',
    description: 'Stay updated with latest Bitcoin news and insights',
    stats: { articles: '20+/day', sources: '100+', alerts: '10+' },
    href: 'https://app.coinlaa.com/',
    detailedDescription: 'Get the latest Bitcoin news, analysis, and insights from trusted sources. Stay informed about market trends and developments.',
    subFeatures: [
      { title: 'News Aggregation', description: 'Curated news from top Bitcoin sources', icon: Newspaper },
      { title: 'Market Analysis', description: 'In-depth market analysis and trends', icon: BarChart },
      { title: 'Price Alerts', description: 'Customizable Bitcoin price alerts', icon: TrendingUp },
      { title: 'Newsletters', description: 'Daily and weekly Bitcoin newsletters', icon: FileTextIcon }
    ]
  },
  {
    id: 'bitcoin-incubation',
    icon: Rocket,
    title: 'Bitcoin Incubation',
    description: 'Support and grow Bitcoin startups',
    stats: {},
    href: 'https://app.coinlaa.com/',
    detailedDescription: 'Support Bitcoin startups and innovations. Connect with investors, mentors, and entrepreneurs in the Bitcoin ecosystem.',
    subFeatures: [
      { title: 'Startup Directory', description: 'Directory of Bitcoin startups and projects', icon: Rocket },
      { title: 'Funding Opportunities', description: 'Connect with Bitcoin investors', icon: TrendingUp },
      { title: 'Mentorship Programs', description: 'Get guidance from Bitcoin experts', icon: Users2 },
      { title: 'Resources Hub', description: 'Tools and resources for Bitcoin startups', icon: Lightbulb }
    ]
  }
];

export default function Home() {
  const [user, setUser] = useState<any>(null);

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader
        user={user ? { name: user.name } : null}
        onSignOut={handleSignOut}
      />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 overflow-hidden">
        {/* Background Graphics - Hidden on mobile, shown on tablet+ */}
        <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full pointer-events-none opacity-20">
          <div className="relative w-full h-full">
            {/* Large Bitcoin B */}
            <div className="absolute top-20 right-20">
              <Bitcoin className="h-48 lg:h-64 w-48 lg:w-64 text-orange-500" />
            </div>
            
            {/* Floating Icons */}
            <div className="absolute top-10 right-40">
              <div className="relative">
                <Monitor className="h-10 lg:h-12 w-10 lg:w-12 text-gray-600" />
                <TrendingUp className="h-5 lg:h-6 w-5 lg:w-6 text-orange-500 absolute -bottom-1 -right-1" />
              </div>
            </div>
            
            <div className="absolute top-32 right-60">
              <Cloud className="h-7 lg:h-8 w-7 lg:w-8 text-gray-600" />
            </div>
            
            <div className="absolute top-48 right-10">
              <Bitcoin className="h-8 lg:h-10 w-8 lg:w-10 text-orange-400" />
            </div>
            
            <div className="absolute top-64 right-52">
              <Calendar className="h-7 lg:h-8 w-7 lg:w-8 text-gray-600" />
            </div>
            
            <div className="absolute top-80 right-28">
              <Lock className="h-7 lg:h-8 w-7 lg:w-8 text-gray-600" />
            </div>
            
            <div className="absolute top-96 right-48">
              <div className="bg-orange-100 rounded-lg p-2">
                <FileText className="h-5 lg:h-6 w-5 lg:w-6 text-orange-600" />
                <span className="text-xs text-orange-600 font-semibold">NEWS</span>
              </div>
            </div>
            
            <div className="absolute top-72 right-72">
              <div className="bg-orange-100 rounded-lg p-2">
                <Briefcase className="h-5 lg:h-6 w-5 lg:w-6 text-orange-600" />
                <span className="text-xs text-orange-600 font-semibold">JOB</span>
              </div>
            </div>
            
            <div className="absolute bottom-20 right-32">
              <Bitcoin className="h-12 lg:h-16 w-12 lg:w-16 text-orange-400" />
            </div>
            
            <div className="absolute bottom-32 right-56">
              <Bitcoin className="h-6 lg:h-8 w-6 lg:w-8 text-orange-300" />
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-2xl mx-auto md:mx-0">
            {/* AI-Powered Badge */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6 justify-center md:justify-start">
              <Badge 
                variant="outline" 
                className="border-gray-300 text-gray-700 bg-white px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium"
              >
                <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 sm:mr-1.5 text-gray-600" />
                AI-Powered
              </Badge>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight text-center md:text-left">
              The Ultimate{" "}
              <span className="text-orange-500">Bitcoin</span>{" "}
              Hub
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed text-center md:text-left px-4 sm:px-0">
              Connect, Learn, Work, and Grow in the Bitcoin ecosystem. Everything you need in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-center md:justify-start px-4 sm:px-0">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-gray-900 text-white border-gray-900 hover:bg-gray-800 h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base w-full sm:w-auto"
                asChild
              >
                <a href="https://app.coinlaa.com/register/" target="_self">
                  Get Started Free <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 inline" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base w-full sm:w-auto"
                asChild
              >
                <a href="https://app.coinlaa.com/" target="_self">
                  Explore Features
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Bitcoin Ecosystem Section */}
      <section className="px-4 sm:px-6 -mt-8 sm:-mt-12 md:-mt-16 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <Card className="shadow-lg border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
                <div className="flex-1 w-full">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-center md:text-left">
                    Complete{" "}
                    <span className="text-orange-500">Bitcoin</span>{" "}
                    Ecosystem
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center md:text-left">
                    Explore our comprehensive suite of Bitcoin tools and services. Each feature is designed to enhance your Bitcoin experience.
                  </p>
                </div>
                <div className="hidden md:block flex-shrink-0">
                  <Bitcoin className="h-24 lg:h-32 w-24 lg:w-32 text-orange-100" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 relative">
        {/* Background Bitcoin Icon - Hidden on mobile, shown on tablet+ */}
        <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 pointer-events-none opacity-10">
          <Bitcoin className="h-64 lg:h-96 w-64 lg:w-96 text-orange-500" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <Accordion type="single" collapsible className="features-accordion grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <AccordionItem
                  key={feature.id}
                  value={feature.id}
                  className="border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all duration-200 data-[state=open]:border-orange-300 data-[state=open]:shadow-lg relative group"
                >
                  <AccordionTrigger className="p-4 sm:p-5 md:p-6 pb-10 sm:pb-12 hover:no-underline [&>svg]:hidden group">
                    <div className="w-full">
                      {/* Top Section: Icon, Title, Stats */}
                      <div className="flex items-start justify-between gap-4 mb-3 pb-2.5">
                        <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                          <div className="p-2.5 sm:p-3 bg-orange-50 rounded-lg flex-shrink-0">
                            <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600" />
                          </div>
                          <div className="flex-1 min-w-0 pt-0.5">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                        {/* Stats in top-right, displayed vertically */}
                        {Object.keys(feature.stats).length > 0 && (
                          <div className="flex items-start gap-4 sm:gap-5 flex-shrink-0">
                            {Object.entries(feature.stats).map(([key, value]) => (
                              <div key={key} className="text-right">
                                <div className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">
                                  {value}
                                </div>
                                <div className="text-xs text-gray-500 mt-0.5">
                                  {key}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {/* Bottom Border and Chevron */}
                      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 sm:px-5 md:px-6 pb-3 sm:pb-4">
                        <div className="flex-1 border-b-2 border-transparent group-hover:border-orange-500 transition-colors duration-200"></div>
                        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-orange-500 flex-shrink-0 ml-3 transition-all duration-200 accordion-chevron" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                    <div className="pt-2 pb-10 border-t border-gray-100">
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        {feature.detailedDescription}
                      </p>
                      {feature.subFeatures && feature.subFeatures.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                          {feature.subFeatures.map((subFeature, idx) => {
                            const SubIcon = subFeature.icon;
                            return (
                              <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <SubIcon className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                    {subFeature.title}
                                  </h4>
                                  <p className="text-xs text-gray-600">
                                    {subFeature.description}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      <Button
                        asChild
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
                      >
                        <a href={feature.href} target="_blank" rel="noopener noreferrer">
                          Explore {feature.title}
                          <ArrowRight className="h-4 w-4 ml-2 inline" />
                        </a>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
