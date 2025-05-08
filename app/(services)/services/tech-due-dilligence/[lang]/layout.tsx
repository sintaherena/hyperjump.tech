import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import ScrollObserver from "@/app/components/scroll-observer";
import { SupportedLanguage } from "@/locales/.generated/types";
import { Hero } from "../../components/hero-details";
import { tddHeroDesc, tddHeroHeading } from "@/locales/.generated/server";

export default function TechDueDilligenceLangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <>
      <ScrollObserver />
      <Nav
        className="xxl:max-w-7xl max-w-6xl"
        isTransparent
        lang={params.lang as SupportedLanguage}
      />
      <Hero
        heading={tddHeroHeading(params.lang as SupportedLanguage)}
        subheading={tddHeroDesc(params.lang as SupportedLanguage)}
      />
      {children}
      <Footer
        lang={params.lang as SupportedLanguage}
        type="tech-due-dilligence"
      />
    </>
  );
}
