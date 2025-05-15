"use client";

import type { SupportedLanguage } from "@/locales/.generated/types";
import {
  caseStudyHeading,
  caseStudyButton,
  caseStudyCaseStudy1Title,
  caseStudyCaseStudy1Desc,
  caseStudyCaseStudy2Title,
  caseStudyCaseStudy2Desc,
  caseStudyCaseStudies,
  servicesCtaHeading,
  servicesCtaDesc,
  servicesCtaLabel
} from "@/locales/.generated/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import data from "@/data.json";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";

const getCaseStudies = (lang: SupportedLanguage) => {
  const data = [
    {
      title: caseStudyCaseStudy1Title(lang),
      description: caseStudyCaseStudy1Desc(lang)
    },
    {
      title: caseStudyCaseStudy2Title(lang),
      description: caseStudyCaseStudy2Desc(lang)
    }
  ];

  return data;
};

export default function Home({ lang }: { lang: SupportedLanguage }) {
  return (
    <main className="xxl:max-w-7xl mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center px-4 py-12 text-center md:px-20 xl:px-0">
      <h3 className="text-hyperjump-black text-[34px] font-medium md:text-[40px]">
        {caseStudyHeading(lang)}
      </h3>
      <CaseStudies lang={lang} />
      <CTACaseStudies lang={lang} />
    </main>
  );
}

export function CaseStudies({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2">
          {getCaseStudies(lang).map((study, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between rounded-xl border border-gray-200 p-6 text-left shadow-sm transition duration-300 hover:shadow-md">
              <div>
                <span className="mb-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                  {caseStudyCaseStudies(lang)}
                </span>
                <h3 className="text-hyperjump-black mb-2 text-lg font-semibold md:text-[22px]">
                  {study.title}
                </h3>
                <p className="text-hyperjump-gray mb-4 text-sm md:text-base">
                  {study.description}
                </p>
              </div>

              <Button
                asChild
                variant="outline"
                className="text-hyperjump-blue hover:bg-hyperjump-blue mt-4 w-full border-gray-300 hover:text-white">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  {caseStudyButton(lang)}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTACaseStudies({ lang }: { lang: SupportedLanguage }) {
  const { gaEventName, link } = data.cta;

  return (
    <section className="relative my-10 w-full max-w-7xl overflow-hidden rounded-lg">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/swatch.svg"
          alt="CTA Background"
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
        <h4 className="mb-3 text-3xl font-medium text-white md:text-4xl">
          {servicesCtaHeading(lang)}
        </h4>
        <p className="mb-8 text-lg text-white">{servicesCtaDesc(lang)}</p>

        <Button
          asChild
          size="lg"
          className="bg-hyperjump-blue hover:bg-hyperjump-blue/90 text-base font-semibold text-white">
          <Link
            onClick={() => {
              sendGAEvent({
                event: gaEventName,
                category: "engagement",
                label: "Case Studies CTA"
              });
            }}
            href={link}
            target="_blank"
            rel="noreferrer noopener">
            {servicesCtaLabel(lang)}
          </Link>
        </Button>
      </div>
    </section>
  );
}
