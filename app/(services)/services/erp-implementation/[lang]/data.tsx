import {
  erpWhatWeDeliverCard0Items0,
  erpWhatWeDeliverCard0Items1,
  erpWhatWeDeliverCard0Items2,
  erpWhatWeDeliverCard0Items3,
  erpWhatWeDeliverCard0Text,
  erpWhatWeDeliverCard0Title,
  erpWhatWeDeliverCard1Items0,
  erpWhatWeDeliverCard1Items1,
  erpWhatWeDeliverCard1Items2,
  erpWhatWeDeliverCard1Items3,
  erpWhatWeDeliverCard1Text,
  erpWhatWeDeliverCard1Title,
  erpWhatWeDeliverCard2Items0,
  erpWhatWeDeliverCard2Items1,
  erpWhatWeDeliverCard2Items2,
  erpWhatWeDeliverCard2Items3,
  erpWhatWeDeliverCard2Text,
  erpWhatWeDeliverCard2Title,
  erpHowItWorksStep0Title,
  erpHowItWorksStep1Title,
  erpHowItWorksStep2Title,
  erpHowItWorksStep3Title,
  erpHowItWorksStep0Text,
  erpHowItWorksStep1Text,
  erpHowItWorksStep2Text,
  erpHowItWorksStep3Text
} from "@/locales/.generated/server";
import { SupportedLanguage } from "@/locales/.generated/types";

export const whatWeDeliverData = (lang: SupportedLanguage) => {
  const data = [
    {
      title: erpWhatWeDeliverCard0Title(lang),
      description: erpWhatWeDeliverCard0Text(lang),
      icon: "/images/services/tdd/what-we-deliver-icon-1.svg",
      items: [
        erpWhatWeDeliverCard0Items0(lang),
        erpWhatWeDeliverCard0Items1(lang),
        erpWhatWeDeliverCard0Items2(lang),
        erpWhatWeDeliverCard0Items3(lang)
      ]
    },
    {
      title: erpWhatWeDeliverCard1Title(lang),
      description: erpWhatWeDeliverCard1Text(lang),
      icon: "/images/services/tdd/what-we-deliver-icon-2.svg",
      items: [
        erpWhatWeDeliverCard1Items0(lang),
        erpWhatWeDeliverCard1Items1(lang),
        erpWhatWeDeliverCard1Items2(lang),
        erpWhatWeDeliverCard1Items3(lang)
      ]
    },
    {
      title: erpWhatWeDeliverCard2Title(lang),
      description: erpWhatWeDeliverCard2Text(lang),
      icon: "/images/services/tdd/what-we-deliver-icon-3.svg",
      items: [
        erpWhatWeDeliverCard2Items0(lang),
        erpWhatWeDeliverCard2Items1(lang),
        erpWhatWeDeliverCard2Items2(lang),
        erpWhatWeDeliverCard2Items3(lang)
      ]
    }
  ];

  return data;
};

export const HowItsWorksData = (lang: SupportedLanguage) => {
  const data = [
    {
      title: erpHowItWorksStep0Title(lang),
      description: erpHowItWorksStep0Text(lang),
      icon: "/images/services/tdd/how-it-works-icon-1.svg"
    },
    {
      title: erpHowItWorksStep1Title(lang),
      description: erpHowItWorksStep1Text(lang),
      icon: "/images/services/tdd/how-it-works-icon-2.svg"
    },
    {
      title: erpHowItWorksStep2Title(lang),
      description: erpHowItWorksStep2Text(lang),
      icon: "/images/services/tdd/how-it-works-icon-3.svg"
    },
    {
      title: erpHowItWorksStep3Title(lang),
      description: erpHowItWorksStep3Text(lang),
      icon: "/images/services/tdd/how-it-works-icon-4.svg"
    }
  ];

  return data;
};
