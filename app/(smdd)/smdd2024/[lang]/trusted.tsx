/* eslint-disable @next/next/no-img-element */
import { andManyMore, trustedBy } from "@/locales/.generated/server";
import { SupportedLanguage } from "@/locales/.generated/types";

export default function TrustedBy({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="bg-white w-full pt-4 sm:pt-0 xl:pt-16 px-4">
      <div className="bg-white w-full pt-4 sm:pt-0 xl:pt-16 px-4">
        <div className="w-full max-w-7xl mx-auto text-black container">
          <h1 className="my-4 xl:text-5xl text-2xl font-bold leading-tight mb-8">
            {trustedBy(lang)}
          </h1>
          <div className="grid grid-cols-3 xl:grid-cols-6 w-full items-center text-center justify-center gap-4 mb-8">
            <div className="flex items-center justify-center">
              <img
                src="/images/smdd/1engage.png"
                alt="1engage"
                className="w-auto h-12 object-contain self-center filter grayscale hover:grayscale-0 transition-all duration-150 py-2 px-4"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/smdd/amman.png"
                alt="AMMAN"
                className="w-auto h-12 object-contain self-center filter grayscale hover:grayscale-0 transition-all duration-150 py-2 px-4"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/smdd/aruna.png"
                alt="Aruna"
                className="w-auto h-12 object-contain self-center filter grayscale hover:grayscale-0 transition-all duration-150 py-2 px-4"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/smdd/ausvet.svg"
                alt="Ausvet"
                className="w-auto h-12 object-contain self-center filter grayscale hover:grayscale-0 transition-all duration-150 py-2 px-4"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/smdd/btn.jpg"
                alt="Bank BTN"
                className="w-auto h-12 object-contain self-center filter grayscale hover:grayscale-0 transition-all duration-150 py-2 px-4"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/smdd/idn-media.png"
                alt="IDN Media"
                className="w-auto h-12 object-contain self-center filter grayscale hover:grayscale-0 transition-all duration-150 py-2 px-4"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/smdd/ismaya.png"
                alt="Ismaya"
                className="w-auto h-12 object-contain self-center filter grayscale hover:grayscale-0 transition-all duration-150 py-2 px-4"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/smdd/myrep.webp"
                alt="MyRepublic"
                className="w-auto h-12 object-contain self-center filter grayscale hover:grayscale-0 transition-all duration-150 py-2 px-4"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/smdd/prakerja.png"
                alt="Prakerja"
                className="w-auto h-12 object-contain self-center filter grayscale hover:grayscale-0 transition-all duration-150 py-2 px-4"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/smdd/sdn.png"
                alt="SDN Distribution"
                className="w-auto h-12 object-contain self-center filter grayscale hover:grayscale-0 transition-all duration-150 py-2 px-4"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/smdd/smdv.png"
                alt="SMDV"
                className="w-auto h-12 object-contain self-center filter grayscale hover:grayscale-0 transition-all duration-150 py-2 px-4"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/smdd/trimegah.svg"
                alt="Trimegah"
                className="w-auto h-12 object-contain self-center filter grayscale hover:grayscale-0 transition-all duration-150 py-2 px-4"
              />
            </div>
          </div>
          <p className="text-center text-gray-300 mb-4">{andManyMore(lang)}</p>
        </div>
      </div>
    </section>
  );
}
