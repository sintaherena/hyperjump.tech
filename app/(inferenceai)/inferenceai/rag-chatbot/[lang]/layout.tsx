import ScrollObserver from "@/app/components/scroll-observer";
import {
  ragChatbotHeroDesc,
  ragChatbotHeroHeading
} from "@/locales/.generated/server";
import type { SupportedLanguage } from "@/locales/.generated/types";

import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Nav from "../../components/nav";

type ChatbotLangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: SupportedLanguage }>;
};

export default async function ChatbotLangLayout({
  children,
  params
}: ChatbotLangLayoutProps) {
  const { lang } = await params;

  return (
    <>
      <ScrollObserver />
      <Nav lang={lang} type="rag-chatbot" />
      <Hero
        heading={ragChatbotHeroHeading(lang)}
        subheading={ragChatbotHeroDesc(lang)}
      />
      {children}
      <Footer lang={lang} type="rag-chatbot" />
    </>
  );
}
