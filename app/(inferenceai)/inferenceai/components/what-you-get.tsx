import Image from "next/image";
import data from "../inferenceai-data.json";
import { GridItemsSection } from "./grid-items";

export default function WhatYouGet() {
  const { header, subheader, content } = data.whatYouGet;

  return (
    <GridItemsSection
      id="what-you-get"
      title={header}
      description={subheader}
      layout="vertical"
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 text-white bg-[#0A0713] pt-8">
        {content.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start justify-start gap-4 relative pl-6"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <Image src={item.icon} alt={item.title} width={32} height={32} />
            <p className="text-sm md:text-base text-white/90">{item.title}</p>
          </div>
        ))}
      </div>
    </GridItemsSection>
  );
}
