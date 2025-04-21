"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
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
import { useEffect, useRef, useState } from "react";
import data from "../interfaceai-data.json";
import { motion } from "framer-motion";

type Item = {
  image?: string;
  title: string;
  description: string;
  url?: string;
  category?: string;
  icon?: string;
};

export function GridItems({
  items,
  columns = {
    base: 1,
    md: 2,
    xl: 3,
  },
  withCard = true,
  classNameCard,
  customBorderClass,
}: {
  items: Item[];
  classNameCard?: string;
  columns?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  withCard?: boolean;
  customBorderClass?: string;
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
            className={cn(
              `flex flex-col overflow-hidden rounded-2xl transition-colors duration-300 ease-in-out hover:bg-white/5 hover:shadow-md hover:shadow-white/10`,
              classNameCard,
              customBorderClass ?? "card-border-gradient"
            )}
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
                </Avatar>
              ) : null}
              {category && (
                <p className="text-white font-medium mb-2 w-28 rounded-3xl text-center bg-white/10 px-2 py-1.5 text-sm">
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
                  <CardTitle className="md:text-[22px] text-xl font-semibold text-white">
                    {title}
                  </CardTitle>
                </Link>
              ) : (
                <CardTitle className="md:text-[22px] text-xl font-semibold text-white">
                  {title}
                </CardTitle>
              )}
            </CardHeader>

            <CardContent className="flex flex-col justify-between flex-1 gap-4 -mt-3">
              <div>
                <CardDescription
                  ref={(el) => {
                    textRefs.current[idx] = el;
                  }}
                  className={cn(
                    "transition-all duration-300 text-[#CDCED8]",
                    expandedIndex !== idx ? "line-clamp-4" : ""
                  )}
                >
                  {description}
                </CardDescription>

                {overflowMap[idx] && (
                  <button
                    onClick={() =>
                      setExpandedIndex((prev) => (prev === idx ? null : idx))
                    }
                    className="mt-1 text-gray-600 hover:underline"
                  >
                    {expandedIndex === idx ? "See Less" : "See More"}
                  </button>
                )}
              </div>
            </CardContent>
          </CardWrapper>
        );
      })}
    </div>
  );
}

export const ScheduleConsultationButton = () => {
  const { cta } = data;

  return (
    <Button
      asChild
      variant="default"
      size="lg"
      className="transition-all rounded-full duration-200 ease-in-out transform hover:shadow-md hover:scale-[1.02] text-white"
      style={{
        border: "#6D5697",
        background: `radial-gradient(50% 50% at 50% 50%, #413AA3 0%, #332C95 100%), linear-gradient(177.61deg, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0.12) 98.17%)`,
      }}
    >
      <Link href={cta.link} className="py-4 px-7 text-lg font-semibold">
        {cta.label}
      </Link>
    </Button>
  );
};

type GridItemsSectionProps = {
  id?: string;
  className?: string;
  title: string;
  description?: string;
  layout?: "horizontal" | "vertical";
  descriptionStyle?: string;
  children?: React.ReactNode;
};

export const GridItemsSection = ({
  id,
  className = "",
  title,
  description,
  layout = "horizontal",
  descriptionStyle,
  children,
}: GridItemsSectionProps) => {
  const isHorizontal = layout === "horizontal";
  const hasBgClass = /\bbg-/.test(className);

  const finalClass = cn("scroll-mt-20", className);

  return (
    <section
      id={id}
      className={finalClass}
      style={
        !hasBgClass
          ? {
              background:
                "linear-gradient(0deg, #050013, #050013), linear-gradient(180deg, #1513374D 0%, #15133700 23.58%)",
            }
          : undefined
      }
    >
      <motion.div
        className="mx-auto flex py-5 md:py-8 px-4 md:px-20 flex-wrap justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {description ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={cn(
              "w-full",
              isHorizontal
                ? "flex flex-col md:flex-row flex-wrap justify-between gap-4"
                : "flex flex-col md:items-center"
            )}
          >
            <h2
              className={cn(
                "text-4xl md:text-[40px] font-medium leading-tight flex-1 text-white",
                isHorizontal ? "text-left" : "mb-4 md:text-center text-left"
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "text-[#AFB0C3] text-base md:text-lg flex-1",
                isHorizontal
                  ? "text-left max-w-lg"
                  : `w-full md:w-2/3 xl:w-3/4 text-left md:text-center ${descriptionStyle}`
              )}
            >
              {description}
            </p>
          </motion.div>
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="w-full text-4xl md:text-[40px] font-medium leading-tight text-center text-white"
          >
            {title}
          </motion.h1>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
};
