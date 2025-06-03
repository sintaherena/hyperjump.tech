import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import ScrollObserver from "@/app/components/scroll-observer";
import { SupportedLanguage } from "@/locales/.generated/types";
import { Hero } from "../../components/hero-details";
import { tddHeroDesc, tddHeroHeading } from "@/locales/.generated/server";

type TechDueDilligenceLangProps = {
  children: React.ReactNode;
  params: Promise<{ lang: SupportedLanguage }>;
};

export default async function TechDueDilligenceLangLayout({
  children,
  params
}: TechDueDilligenceLangProps) {
  const { lang } = await params;

  return (
    <>
      <ScrollObserver />
      <Nav isTransparent lang={lang} />
      <Hero heading={tddHeroHeading(lang)} subheading={tddHeroDesc(lang)} />
      {children}
      <Footer lang={lang} type="tech-due-diligence" />
    </>
  );
}
