"use client";

import {
  type SupportedLanguage,
  supportedLanguages
} from "@/locales/.generated/types";

type LanguagePickerProps = {
  lang: SupportedLanguage;
  type?: "hyperjump" | "services";
};

const labelByLang: Record<SupportedLanguage, string> = {
  en: "🇬🇧 English",
  id: "🇮🇩 Indonesia"
};

export function LanguagePicker({
  lang,
  type = "hyperjump"
}: {
  lang: SupportedLanguage;
  type?:
    | "hyperjump"
    | "services"
    | "tech-due-diligence"
    | "software-as-a-service"
    | "erp-implementation"
    | "cto-as-a-service"
    | "case-studies"
    | "erp-fisheries"
    | "ctoaas-media";
}) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as SupportedLanguage;

    const urlHyperjump = `/${newLang}#hero`;
    const urlServices = `/services/${newLang}#hero`;
    const urlTdd = `/services/tech-due-diligence/${newLang}#hero`;
    const urlSaas = `/services/software-as-a-service/${newLang}#hero`;
    const urlErp = `/services/erp-implementation/${newLang}#hero`;
    const urlCtoAAS = `/services/cto-as-a-service/${newLang}#hero`;
    const urlCaseStudy = `/case-studies/${newLang}#hero`;
    const urlErpFisheries = `/case-studies/erp-fisheries/${newLang}#hero`;
    const urlCtoaasMedia = `/case-studies/ctoaas-media/${newLang}#hero`;

    if (type === "services") {
      window.location.href = urlServices;
    } else if (type === "tech-due-diligence") {
      window.location.href = urlTdd;
    } else if (type === "cto-as-a-service") {
      window.location.href = urlCtoAAS;
    } else if (type === "software-as-a-service") {
      window.location.href = urlSaas;
    } else if (type === "erp-implementation") {
      window.location.href = urlErp;
    } else if (type === "case-studies") {
      window.location.href = urlCaseStudy;
    } else if (type === "erp-fisheries") {
      window.location.href = urlErpFisheries;
    } else if (type === "ctoaas-media") {
      window.location.href = urlCtoaasMedia;
    } else {
      window.location.href = urlHyperjump;
    }
  };

  return (
    <select
      value={lang}
      onChange={handleChange}
      className="max-w-32 rounded-full border border-[#2D364A] bg-transparent px-3 py-2 text-sm font-medium text-white">
      {supportedLanguages.map((l) => (
        <option key={l} value={l}>
          {labelByLang[l]}
        </option>
      ))}
    </select>
  );
}
