"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

const coreTeam = [
  {
    name: "Rahul Bachina",
    role: "Co-Founder & CTO",
    image: "/team/rahul-bachina.jpg",
  },
  {
    name: "Raj Muppala",
    role: "Co-Founder & CEO",
    image: "/team/raj-muppala.jpg",
  },
  {
    name: "Raj Muppala",
    role: "Co-Founder & CPO",
    image: "/team/raj-muppala.jpg",
  },
];

const advisors = [
  {
    name: "Hendrik Klein",
    role: "Principal Advisor - Investment",
    image: "/team/hendrik-klein.jpg",
  },
  {
    name: "Pradeep Joglekar",
    role: "Principal Advisor - Partnerships",
    image: "/team/pradeep-joglekar.jpg",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-5xl mx-auto">
            {coreTeam.map((member) => (
              <div key={`${member.name}-${member.role}`} className="bg-white rounded-xl shadow-sm p-6 text-center w-full max-w-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-orange-500 font-medium mb-3">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Advisors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center max-w-3xl mx-auto">
            {advisors.map((advisor) => (
              <div key={`${advisor.name}-${advisor.role}`} className="bg-white rounded-xl shadow-sm p-6 text-center w-full max-w-sm">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{advisor.name}</h3>
                <p className="text-sm text-orange-500 font-medium mb-3">{advisor.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
