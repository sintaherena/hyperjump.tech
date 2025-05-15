"use client";

import SaasLangLayout from "./[lang]/layout";
import SaasPage from "./[lang]/page";

export default function NoLangSaas() {
  return (
    <SaasLangLayout params={Promise.resolve({ lang: "en" })}>
      <SaasPage params={Promise.resolve({ lang: "en" })} />
    </SaasLangLayout>
  );
}
