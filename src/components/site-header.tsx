"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type MinimalUser = {
  name: string;
};

interface SiteHeaderProps {
  user?: MinimalUser | null;
  onSignIn?: () => void;
  onSignUp?: () => void;
  onSignOut?: () => void;
}

const navLinks = [
  { href: "/about", label: "About" },
];

export function SiteHeader({ user, onSignIn, onSignUp, onSignOut }: SiteHeaderProps) {
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
        <Button variant="outline" size="sm" onClick={onSignIn}>
          Sign In
        </Button>
      );
    }

    return (
      <Button variant="outline" size="sm" asChild>
        <Link href="/">Sign In</Link>
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
          className="bg-orange-500 hover:bg-orange-600 text-white"
          onClick={onSignUp}
        >
          Sign Up
        </Button>
      );
    }

    return (
      <Button
        size="sm"
        className="bg-orange-500 hover:bg-orange-600 text-white"
        asChild
      >
        <Link href="/">Sign Up</Link>
      </Button>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.svg"
                alt="Coinlaa"
                className="h-10 w-28 object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-600">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`transition-colors ${
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

            <div className="flex items-center gap-2">
              {user ? (
                <>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:block text-sm font-medium text-gray-700">
                      {user.name}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" onClick={onSignOut}>
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
