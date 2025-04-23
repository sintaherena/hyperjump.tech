"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  SupportedLanguage,
  supportedLanguages
} from "@/locales/.generated/types";
import Link from "next/link";

export default function LanguagePicker({ lang }: { lang: SupportedLanguage }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex gap-2">
      {supportedLanguages.map((l) => {
        const isActive = lang === l;

        return (
          <Link
            scroll={false}
            key={l}
            href={`/inferenceai/${l}`}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors",
              isActive
                ? isScrolled
                  ? "btn-gradient-purple text-white"
                  : "bg-white text-inferenceai-indigo"
                : isScrolled
                  ? "bg-transparent text-inferenceai-indigo"
                  : "text-white"
            )}>
            {l.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
