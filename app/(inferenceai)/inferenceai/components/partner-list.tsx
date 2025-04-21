import Image from "next/image";
import { cn } from "@/lib/utils";
import data from "../inferenceai-data.json";

export default function PartnersList() {
  const { header, logos } = data.partners;

  return (
    <section className="relative w-full py-16 overflow-hidden bg-[#050013]">
      <div className="relative px-4 md:px-20 z-10 mx-auto flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-y-8">
        <h2 className="text-white text-2xl xl:text-[32px] font-medium">
          {header}
        </h2>

        <div className="grid grid-cols-3 gap-4 md:gap-6 items-center justify-center md:justify-end">
          {logos.map((partner, index) => (
            <div key={index} className="flex w-auto items-center justify-start">
              <Image
                src={partner}
                alt={`Partner ${index + 1}`}
                height={36}
                width={120}
                className={cn(
                  "object-contain h-[30px] w-auto",
                  "grayscale opacity-60 hover:opacity-100 transition"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
