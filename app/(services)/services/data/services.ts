// /app/data/service.ts

import type { SupportedLanguage } from "@/locales/.generated/types";
import {
  caseStudyErpFisheriesTitle,
  caseStudyErpFisheriesDesc,
  caseStudyErpFisheriesCategory,
  caseStudyCtoaasMediaTitle,
  caseStudyCtoaasMediaDesc,
  caseStudyCtoaasMediaCategory
} from "@/locales/.generated/server";

type CaseStudy = {
  title: string;
  description: string;
  category: string;
  url: string;
};

export const getCaseStudies = (lang: SupportedLanguage): CaseStudy[] => [
  {
    title: caseStudyErpFisheriesTitle(lang),
    description: caseStudyErpFisheriesDesc(lang),
    category: caseStudyErpFisheriesCategory(lang),
    url: "/case-studies/erp-fisheries"
  },
  {
    title: caseStudyCtoaasMediaTitle(lang),
    description: caseStudyCtoaasMediaDesc(lang),
    category: caseStudyCtoaasMediaCategory(lang),
    url: "/case-studies/ctoaas-media"
  }
];
