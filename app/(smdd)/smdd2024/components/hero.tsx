import { intro, talkWithUs } from "@/locales/.generated/server";
import { SupportedLanguage } from "@/locales/.generated/types";

export default function SmddHero({ lang }: { lang: SupportedLanguage }) {
  return (
    <div className="bg-[url('/images/smdd/bg.jpg')] bg-cover bg-center w-full h-full pt-16 px-4 relative">
      <div className="bg-black absolute inset-0 opacity-40 z-10"></div>
      <div className="w-full container mx-auto text-white my-8 relative z-40">
        <h1 className="mt-0 xl:my-4 xl:text-5xl text-2xl font-bold leading-tight mb-8">
          Hyperjump @ Sinarmas Digital Day
        </h1>
        <p className="mb-4 lg:mb-8 xl:text-lg w-full lg:w-2/3 xl:w-1/2">
          {intro(lang)}
        </p>
        <a
          href="#contact-form"
          type="button"
          className=" bg-white text-smdd-red px-4 py-2 rounded-full font-bold"
        >
          {talkWithUs(lang)}
        </a>
      </div>
    </div>
  );
}
