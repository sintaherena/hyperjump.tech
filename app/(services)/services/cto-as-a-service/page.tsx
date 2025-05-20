import { Metadata } from "next";
import CTOAsAServiceLangLayout from "./[lang]/layout";
import CTOAsAServicePage from "./[lang]/page";
import { ctoaasHeroDesc, ctoaasHeroHeading } from "@/locales/.generated/server";

export const metadata: Metadata = {
  title: `Services - ${ctoaasHeroHeading("en")}`,
  description: ctoaasHeroDesc("en")
};

export default function NoLangCTOAsAService() {
  return (
    <CTOAsAServiceLangLayout params={Promise.resolve({ lang: "en" })}>
      <CTOAsAServicePage params={Promise.resolve({ lang: "en" })} />
    </CTOAsAServiceLangLayout>
  );
}
