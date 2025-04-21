"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { GridItemsSection } from "./grid-items";
import data from "../inferenceai-data.json";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function HowItWorks() {
  const { header, subheader, content } = data.howItWorks;
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

  return (
    <section id="how-it-works">
      <GridItemsSection
        title={header}
        description={subheader}
        layout="vertical">
        {isMobile ? (
          <Accordion type="single" collapsible className="w-full">
            {content.map((item, i) => (
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
        ) : (
          <div className="mx-auto mt-8 grid w-full grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            <div className="h-full space-y-4">
              {content.map((item, i) => (
                <Card
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "cursor-pointer rounded-2xl border bg-[#1B1728] p-4 transition-all duration-300 ease-in-out",
                    i === activeIndex
                      ? "border-white/20 bg-[#2E2843] shadow-lg shadow-white/10 ring-1 ring-white/10"
                      : "border-white/10"
                  )}>
                  <h3 className="mb-1 font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#AFB0C3] text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="flex min-h-[100%] items-center justify-center rounded-2xl bg-gradient-to-br from-[#2B2543] to-[#1A152E] p-8">
              <div className="relative aspect-[4/3] w-full max-w-md">
                <Image
                  src={content[activeIndex].image}
                  alt={content[activeIndex].title}
                  fill
                  className="rounded-xl object-contain transition duration-300"
                />
              </div>
            </div>
          </div>
        )}
      </GridItemsSection>
    </section>
  );
}
