import type { SupportedLanguage } from "@/locales/.generated/types";
import Home from "./home";

export const generateStaticParams = async () => {
  return [{ lang: "en" }, { lang: "id" }];
};

type erpProps = {
  params: Promise<{ lang: SupportedLanguage }>;
};

export default async function ErpFisheriesPage({ params }: erpProps) {
  return <Home lang={(await params).lang} />;
}
