import {
  ctoaasWhatWeDeliverCard0Items0,
  ctoaasWhatWeDeliverCard0Items1,
  ctoaasWhatWeDeliverCard0Items2,
  ctoaasWhatWeDeliverCard0Items3,
  ctoaasWhatWeDeliverCard0Text,
  ctoaasWhatWeDeliverCard0Title,
  ctoaasWhatWeDeliverCard1Items0,
  ctoaasWhatWeDeliverCard1Items1,
  ctoaasWhatWeDeliverCard1Items2,
  ctoaasWhatWeDeliverCard1Items3,
  ctoaasWhatWeDeliverCard1Text,
  ctoaasWhatWeDeliverCard1Title,
  ctoaasWhatWeDeliverCard2Items0,
  ctoaasWhatWeDeliverCard2Items1,
  ctoaasWhatWeDeliverCard2Items2,
  ctoaasWhatWeDeliverCard2Items3,
  ctoaasWhatWeDeliverCard2Text,
  ctoaasWhatWeDeliverCard2Title,
  ctoaasHowItWorksStep0Title,
  ctoaasHowItWorksStep1Title,
  ctoaasHowItWorksStep2Title,
  ctoaasHowItWorksStep3Title,
  ctoaasHowItWorksStep0Text,
  ctoaasHowItWorksStep1Text,
  ctoaasHowItWorksStep2Text,
  ctoaasHowItWorksStep3Text
} from "@/locales/.generated/server";
import { SupportedLanguage } from "@/locales/.generated/types";

export const whatWeDeliverData = (lang: SupportedLanguage) => {
  const data = [
    {
      title: ctoaasWhatWeDeliverCard0Title(lang),
      description: ctoaasWhatWeDeliverCard0Text(lang),
      icon: "/images/services/tdd/what-we-deliver-icon-1.svg",
      items: [
        ctoaasWhatWeDeliverCard0Items0(lang),
        ctoaasWhatWeDeliverCard0Items1(lang),
        ctoaasWhatWeDeliverCard0Items2(lang),
        ctoaasWhatWeDeliverCard0Items3(lang)
      ]
    },
    {
      title: ctoaasWhatWeDeliverCard1Title(lang),
      description: ctoaasWhatWeDeliverCard1Text(lang),
      icon: "/images/services/tdd/what-we-deliver-icon-2.svg",
      items: [
        ctoaasWhatWeDeliverCard1Items0(lang),
        ctoaasWhatWeDeliverCard1Items1(lang),
        ctoaasWhatWeDeliverCard1Items2(lang),
        ctoaasWhatWeDeliverCard1Items3(lang)
      ]
    },
    {
      title: ctoaasWhatWeDeliverCard2Title(lang),
      description: ctoaasWhatWeDeliverCard2Text(lang),
      icon: "/images/services/tdd/what-we-deliver-icon-3.svg",
      items: [
        ctoaasWhatWeDeliverCard2Items0(lang),
        ctoaasWhatWeDeliverCard2Items1(lang),
        ctoaasWhatWeDeliverCard2Items2(lang),
        ctoaasWhatWeDeliverCard2Items3(lang)
      ]
    }
  ];

  return data;
};

export const HowItsWorksData = (lang: SupportedLanguage) => {
  const data = [
    {
      title: ctoaasHowItWorksStep0Title(lang),
      description: ctoaasHowItWorksStep0Text(lang),
      icon: "/images/services/tdd/how-it-works-icon-1.svg"
    },
    {
      title: ctoaasHowItWorksStep1Title(lang),
      description: ctoaasHowItWorksStep1Text(lang),
      icon: "/images/services/tdd/how-it-works-icon-2.svg"
    },
    {
      title: ctoaasHowItWorksStep2Title(lang),
      description: ctoaasHowItWorksStep2Text(lang),
      icon: "/images/services/tdd/how-it-works-icon-3.svg"
    },
    {
      title: ctoaasHowItWorksStep3Title(lang),
      description: ctoaasHowItWorksStep3Text(lang),
      icon: "/images/services/tdd/how-it-works-icon-4.svg"
    }
  ];

  return data;
};
