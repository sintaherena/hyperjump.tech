import data from "../inferenceai-data.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GridItemsSection } from "./grid-items";

export default function Faqs() {
  const { header, subheader, content } = data.faq;

  return (
    <GridItemsSection
      id="faqs"
      title={header}
      description={subheader}
      layout="vertical"
      className="bg-grid-faqs">
      <Accordion
        type="single"
        collapsible
        className="mx-auto mt-8 w-full max-w-4xl space-y-4">
        {content.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} asChild>
            <Card className="w-full border-none bg-[#1B1728] shadow-sm transition-all duration-300">
              <CardHeader className="px-4 py-2">
                <AccordionTrigger className="flex w-full items-center justify-between gap-2 text-left text-xl font-medium text-white no-underline hover:no-underline focus:no-underline">
                  {item.question}
                </AccordionTrigger>
              </CardHeader>
              <AccordionContent asChild>
                <CardContent className="px-4 pb-4 pt-0 text-base text-[#CDCED8] lg:text-lg">
                  {item.answer}
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </GridItemsSection>
  );
}
