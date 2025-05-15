"use client";

import TechDueDilligenceLangLayout from "./[lang]/layout";
import TechDueDilligencePage from "./[lang]/page";

export default function NoLangTechDueDilligence() {
  return (
    <TechDueDilligenceLangLayout params={Promise.resolve({ lang: "en" })}>
      <TechDueDilligencePage params={Promise.resolve({ lang: "en" })} />
    </TechDueDilligenceLangLayout>
  );
}
