"use client";

import { useState } from "react";
import Image from "next/image";
import { GridItems, GridItemsSection } from "@/app/components/grid-items";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SupportedLanguage } from "@/locales/.generated/types";
import {
  ragChatbotKeyFeaturesHeading,
  ragChatbotHowItWorksHeading,
  ragChatbotWhatIsIncludedHeading,
  ragChatbotFaqHeading,
  ragChatbotFaqDesc
} from "@/locales/.generated/server";
import {
  getKeyFeatures,
  getHowItWorks,
  getWhatIsIncluded,
  getFaqs
} from "./data";

export default function Home({ lang }: { lang: SupportedLanguage }) {
  return (
    <>
      <KeyFeatures lang={lang} />
      <HowItWorks lang={lang} />
      <WhatIsIncluded lang={lang} />
      <Faqs lang={lang} />
    </>
  );
}

function KeyFeatures({ lang }: { lang: SupportedLanguage }) {
  return (
    <GridItemsSection
      id="key-features"
      title={ragChatbotKeyFeaturesHeading(lang)}
      className="my-10 max-w-7xl">
      <div className="my-10" />
      <GridItems
        items={getKeyFeatures(lang)}
        columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 5 }}
        cardClassName="rounded-[20px]"
        borderClassName="card-border-gradient"
        titleClassName="text-white md:text-lg"
        lang={lang}
      />
    </GridItemsSection>
  );
}

function HowItWorks({ lang }: { lang: SupportedLanguage }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <GridItemsSection
      id="how-it-works"
      title={ragChatbotHowItWorksHeading(lang)}
      className="my-10 max-w-7xl">
      <div className="my-10" />
      <div className="md:hidden">
        <Accordion type="single" collapsible className="w-full">
          {getHowItWorks(lang).map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} asChild>
              <Card className="my-4 w-full border-none bg-[#1B1728] shadow-sm transition-all duration-300">
                <CardHeader className="px-4 py-2">
                  <AccordionTrigger className="flex items-center justify-between no-underline hover:no-underline focus:no-underline">
                    <div className="flex flex-col">
                      <div className="text-left text-xl font-medium text-white">
                        {item.title}
                      </div>
                      <div className="text-left font-medium text-[#AFB0C3]">
                        {item.description}
                      </div>
                    </div>
                  </AccordionTrigger>
                </CardHeader>
                <AccordionContent asChild>
                  <CardContent className="px-4 pb-4 pt-0 text-base text-[#CDCED8] lg:text-lg">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="mx-auto mt-8 hidden w-full grid-cols-1 items-stretch gap-8 md:grid lg:grid-cols-2">
        <div className="h-full space-y-4">
          {getHowItWorks(lang).map((item, i) => (
            <Card
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "cursor-pointer rounded-2xl border bg-[#1B1728] p-4 transition-all duration-300 ease-in-out",
                i === activeIndex
                  ? "border-white/20 bg-[#2E2843] shadow-lg shadow-white/10 ring-1 ring-white/10"
                  : "border-white/10"
              )}>
              <h3 className="mb-1 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-base text-[#AFB0C3] text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="flex min-h-[100%] items-center justify-center rounded-2xl bg-gradient-to-br from-[#2B2543] to-[#1A152E] p-8">
          <div className="relative aspect-[4/3] w-full max-w-md">
            <Image
              src={getHowItWorks(lang)[activeIndex].image}
              alt={getHowItWorks(lang)[activeIndex].title}
              fill
              className="rounded-xl object-contain transition duration-300"
            />
          </div>
        </div>
      </div>
    </GridItemsSection>
  );
}

function WhatIsIncluded({ lang }: { lang: SupportedLanguage }) {
  return (
    <GridItemsSection
      id="what-is-included"
      title={ragChatbotWhatIsIncludedHeading(lang)}
      className="my-10 max-w-7xl">
      <div className="mt-10 grid grid-cols-2 gap-10 bg-[#0A0713] pt-8 text-white lg:grid-cols-4">
        {getWhatIsIncluded(lang).map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-start justify-start gap-4 pl-6">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <Image src={item.icon} alt={item.title} width={32} height={32} />
            <p className="text-base font-semibold text-white/90 md:text-xl">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </GridItemsSection>
  );
}

function Faqs({ lang }: { lang: SupportedLanguage }) {
  return (
    <GridItemsSection
      id="faqs"
      title={ragChatbotFaqHeading(lang)}
      description={ragChatbotFaqDesc(lang)}
      layout="vertical"
      className="bg-grid-faqs my-10">
      <Accordion
        type="single"
        collapsible
        className="mx-auto mt-8 w-full max-w-7xl space-y-4">
        {getFaqs(lang).map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} asChild>
            <Card className="w-full border-none bg-[#1B1728] shadow-sm transition-all duration-300">
              <CardHeader className="px-4 py-2">
                <AccordionTrigger className="flex w-full items-center justify-between gap-2 text-left text-lg font-medium text-white no-underline hover:no-underline focus:no-underline md:text-[22px]">
                  {item.question}
                </AccordionTrigger>
              </CardHeader>
              <AccordionContent asChild>
                <CardContent className="px-4 pb-4 pt-0 text-base text-[#CDCED8] lg:text-lg">
                  {item.answer}
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </GridItemsSection>
  );
}
