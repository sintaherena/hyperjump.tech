"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import data from "../inferenceai-data.json";

export function HeroCTAButton() {
  const { gaEventName, label, link } = data.cta;

  return (
    <Button
      asChild
      variant="default"
      size="lg"
      className="btn-gradient-purple transform rounded-full text-white transition-all duration-200 ease-in-out hover:scale-[1.05] hover:shadow-md"
      onClick={() => {
        sendGAEvent({
          event: gaEventName,
          category: "engagement",
          label: "Hero Banner Inference AI"
        });
      }}>
      <Link href={link} target="_blank" rel="noreferrer noopener">
        {label}
      </Link>
    </Button>
  );
}
