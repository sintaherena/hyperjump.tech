import { Metadata } from "next";
import ErpFisheriesLangLayout from "./[lang]/layout";
import ErpFisheriesPage from "./[lang]/page";
import { caseStudyErpFisheriesTitle } from "@/locales/.generated/server";

export const metadata: Metadata = {
  title: `Case Studies - ${caseStudyErpFisheriesTitle("en")}`
};

export default function NoLangErpFisheries() {
  return (
    <ErpFisheriesLangLayout params={Promise.resolve({ lang: "en" })}>
      <ErpFisheriesPage params={Promise.resolve({ lang: "en" })} />
    </ErpFisheriesLangLayout>
  );
}
