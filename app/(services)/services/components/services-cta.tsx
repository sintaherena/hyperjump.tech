"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import data from "@/data.json";
import Image from "next/image";
import { SupportedLanguage } from "@/locales/.generated/types";
import { servicesCtaLabel } from "@/locales/.generated/server";

export function ServicesCTA({
  lang,
  heading,
  desc
}: {
  lang: SupportedLanguage;
  heading: string;
  desc: string;
}) {
  const { gaEventName, link } = data.cta;

  return (
    <div className="relative mt-10 w-full max-w-5xl overflow-hidden rounded-xl">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/swatch.svg"
          alt="Footer background"
          width={1440}
          height={308}
          className="pointer-events-none h-full object-cover select-none"
          style={{
            background:
              "linear-gradient(134.7deg, #5954DA 3.43%, #0B0B0D 48.93%)"
          }}
        />
      </div>
      <div className="relative flex flex-col items-center justify-center px-6 py-11 text-center">
        <h3 className="text-3xl font-medium">{heading}</h3>
        <p className="mt-3 max-w-xl">{desc}</p>
        <Button
          asChild
          variant="default"
          className="bg-hyperjump-blue hover:bg-hyperjump-blue/90 mt-8 font-semibold text-white">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => {
              sendGAEvent({
                event: gaEventName,
                category: "engagement",
                label: "Services CTA"
              });
            }}>
            {servicesCtaLabel(lang)}
          </Link>
        </Button>
      </div>
    </div>
  );
}
