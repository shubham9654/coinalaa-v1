import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import OfferPopup from "@/components/offer-popup";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coinlaa.com"),
  title: "Coinlaa - The Ultimate Bitcoin Social Network",
  description: "Connect, trade, and succeed in the Bitcoin world. Join thousands of Bitcoin enthusiasts sharing insights, tracking markets, and building wealth together.",
  keywords: ["Coinlaa", "Bitcoin", "cryptocurrency", "social network", "trading", "Bitcoin marketplace", "Bitcoin learning", "crypto community", "blockchain", "Bitcoin jobs", "crypto events"],
  authors: [{ name: "Coinlaa Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Coinlaa - The Ultimate Bitcoin Social Network",
    description: "Connect with thousands of Bitcoin enthusiasts. Track prices, share insights, and build wealth together.",
    url: "https://coinlaa.com",
    siteName: "Coinlaa",
    type: "website",
    images: [{
      url: "/logo.png",
      width: 1200,
      height: 630,
      alt: "Coinlaa - Bitcoin Social Network"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Coinlaa - The Ultimate Bitcoin Social Network",
    description: "Connect, trade, and succeed in the Bitcoin world with thousands of enthusiasts.",
    images: ["/logo.png"],
    creator: "@coinlaa",
    site: "@coinlaa"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <OfferPopup />
        <Toaster />
      </body>
    </html>
  );
}
