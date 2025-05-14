import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import ScrollObserver from "@/app/components/scroll-observer";
import { SupportedLanguage } from "@/locales/.generated/types";
import { Hero } from "../../components/hero-details";
import { ctoaasHeroDesc, ctoaasHeroHeading } from "@/locales/.generated/server";

type CTOAsAServiceLangProps = {
  children: React.ReactNode;
  params: Promise<{ lang: SupportedLanguage }>;
};

export default async function CTOAsAServiceLangLayout({
  children,
  params
}: CTOAsAServiceLangProps) {
  const { lang } = await params;

  return (
    <>
      <ScrollObserver />
      <Nav className="xxl:max-w-7xl max-w-6xl" isTransparent lang={lang} />
      <Hero
        heading={ctoaasHeroHeading(lang)}
        subheading={ctoaasHeroDesc(lang)}
      />
      {children}
      <Footer lang={lang} type="cto-as-a-service" />
    </>
  );
}
