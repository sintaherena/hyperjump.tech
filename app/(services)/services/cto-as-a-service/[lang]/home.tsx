"use client";

import { SupportedLanguage } from "@/locales/.generated/types";
import {
  ctoaasWhatIsCtoaasHeading,
  ctoaasWhatIsCtoaasDesc,
  ctoaasWhatIsCtoaasHighlight,
  ctoaasWhoIsItHeading,
  ctoaasWhoIsItDesc,
  ctoaasWhoIsItTarget0,
  ctoaasWhoIsItTarget1,
  ctoaasWhoIsItTarget2,
  ctoaasWhatWeDeliverHeading,
  ctoaasWhatWeDeliverDesc,
  ctoaasHowItWorksHeading,
  ctoaasHowItWorksDesc,
  ctoaasWhatYouGetHeading,
  ctoaasWhatYouGetDesc,
  ctoaasWhatYouGetItems0,
  ctoaasWhatYouGetItems1,
  ctoaasWhatYouGetItems2,
  ctoaasWhyUsHeading,
  ctoaasWhyUsDesc,
  ctoaasWhyUsReasons0,
  ctoaasWhyUsReasons1,
  ctoaasWhyUsReasons2,
  ctoaasCtaHeading,
  ctoaasCtaDesc,
  ctoaasWhoIsItTarget3,
  ctoaasWhatYouGetItems3,
  ctoaasWhyUsReasons3
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
      <CtoaasCTA lang={lang} />
    </>
  );
}

function About({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="bg-[#F6F8F9] py-16">
      <div className="text-hyperjump-black mx-auto flex w-full max-w-4xl flex-wrap items-center px-4 py-10 md:px-16 md:py-20 xl:px-0">
        <h2 className="mb-5 text-[34px] font-medium md:text-4xl">
          {ctoaasWhatIsCtoaasHeading(lang)}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: `
                <p class="mb-5 text-xl leading-relaxed">
                  ${ctoaasWhatIsCtoaasDesc(lang)}
                </p>
                <p class="text-xl leading-relaxed">
                  ${ctoaasWhatIsCtoaasHighlight(lang)}
                </p>
              `
          }}
        />
      </div>
    </section>
  );
}

function WhoIsIt({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="flex w-full flex-wrap items-center justify-center bg-white px-4 pt-20 text-center md:px-20 xl:px-0">
      <div className="xxl:max-w-7xl mx-auto w-full max-w-6xl">
        <ServiceCard
          title={ctoaasWhoIsItHeading(lang)}
          desc={ctoaasWhoIsItDesc(lang)}
          items={[
            ctoaasWhoIsItTarget0(lang),
            ctoaasWhoIsItTarget1(lang),
            ctoaasWhoIsItTarget2(lang),
            ctoaasWhoIsItTarget3(lang)
          ]}
          image="/images/services/background.jpg"
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
          {ctoaasWhatWeDeliverHeading(lang)}
        </h2>
        <p className="text-hyperjump-gray mt-2 max-w-lg">
          {ctoaasWhatWeDeliverDesc(lang)}
        </p>
        <div className="mt-6 grid w-full grid-cols-1 gap-6 md:mt-12 md:grid-cols-3">
          {whatWeDeliverData(lang).map((service, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white p-6 text-left shadow-md transition hover:shadow-lg">
              <Avatar className="mb-3 flex h-14 w-14 items-center justify-center rounded-md border p-2 shadow-[0px_4px_14px_0px_#3276F533] md:mb-6">
                <AvatarImage
                  className="h-7 w-7"
                  src={service.icon as string}
                  alt={service.title}
                />
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
          {ctoaasHowItWorksHeading(lang)}
        </h2>
        <p className="text-hyperjump-gray mt-2 mb-10 xl:max-w-2xl">
          {ctoaasHowItWorksDesc(lang)}
        </p>
        <div className="relative space-y-10 xl:max-w-lg">
          <div className="bg-dashed absolute top-6 bottom-6 left-5 z-0 w-px bg-gray-300" />
          {HowItsWorksData(lang).map((step, index) => (
            <div key={index} className="relative z-10 flex items-start">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white p-2 shadow">
                <Image
                  width={28}
                  height={28}
                  src={step.icon}
                  alt=""
                  className="h-7 w-7"
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
          title={ctoaasWhatYouGetHeading(lang)}
          desc={ctoaasWhatYouGetDesc(lang)}
          items={[
            ctoaasWhatYouGetItems0(lang),
            ctoaasWhatYouGetItems1(lang),
            ctoaasWhatYouGetItems2(lang),
            ctoaasWhatYouGetItems3(lang)
          ]}
          image="/images/services/ctoaas/what-you-get.svg"
          reverse
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
          title={ctoaasWhyUsHeading(lang)}
          desc={ctoaasWhyUsDesc(lang)}
          items={[
            ctoaasWhyUsReasons0(lang),
            ctoaasWhyUsReasons1(lang),
            ctoaasWhyUsReasons2(lang),
            ctoaasWhyUsReasons3(lang)
          ]}
          image="/images/services/ctoaas/why-us.png"
        />
      </div>
    </section>
  );
}

function CtoaasCTA({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="flex w-full flex-wrap items-center justify-center bg-white px-4 pb-20 text-center md:px-20 xl:px-0">
      <div className="xxl:max-w-7xl mx-auto w-full max-w-6xl">
        <ServicesCTA
          lang={lang}
          heading={ctoaasCtaHeading(lang)}
          desc={ctoaasCtaDesc(lang)}
        />
      </div>
    </section>
  );
}
