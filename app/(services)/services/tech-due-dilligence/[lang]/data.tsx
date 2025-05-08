import {
  tddWhatWeDeliverCard0Items0,
  tddWhatWeDeliverCard0Items1,
  tddWhatWeDeliverCard0Items2,
  tddWhatWeDeliverCard0Items3,
  tddWhatWeDeliverCard0Text,
  tddWhatWeDeliverCard0Title,
  tddWhatWeDeliverCard1Items0,
  tddWhatWeDeliverCard1Items1,
  tddWhatWeDeliverCard1Items2,
  tddWhatWeDeliverCard1Items3,
  tddWhatWeDeliverCard1Text,
  tddWhatWeDeliverCard1Title,
  tddWhatWeDeliverCard2Items0,
  tddWhatWeDeliverCard2Items1,
  tddWhatWeDeliverCard2Items2,
  tddWhatWeDeliverCard2Items3,
  tddWhatWeDeliverCard2Text,
  tddWhatWeDeliverCard2Title,
  tddHowItWorksStep0Title,
  tddHowItWorksStep1Title,
  tddHowItWorksStep2Title,
  tddHowItWorksStep3Title,
  tddHowItWorksStep0Text,
  tddHowItWorksStep1Text,
  tddHowItWorksStep2Text,
  tddHowItWorksStep3Text
} from "@/locales/.generated/server";
import { SupportedLanguage } from "@/locales/.generated/types";

export const whatWeDeliverData = (lang: SupportedLanguage) => {
  const data = [
    {
      title: tddWhatWeDeliverCard0Title(lang),
      description: tddWhatWeDeliverCard0Text(lang),
      icon: "/images/services/software-as-a-service.svg",
      items: [
        tddWhatWeDeliverCard0Items0(lang),
        tddWhatWeDeliverCard0Items1(lang),
        tddWhatWeDeliverCard0Items2(lang),
        tddWhatWeDeliverCard0Items3(lang)
      ]
    },
    {
      title: tddWhatWeDeliverCard1Title(lang),
      description: tddWhatWeDeliverCard1Text(lang),
      icon: "/images/services/software-as-a-service.svg",
      items: [
        tddWhatWeDeliverCard1Items0(lang),
        tddWhatWeDeliverCard1Items1(lang),
        tddWhatWeDeliverCard1Items2(lang),
        tddWhatWeDeliverCard1Items3(lang)
      ]
    },
    {
      title: tddWhatWeDeliverCard2Title(lang),
      description: tddWhatWeDeliverCard2Text(lang),
      icon: "/images/services/software-as-a-service.svg",
      items: [
        tddWhatWeDeliverCard2Items0(lang),
        tddWhatWeDeliverCard2Items1(lang),
        tddWhatWeDeliverCard2Items2(lang),
        tddWhatWeDeliverCard2Items3(lang)
      ]
    }
  ];

  return data;
};

export const HowItsWorksData = (lang: SupportedLanguage) => {
  const data = [
    {
      title: tddHowItWorksStep0Title(lang),
      description: tddHowItWorksStep0Text(lang),
      icon: "/images/services/software-as-a-service.svg"
    },
    {
      title: tddHowItWorksStep1Title(lang),
      description: tddHowItWorksStep1Text(lang),
      icon: "/images/services/software-as-a-service.svg"
    },
    {
      title: tddHowItWorksStep2Title(lang),
      description: tddHowItWorksStep2Text(lang),
      icon: "/images/services/software-as-a-service.svg"
    },
    {
      title: tddHowItWorksStep3Title(lang),
      description: tddHowItWorksStep3Text(lang),
      icon: "/images/services/software-as-a-service.svg"
    }
  ];

  return data;
};
