import data from "../inferenceai-data.json";
import { GridItems, GridItemsSection } from "./grid-items";

export default function WhyWorkWithUs() {
  const { header, subheader, content } = data.whyWorkWithUs;

  return (
    <GridItemsSection
      id="why-work-with-us"
      title={header}
      description={subheader}
      layout="vertical">
      <div className="mb-8" />
      <GridItems
        items={content}
        columns={{ base: 1, sm: 1, md: 3, lg: 3 }}
        classNameCard="rounded-[20px]"
      />
    </GridItemsSection>
  );
}
