import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import "./globals.css";

import { Toaster } from 'react-hot-toast';

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sh🌐rten URLs",
  description: "Sh🌐rten your URLs with ease",
  robots: "index",
  authors: [
    {
      name: "Himel Majumder",
      url: "https://himelmaj.vercel.app",
    },
  ],
  keywords: ["url", "shortener", "shorten", "link", "short"],
  twitter: {
    site: "@himelmaj",
    card: "summary_large_image",
    title: "Sh🌐rten URLs",
    images: [{ url: "https://sh-rten.vercel.app/screenshot.webp", alt: "Sh🌐rten URLs" } ],
    description: "Sh🌐rten your URLs with ease",
    creator: "@himelmaj", 
    siteId: "sh-rten.vercel.app",
    creatorId: "@himelmaj",
  },
  openGraph: {
    title: "Sh🌐rten URLs",
    description: "Sh🌐rten your URLs with ease",
    images: [{ url: "https://sh-rten.vercel.app/screenshot.webp", alt: "Sh🌐rten URLs" }],
    url: "https://sh-rten.vercel.app",
    type: "website",
    siteName: "Sh🌐rten URLs",
  },
  manifest: "/manifest.json",
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(roboto.className, "relative text-black dark:text-white")}>
        <div
          className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-zinc-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
        <div
          className="opacity-80 w-full mx-auto container lg:max-w-4xl md:max-w-2xl flex flex-col justify-center min-h-screen px-6 pt-7 sm:px-10 lg:px-10"
        >
          <Header />
          <main className="flex flex-1 items-center justify-center">
            {children}
          </main>
          <Toaster position="top-center" />
          <Footer />
        </div>
      </body>
    </html>
  );
}
