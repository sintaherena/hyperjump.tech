import { SupportedLanguage } from "@/locales/.generated/types";
import Services from "./services";
import DemosAndDocs from "./demos";
import OpenSourceProjects from "./projects";
import TrustedBy from "./trusted";
import CaseStudies from "./case-studies";
import ContactForm from "./contact-form";

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { lang: "en" } }, { params: { lang: "id" } }],
    fallback: false,
  };
};

export default function Home({
  params,
}: {
  params: { lang: SupportedLanguage };
}) {
  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12 space-y-4">
        <Services lang={params.lang} />
        <DemosAndDocs lang={params.lang} />
        <OpenSourceProjects />
        <TrustedBy lang={params.lang} />
        <CaseStudies lang={params.lang} />
        <ContactForm lang={params.lang} />
      </div>
    </section>
  );
}
