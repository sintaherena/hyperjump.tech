import type { SupportedLanguage } from "@/locales/.generated/types";
import Home from "./home";

export const generateStaticParams = async () => {
  return [{ lang: "en" }, { lang: "id" }];
};

type ErpProps = {
  params: Promise<{ lang: SupportedLanguage }>;
};

export default async function ERPImplementationPage({ params }: ErpProps) {
  return <Home lang={(await params).lang} />;
}
