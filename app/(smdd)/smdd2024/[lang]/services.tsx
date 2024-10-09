import { SupportedLanguage } from "@/locales/.generated/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ourServices } from "@/locales/.generated/server";
import { getServices } from "./get-services";

export default function Services({ lang }: { lang: SupportedLanguage }) {
  return (
    <section className="bg-white w-full pt-4 sm:pt-0 xl:pt-16 px-4">
      <div className="w-full max-w-7xl mx-auto text-black container">
        <h1 className="my-4 xl:text-5xl text-2xl font-bold leading-tight mb-8">
          {ourServices(lang)}
        </h1>
        <div>
          <Accordion type="single" collapsible>
            {getServices(lang).map((service, i) => {
              return (
                <AccordionItem value={`${i}`} key={i}>
                  <AccordionTrigger>
                    <h2 className="font-bold text-xl">{service.title}</h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-base space-y-4">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: service.description,
                        }}
                      />
                      <blockquote
                        className="pl-4 py-2 border-l-4 border-gray-300 bg-gray-100 italic"
                        dangerouslySetInnerHTML={{ __html: service.quotes }}
                      />
                      <div
                        className="font-bold"
                        dangerouslySetInnerHTML={{
                          __html: service.deliverables,
                        }}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
