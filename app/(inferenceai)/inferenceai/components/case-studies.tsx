import data from "../inferenceai-data.json";
import {
  GridItems,
  GridItemsSection,
  ScheduleConsultationButton
} from "./grid-items";

export default function CaseStudies() {
  const { header, subheader, content } = data.caseStudies;

  return (
    <GridItemsSection id="case-studies" title={header} description={subheader}>
      <GridItems
        items={content}
        columns={{ base: 1, md: 2, lg: 2 }}
        classNameCard="rounded-2xl mt-8"
      />
      <div className="mt-8 flex w-full justify-center">
        <ScheduleConsultationButton />
      </div>
    </GridItemsSection>
  );
}
