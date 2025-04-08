import Image from "next/image";
import { cn } from "@/lib/utils";
import data from "@/data.json";

export const PartnersList = () => {
  return (
    <div className="relative py-4">
      <div className="flex flex-wrap justify-center gap-6">
        {data.partners.map((partner, index) => (
          <div
            key={index}
            className="relative w-24 h-12 md:w-28 md:h-14 flex items-center justify-center"
          >
            <Image
              src={partner}
              alt={`Partner ${index + 1}`}
              className={cn(
                "object-contain",
                "grayscale opacity-60 hover:opacity-100 transition"
              )}
              fill
              sizes="112px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
