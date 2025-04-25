"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/app/utils/tailwind";
import { ReactNode, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import StickyNavigationMain from "@/app/components/sticky-nav-main";
import { HeroCTAButton } from "./hero-cta-button";
import { SupportedLanguage } from "@/locales/.generated/types";
import LanguagePicker from "../[lang]/language-picker";
import { nav } from "../[lang]/data";

export default function Nav({ lang }: { lang: SupportedLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StickyNavigationMain isMenuOpen={isOpen}>
      {({ shouldBeWhite }) => (
        <>
          <NavContainer>
            <Link href="/inferenceai" className="flex items-center">
              <InferenceAI isOpen={isOpen} />
            </Link>

            <CenterNavItems>
              <NavigationMenu className="mx-8 xl:mx-0">
                <NavigationMenuList className="flex gap-5">
                  {nav(lang).map((item, idx) => (
                    <NavigationMenuItem key={idx} className="text-center">
                      <Link
                        href={item.href}
                        className={cn(
                          shouldBeWhite
                            ? "text-inferenceai-indigo hover:text-hyperjump-blue"
                            : "text-white hover:text-hyperjump-blue",
                          "text-lg font-medium transition-colors xl:text-xl"
                        )}>
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </CenterNavItems>

            <RightNavItems>
              <LanguagePicker lang={lang} />
              <HeroCTAButton lang={lang} />
            </RightNavItems>

            {/* Mobile Toggle */}
            <div className="flex items-center lg:hidden">
              <LanguagePicker isOpen={isOpen} lang={lang} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-3 p-2"
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
            </div>
          </NavContainer>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="bg-white shadow-md lg:hidden">
              <div className="mx-auto flex w-full flex-col space-y-4 px-4 py-5 md:px-8">
                {nav(lang).map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="text-2xl text-inferenceai-indigo hover:text-hyperjump-blue"
                    onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <HeroCTAButton lang={lang} />
              </div>
            </div>
          )}
        </>
      )}
    </StickyNavigationMain>
  );
}

export function NavContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full px-4 py-5 md:px-8">
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between transition-all duration-300 group-data-[scroll='false']:border-none"
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

function InferenceAI({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      <Image
        src="/images/inferenceai/inference-ai-white.svg"
        alt="Inference AI Logo"
        width={187}
        height={32}
        className={cn(
          "h-8",
          isOpen && "hidden",
          "group-data-[scroll='true']:hidden"
        )}
      />
      <Image
        src="/images/inferenceai/inference-ai-black.svg"
        alt="Inference AI Logo"
        width={187}
        height={32}
        className={cn(
          "hidden h-8",
          isOpen && "block",
          "group-data-[scroll='true']:block"
        )}
      />
    </>
  );
}
