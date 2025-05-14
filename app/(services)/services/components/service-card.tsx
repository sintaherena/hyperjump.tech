import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { servicesSeeMore } from "@/locales/.generated/server";
import { SupportedLanguage } from "@/locales/.generated/types";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  text?: string;
  desc?: string;
  items?: string[];
  image: string;
  icon?: string;
  url?: string;
  isReverse?: boolean;
  seeMoreText?: string;
  isBorderBottom?: boolean;
  lang?: SupportedLanguage;
  isUnderline?: boolean;
}

export function ServiceCard({
  title,
  text,
  desc,
  items,
  image,
  icon,
  isReverse = false,
  url,
  isBorderBottom = false,
  lang,
  isUnderline = false
}: ServiceCardProps) {
  return (
    <section
      className={`flex flex-col gap-6 ${
        isBorderBottom ? "border-b border-gray-200 pb-7 md:pb-14" : ""
      } xl:flex-row ${isReverse ? "md:flex-row-reverse" : ""} items-center`}>
      <div className="relative w-full xl:w-1/2">
        <Image
          src={image}
          alt={title}
          className="h-auto w-full rounded-2xl"
          width={660}
          height={400}
        />
        {icon && (
          <div className="absolute -bottom-1 left-1 rounded-md">
            <Image
              className="h-10 w-10 md:h-20 md:w-20"
              src={icon}
              alt={`${title} icon`}
              width={80}
              height={80}
            />
          </div>
        )}
      </div>

      <div className="w-full xl:w-1/2">
        <div className="text-left">
          <h3 className="text-hyperjump-black mb-4 text-[28px] font-medium md:text-4xl">
            {title}
          </h3>
          <p className="mb-4 text-lg text-gray-700">{text}</p>
          <p
            className={cn(
              isUnderline
                ? "mb-6 text-lg text-gray-700 underline"
                : "mb-6 text-lg text-gray-700"
            )}>
            {desc}
          </p>
        </div>

        <ul
          className="list-none space-y-4 text-left text-base text-gray-700 md:text-lg [&_b]:mt-4 [&_b]:block"
          dangerouslySetInnerHTML={{
            __html:
              items
                ?.map(
                  (point) =>
                    `<li class="flex items-center gap-2"><img src="/images/checklist.svg" width="24" height="24" alt="icon" /><div>${point}</div></li>`
                )
                .join("") || ""
          }}
        />

        {lang && url && (
          <div className="mt-8 md:text-left">
            <Button
              asChild
              size="lg"
              className="bg-hyperjump-blue hover:bg-hyperjump-blue/90 w-full text-base font-semibold text-white md:w-44">
              <Link href={url}>{servicesSeeMore(lang)}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
