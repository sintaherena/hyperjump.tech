"use client";

import TechDueDilligenceLangLayout from "./[lang]/layout";
import TechDueDilligencePage from "./[lang]/page";

export default function NoLangTechDueDilligence() {
  return (
    <TechDueDilligenceLangLayout params={{ lang: "en" }}>
      <TechDueDilligencePage params={{ lang: "en" }} />
    </TechDueDilligenceLangLayout>
  );
}
