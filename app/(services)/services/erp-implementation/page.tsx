import { Metadata } from "next";
import ERPImplementationLangLayout from "./[lang]/layout";
import ERPImplementationPage from "./[lang]/page";
import { erpHeroDesc, erpHeroHeading } from "@/locales/.generated/server";

export const metadata: Metadata = {
  title: `Services - ${erpHeroHeading("en")}`,
  description: erpHeroDesc("en")
};

export default function NoLangERPImplementation() {
  return (
    <ERPImplementationLangLayout params={Promise.resolve({ lang: "en" })}>
      <ERPImplementationPage params={Promise.resolve({ lang: "en" })} />
    </ERPImplementationLangLayout>
  );
}
