"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, X, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "offer-popup-shown-v4";

export default function OfferPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch (e) {
      return;
    }

    let triggered = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    function onScroll() {
      if (triggered) return;
      triggered = true;
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch (e) {
        // ignore
      }

      // wait 2-3 seconds (randomized) before showing
      const delay = 2000 + Math.floor(Math.random() * 1000);
      timer = setTimeout(() => setOpen(true), delay);
      window.removeEventListener("scroll", onScroll);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const premiumBenefits = [
    {
      title: "Social",
      items: [
        "Join Any Public Group after Sinned",
        "Create 10 Groups",
        "Post to Groups if Group Organizer",
      ],
    }, // Added missing item
    {
      title: "Academy",
      items: ["All the Public Courses", "Access to Premium Courses"],
    },
    { title: "GPTs", items: ["All Premium GPTs"] },
    { title: "Jobs", items: ["Full Access"] },
    { title: "News", items: ["Full Access"] },
    {
      title: "Influencers",
      items: [
        "Creation of 5 Influencer listings.",
        "View is Available (Implied)",
      ],
    }, // Combined Incubator view here for space efficiency
    // Removed explicit Incubator entry for cleaner layout, added view feature to influencers
  ];

  return (
    <Dialog open={open} onOpenChange={(val) => setOpen(val)}>
      <DialogContent
        className="w-full max-w-[800px] rounded-2xl p-0
                   bg-zinc-950 text-white border-2 border-orange-600 
                   shadow-2xl shadow-orange-600/40 min-h-0
                   overflow-y-auto md:overflow-hidden max-h-[85vh]" // <-- CHANGED: Removed overflow-hidden, added overflow-y-auto and max-h
      >
        <DialogClose className="absolute top-4 right-4 text-orange-400 hover:text-orange-600 z-10">
          <span className="sr-only">Close</span>
        </DialogClose>

        {/* This div already correctly switches from flex-col (mobile) to grid (desktop) */}
        <div className="p-8 md:py-4 md:px-2 bg-zinc-900 flex flex-col items-center md:grid grid-cols-2 gap-4">
          {/* Header and Offer Details */}
          <div className="flex flex-col items-center text-center w-full mb-8">
            {/* --- RESPONSIVE TEXT --- */}
            <h1 className="text-3xl md:text-4xl font-black text-orange-500 mb-1">
              Coinlaa
            </h1>
            {/* --- RESPONSIVE TEXT --- */}
            <p className="text-lg md:text-xl font-bold tracking-wide mb-6 text-white/90">
              EXCLUSIVE OFFER
            </p>
            <p className="text-base font-medium text-orange-400 uppercase tracking-widest mb-4">
              For **Bitcoin Amsterdam Event Attendees**
            </p>

            <div className="mb-8">
              {/* --- RESPONSIVE TEXT --- */}
              <p className="text-4xl md:text-5xl font-extrabold text-white leading-none mb-2">
                1 YEAR
              </p>
              {/* --- RESPONSIVE TEXT --- */}
              <p className="text-2xl md:text-3xl font-bold text-white/90">
                PREMIUM SUBSCRIPTION
              </p>
            </div>

            {/* Price Box */}
            <div className="inline-block p-4 bg-zinc-800 border-4 border-orange-500 rounded-lg shadow-xl">
              {/* --- RESPONSIVE TEXT --- */}
              <span className="text-4xl md:text-5xl font-extrabold text-orange-500">
                $600
              </span>
              <p className="text-lg font-semibold text-white/80">WORTH</p>
            </div>
          </div>

          {/* --- Benefits List (Two-Column on MD screens and up, Vertical on Mobile) --- */}
          <div className="w-full mt-6">
            <DialogHeader className="mb-6 text-center">
              {/* --- RESPONSIVE TEXT --- */}
              <DialogTitle className="text-2xl md:text-3xl font-extrabold tracking-tight text-orange-500">
                COINLAA PREMIUM BENEFITS
              </DialogTitle>
            </DialogHeader>

            {/* This layout is already correctly responsive (1 col -> 2 col) */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 pr-2 
                           sidebar-content md:max-h-[350px] md:overflow-y-auto" // <-- CHANGED: Prefixed max-h and overflow with md:
            >
              {premiumBenefits.map((section, index) => (
                <div key={index} className="break-inside-avoid">
                  <h3 className="text-lg font-extrabold text-orange-400 mb-1 border-b border-orange-600/50 pb-0.5">
                    {section.title}:
                  </h3>
                  <ul className="space-y-0.5 mt-1">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-white/80 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-orange-600 mt-1 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-sm font-semibold text-orange-500 mt-6 text-center">
              Redeem at Booth Coinlaa
            </p>
          </div>
        </div>

        {/* --- Footer with Button --- */}
        <div className="p-6 bg-zinc-950 border-t border-zinc-800">
          <a
            href="https://app.coinlaa.com/register/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block"
          >
            {/* --- RESPONSIVE BUTTON (TEXT/PADDING) --- */}
            <Button
              className="w-full text-base md:text-lg py-6 md:py-7 font-bold bg-orange-600 text-black 
                           hover:bg-orange-700 transition-colors
                           shadow-xl shadow-orange-600/50 hover:shadow-orange-600/70"
            >
              Claim Your 1 Year Premium Access
            </Button>
          </a>

          <DialogClose asChild>
            <Button
              variant="link"
              className="text-sm text-gray-400 hover:text-white mt-3 w-full p-0 h-auto"
            >
              No thanks, I'll pay full price later
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}