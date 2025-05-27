import { Metadata } from "next";
import TechDueDilligenceLangLayout from "./[lang]/layout";
import TechDueDilligencePage from "./[lang]/page";
import { defaultOpenGraph } from "@/lib/default-metadata";
import { data } from "./[lang]/data";

const { title, description } = data;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    ...defaultOpenGraph,
    title,
    description,
    url: `/services/tech-due-diligence`,
    siteName: title
  }
};

export default function NoLangTechDueDilligence() {
  return (
    <TechDueDilligenceLangLayout params={Promise.resolve({ lang: "en" })}>
      <TechDueDilligencePage params={Promise.resolve({ lang: "en" })} />
    </TechDueDilligenceLangLayout>
  );
}
