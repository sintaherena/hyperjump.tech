"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { GridItemsSection } from "./grid-items";
import intefaceAIData from "../interfaceai-data.json";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function HowItWorks() {
  const { header, subheader, data } = intefaceAIData.howItWorks;
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

  return (
    <section id="how-it-works">
      <GridItemsSection
        title={header}
        description={subheader}
        layout="vertical"
      >
        {isMobile ? (
          <Accordion type="single" collapsible className="w-full">
            {data.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} asChild>
                <Card className="bg-[#1B1728] border-none shadow-sm transition-all duration-300 w-full my-4">
                  <CardHeader className="py-2 px-4">
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
                    <CardContent className="text-[#CDCED8] text-base lg:text-lg px-4 pb-4 pt-0">
                      <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden">
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
          <div className="w-full mt-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="space-y-4 h-full">
              {data.map((item, i) => (
                <Card
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "cursor-pointer bg-[#1B1728] p-4 border rounded-2xl transition-all duration-300 ease-in-out",
                    i === activeIndex
                      ? "bg-[#2E2843] border-white/20 shadow-lg shadow-white/10 ring-1 ring-white/10"
                      : "border-white/10"
                  )}
                >
                  <h3 className="text-white font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm text-[#AFB0C3]">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#2B2543] to-[#1A152E] rounded-2xl p-8 flex items-center justify-center min-h-[100%]">
              <div className="w-full max-w-md aspect-[4/3] relative">
                <Image
                  src={data[activeIndex].image}
                  alt={data[activeIndex].title}
                  fill
                  className="object-contain rounded-xl transition duration-300"
                />
              </div>
            </div>
          </div>
        )}
      </GridItemsSection>
    </section>
  );
}
