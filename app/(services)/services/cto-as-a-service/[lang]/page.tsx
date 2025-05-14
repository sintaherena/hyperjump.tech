import type { SupportedLanguage } from "@/locales/.generated/types";
import Home from "./home";

export const generateStaticParams = async () => {
  return [{ lang: "en" }, { lang: "id" }];
};

type CTOAsAServiceProps = {
  params: Promise<{ lang: SupportedLanguage }>;
};

export default async function CTOAsAServicePage({
  params
}: CTOAsAServiceProps) {
  return <Home lang={(await params).lang} />;
}
