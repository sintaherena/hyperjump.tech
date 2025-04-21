"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import data from "@/data.json";
import { cn } from "@/lib/utils";

export function HeroCTAButton({ className }: { className?: string }) {
  const { gaEventName, label, link } = data.cta;

  return (
    <Button
      asChild
      variant="secondary"
      size="lg"
      className={cn(className, "font-semibold")}
      onClick={() => {
        sendGAEvent({
          event: gaEventName,
          category: "engagement",
          label: "Hero Banner CTA"
        });
      }}>
      <Link href={link} target="_blank" rel="noreferrer noopener">
        {label}
      </Link>
    </Button>
  );
}
