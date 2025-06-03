import ScrollObserver from "@/app/components/scroll-observer";
import type { SupportedLanguage } from "@/locales/.generated/types";
import Hero from "../components/hero";
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";

type ServiceLangProps = {
  children: React.ReactNode;
  params: Promise<{ lang: SupportedLanguage }>;
};

export default async function ServicesLangLayout({
  children,
  params
}: ServiceLangProps) {
  const { lang } = await params;

  return (
    <div className="bg-white">
      <ScrollObserver />
      <Nav lang={lang} />
      <Hero lang={lang} />
      {children}
      <Footer lang={lang} type="services" />
    </div>
  );
}
