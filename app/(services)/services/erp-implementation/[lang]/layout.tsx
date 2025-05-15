import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import ScrollObserver from "@/app/components/scroll-observer";
import { SupportedLanguage } from "@/locales/.generated/types";
import { Hero } from "../../components/hero-details";
import { erpHeroDesc, erpHeroHeading } from "@/locales/.generated/server";

type ErpLangProps = {
  children: React.ReactNode;
  params: Promise<{ lang: SupportedLanguage }>;
};

export default async function ERPImplementationLangLayout({
  children,
  params
}: ErpLangProps) {
  const { lang } = await params;

  return (
    <>
      <ScrollObserver />
      <Nav className="xxl:max-w-7xl max-w-6xl" isTransparent lang={lang} />
      <Hero heading={erpHeroHeading(lang)} subheading={erpHeroDesc(lang)} />
      {children}
      <Footer lang={lang} type="erp-implementation" />
    </>
  );
}
