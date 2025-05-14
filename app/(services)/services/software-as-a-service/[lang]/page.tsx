import type { SupportedLanguage } from "@/locales/.generated/types";
import Home from "./home";

export const generateStaticParams = async () => {
  return [{ lang: "en" }, { lang: "id" }];
};

type SaasProps = {
  params: Promise<{ lang: SupportedLanguage }>;
};

export default async function SaasPage({ params }: SaasProps) {
  return <Home lang={(await params).lang} />;
}
