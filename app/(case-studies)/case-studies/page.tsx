import { Metadata } from "next";
import CaseStudiesLangLayout from "./[lang]/layout";
import CaseStudiesPage from "./[lang]/page";
import {
  caseStudyHeroDesc,
  caseStudyHeroHeading
} from "@/locales/.generated/server";

export const metadata: Metadata = {
  title: `Services - ${caseStudyHeroHeading("en")}`,
  description: caseStudyHeroDesc("en")
};

export default function NoLangCaseStudies() {
  return (
    <CaseStudiesLangLayout params={Promise.resolve({ lang: "en" })}>
      <CaseStudiesPage params={Promise.resolve({ lang: "en" })} />
    </CaseStudiesLangLayout>
  );
}
