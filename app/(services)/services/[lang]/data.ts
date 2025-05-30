import { SupportedLanguage } from "@/locales/.generated/types";
import {
  servicesHeroDesc,
  servicesHeroHeading,
  caseStudyErpFisheriesTitle,
  caseStudyErpFisheriesDesc,
  caseStudyCtoaasMediaTitle,
  caseStudyCtoaasMediaDesc
} from "@/locales/.generated/server";

export const data = {
  title: `Services - ${servicesHeroHeading("en")}`,
  description: servicesHeroDesc("en")
};

export const getCaseStudies = (lang: SupportedLanguage) => {
  const data = [
    {
      title: caseStudyErpFisheriesTitle(lang),
      description: caseStudyErpFisheriesDesc(lang),
      url: "/case-studies/erp-fisheries"
    },
    {
      title: caseStudyCtoaasMediaTitle(lang),
      description: caseStudyCtoaasMediaDesc(lang),
      url: "/case-studies/ctoaas-media"
    }
  ];

  return data;
};
