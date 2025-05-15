import type { SupportedLanguage } from "@/locales/.generated/types";
import Home from "./home";

export const generateStaticParams = async () => {
  return [{ lang: "en" }, { lang: "id" }];
};

type TechDueDilligenceProps = {
  params: Promise<{ lang: SupportedLanguage }>;
};

export default async function TechDueDilligencePage({
  params
}: TechDueDilligenceProps) {
  return <Home lang={(await params).lang} />;
}
