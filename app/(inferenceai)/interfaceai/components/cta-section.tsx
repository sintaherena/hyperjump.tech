import Image from "next/image";
import intefaceAIData from "../interfaceai-data.json";
import { ScheduleConsultationButton } from "./grid-items";

export default function CTASection() {
  const { header, subheader, background } = intefaceAIData.cta;
  return (
    <section className="py-5 md:py-8 px-4 md:px-20 mx-auto">
      <div className="custom-glow-border p-10 text-center bg-interface-ai-indogo rounded-3xl">
        <Image
          src={background}
          alt="Background"
          fill
          className="object-cover object-center scale-125 translate-y-16 md:translate-y-8 z-0"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 space-y-4 md:space-y-6 text-white">
          <h2 className="text-2xl md:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            {header}
          </h2>
          <p className="text-white/90 max-w-xl mx-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
            {subheader}
          </p>
          <ScheduleConsultationButton />
        </div>
      </div>
    </section>
  );
}
