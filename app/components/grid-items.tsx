"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Children, isValidElement, useEffect, useRef, useState } from "react";

type GridItemsTitleProps = {
  title: string;
  description?: string;
  layout?: "horizontal" | "vertical";
};

export function GridItemsTitle({
  title,
  description,
  layout = "horizontal",
}: GridItemsTitleProps) {
  const isHorizontal = layout === "horizontal";

  if (!description) {
    return (
      <h1 className="w-full my-2 text-4xl font-menium leading-tight text-center text-hyperjump-black">
        {title}
      </h1>
    );
  }

  return (
    <div
      className={cn(
        "w-full pt-4 pb-7 bg-white",
        isHorizontal
          ? "flex flex-wrap justify-between gap-4"
          : "flex flex-col md:items-center md:text-center"
      )}
    >
      <h2
        className={cn(
          "text-4xl font-medium text-hyperjump-black",
          isHorizontal ? "mb-0 text-left" : "mb-6"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-hyperjump-gray text-base md:text-lg",
          isHorizontal
            ? "text-left max-w-lg"
            : "w-full md:w-2/3 xl:w-3/4 text-left md:text-center"
        )}
      >
        {description}
      </p>
    </div>
  );
}

type Item = {
  image?: string;
  title: string;
  description: string;
  url?: string;
  category?: string;
  icon?: string;
};

// export function GridItems({
//   items,
//   columns = {
//     base: 1,
//     md: 2,
//     xl: 3,
//   },
// }: {
//   items: Item[];
//   columns?: {
//     base?: number;
//     sm?: number;
//     md?: number;
//     lg?: number;
//     xl?: number;
//   };
// }) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isOverflowing, setIsOverflowing] = useState(false);
//   const textRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const element = textRef.current;
//     if (element) {
//       setIsOverflowing(element.scrollHeight > element.clientHeight);
//     }
//   }, [items[0].description]);

//   const columnClassMap = (prefix: string, count?: number) => {
//     if (!count) return "";
//     return `${prefix}grid-cols-${count}`;
//   };

//   const columnClasses = [
//     columnClassMap("", columns.base ?? 1),
//     columnClassMap("sm:", columns.sm),
//     columnClassMap("md:", columns.md),
//     columnClassMap("lg:", columns.lg),
//     columnClassMap("xl:", columns.xl),
//   ]
//     .filter(Boolean)
//     .join(" ");

//   return (
//     <div className={`grid gap-6 ${columnClasses}`}>
//       {items.map((item, idx) => {
//         const { image, title, description, url, category, icon } = item;

//         return (
//           <Card key={idx} className="flex flex-col overflow-hidden">
//             {image ? (
//               <div className="relative w-full aspect-[16/9]">
//                 <Image src={image} alt={title} fill className="object-cover" />
//               </div>
//             ) : null}

//             <CardHeader>
//               {icon ? (
//                 <Avatar className="mb-6 w-14 h-14">
//                   <AvatarImage className="w-14 h-14" src={icon} alt={title} />
//                   <AvatarFallback className="w-14 h-14">{title}</AvatarFallback>
//                 </Avatar>
//               ) : null}
//               {category && (
//                 <p className="text-hyperjump-black font-semibold w-28 rounded-3xl text-center bg-[#020F151A] px-2 py-1.5 text-sm">{category}</p>
//               )}
//               {url ? (
//                 <Link
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:underline"
//                 >
//                   <CardTitle className="text-xl font-semibold text-hyperjump-black">
//                     {title}
//                   </CardTitle>
//                 </Link>
//               ) : (
//                 <CardTitle className="text-xl font-semibold text-hyperjump-black">
//                   {title}
//                 </CardTitle>
//               )}
//             </CardHeader>

//             <CardContent className="flex-1 -mt-3 flex flex-col gap-4">
//               <div>
//                 <CardDescription
//                   ref={textRef}
//                   className={cn(
//                     "transition-all duration-300",
//                     !isExpanded ? "line-clamp-3" : ""
//                   )}
//                 >
//                   {description}
//                 </CardDescription>

//                 {isOverflowing && (
//                   <button
//                     onClick={() => setIsExpanded((prev) => !prev)}
//                     className="mt-1 text-sm text-blue-500 hover:underline"
//                   >
//                     {isExpanded ? "Show Less" : "Read More"}
//                   </button>
//                 )}
//               </div>
//               {url && (
//                 <div className="flex justify-center gap-4 flex-wrap">
//                   <a
//                     className="github-button"
//                     href={url}
//                     data-icon="octicon-star"
//                     data-size="large"
//                     data-show-count="true"
//                     aria-label="Star hyperjumptech/monika on GitHub"
//                   >
//                     Star
//                   </a>
//                   <a
//                     className="github-button"
//                     href={`${url}/fork`}
//                     data-icon="octicon-repo-forked"
//                     data-size="large"
//                     data-show-count="true"
//                     aria-label="Fork hyperjumptech/monika on GitHub"
//                   >
//                     Fork
//                   </a>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         );
//       })}
//     </div>
//   );
// }

export function GridItems({
  items,
  columns = {
    base: 1,
    md: 2,
    xl: 3,
  },
  withCard = true,
}: {
  items: Item[];
  columns?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  withCard?: boolean;
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [overflowMap, setOverflowMap] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const newOverflowMap: Record<number, boolean> = {};
    textRefs.current.forEach((el, index) => {
      if (el) {
        newOverflowMap[index] = el.scrollHeight > el.clientHeight;
      }
    });
    setOverflowMap(newOverflowMap);
  }, [items]);

  const columnClassMap = (prefix: string, count?: number) => {
    if (!count) return "";
    return `${prefix}grid-cols-${count}`;
  };

  const columnClasses = [
    columnClassMap("", columns.base ?? 1),
    columnClassMap("sm:", columns.sm),
    columnClassMap("md:", columns.md),
    columnClassMap("lg:", columns.lg),
    columnClassMap("xl:", columns.xl),
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`grid gap-6 ${columnClasses}`}>
      {items.map((item, idx) => {
        const { image, title, description, url, category, icon } = item;

        const CardWrapper = withCard
          ? Card
          : ({ children }: { children: React.ReactNode }) => (
              <div>{children}</div>
            );

        return (
          <CardWrapper
            key={idx}
            className={withCard ? "flex flex-col overflow-hidden" : undefined}
          >
            {image ? (
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ) : null}

            <CardHeader>
              {icon ? (
                <Avatar className="mb-6 w-14 h-14">
                  <AvatarImage className="w-14 h-14" src={icon} alt={title} />
                  <AvatarFallback className="w-14 h-14">{title}</AvatarFallback>
                </Avatar>
              ) : null}
              {category && (
                <p className="text-hyperjump-black font-semibold w-28 rounded-3xl text-center bg-[#020F151A] px-2 py-1.5 text-sm">
                  {category}
                </p>
              )}
              {url ? (
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <CardTitle className="text-xl font-semibold text-hyperjump-black">
                    {title}
                  </CardTitle>
                </Link>
              ) : (
                <CardTitle className="text-xl font-semibold text-hyperjump-black">
                  {title}
                </CardTitle>
              )}
            </CardHeader>

            <CardContent className="flex-1 -mt-3 flex flex-col gap-4">
              <div>
                <CardDescription
                  ref={(el) => (textRefs.current[idx] = el)}
                  className={cn(
                    "transition-all duration-300",
                    expandedIndex !== idx ? "line-clamp-3" : ""
                  )}
                >
                  {description}
                </CardDescription>

                {overflowMap[idx] && (
                  <button
                    onClick={() =>
                      setExpandedIndex((prev) => (prev === idx ? null : idx))
                    }
                    className="mt-1 text-sm text-blue-500 hover:underline"
                  >
                    {expandedIndex === idx ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>
              {url && (
                // <div className="flex justify-center gap-4 flex-wrap">
                //   <Link
                //     href={url}
                //     target="_blank"
                //     rel="noopener noreferrer"
                //     className="inline-flex items-center gap-1.5 border border-gray-300 rounded-md px-4 py-2 text-blue-600 text-sm hover:bg-gray-100 transition"
                //   >
                //     <svg
                //       xmlns="http://www.w3.org/2000/svg"
                //       fill="currentColor"
                //       viewBox="0 0 24 24"
                //       className="w-4 h-4"
                //     >
                //       <path d="M12 .587l3.668 7.568L24 9.75l-6 5.889 1.42 8.29L12 19.771 4.58 23.929 6 15.639 0 9.75l8.332-1.595z" />
                //     </svg>
                //     Star (61)
                //   </Link>
                //   <Link
                //     href={`${url}/fork`}
                //     target="_blank"
                //     rel="noopener noreferrer"
                //     className="inline-flex items-center gap-1.5 border border-gray-300 rounded-md px-4 py-2 text-blue-600 text-sm hover:bg-gray-100 transition"
                //   >
                //     <svg
                //       xmlns="http://www.w3.org/2000/svg"
                //       fill="none"
                //       viewBox="0 0 24 24"
                //       stroke="currentColor"
                //       className="w-4 h-4"
                //     >
                //       <path
                //         strokeLinecap="round"
                //         strokeLinejoin="round"
                //         strokeWidth={2}
                //         d="M6 3v12a3 3 0 006 0V3m0 0L9 6m3-3l3 3"
                //       />
                //     </svg>
                //     Fork (15)
                //   </Link>
                // </div>
                <div className="flex justify-center gap-4 flex-wrap">
                  <span className="mx-2">
                    <a
                      className="github-button"
                      href={url}
                      data-icon="octicon-star"
                      data-size="large"
                      data-show-count="true"
                      aria-label="Star hyperjumptech/monika on GitHub"
                    >
                      Star
                    </a>
                  </span>

                  <span className="mx-2">
                    <a
                      className="github-button"
                      href={`${url}/fork`}
                      data-icon="octicon-repo-forked"
                      data-size="large"
                      data-show-count="true"
                      aria-label="Fork hyperjumptech/monika on GitHub"
                    >
                      Fork
                    </a>
                  </span>
                </div>
              )}
            </CardContent>
          </CardWrapper>
        );
      })}
    </div>
  );
}

type GridItemsMoreButtonProps = {
  href: string;
  text?: string;
  variant?: "default" | "outline" | "link";
};

export const GridItemsMoreButton = ({
  href,
  text,
  variant = "default",
}: GridItemsMoreButtonProps) => {
  const customClass = cn(
    "py-3 mt-10 px-5 transition-all duration-200 ease-in-out transform hover:shadow-md hover:scale-[1.02]",
    {
      // Primary (default)
      "bg-hyperjump-blue text-white hover:bg-hyperjump-blue/90 hover:text-white":
        variant === "default",

      // Outline
      "border border-hyperjump-blue text-hyperjump-blue hover:bg-hyperjump-blue/10 hover:text-hyperjump-blue":
        variant === "outline",

      // Link
      "text-hyperjump-blue hover:underline hover:text-hyperjump-blue":
        variant === "link",
    }
  );

  return (
    <div className="w-full flex items-center justify-center">
      <Button variant="ghost" className={customClass} asChild>
        <Link
          className="font-semibold"
          href={href}
          target="_blank"
          rel="noreferrer noopener"
        >
          {text}
        </Link>
      </Button>
    </div>
  );
};

export default function GridItemsContainer({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  const childrenArray = Children.toArray(children);

  const title = childrenArray.find(
    (child) => isValidElement(child) && child.type === GridItemsTitle
  );

  const body = childrenArray.find(
    (child) => isValidElement(child) && child.type === GridItems
  );

  const more = childrenArray.find(
    (child) => isValidElement(child) && child.type === GridItemsMoreButton
  );

  const others = childrenArray.filter(
    (child) => child !== title && child !== body && child !== more
  );

  return (
    <section id={id} className="bg-white">
      <div className="mx-auto flex py-5 md:py-8 px-8 md:px-20  flex-wrap justify-center items-center">
        {title}
        <div>{body || others}</div>
        {more}
      </div>
    </section>
  );
}
