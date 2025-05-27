import { Metadata } from "next";
import ServicesLangLayout from "./[lang]/layout";
import ServicesPage from "./[lang]/page";
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
    url: `/services`,
    siteName: title
  }
};

export default function NoLangServices() {
  return (
    <ServicesLangLayout params={Promise.resolve({ lang: "en" })}>
      <ServicesPage params={Promise.resolve({ lang: "en" })} />
    </ServicesLangLayout>
  );
}
