import {
  type SupportedLanguage,
  supportedLanguages
} from "@/locales/.generated/types";

import Home from "./home";

export const generateStaticParams = async () => {
  return supportedLanguages.map((lang) => ({ lang }));
};

type InferenceAIProps = {
  params: Promise<{ lang: SupportedLanguage }>;
};

export default async function InferenceAIPage({ params }: InferenceAIProps) {
  const { lang } = await params;
  return <Home lang={lang} />;
}
