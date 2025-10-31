"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 to-white/30">
      <SiteHeader />

      <main className="container mx-auto px-4 py-16">
        <section className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you have a question about features, pricing, partnerships, or anything else, our team is ready to help you build with Coinlaa.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">General Inquiries</h2>
            <p className="text-sm text-gray-600 mb-4">
              Reach out to our team for product demos, partnerships, or press opportunities.
            </p>
            <p className="text-sm font-medium text-orange-500">hello@coinlaa.com</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Support</h2>
            <p className="text-sm text-gray-600 mb-4">
              Need help getting started or have a technical question? Our support team is here for you.
            </p>
            <p className="text-sm font-medium text-orange-500">support@coinlaa.com</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Community</h2>
            <p className="text-sm text-gray-600 mb-4">
              Join our global community to connect with builders, share ideas, and attend upcoming events.
            </p>
            <p className="text-sm font-medium text-orange-500">community@coinlaa.com</p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send us a message</h2>
          <form className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Your name" required />
              <Input type="email" placeholder="Email address" required />
            </div>
            <Input placeholder="Company / Organization" />
            <Textarea placeholder="How can we help?" rows={5} required />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full md:w-auto">
              Submit
            </Button>
          </form>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
