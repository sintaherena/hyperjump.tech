import { Metadata } from "next";
import ErpFisheriesLangLayout from "./[lang]/layout";
import ErpFisheriesPage from "./[lang]/page";
import { defaultOpenGraph } from "@/lib/default-metadata";
import { erpFisheries } from "../components/data";

const { title } = erpFisheries;

export const metadata: Metadata = {
  title,
  openGraph: {
    ...defaultOpenGraph,
    title,
    url: `/case-studies/erp-fisheries`,
    siteName: title
  }
};

export default function NoLangErpFisheries() {
  return (
    <ErpFisheriesLangLayout params={Promise.resolve({ lang: "en" })}>
      <ErpFisheriesPage params={Promise.resolve({ lang: "en" })} />
    </ErpFisheriesLangLayout>
  );
}
