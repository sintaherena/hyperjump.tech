import { Metadata } from "next";
import ERPImplementationLangLayout from "./[lang]/layout";
import ERPImplementationPage from "./[lang]/page";
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
    url: `/services/erp-implementation`,
    siteName: title
  }
};

export default function NoLangERPImplementation() {
  return (
    <ERPImplementationLangLayout params={Promise.resolve({ lang: "en" })}>
      <ERPImplementationPage params={Promise.resolve({ lang: "en" })} />
    </ERPImplementationLangLayout>
  );
}
