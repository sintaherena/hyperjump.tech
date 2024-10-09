import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import localFont from "next/font/local";
import "./globals.css";
import data from "@/data.json";
import { cn } from "@/app/utils/tailwind";
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Console from "@/app/components/console";
import ScrollObserver from "@/app/components/scroll-observer";
import Script from "next/script";
import Hero from "@/app/components/hero";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  authors: [
    {
      name: "Nico Prananta",
      url: "https://nico.fyi",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={data.GTM_ID} />
      <body
        className={cn(
          "group",
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "leading-normal tracking-normal text-white bg-black"
        )}
      >
        <ScrollObserver />
        <Nav />
        <Hero />
        {children}
        <Console />
        <Footer />
        <Script src="https://kit.fontawesome.com/f6999a3218.js" />
      </body>
    </html>
  );
}
