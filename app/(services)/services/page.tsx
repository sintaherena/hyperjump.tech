"use client";

import ServicesLangLayout from "./[lang]/layout";
import ServicesPage from "./[lang]/page";

export default function NoLangServices() {
  return (
    <ServicesLangLayout params={{ lang: "en" }}>
      <ServicesPage params={{ lang: "en" }} />
    </ServicesLangLayout>
  );
}
