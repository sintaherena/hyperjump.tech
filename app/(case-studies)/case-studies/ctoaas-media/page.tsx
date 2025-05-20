import { Metadata } from "next";
import CtoaasMediaLangLayout from "./[lang]/layout";
import CtoaasMediaPage from "./[lang]/page";
import { caseStudyCtoaasMediaTitle } from "@/locales/.generated/server";

export const metadata: Metadata = {
  title: `Case Studies - ${caseStudyCtoaasMediaTitle("en")}`
};

export default function NoLangCtoaasMedia() {
  return (
    <CtoaasMediaLangLayout params={Promise.resolve({ lang: "en" })}>
      <CtoaasMediaPage params={Promise.resolve({ lang: "en" })} />
    </CtoaasMediaLangLayout>
  );
}
