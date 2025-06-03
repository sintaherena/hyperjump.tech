import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import ScrollObserver from "@/app/components/scroll-observer";
import { SupportedLanguage } from "@/locales/.generated/types";
import { Hero } from "../../components/hero-details";
import { saasHeroDesc, saasHeroHeading } from "@/locales/.generated/server";

type SaasLangProps = {
  children: React.ReactNode;
  params: Promise<{ lang: SupportedLanguage }>;
};

export default async function SaasLangLayout({
  children,
  params
}: SaasLangProps) {
  const { lang } = await params;

  return (
    <>
      <ScrollObserver />
      <Nav isTransparent lang={lang} />
      <Hero heading={saasHeroHeading(lang)} subheading={saasHeroDesc(lang)} />
      {children}
      <Footer lang={lang} type="software-as-a-service" />
    </>
  );
}
