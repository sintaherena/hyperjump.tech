import type { SupportedLanguage } from "@/locales/.generated/types";
import Home from "./home";

export const generateStaticParams = async () => {
  return [{ lang: "en" }, { lang: "id" }];
};

type CaseStudyProps = {
  params: Promise<{ lang: SupportedLanguage }>;
};

export default async function CaseStudiesPage({ params }: CaseStudyProps) {
  return <Home lang={(await params).lang} />;
}
