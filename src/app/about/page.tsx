"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

const coreTeam = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Product strategist and early Bitcoin contributor leading overall vision and partnerships.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "Sarah Johnson",
    role: "CTO & Co-Founder",
    bio: "Blockchain engineer focused on security, Lightning integrations, and developer tooling.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Product",
    bio: "Designing intuitive experiences that bring Bitcoin utility to creators, merchants, and fans.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "Emily Park",
    role: "Head of Community",
    bio: "Leads global community growth, education programs, and local chapter support worldwide.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces",
  },
];

const advisors = [
  {
    name: "Michael Saylor",
    role: "Strategic Advisor",
    bio: "Enterprise adoption advisor helping institutions join the Bitcoin economy.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "Andreas Antonopoulos",
    role: "Technical Advisor",
    bio: "Guides education, developer relations, and open-source contributions for Coinlaa.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=faces",
  },
  {
    name: "Cathie Wood",
    role: "Investment Advisor",
    bio: "Supports capital strategy, market research, and ecosystem partnerships.",
    image: "https://images.unsplash.com/photo-1544723795-432537f5fc21?w=300&h=300&fit=crop&crop=faces",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 to-white/30">
      <SiteHeader />

      <main className="container mx-auto px-4 py-16">
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Building the Future of the Bitcoin Ecosystem
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Coinlaa unites community, education, and commerce to accelerate Bitcoin adoption. Our mission is to make Bitcoin tools accessible for every builder, creator, and business.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Join the Coinlaa Community
          </Button>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-sm p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-orange-500 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Advisors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="bg-white rounded-xl shadow-sm p-6 text-center">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{advisor.name}</h3>
                <p className="text-sm text-orange-500 font-medium mb-3">{advisor.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
