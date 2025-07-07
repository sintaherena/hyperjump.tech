"use client";

import { usePathname } from "next/navigation";
import { SupportedLanguage } from "@/locales/.generated/types";
import Nav from "@/app/components/nav";
import NavInferenceAI from "../(inferenceai)/inferenceai/components/nav/inferenceai";
import NavRagChatbot from "@/app/[lang]/(inferenceai)/inferenceai/components/nav/rag-chatbot";
import Footer from "@/app/components/footer";
import FooterInferenceAI from "@/app/[lang]/(inferenceai)/inferenceai/components/footer/inferenceai";
import FooterRagChatbot from "@/app/[lang]/(inferenceai)/inferenceai/components/footer/rag-chatbot";

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

  return (
    <>
      {isInferenceAi ? (
        <NavInferenceAI lang={lang} />
      ) : isRagChatbot ? (
        <NavRagChatbot lang={lang} />
      ) : (
        <Nav lang={lang} />
      )}
      {children}
      {isInferenceAi ? (
        <FooterInferenceAI lang={lang} />
      ) : isRagChatbot ? (
        <FooterRagChatbot lang={lang} />
      ) : (
        <Footer lang={lang} />
      )}
    </>
  );
}
