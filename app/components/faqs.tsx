import data from "@/data.json";
import GridItemsContainer, {
  GridItemsTitle,
} from "@/app/components/grid-items";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Faqs() {
  return (
    <GridItemsContainer id="faqs">
      <GridItemsTitle
        title="Frequently asked questions"
        description="Find answers to commonly asked questions. If you need further assistance, feel free to reach out to us."
        layout="vertical"
      />
      <Accordion type="single" collapsible className="w-full">
        {data.faqs.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} asChild>
            <Card className="bg-white border border-gray-200 shadow-sm transition-all duration-300 w-full">
              <CardHeader className="py-2 px-4">
                <AccordionTrigger className="text-left text-xl font-medium text-[#020F15] w-full no-underline hover:no-underline focus:no-underline">
                  {item.question}
                </AccordionTrigger>
              </CardHeader>
              <AccordionContent asChild>
                <CardContent className="text-[#61656E] text-base lg:text-lg px-4 pb-4 pt-0">
                  {item.answer}
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </GridItemsContainer>
  );
}
