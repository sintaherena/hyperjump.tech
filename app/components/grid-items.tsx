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
import { Children, isValidElement } from "react";

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
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        {title}
      </h1>
    );
  }

  return (
    <div
      className={cn(
        "w-full pt-4 pb-12 bg-white",
        isHorizontal
          ? "flex flex-wrap justify-between gap-4"
          : "flex flex-col md:items-center md:text-center"
      )}
    >
      <h2
        className={cn(
          "text-4xl font-medium text-slate-950",
          isHorizontal ? "mb-0 text-left" : "mb-6"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-gray-600 text-base md:text-lg",
          isHorizontal
            ? "text-left max-w-xl"
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
};

export function GridItems({
  items,
  columns = {
    base: 1,
    md: 2,
    xl: 3,
  },
}: {
  items: Item[];
  columns?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}) {
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
        const { image, title, description, url, category } = item;

        return (
          <Card key={idx} className="flex flex-col overflow-hidden">
            {image ? (
              <div className="relative w-full aspect-[16/9]">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
            ) : null}

            <CardHeader>
              {category && (
                <p className="text-sm text-muted-foreground">{category}</p>
              )}
              {url ? (
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <CardTitle>{title}</CardTitle>
                </Link>
              ) : (
                <CardTitle>{title}</CardTitle>
              )}
            </CardHeader>

            <CardContent className="flex-1 flex flex-col gap-4">
              <CardDescription>{description}</CardDescription>

              {url && (
                <div className="flex justify-center gap-4 flex-wrap">
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
                </div>
              )}
            </CardContent>
          </Card>
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
    "transition-all duration-200 ease-in-out transform hover:shadow-md hover:scale-[1.02]",
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
    <div className="w-full my-4 flex items-center justify-center">
      <Button variant="ghost" className={customClass} asChild>
        <Link href={href} target="_blank" rel="noreferrer noopener">
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
    <section id={id} className="bg-white py-5 md:py-7">
      <div className="mx-auto flex flex-wrap px-8 md:px-20 justify-center items-center">
        {title}
        <div className="mb-8 mt-3 md:mb-9 md:mt-4">{body || others}</div>
        {more}
      </div>
    </section>
  );
}
