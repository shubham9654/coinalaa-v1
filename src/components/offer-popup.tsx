"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "offer-popup-shown-v4"; // Updated version key

export default function OfferPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch (e) {
      // ignore localStorage errors (privacy mode)
      return;
    }

    let triggered = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    function onScroll() {
      if (triggered) return;
      triggered = true;
      // mark shown so it won't trigger again
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

  return (
    <Dialog open={open} onOpenChange={(val) => setOpen(val)}>
      <DialogContent className="w-[400px] max-w-md rounded-xl p-0 overflow-hidden bg-white">
        <div className="relative p-6 pt-10 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 border-b border-gray-100">
          <DialogClose className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors">
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-orange-100 p-3 mb-4 ring-4 ring-gray-200">
              <Sparkles className="h-8 w-8 text-orange-600" />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight mb-2">
              <span className="block">Bitcoin Amsterdam Offer</span>
            </h2>
            {/* <p className="text-gray-600 text-sm max-w-xs">
                Unlock your potential with our complete course bundle today.
            </p> */}
          </div>
        </div>
        <div className="p-6">
          <DialogHeader className="text-center mb-4">
            <DialogTitle className="text-4xl font-extrabold text-orange-600 mb-2">
              1 Year Free Access
            </DialogTitle>
            {/* <DialogDescription className="text-base text-muted-foreground font-medium">
              Complete Bitcoin Course Bundle
            </DialogDescription> */}
          </DialogHeader>

          {/* <div className="mt-4 p-4 border border-dashed border-orange-600/40 bg-orange-500/5 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-1">
              Use this exclusive code at checkout:
            </p>
            <div className="inline-block p-2 bg-white border border-orange-600/30 rounded-md shadow-sm">
              <span className="text-lg font-bold tracking-widest text-orange-600 select-all">
                COIN30
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              *Available for new learners only. Offer expires soon.
            </p>
          </div> */}
        </div>

        <DialogFooter className="flex-col sm:flex-col p-6 pt-0 gap-3">
          <a href="https://app.coinlaa.com/" className="w-full">
            <Button
              className="w-full text-base py-6 font-semibold bg-orange-600 text-white 
                           hover:bg-orange-700 transition-colors
                           shadow-lg shadow-orange-600/40 hover:shadow-orange-600/50"
            >
              Claim your Free access
            </Button>
          </a>

          <DialogClose asChild>
            <Button
              variant="link"
              className="text-sm text-gray-500 hover:text-gray-700 p-0 h-auto"
            >
              No thanks, I'll pay full price
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
