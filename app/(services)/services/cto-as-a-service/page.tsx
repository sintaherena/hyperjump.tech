import { Metadata } from "next";
import CTOAsAServiceLangLayout from "./[lang]/layout";
import CTOAsAServicePage from "./[lang]/page";
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
    url: `/services/cto-as-a-service`,
    siteName: title
  }
};

export default function NoLangCTOAsAService() {
  return (
    <CTOAsAServiceLangLayout params={Promise.resolve({ lang: "en" })}>
      <CTOAsAServicePage params={Promise.resolve({ lang: "en" })} />
    </CTOAsAServiceLangLayout>
  );
}
