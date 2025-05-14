import { Button } from "@/components/ui/button";
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
  reverse?: boolean;
  seeMoreText?: string;
  isBorderBottom?: boolean;
  lang?: SupportedLanguage;
}

export function ServiceCard({
  title,
  text,
  desc,
  items,
  image,
  icon,
  reverse,
  url,
  isBorderBottom = false,
  lang
}: ServiceCardProps) {
  return (
    <section
      className={`mb-14 flex flex-col gap-6 ${
        isBorderBottom ? "border-b border-gray-200 pb-7 md:pb-14" : ""
      } md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center`}>
      <div className="relative w-full md:w-1/2">
        <Image
          src={image}
          alt={title}
          className="h-auto w-full rounded-[20px]"
          width={660}
          height={400}
        />
        {icon && (
          <div className="absolute -bottom-1 left-1 rounded-md">
            <Image src={icon} alt={`${title} icon`} width={80} height={80} />
          </div>
        )}
      </div>

      <div className="w-full md:w-1/2">
        <div className="text-left">
          <h3 className="text-hyperjump-black mb-4 text-[28px] font-medium md:text-4xl">
            {title}
          </h3>
          <p className="mb-4 text-lg text-gray-700">{text}</p>
          <p className="mb-6 inline-block border-b-2 border-gray-200 text-lg text-gray-700">
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
        <div className="mt-8 md:text-left">
          {lang && url && (
            <Button
              asChild
              size="lg"
              className="bg-hyperjump-blue hover:bg-hyperjump-blue/90 w-full text-base font-semibold text-white md:w-44">
              <Link href={url}>{servicesSeeMore(lang)}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
