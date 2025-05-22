"use client";

import { SupportedLanguage } from "@/locales/.generated/types";
import {
  erpWhatIsErpHeading,
  erpWhatIsErpDesc,
  erpWhatIsErpHighlight,
  erpWhoIsItHeading,
  erpWhoIsItDesc,
  erpWhoIsItTarget0,
  erpWhoIsItTarget1,
  erpWhoIsItTarget2,
  erpWhatWeDeliverHeading,
  erpWhatWeDeliverDesc,
  erpHowItWorksHeading,
  erpHowItWorksDesc,
  erpWhatYouGetHeading,
  erpWhatYouGetDesc,
  erpWhatYouGetItems0,
  erpWhatYouGetItems1,
  erpWhatYouGetItems2,
  erpWhyUsHeading,
  erpWhyUsDesc,
  erpWhyUsReasons0,
  erpWhyUsReasons1,
  erpWhyUsReasons2,
  erpCtaHeading,
  erpCtaDesc,
  erpWhoIsItTarget3,
  erpWhatYouGetItems3
} from "@/locales/.generated/server";
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
      <ErpCTA lang={lang} />
    </>
  );
}

function About({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="bg-[#F6F8F9] py-8 md:py-16">
      <div className="text-hyperjump-black mx-auto flex w-full max-w-4xl flex-wrap items-center px-4 py-10 md:px-16 md:py-20 xl:px-0">
        <h2 className="mb-5 text-[34px] font-medium md:text-4xl">
          {erpWhatIsErpHeading(lang)}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: `
                <p class="mb-5 text-xl leading-relaxed">
                  ${erpWhatIsErpDesc(lang)}
                </p>
                <p class="text-xl leading-relaxed">
                  ${erpWhatIsErpHighlight(lang)}
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
    <section className="flex bg-white px-4 py-8 md:px-20 md:py-16">
      <div className="xxl:max-w-7xl mx-auto flex w-full max-w-6xl flex-col items-center gap-6 md:flex-row">
        <div className="relative w-full xl:w-1/2">
          <Image
            src="/images/services/background.webp"
            alt={erpWhoIsItHeading(lang)}
            className="h-auto w-full rounded-2xl"
            width={660}
            height={400}
          />

          {/* Top-left card */}
          <div className="absolute top-5 left-5 md:top-10 md:left-10">
            <Image
              className="h-auto w-1/2 xl:w-8/12"
              src="/images/services/erp/who-is-it-1.svg"
              alt={`${erpWhoIsItHeading(lang)} icon`}
              width={300}
              height={150}
            />
          </div>

          {/* Bottom-right card */}
          <div className="absolute right-0 bottom-5 left-50 md:bottom-10 xl:-right-15">
            <Image
              className="h-auto w-5/6 xl:w-8/12"
              src="/images/services/erp/who-is-it-2.svg"
              alt={`${erpWhoIsItHeading(lang)} icon`}
              width={300}
              height={150}
            />
          </div>
        </div>

        <div className="w-full xl:mt-0 xl:w-1/2">
          <h3 className="text-hyperjump-black text-left text-[28px] font-medium md:mb-4 md:text-4xl">
            {erpWhoIsItHeading(lang)}
          </h3>
          <div
            className="mb-2 text-left text-lg text-gray-700"
            dangerouslySetInnerHTML={{
              __html: erpWhoIsItDesc(lang)
            }}
          />
          <ul
            className="list-none space-y-4 text-left text-base text-gray-700 md:text-lg [&_b]:mt-4 [&_b]:block"
            dangerouslySetInnerHTML={{
              __html: [
                erpWhoIsItTarget0(lang),
                erpWhoIsItTarget1(lang),
                erpWhoIsItTarget2(lang),
                erpWhoIsItTarget3(lang)
              ]
                .map(
                  (point) =>
                    `<li class="flex items-center gap-2"><img src="/images/checklist.svg" width="24" height="24" alt="icon" /><div>${point}</div></li>`
                )
                .join("")
            }}
          />
        </div>
      </div>
    </section>
  );
}

function WhatWeDeliver({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="bg-white py-16">
      <div className="text-hyperjump-black xxl:max-w-7xl mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 py-8 text-center md:px-20 md:py-16 xl:px-0">
        <h2 className="mb-5 text-[34px] font-medium md:text-4xl">
          {erpWhatWeDeliverHeading(lang)}
        </h2>
        <div
          className="text-hyperjump-gray mt-2 max-w-lg"
          dangerouslySetInnerHTML={{
            __html: erpWhatWeDeliverDesc(lang)
          }}
        />
        <div className="mt-6 grid w-full grid-cols-1 gap-6 md:mt-12 md:grid-cols-3 xl:grid-cols-3">
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
                className="text-hyperjump-gray list-outside list-disc space-y-1 pl-4 [&_b]:mt-4 [&_b]:block"
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
      <div className="text-hyperjump-black xxl:max-w-7xl mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center">
        <h2 className="mb-5 text-[34px] font-medium md:text-4xl">
          {erpHowItWorksHeading(lang)}
        </h2>
        <div
          className="text-hyperjump-gray mt-2 mb-10 md:max-w-xl"
          dangerouslySetInnerHTML={{ __html: erpHowItWorksDesc(lang) }}
        />
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
    <section className="flex bg-white px-4 py-8 md:px-20 md:py-16">
      <div className="xxl:max-w-7xl mx-auto flex w-full max-w-6xl flex-col items-center gap-6 md:flex-row-reverse">
        <div className="relative w-full xl:w-1/2">
          <Image
            src="/images/services/erp/what-you-get.svg"
            alt={erpWhatYouGetHeading(lang)}
            className="h-auto w-full rounded-2xl"
            width={660}
            height={400}
          />
        </div>
        <div className="w-full xl:mt-0 xl:w-1/2">
          <h3 className="text-hyperjump-black text-left text-[28px] font-medium md:mb-4 md:text-4xl">
            {erpWhatYouGetHeading(lang)}
          </h3>
          <div
            className="mb-2 text-left text-lg text-gray-700"
            dangerouslySetInnerHTML={{
              __html: erpWhatYouGetDesc(lang)
            }}
          />

          <ul
            className="list-none space-y-4 text-left text-base text-gray-700 md:text-lg [&_b]:mt-4 [&_b]:block"
            dangerouslySetInnerHTML={{
              __html: [
                erpWhatYouGetItems0(lang),
                erpWhatYouGetItems1(lang),
                erpWhatYouGetItems2(lang),
                erpWhatYouGetItems3(lang)
              ]
                .map(
                  (point) =>
                    `<li class="flex items-center gap-2"><img src="/images/checklist.svg" width="24" height="24" alt="icon" /><div>${point}</div></li>`
                )
                .join("")
            }}
          />
        </div>
      </div>
    </section>
  );
}

function WhyUs({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="flex bg-white px-4 py-8 md:px-20 md:py-16">
      <div className="xxl:max-w-7xl mx-auto flex w-full max-w-6xl flex-col items-center gap-6 md:flex-row">
        <div className="relative w-full xl:w-1/2">
          <Image
            src="/images/services/erp/why-us-bg.png"
            alt={erpWhoIsItHeading(lang)}
            className="h-auto w-full rounded-2xl"
            width={660}
            height={400}
          />
          <div className="absolute top-10 left-1/2 flex w-full -translate-x-1/2 items-center justify-center px-4">
            <Image
              className="h-auto w-2/3 xl:w-8/12"
              src="/images/services/erp/why-us.svg"
              alt={`${erpWhoIsItHeading(lang)} icon`}
              width={500}
              height={380}
            />
          </div>
        </div>
        <div className="w-full xl:mt-0 xl:w-1/2">
          <h3 className="text-hyperjump-black text-left text-[28px] font-medium md:mb-4 md:text-4xl">
            {erpWhyUsHeading(lang)}
          </h3>
          <div
            className="mb-2 text-left text-lg text-gray-700"
            dangerouslySetInnerHTML={{ __html: erpWhyUsDesc(lang) }}
          />

          <ul
            className="list-none space-y-4 text-left text-base text-gray-700 md:text-lg [&_b]:mt-4 [&_b]:block"
            dangerouslySetInnerHTML={{
              __html: [
                erpWhyUsReasons0(lang),
                erpWhyUsReasons1(lang),
                erpWhyUsReasons2(lang)
              ]
                .map(
                  (point) =>
                    `<li class="flex items-center gap-2"><img src="/images/checklist.svg" width="24" height="24" alt="icon" /><div>${point}</div></li>`
                )
                .join("")
            }}
          />
        </div>
      </div>
    </section>
  );
}

function ErpCTA({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="flex w-full flex-wrap items-center justify-center bg-white px-4 text-center md:px-20 xl:px-0">
      <ServicesCTA
        lang={lang}
        heading={erpCtaHeading(lang)}
        desc={erpCtaDesc(lang)}
        className="xxl:max-w-7xl mx-auto w-full max-w-6xl"
      />
    </section>
  );
}
