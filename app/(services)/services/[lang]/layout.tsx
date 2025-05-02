import ScrollObserver from "@/app/components/scroll-observer";
import { SupportedLanguage } from "@/locales/.generated/types";
import Hero from "../components/hero";
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";

export default function ServicesLangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <div className="bg-white">
      <ScrollObserver />
      <Nav type="services" className="max-w-7xl" />
      <Hero lang={params.lang as SupportedLanguage} />
      {children}
      <Footer />
    </div>
  );
}
