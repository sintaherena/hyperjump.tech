import Image from "next/image";
import data from "../interfaceai-data.json";
import { ScheduleConsultationButton } from "./grid-items";

export default function Hero() {
  const { header, subheader, image } = data.hero;

  return (
    <section className="relative h-[548px] bg-[#04040B] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Background"
          fill
          className="object-cover object-top scale-125"
        />
      </div>

      <article className="relative z-10 flex items-center justify-around flex-col h-full">
        <div className="text-center px-4 md:px-20">
          <h1 className="text-[60px] mt-28 leading-[120%] tracking-[-0.02em] font-semibold text-center bg-gradient-to-b from-white to-[#0C1711] bg-clip-text text-transparent font-figtree">
            {header}
          </h1>
          <p className="text-[#AFB0C3] text-base md:text-xl font-medium my-6 md:my-10">
            {subheader}
          </p>
          <ScheduleConsultationButton />
        </div>
      </article>
    </section>
  );
}
