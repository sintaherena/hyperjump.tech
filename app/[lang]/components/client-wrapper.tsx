"use client";

import { usePathname } from "next/navigation";
import { SupportedLanguage } from "@/locales/.generated/types";
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";

import NavInferenceAI from "../(inferenceai)/inferenceai/components/nav";
import FooterInferenceAI from "../(inferenceai)/inferenceai/components/footer";
import NavSmdd2024 from "../(smdd)/smdd2024/components/nav";

export default function ClientWrapper({
  children,
  lang
}: {
  children: React.ReactNode;
  lang: SupportedLanguage;
}) {
  const pathname = usePathname();
  const isInferenceAi = pathname === `/${lang}/inferenceai`;
  const isRagChatbot = pathname === `/${lang}/inferenceai/rag-chatbot`;
  const isSmdd2024 = pathname === `/${lang}/smdd2024`;

  return (
    <>
      {isInferenceAi ? (
        <NavInferenceAI lang={lang} />
      ) : isRagChatbot ? (
        <NavInferenceAI type="rag-chatbot" lang={lang} />
      ) : isSmdd2024 ? (
        <NavSmdd2024 lang={lang} />
      ) : (
        <Nav lang={lang} />
      )}
      {children}
      {isInferenceAi ? (
        <FooterInferenceAI lang={lang} />
      ) : isRagChatbot ? (
        <FooterInferenceAI type="rag-chatbot" lang={lang} />
      ) : isSmdd2024 ? (
        <Footer type="smdd2024" lang={lang} />
      ) : (
        <Footer lang={lang} />
      )}
    </>
  );
}
