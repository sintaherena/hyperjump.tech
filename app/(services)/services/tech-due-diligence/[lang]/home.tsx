"use client";

import { SupportedLanguage } from "@/locales/.generated/types";
import {
  tddWhatIsTddHeading,
  tddWhatIsTddDesc,
  tddWhatIsTddHighlight,
  tddWhoIsItHeading,
  tddWhoIsItDesc,
  tddWhoIsItTarget0,
  tddWhoIsItTarget1,
  tddWhoIsItTarget2,
  tddWhatWeDeliverHeading,
  tddWhatWeDeliverDesc,
  tddHowItWorksHeading,
  tddHowItWorksDesc,
  tddWhatYouGetHeading,
  tddWhatYouGetDesc,
  tddWhatYouGetItems0,
  tddWhatYouGetItems1,
  tddWhatYouGetItems2,
  tddWhyUsHeading,
  tddWhyUsDesc,
  tddWhyUsReasons0,
  tddWhyUsReasons1,
  tddWhyUsReasons2,
  tddCtaHeading,
  tddCtaDesc,
  tddWhoIsItTarget3,
  tddWhatYouGetItems3
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
      <TddCTA lang={lang} />
    </>
  );
}

function About({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="bg-[#F6F8F9] py-8 md:py-16">
      <div className="text-hyperjump-black mx-auto flex w-full max-w-4xl flex-wrap items-center px-4 py-10 md:px-16 md:py-20 xl:px-0">
        <h2 className="mb-5 text-[34px] font-medium md:text-4xl">
          {tddWhatIsTddHeading(lang)}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: `
                <p class="mb-5 text-xl leading-relaxed">
                  ${tddWhatIsTddDesc(lang)}
                </p>
                <p class="text-xl leading-relaxed">
                  ${tddWhatIsTddHighlight(lang)}
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
            alt={tddWhoIsItHeading(lang)}
            className="h-auto w-full rounded-2xl"
            width={660}
            height={400}
          />
          <div className="absolute top-10 left-1/2 flex w-full -translate-x-1/2 items-center justify-center px-4">
            <Image
              className="h-auto w-2/3 xl:w-8/12"
              src="/images/services/tdd/who-is-it.png"
              alt={`${tddWhoIsItHeading(lang)} icon`}
              width={500}
              height={380}
            />
          </div>
        </div>

        <div className="w-full xl:mt-0 xl:w-1/2">
          <h3 className="text-hyperjump-black text-left text-[28px] font-medium md:mb-4 md:text-4xl">
            {tddWhoIsItHeading(lang)}
          </h3>
          <div
            className="mb-2 text-left text-lg text-gray-700"
            dangerouslySetInnerHTML={{
              __html: tddWhoIsItDesc(lang)
            }}
          />
          <ul
            className="list-none space-y-4 text-left text-base text-gray-700 md:text-lg [&_b]:mt-4 [&_b]:block"
            dangerouslySetInnerHTML={{
              __html: [
                tddWhoIsItTarget0(lang),
                tddWhoIsItTarget1(lang),
                tddWhoIsItTarget2(lang),
                tddWhoIsItTarget3(lang)
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
          {tddWhatWeDeliverHeading(lang)}
        </h2>
        <div
          className="text-hyperjump-gray mt-2 max-w-lg"
          dangerouslySetInnerHTML={{
            __html: tddWhatWeDeliverDesc(lang)
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
          {tddHowItWorksHeading(lang)}
        </h2>
        <div
          className="text-hyperjump-gray mt-2 mb-10 md:max-w-xl"
          dangerouslySetInnerHTML={{ __html: tddHowItWorksDesc(lang) }}
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
            src="/images/services/tdd/what-you-get.svg"
            alt={tddWhatYouGetHeading(lang)}
            className="h-auto w-full rounded-2xl"
            width={660}
            height={400}
          />
        </div>
        <div className="w-full xl:mt-0 xl:w-1/2">
          <h3 className="text-hyperjump-black text-left text-[28px] font-medium md:mb-4 md:text-4xl">
            {tddWhatYouGetHeading(lang)}
          </h3>
          <div
            className="mb-2 text-left text-lg text-gray-700"
            dangerouslySetInnerHTML={{
              __html: tddWhatYouGetDesc(lang)
            }}
          />

          <ul
            className="list-none space-y-4 text-left text-base text-gray-700 md:text-lg [&_b]:mt-4 [&_b]:block"
            dangerouslySetInnerHTML={{
              __html: [
                tddWhatYouGetItems0(lang),
                tddWhatYouGetItems1(lang),
                tddWhatYouGetItems2(lang),
                tddWhatYouGetItems3(lang)
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
            src="/images/services/tdd/why-us-bg.png"
            alt={tddWhoIsItHeading(lang)}
            className="h-auto w-full rounded-2xl"
            width={660}
            height={400}
          />
          <div className="absolute top-5 left-1/2 flex w-full -translate-x-1/2 items-center justify-center px-4">
            <Image
              className="h-auto w-2/3 xl:w-8/12"
              src="/images/services/tdd/why-us.svg"
              alt={`${tddWhoIsItHeading(lang)} icon`}
              width={500}
              height={380}
            />
          </div>
        </div>
        <div className="w-full xl:mt-0 xl:w-1/2">
          <h3 className="text-hyperjump-black text-left text-[28px] font-medium md:mb-4 md:text-4xl">
            {tddWhyUsHeading(lang)}
          </h3>
          <div
            className="mb-2 text-left text-lg text-gray-700"
            dangerouslySetInnerHTML={{ __html: tddWhyUsDesc(lang) }}
          />

          <ul
            className="list-none space-y-4 text-left text-base text-gray-700 md:text-lg [&_b]:mt-4 [&_b]:block"
            dangerouslySetInnerHTML={{
              __html: [
                tddWhyUsReasons0(lang),
                tddWhyUsReasons1(lang),
                `${tddWhyUsReasons2(lang)} 
               <div class="mt-2 flex flex-wrap flex-row gap-5">
                <img src="/images/services/tdd/clients/btn.svg" alt="btn" class="h-6 w-auto inline pr-2 border-r border-gray-300 object-contain" />
                <img src="/images/services/tdd/clients/my-republic.svg" alt="my-republic" class="h-6 w-auto inline pr-2 border-r border-gray-300 object-contain" />
                <img src="/images/services/tdd/clients/smdv.svg" alt="smdv" class="h-6 w-auto inline pr-2 border-r border-gray-300 object-contain" />
                <img src="/images/services/tdd/clients/trimegah.svg" alt="trimegah" class="h-6 w-auto inline pr-2 border-r border-gray-300 object-contain" />
                <img src="/images/services/tdd/clients/bali-united.svg" alt="bali-united" class="h-6 w-auto inline pr-2 border-r border-gray-300 object-contain" />
              </div>
              `
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

function TddCTA({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="flex w-full flex-wrap items-center justify-center bg-white px-4 text-center md:px-20 xl:px-0">
      <ServicesCTA
        lang={lang}
        heading={tddCtaHeading(lang)}
        desc={tddCtaDesc(lang)}
        className="xxl:max-w-7xl mx-auto w-full max-w-6xl"
      />
    </section>
  );
}
