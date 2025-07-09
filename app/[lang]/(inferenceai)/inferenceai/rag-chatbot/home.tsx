"use client";

import {
  supportedLanguages,
  SupportedLanguage
} from "@/locales/.generated/types";
import { motion } from "framer-motion";
import {
  GridItems,
  GridItemsContainerBlack,
  GridItemsTitleBlack
} from "@/app/components/grid-items";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ragChatbotKeyFeaturesHeading,
  ragChatbotHowItWorksHeading,
  ragChatbotWhatIsIncludedHeading,
  ragChatbotFaqHeading,
  ragChatbotFaqDesc,
  ragChatbotHeroHeading,
  ragChatbotHeroDesc
} from "@/locales/.generated/server";
import {
  getKeyFeatures,
  getHowItWorks,
  getWhatIsIncluded,
  getFaqs
} from "./data";
import Image from "next/image";
import InferenceAIAgent from "../components/inference-ai-agent";

export const generateStaticParams = async () => {
  return supportedLanguages.map((lang) => ({ lang }));
};

export default function Home({ lang }: { lang: SupportedLanguage }) {
  return (
    <>
      <Hero lang={lang} />
      <KeyFeatures lang={lang} />
      <HowItWorks lang={lang} />
      <WhatIsIncluded lang={lang} />
      <Faqs lang={lang} />
    </>
  );
}

type HeroProps = { lang: SupportedLanguage };

function Hero({ lang }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#04040B] text-white">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 z-0">
        <Image
          src="/images/inferenceai/swatch.svg"
          alt="Hero Background"
          fill
          className="object-cover object-top"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/70 to-transparent" />
      <article className="relative z-20 mt-16 flex flex-col items-center justify-center px-4 md:mt-28 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex w-full flex-col items-center justify-center">
          <h1 className="mt-28 mb-4 text-center text-5xl font-semibold md:mb-6 md:max-w-4xl md:text-6xl">
            {ragChatbotHeroHeading(lang)}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="my-6 text-center text-base font-medium text-[#AFB0C3] md:my-10 md:max-w-3xl md:text-[22px]">
            {ragChatbotHeroDesc(lang)}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="mx-auto flex w-full flex-col items-center justify-center md:max-w-4xl">
          <InferenceAIAgent />
        </motion.div>
      </article>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="relative z-10 h-56 w-full md:h-[400px]">
        <Image
          src="/images/inferenceai/banner.png"
          alt="Banner Bottom"
          fill
          className="object-cover object-center md:object-top"
        />

        <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-24 bg-linear-to-t from-[#020F15] to-transparent md:h-32" />
      </motion.div>
    </section>
  );
}

function KeyFeatures({ lang }: { lang: SupportedLanguage }) {
  return (
    <GridItemsContainerBlack
      id="key-features"
      className="max-w-7xl"
      bgClassName="bg-[#050013]">
      <GridItemsTitleBlack title={ragChatbotKeyFeaturesHeading(lang)} />
      <div className="my-6" />
      <GridItems
        items={getKeyFeatures(lang)}
        columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 5 }}
        cardClassName="rounded-xl"
        borderClassName="card-border-gradient"
        titleClassName="text-white md:text-lg"
        lang={lang}
      />
    </GridItemsContainerBlack>
  );
}

function HowItWorks({ lang }: { lang: SupportedLanguage }) {
  return (
    <section id="how-it-works" className="bg-inference-ai scroll-mt-20">
      <div className="mx-auto flex flex-wrap items-center justify-center px-4 py-7 md:px-6 md:py-[60px]">
        <div className="w-full max-w-3xl">
          <GridItemsTitleBlack title={ragChatbotHowItWorksHeading(lang)} />
          <div className="my-6 space-y-6">
            {getHowItWorks(lang).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}>
                <Card key={i} className="card-border-gradient rounded-xl p-6">
                  <h3 className="mb-1 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#AFB0C3]">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsIncluded({ lang }: { lang: SupportedLanguage }) {
  return (
    <GridItemsContainerBlack
      id="what-is-included"
      className="max-w-7xl"
      bgClassName="bg-multilayer-gradient">
      <GridItemsTitleBlack title={ragChatbotWhatIsIncludedHeading(lang)} />
      <div className="my-6" />
      <div className="grid grid-cols-2 gap-10 bg-transparent pt-8 text-white lg:grid-cols-4">
        {getWhatIsIncluded(lang).map((item, idx) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            key={idx}
            className="relative flex flex-col items-start justify-start gap-4 pl-6">
            <div className="absolute top-0 left-0 h-full w-[2px] bg-linear-to-b from-transparent via-white/20 to-transparent" />
            {item.icon}
            <p className="text-base font-semibold text-white/90 md:text-xl">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </GridItemsContainerBlack>
  );
}

function Faqs({ lang }: { lang: SupportedLanguage }) {
  return (
    <section id="faqs" className="bg-inference-ai scroll-mt-20">
      <div className="mx-auto flex flex-wrap items-center justify-center px-4 py-7 md:px-6 md:py-[60px]">
        <div className="w-full max-w-3xl">
          <GridItemsTitleBlack
            title={ragChatbotFaqHeading(lang)}
            description={ragChatbotFaqDesc(lang)}
            layout="vertical"
          />
          <div className="my-6" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}>
            <Accordion
              type="single"
              collapsible
              className="mx-auto w-full max-w-4xl space-y-4">
              {getFaqs(lang).map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} asChild>
                  <Card className="card-border-gradient w-full shadow-sm transition-all duration-300">
                    <CardHeader className="py-0 md:py-2">
                      <AccordionTrigger className="flex w-full items-center justify-between text-left text-xl font-medium text-white no-underline transition hover:no-underline focus:no-underline md:gap-2">
                        {item.question}
                      </AccordionTrigger>
                    </CardHeader>
                    <AccordionContent asChild className="py-0">
                      <CardContent className="text-base text-[#CDCED8] lg:text-lg">
                        {item.answer}
                      </CardContent>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
