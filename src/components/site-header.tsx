"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, ChevronRight } from "lucide-react";

type MinimalUser = {
  name: string;
};

interface SiteHeaderProps {
  user?: MinimalUser | null;
  onSignIn?: () => void;
  onSignUp?: () => void;
  onSignOut?: () => void;
}

const navLinks = [{ href: "/about", label: "About us" }];

export function SiteHeader({
  user,
  onSignIn,
  onSignUp,
  onSignOut,
}: SiteHeaderProps) {
  const pathname = usePathname();

  const currentPageLabel = (() => {
    if (pathname === "/about") return "About";
    return "Home";
  })();

  const renderSignInButton = () => {
    if (user) {
      return null;
    }

    if (onSignIn) {
      return (
        <Button
          variant="outline"
          size="sm"
          onClick={onSignIn}
          className="text-xs sm:text-sm px-3 sm:px-4"
        >
          Sign In
        </Button>
      );
    }

    return (
      <Button
        variant="outline"
        size="sm"
        asChild
        className="text-xs sm:text-sm px-3 sm:px-4"
      >
        <a href="https://app.coinlaa.com/login/" target="_self">
          Sign In
        </a>
      </Button>
    );
  };

  const renderSignUpButton = () => {
    if (user) {
      return null;
    }

    if (onSignUp) {
      return (
        <Button
          size="sm"
          className="bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm px-3 sm:px-4"
          onClick={onSignUp}
        >
          <span className="hidden sm:inline">Free Sign up </span>
          <span className="sm:hidden">Sign up</span>
          <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1 inline" />
        </Button>
      );
    }

    return (
      <Button
        size="sm"
        className="bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm px-3 sm:px-4"
        asChild
      >
        <a href="https://app.coinlaa.com/register/" target="_self">
          <span className="hidden sm:inline">Free Sign up </span>
          <span className="sm:hidden">Sign up</span>
          <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1 inline" />
        </a>
      </Button>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.svg"
                alt="Coinlaa"
                className="h-8 w-24 sm:h-10 sm:w-28 object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
            <nav className="hidden sm:flex items-center gap-3 md:gap-4 text-sm font-medium text-gray-600">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-orange-600"
                        : "text-gray-600 hover:text-orange-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {user ? (
                <>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                      <AvatarFallback className="text-xs sm:text-sm">
                        {user.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden md:block text-sm font-medium text-gray-700">
                      {user.name}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onSignOut}
                    className="text-xs sm:text-sm px-3 sm:px-4"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  {renderSignInButton()}
                  {renderSignUpButton()}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
