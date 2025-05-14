import {
  saasWhatWeDeliverCard0Items0,
  saasWhatWeDeliverCard0Items1,
  saasWhatWeDeliverCard0Items2,
  saasWhatWeDeliverCard0Text,
  saasWhatWeDeliverCard0Title,
  saasWhatWeDeliverCard1Items0,
  saasWhatWeDeliverCard1Items1,
  saasWhatWeDeliverCard1Items2,
  saasWhatWeDeliverCard1Text,
  saasWhatWeDeliverCard1Title,
  saasWhatWeDeliverCard2Items0,
  saasWhatWeDeliverCard2Items1,
  saasWhatWeDeliverCard2Items2,
  saasWhatWeDeliverCard2Text,
  saasWhatWeDeliverCard2Title,
  saasHowItWorksStep0Title,
  saasHowItWorksStep1Title,
  saasHowItWorksStep2Title,
  saasHowItWorksStep3Title,
  saasHowItWorksStep0Text,
  saasHowItWorksStep1Text,
  saasHowItWorksStep2Text,
  saasHowItWorksStep3Text
} from "@/locales/.generated/server";
import { SupportedLanguage } from "@/locales/.generated/types";

export const whatWeDeliverData = (lang: SupportedLanguage) => {
  const data = [
    {
      title: saasWhatWeDeliverCard0Title(lang),
      description: saasWhatWeDeliverCard0Text(lang),
      icon: "/images/services/saas/what-we-deliver-icon-1.svg",
      items: [
        saasWhatWeDeliverCard0Items0(lang),
        saasWhatWeDeliverCard0Items1(lang),
        saasWhatWeDeliverCard0Items2(lang)
      ]
    },
    {
      title: saasWhatWeDeliverCard1Title(lang),
      description: saasWhatWeDeliverCard1Text(lang),
      icon: "/images/services/saas/what-we-deliver-icon-2.svg",
      items: [
        saasWhatWeDeliverCard1Items0(lang),
        saasWhatWeDeliverCard1Items1(lang),
        saasWhatWeDeliverCard1Items2(lang)
      ]
    },
    {
      title: saasWhatWeDeliverCard2Title(lang),
      description: saasWhatWeDeliverCard2Text(lang),
      icon: "/images/services/saas/what-we-deliver-icon-3.svg",
      items: [
        saasWhatWeDeliverCard2Items0(lang),
        saasWhatWeDeliverCard2Items1(lang),
        saasWhatWeDeliverCard2Items2(lang)
      ]
    }
  ];

  return data;
};

export const HowItsWorksData = (lang: SupportedLanguage) => {
  const data = [
    {
      title: saasHowItWorksStep0Title(lang),
      description: saasHowItWorksStep0Text(lang),
      icon: "/images/services/saas/how-it-works-icon-1.svg"
    },
    {
      title: saasHowItWorksStep1Title(lang),
      description: saasHowItWorksStep1Text(lang),
      icon: "/images/services/saas/how-it-works-icon-2.svg"
    },
    {
      title: saasHowItWorksStep2Title(lang),
      description: saasHowItWorksStep2Text(lang),
      icon: "/images/services/saas/how-it-works-icon-3.svg"
    },
    {
      title: saasHowItWorksStep3Title(lang),
      description: saasHowItWorksStep3Text(lang),
      icon: "/images/services/saas/how-it-works-icon-4.svg"
    }
  ];

  return data;
};
