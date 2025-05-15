import type { SupportedLanguage } from "@/locales/.generated/types";
import Home from "./home";

export const generateStaticParams = async () => {
  return [{ lang: "en" }, { lang: "id" }];
};

type ctoaasMediaProps = {
  params: Promise<{ lang: SupportedLanguage }>;
};

export default async function CtoaasMediaPage({ params }: ctoaasMediaProps) {
  return <Home lang={(await params).lang} />;
}
