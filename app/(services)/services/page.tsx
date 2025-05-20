import { Metadata } from "next";
import ServicesLangLayout from "./[lang]/layout";
import ServicesPage from "./[lang]/page";
import {
  servicesHeroDesc,
  servicesHeroHeading
} from "@/locales/.generated/server";

export const metadata: Metadata = {
  title: `Services - ${servicesHeroHeading("en")}`,
  description: servicesHeroDesc("en")
};

export default function NoLangServices() {
  return (
    <ServicesLangLayout params={Promise.resolve({ lang: "en" })}>
      <ServicesPage params={Promise.resolve({ lang: "en" })} />
    </ServicesLangLayout>
  );
}
