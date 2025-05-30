"use client";

import Image from "next/image";
import Link from "next/link";

import GridItemsContainer, {
  GridItemsTitle
} from "@/app/components/grid-items";
import { Button } from "@/components/ui/button";
import data from "@/data.json";
import {
  mainOpenInGoogleMaps,
  mainOurLocation
} from "@/locales/.generated/server";
import type { SupportedLanguage } from "@/locales/.generated/types";

type LocationProps = { lang: SupportedLanguage };

export function Location({ lang }: LocationProps) {
  const { address, duns, email, imageUrl, mapsUrl, title } = data.location;

  return (
    <GridItemsContainer>
      <GridItemsTitle title={mainOurLocation(lang)} layout="vertical" />
      <div className="mb-6 mt-8 grid w-full grid-cols-1 overflow-hidden rounded shadow-lg lg:grid-cols-4">
        <div className="relative col-span-1 overflow-hidden p-6 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/swatch.svg"
              alt="Location background"
              width={1440}
              height={308}
              className="pointer-events-none h-full select-none object-cover"
              style={{
                background:
                  "linear-gradient(134.7deg, #5954DA 3.43%, #0B0B0D 48.93%)"
              }}
            />
          </div>
          <div className="relative z-20">
            <h2 className="mb-4 text-lg font-bold">{title}</h2>
            <div className="mb-2 text-sm leading-relaxed">
              {address.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <p className="mb-2 mt-4 text-sm">
              Email:{" "}
              <a
                href={`mailto:${email}`}
                className="transition-colors hover:text-hyperjump-blue">
                {email}
              </a>
            </p>
            <p className="mb-4 text-sm">D&B D-U-N-S: {duns}</p>
            <Button asChild variant="outline" className="bg-transparent">
              <Link href={mapsUrl} target="_blank" rel="noopener noreferrer">
                {mainOpenInGoogleMaps(lang)}
              </Link>
            </Button>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-3">
          <Image
            src={imageUrl}
            alt={title}
            width={1072}
            height={500}
            className="h-[300px] w-full object-cover object-right lg:h-[500px] lg:object-center"
          />
        </div>
      </div>
    </GridItemsContainer>
  );
}
