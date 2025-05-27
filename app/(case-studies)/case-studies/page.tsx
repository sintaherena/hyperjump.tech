import { Metadata } from "next";
import CaseStudiesLangLayout from "./[lang]/layout";
import CaseStudiesPage from "./[lang]/page";
import { defaultOpenGraph } from "@/lib/default-metadata";
import { caseStudy } from "./components/data";

const { title, description } = caseStudy;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    ...defaultOpenGraph,
    title,
    description,
    url: `/case-studies`,
    siteName: title
  }
};

export default function NoLangCaseStudies() {
  return (
    <CaseStudiesLangLayout params={Promise.resolve({ lang: "en" })}>
      <CaseStudiesPage params={Promise.resolve({ lang: "en" })} />
    </CaseStudiesLangLayout>
  );
}
