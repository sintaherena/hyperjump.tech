"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/data.json";
import StickyNavigation from "@/app/components/sticky-nav";
import { cn } from "@/app/utils/tailwind";
import { ReactNode, useEffect, useState } from "react";
import LogoWithContextMenu from "./logo-with-context-menu";
import ClientOnly from "./client-only";
import WhiteLogo from "@/public/images/hyperjump-white.png";
import ColoredLogo from "@/public/images/hyperjump-colored.png";
import BlackLogo from "@/public/images/hyperjump-black.png";
import IconOnlyLogo from "@/public/images/hyperjump-icon-only.png";
import SVGLogo from "@/public/images/hyperjump-svg.svg";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const linkItems = data.navLinks.filter((item) => item.type === "link");
  const buttonItems = data.navLinks.filter((item) => item.type === "button");

  return (
    <StickyNavigation
      className={cn(
        isScrolled
          ? "bg-[#f9f9f9] backdrop-blur-[3px] shadow-sm"
          : "bg-transparent",
        "transition-all duration-500 z-[100]"
      )}
    >
      <NavContainer>
        <HyperjumpLogo />

        <CenterNavItems>
          <NavigationMenu>
            <NavigationMenuList className="justify-center w-full">
              {linkItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link
                    href={item.href}
                    className={cn(
                      isScrolled
                        ? "text-black hover:text-blue-600"
                        : "text-white hover:text-blue-200",
                      "transition-colors px-4 py-2"
                    )}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </CenterNavItems>

        <RightNavItems>
          {buttonItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                item.style === "primary"
                  ? "bg-black text-white hover:bg-white hover:text-black border border-black"
                  : isScrolled
                  ? "bg-transparent border border-black text-black hover:bg-black hover:text-white"
                  : "bg-transparent border border-white text-white hover:bg-white hover:text-black",
                "px-6 py-2 rounded-md transition-colors"
              )}
            >
              {item.label}
            </Link>
          ))}
        </RightNavItems>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke={isMenuOpen || isScrolled ? "black" : "white"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </NavContainer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed lg:hidden h-screen inset-0 bg-white z-50 flex flex-col">
          <div className="w-full container mx-auto flex flex-col  justify-between mt-0 py-2">
            <div className="flex bg-white justify-between items-center px-4 py-5">
              <Link href="/">
                <HyperjumpLogo />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col px-4 py-8 space-y-8">
              {data.navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    item.type === "button"
                      ? "mt-4 w-full flex justify-center items-center border border-black text-black px-4 py-3 rounded-md hover:bg-black hover:text-white transition-colors text-lg"
                      : "text-2xl font-normal text-black hover:text-blue-600 transition-colors"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </StickyNavigation>
  );
}

export function NavContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      {children}
    </div>
  );
}

export function CenterNavItems({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
      {children}
    </div>
  );
}

export function RightNavItems({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden lg:flex items-center justify-end space-x-4">
      {children}
    </div>
  );
}

export function HyperjumpLogo() {
  return (
    <div className="pl-4 flex items-center">
      <Link
        className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
        href={"/"}
      >
        <ClientOnly>
          <LogoWithContextMenu
            downloadables={[
              {
                text: "Download colored logo",
                url: ColoredLogo.src,
                fileName: "hyperjump-logo-colored.png",
              },
              {
                text: "Download Black and White logo",
                url: BlackLogo.src,
                fileName: "hyperjump-logo-bw.png",
              },
              {
                text: "Download icon",
                url: IconOnlyLogo.src,
                fileName: "hyperjump-icon-only.png",
              },
              {
                text: "Download SVG logo",
                url: SVGLogo.src,
                fileName: "hyperjump-svg.svg",
              },
            ]}
          >
            {[WhiteLogo, ColoredLogo].map((image, i) => (
              <Image
                key={i}
                className={cn(
                  "w-32",
                  image.src.includes("hyperjump-white")
                    ? `group-[[data-scroll='false']]:block group-[[data-scroll='true']]:hidden`
                    : `group-[[data-scroll='true']]:block group-[[data-scroll='false']]:hidden`
                )}
                src={image}
                alt="Hyperjump Logo"
                width={128}
                height={32}
              />
            ))}
          </LogoWithContextMenu>
        </ClientOnly>
      </Link>
    </div>
  );
}
