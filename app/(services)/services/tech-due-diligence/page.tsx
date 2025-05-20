import { Metadata } from "next";
import TechDueDilligenceLangLayout from "./[lang]/layout";
import TechDueDilligencePage from "./[lang]/page";
import { tddHeroDesc, tddHeroHeading } from "@/locales/.generated/server";

export const metadata: Metadata = {
  title: `Services - ${tddHeroHeading("en")}`,
  description: tddHeroDesc("en")
};

export default function NoLangTechDueDilligence() {
  return (
    <TechDueDilligenceLangLayout params={Promise.resolve({ lang: "en" })}>
      <TechDueDilligencePage params={Promise.resolve({ lang: "en" })} />
    </TechDueDilligenceLangLayout>
  );
}
