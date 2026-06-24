import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { NavShell } from "@/components/nav-shell";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Failenn Aselta - Product Designer",
  description: "Product designer, design engineer, and design technologist. Research-led work that ships in real code.",
  metadataBase: new URL("https://failennaselta.com"),
  openGraph: {
    title: "Failenn Aselta - Product Designer",
    description: "Product designer, design engineer, and design technologist. Research-led work that ships in real code.",
    url: "https://failennaselta.com",
    siteName: "Failenn Aselta - Product Designer",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Failenn Aselta — Product Designer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Failenn Aselta - Product Designer",
    description: "Product designer, design engineer, and design technologist. Research-led work that ships in real code.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#e8e8e8",
  colorScheme: "light",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="dns-prefetch" href="//framerusercontent.com" />
        <link rel="preconnect" href="https://framerusercontent.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <NavShell>{children}</NavShell>
        <Analytics />
      </body>
    </html>
  );
}
