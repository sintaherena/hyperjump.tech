import { Metadata } from "next";
import SaasLangLayout from "./[lang]/layout";
import SaasPage from "./[lang]/page";
import { saasHeroDesc, saasHeroHeading } from "@/locales/.generated/server";

export const metadata: Metadata = {
  title: `Services - ${saasHeroHeading("en")}`,
  description: saasHeroDesc("en")
};

export default function NoLangSaas() {
  return (
    <SaasLangLayout params={Promise.resolve({ lang: "en" })}>
      <SaasPage params={Promise.resolve({ lang: "en" })} />
    </SaasLangLayout>
  );
}
