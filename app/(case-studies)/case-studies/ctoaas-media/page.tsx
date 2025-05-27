import { Metadata } from "next";
import CtoaasMediaLangLayout from "./[lang]/layout";
import CtoaasMediaPage from "./[lang]/page";
import { defaultOpenGraph } from "@/lib/default-metadata";
import { ctoaasMedia } from "../components/data";

const { title } = ctoaasMedia;

export const metadata: Metadata = {
  title,
  openGraph: {
    ...defaultOpenGraph,
    title,
    url: `/case-studies/ctoaas-media`,
    siteName: title
  }
};

export default function NoLangCtoaasMedia() {
  return (
    <CtoaasMediaLangLayout params={Promise.resolve({ lang: "en" })}>
      <CtoaasMediaPage params={Promise.resolve({ lang: "en" })} />
    </CtoaasMediaLangLayout>
  );
}
