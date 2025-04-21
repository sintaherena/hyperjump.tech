import Image from "next/image";
import data from "../inferenceai-data.json";
import { ScheduleConsultationButton } from "./grid-items";

export default function CTASection() {
  const { header, subheader, background } = data.cta;
  
  return (
    <section className="w-full px-4 py-5 md:py-8">
      <div className="custom-glow-border relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-inferenceai-ai-indogo p-6 text-center md:p-10">
        <div className="absolute inset-0 z-0">
          <Image
            src={background}
            alt="Background"
            fill
            className="translate-y-16 scale-125 object-cover object-center md:translate-y-8"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-20 space-y-4 text-white md:space-y-6">
          <h2 className="bg-gradient-to-b from-white to-[#0C1711] bg-clip-text text-center text-2xl font-semibold leading-[120%] tracking-[-0.02em] text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] md:text-[48px]">
            {header}
          </h2>
          <p className="mx-auto max-w-xl text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
            {subheader}
          </p>
          <ScheduleConsultationButton />
        </div>
      </div>
    </section>
  );
}
