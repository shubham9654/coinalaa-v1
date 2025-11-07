"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
    title: 'Social',
    description: 'Connect with Bitcoin enthusiasts worldwide',
    stats: { groups: '50+', events: '100+' },
    href: 'https://app.coinlaa.com/crypto-agents/',
    color: 'orange',
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
    title: 'Academy',
    description: 'Learn Bitcoin from basics to advanced concepts',
    stats: { courses: '100+' },
    href: 'https://app.coinlaa.com/courses/',
    color: 'blue',
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
    title: 'Jobs',
    description: 'Find Bitcoin-related career opportunities',
    stats: {},
    href: 'https://app.coinlaa.com/bitcoin-jobs/',
    color: 'green',
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
    title: 'GPTs',
    description: 'AI-powered Bitcoin tools and assistants',
    stats: { tools: '20+', accuracy: '95%' },
    href: 'https://app.coinlaa.com/ai-tools/',
    color: 'teal',
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
    title: 'Marketplace',
    description: 'Shop at trusted vendor stores accepting Bitcoin',
    stats: { products: '100+' },
    href: 'https://app.coinlaa.com/all-listings/?directory_type=bitcoin-business',
    color: 'emerald',
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
    href: 'https://app.coinlaa.com/all-listings/?directory_type=influencers',
    color: 'purple',
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
    title: 'Spaces',
    description: 'Find Bitcoin businesses and services worldwide',
    stats: {},
    href: 'https://app.coinlaa.com/all-listings/',
    color: 'yellow',
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
    title: 'Events',
    description: 'Discover Bitcoin meetups and conferences',
    stats: { events: '10+/month' },
    href: 'https://app.coinlaa.com/event/',
    color: 'red',
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
    title: 'News',
    description: 'Stay updated with latest Bitcoin news and insights',
    stats: { articles: '20+/day', sources: '100+', alerts: '10+' },
    href: 'https://app.coinlaa.com/crypto-news/',
    color: 'red',
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
    title: 'Incubation',
    description: 'Support and grow Bitcoin startups',
    stats: {},
    href: 'https://app.coinlaa.com/incubator/',
    color: 'teal',
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
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b to-white from-[#FFECE6]/50  ">

        <div className="container mx-auto  px-4 sm:px-20 relative z-10 grid grid-cols-1 md:grid-cols-2">

          <div className="">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.7vw] font-bold text-gray-900 mb-4 sm:mb-6 text-center md:text-left">
              The Ultimate{" "}
              <span className="text-[10vw] text-orange-500">Bitcoin</span>{" "}
              <br />
              Hub
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed text-center md:text-left px-4 sm:px-0">
              Connect, Learn, Work, and Grow in the Bitcoin ecosystem. <br /> Everything you need in one place.
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

          <div className="hidden md:flex pointer-events-none  justify-end">
            <img
              src="/background-graphics.png"
              alt="Background Graphics"
              className="w-full h-full object-contain object-right"
              loading="lazy"
            />
          </div>
        </div>


      </section>


      {/* Complete Bitcoin Ecosystem Section */}
      <section className="mt-5 pb-12 sm:pb-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto px-0 sm:px-20">
          {/* Header Card */}
          <div className="max-w-[54rem] mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 relative z-20">
            <Card className="border-0 md:border md:border-gray-200 rounded-2xl sm:rounded-[20px] shadow-none md:shadow-lg hover:!shadow-lg transition-all duration-300 overflow-visible bg-white py-10 ">
              <CardContent className="px-6 sm:px-0">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-6 sm:gap-8">


                  {/* Text Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl md:text-[2.64vw] font-bold text-gray-900 mb-3 sm:mb-6 text-center">
                      Complete{" "}
                      <span className="text-[#F06623]">Bitcoin</span>{" "}
                      Ecosystem
                    </h2>
                    <div className="space-y-1 sm:space-y-2 text-center">
                      <p className="mb-0 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                        Explore our comprehensive suite of Bitcoin tools and services.
                      </p>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                        Each feature is designed to enhance your Bitcoin experience.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>


            </Card>

            <img src="/bitcoin-ecosystem.png" alt="Bitcoin Ecosystem" className="object-contain hidden md:block absolute -left-[70px] bottom-[35px]" />


          </div>

          <Accordion type="single" collapsible className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              // Color mapping for each feature
              const colorClasses: Record<string, { bg: string; text: string }> = {
                orange: { bg: 'bg-orange-50', text: 'text-orange-500' },
                blue: { bg: 'bg-blue-50', text: 'text-blue-500' },
                green: { bg: 'bg-green-50', text: 'text-green-500' },
                teal: { bg: 'bg-teal-50', text: 'text-teal-500' },
                emerald: { bg: 'bg-emerald-50', text: 'text-emerald-500' },
                purple: { bg: 'bg-purple-50', text: 'text-purple-500' },
                yellow: { bg: 'bg-yellow-50', text: 'text-yellow-500' },
                red: { bg: 'bg-red-50', text: 'text-red-500' },
              };

              const colors = colorClasses[feature.color] || colorClasses.orange;

              return (
                <AccordionItem
                  key={feature.id}
                  value={feature.id}
                  className="border border-gray-200 rounded-lg hover:border-[#F06623] hover:shadow-md transition-all duration-200 data-[state=open]:shadow-lg data-[state=open]:col-span-full bg-white group"
                >
                  <AccordionTrigger className="p-5 sm:p-6 hover:no-underline [&>svg]:hidden">
                    <div className="w-full">
                      {/* Top Section: Icon, Title, Stats */}
                      <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 relative">
                        <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0 pr-2 sm:pr-4">
                          <div className={`${colors.bg} p-2.5 sm:p-3 rounded-lg flex-shrink-0`}>
                            <Icon className={`h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 ${colors.text}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2 leading-tight">
                              {feature.title}
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                        {/* Stats in top-right */}
                        {Object.keys(feature.stats).length > 0 && (
                          <div className="flex gap-x-2 sm:gap-x-3 flex-shrink-0">
                            {Object.entries(feature.stats).map(([key, value]) => (
                              <div key={key} className="text-right whitespace-nowrap">
                                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 leading-tight">
                                  {value}
                                </div>
                                <div className="text-xs sm:text-sm text-[#818181]">
                                  {key}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Border bottom with #F06623 color - aligned with text content */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex-1 border-b-2 border-transparent group-hover:border-[#F06623] transition-colors duration-200"></div>
                        {/* Chevron on the right with #F06623 color */}
                        <ChevronDown
                          className="h-5 w-5 ml-3 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                          style={{ color: '#F06623' }}
                        />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 sm:px-6 md:px-6 pb-6 sm:pb-8 md:pb-10">
                    <div className="py-4 border-t border-gray-100">
                      <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                        {feature.detailedDescription}
                      </p>
                      {feature.subFeatures && feature.subFeatures.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                          {feature.subFeatures.map((subFeature, idx) => {
                            const SubIcon = subFeature.icon;
                            return (
                              <div key={idx} className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                                <SubIcon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 flex-shrink-0 mt-1" />
                                <div>
                                  <h4 className="text-[14px] sm:text-[20px] font-semibold text-gray-900 mb-1">
                                    {subFeature.title}
                                  </h4>
                                  <p className="text-[12px] sm:text-[16px]  text-gray-600 leading-relaxed">
                                    {subFeature.description}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      <div className="flex justify-end mt-6">
                        <Button
                          asChild
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600 text-white"
                        >
                          <a href={feature.href} target="_blank" rel="noopener noreferrer">
                            Explore {feature.title}
                            <ArrowRight className="h-4 w-4 ml-2 inline" />
                          </a>
                        </Button>
                      </div>
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
