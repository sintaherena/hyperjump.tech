"use client";

import { SupportedLanguage } from "@/locales/.generated/types";
import {
  saasWhatIsSaasHeading,
  saasWhatIsSaasDesc,
  saasWhatIsSaasHighlight,
  saasWhoIsItHeading,
  saasWhoIsItDesc,
  saasWhoIsItTarget0,
  saasWhoIsItTarget1,
  saasWhoIsItTarget2,
  saasWhatWeDeliverHeading,
  saasWhatWeDeliverDesc,
  saasHowItWorksHeading,
  saasHowItWorksDesc,
  saasWhatYouGetHeading,
  saasWhatYouGetDesc,
  saasWhatYouGetItems0,
  saasWhatYouGetItems1,
  saasWhatYouGetItems2,
  saasWhyUsHeading,
  saasWhyUsDesc,
  saasWhyUsReasons0,
  saasWhyUsReasons1,
  saasWhyUsReasons2,
  saasCtaHeading,
  saasCtaDesc
} from "@/locales/.generated/server";
import { ServiceCard } from "../../components/service-card";
import { HowItsWorksData, whatWeDeliverData } from "./data";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ServicesCTA } from "../../components/services-cta";
import Image from "next/image";

export default function Home({ lang }: { lang: SupportedLanguage }) {
  return (
    <>
      <About lang={lang} />
      <WhoIsIt lang={lang} />
      <WhatWeDeliver lang={lang} />
      <HowItWorks lang={lang} />
      <WhatYouGet lang={lang} />
      <WhyUs lang={lang} />
      <SaasCTA lang={lang} />
    </>
  );
}

function About({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="bg-[#F6F8F9] py-16">
      <div className="text-hyperjump-black mx-auto flex w-full max-w-4xl flex-wrap items-center px-4 py-10 md:px-16 md:py-20 xl:px-0">
        <h2 className="mb-5 text-[34px] font-medium md:text-4xl">
          {saasWhatIsSaasHeading(lang)}
        </h2>
        <p className="mb-5 text-xl leading-relaxed">
          {saasWhatIsSaasDesc(lang)}
        </p>
        <p className="text-xl leading-relaxed">
          {saasWhatIsSaasHighlight(lang)}
        </p>
      </div>
    </section>
  );
}

function WhoIsIt({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="flex w-full flex-wrap items-center justify-center bg-white px-4 py-20 text-center md:px-20 xl:px-0">
      <div className="xxl:max-w-7xl mx-auto w-full max-w-6xl">
        <ServiceCard
          title={saasWhoIsItHeading(lang)}
          desc={saasWhoIsItDesc(lang)}
          items={[
            saasWhoIsItTarget0(lang),
            saasWhoIsItTarget1(lang),
            saasWhoIsItTarget2(lang)
          ]}
          image="/images/services/saas.webp"
          icon="/images/services/saas-icon.svg"
        />
      </div>
    </section>
  );
}

function WhatWeDeliver({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="bg-white py-16">
      <div className="text-hyperjump-black mx-auto flex max-w-6xl flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-5 text-[34px] font-medium md:text-4xl">
          {saasWhatWeDeliverHeading(lang)}
        </h2>
        <p className="text-hyperjump-gray mt-2 max-w-3xl">
          {saasWhatWeDeliverDesc(lang)}
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whatWeDeliverData(lang).map((service, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white p-6 text-left shadow-md transition hover:shadow-lg">
              <Avatar className="mb-6 h-14 w-14">
                <AvatarImage src={service.icon as string} alt={service.title} />
              </Avatar>
              <h3 className="text-hyperjump-black mb-2 text-lg font-medium md:text-xl">
                {service.title}
              </h3>
              <p className="text-hyperjump-gray mb-4 md:text-lg">
                {service.description}
              </p>
              <ul
                className="text-hyperjump-gray list-inside list-disc space-y-1 [&_b]:mt-4 [&_b]:block"
                dangerouslySetInnerHTML={{
                  __html: service.items
                    .map((item) => `<li>${item}</li>`)
                    .join("")
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="bg-[#F6F8F9] py-16">
      <div className="text-hyperjump-black mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
        <h2 className="mb-5 text-[34px] font-medium md:text-4xl">
          {saasHowItWorksHeading(lang)}
        </h2>
        <p className="text-hyperjump-gray mt-2 mb-10">
          {saasHowItWorksDesc(lang)}
        </p>
        <div className="relative space-y-10">
          <div className="bg-dashed absolute top-6 bottom-6 left-5 z-0 w-px bg-gray-300" />
          {HowItsWorksData(lang).map((step, index) => (
            <div key={index} className="relative z-10 flex items-start">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded border border-gray-200 bg-white shadow">
                <Image
                  width={40}
                  height={40}
                  src={step.icon}
                  alt=""
                  className="h-10 w-10"
                />
              </div>
              <div className="ml-4 text-left">
                <h4 className="font-meidum text-hyperjump-black text-xl">
                  {step.title}
                </h4>
                <p className="text-hyperjump-gray mt-1 text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouGet({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="flex w-full flex-wrap items-center justify-center bg-white px-4 py-20 text-center md:px-20 xl:px-0">
      <div className="xxl:max-w-7xl mx-auto w-full max-w-6xl">
        <ServiceCard
          title={saasWhatYouGetHeading(lang)}
          desc={saasWhatYouGetDesc(lang)}
          items={[
            saasWhatYouGetItems0(lang),
            saasWhatYouGetItems1(lang),
            saasWhatYouGetItems2(lang)
          ]}
          image="/images/services/tdd/what-you-get.svg"
        />
      </div>
    </section>
  );
}

function WhyUs({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="flex w-full flex-wrap items-center justify-center bg-white px-4 py-20 text-center md:px-20 xl:px-0">
      <div className="xxl:max-w-7xl mx-auto w-full max-w-6xl">
        <ServiceCard
          title={saasWhyUsHeading(lang)}
          desc={saasWhyUsDesc(lang)}
          items={[
            saasWhyUsReasons0(lang),
            saasWhyUsReasons1(lang),
            saasWhyUsReasons2(lang)
          ]}
          image="/images/services/tdd/why-us.svg"
        />
      </div>
    </section>
  );
}

function SaasCTA({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="flex w-full flex-wrap items-center justify-center bg-white px-4 pb-20 text-center md:px-20 xl:px-0">
      <div className="xxl:max-w-7xl mx-auto w-full max-w-6xl">
        <ServicesCTA
          lang={lang}
          heading={saasCtaHeading(lang)}
          desc={saasCtaDesc(lang)}
        />
      </div>
    </section>
  );
}
