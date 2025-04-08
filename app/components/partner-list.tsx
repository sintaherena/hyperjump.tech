import Image from "next/image";
import { cn } from "@/lib/utils";
import data from "@/data.json";

export const PartnersList = () => {
  return (
    <div className="relative py-4">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {data.partners.map((partner, index) => (
          <div key={index} className="flexh-[36px] w-auto">
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
  );
};
