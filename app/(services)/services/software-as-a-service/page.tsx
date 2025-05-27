import { Metadata } from "next";
import SaasLangLayout from "./[lang]/layout";
import SaasPage from "./[lang]/page";
import { defaultOpenGraph } from "@/lib/default-metadata";
import { data } from "./[lang]/data";

const { title, description } = data;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    ...defaultOpenGraph,
    title,
    description,
    url: `/services/software-as-a-service`,
    siteName: title
  }
};

export default function NoLangSaas() {
  return (
    <SaasLangLayout params={Promise.resolve({ lang: "en" })}>
      <SaasPage params={Promise.resolve({ lang: "en" })} />
    </SaasLangLayout>
  );
}
