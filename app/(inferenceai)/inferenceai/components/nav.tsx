"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/app/utils/tailwind";
import { ReactNode, useEffect, useState } from "react";
import WhiteLogo from "@/public/images/hyperjump-white.png";
import BlackLogo from "@/public/images/hyperjump-black.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import StickyNavigation from "./sticky-nav";
import IconOnlyLogo from "@/public/images/hyperjump-icon-only.png";
import SVGLogo from "@/public/images/hyperjump-svg.svg";
import ColoredLogo from "@/public/images/hyperjump-colored.png";
import ClientOnly from "@/app/components/client-only";
import LogoWithContextMenu from "@/app/components/logo-with-context-menu";
import data from "../inferenceai-data.json";
import { ScheduleConsultationButton } from "./grid-items";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { navLinks } = data;

  return (
    <StickyNavigation isMenuOpen={isOpen}>
      {({ shouldBeWhite }) => (
        <>
          <NavContainer>
            <Link href="/" className="flex items-center">
              <HyperjumpLogoMain isOpen={isOpen} />
            </Link>

            <CenterNavItems>
              <NavigationMenu>
                <NavigationMenuList className="flex gap-5">
                  {navLinks.map((item, idx) => (
                    <NavigationMenuItem key={idx}>
                      <Link
                        href={item.href}
                        className={cn(
                          shouldBeWhite
                            ? "text-hyperjump-black hover:text-hyperjump-blue"
                            : "text-white hover:text-hyperjump-blue",
                          "text-xl font-medium transition-colors"
                        )}>
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </CenterNavItems>

            <RightNavItems>
              <ScheduleConsultationButton />
            </RightNavItems>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 lg:hidden"
              aria-label="Toggle menu">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke={shouldBeWhite ? "black" : "white"}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
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
          {isOpen && (
            <div className="bg-white shadow-md lg:hidden">
              <div className="mx-auto flex w-full flex-col space-y-4 px-4 py-5 md:px-8">
                {navLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="text-2xl text-hyperjump-black hover:text-hyperjump-blue"
                    onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <ScheduleConsultationButton />
              </div>
            </div>
          )}
        </>
      )}
    </StickyNavigation>
  );
}

export function NavContainer({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBorder = isScrolled ? "" : "boder-none";

  return (
    <div className="w-full px-4 py-5 md:px-8">
      <div
        className={cn(
          showBorder,
          "mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between"
        )}>
        {children}
      </div>
    </div>
  );
}

function CenterNavItems({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden flex-1 items-center justify-center space-x-8 lg:flex">
      {children}
    </div>
  );
}

export function RightNavItems({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden items-center justify-end space-x-4 lg:flex">
      {children}
    </div>
  );
}

function HyperjumpLogoMain({ isOpen }: { isOpen: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBlack = isOpen || isScrolled;

  const logoSrc = showBlack ? BlackLogo : WhiteLogo;

  return (
    <Image
      src={logoSrc}
      alt="Hyperjump Logo"
      width={187}
      height={32}
      className="h-8"
    />
  );
}

export function HyperjumpLogo() {
  return (
    <div className="flex items-center pl-4">
      <Link
        className="toggleColour text-2xl font-bold no-underline hover:no-underline lg:text-4xl"
        href={"/"}>
        <ClientOnly>
          <LogoWithContextMenu
            downloadables={[
              {
                text: "Download colored logo",
                url: ColoredLogo.src,
                fileName: "hyperjump-logo-colored.png"
              },
              {
                text: "Download Black and White logo",
                url: BlackLogo.src,
                fileName: "hyperjump-logo-bw.png"
              },
              {
                text: "Download icon",
                url: IconOnlyLogo.src,
                fileName: "hyperjump-icon-only.png"
              },
              {
                text: "Download SVG logo",
                url: SVGLogo.src,
                fileName: "hyperjump-svg.svg"
              }
            ]}>
            {[WhiteLogo, ColoredLogo].map((image, i) => {
              return (
                <Image
                  key={i}
                  id="brandlogo"
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
              );
            })}
          </LogoWithContextMenu>
        </ClientOnly>
      </Link>
    </div>
  );
}
