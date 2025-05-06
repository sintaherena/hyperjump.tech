import { SupportedLanguage } from "@/locales/.generated/types";
import {
  ragChatbotNavItems0Label,
  ragChatbotNavItems1Label,
  ragChatbotNavItems2Label,
  ragChatbotNavItems3Label,
  ragChatbotKeyFeaturesFeatures0Title,
  ragChatbotKeyFeaturesFeatures1Title,
  ragChatbotKeyFeaturesFeatures2Title,
  ragChatbotKeyFeaturesFeatures3Title,
  ragChatbotKeyFeaturesFeatures4Title,
  ragChatbotKeyFeaturesFeatures0Text,
  ragChatbotKeyFeaturesFeatures1Text,
  ragChatbotKeyFeaturesFeatures2Text,
  ragChatbotKeyFeaturesFeatures3Text,
  ragChatbotKeyFeaturesFeatures4Text,
  ragChatbotHowItWorksSteps0Title,
  ragChatbotHowItWorksSteps1Title,
  ragChatbotHowItWorksSteps2Title,
  ragChatbotHowItWorksSteps3Title,
  ragChatbotHowItWorksSteps0Text,
  ragChatbotHowItWorksSteps1Text,
  ragChatbotHowItWorksSteps2Text,
  ragChatbotHowItWorksSteps3Text,
  ragChatbotWhatIsIncludedItems0,
  ragChatbotWhatIsIncludedItems1,
  ragChatbotWhatIsIncludedItems2,
  ragChatbotWhatIsIncludedItems3,
  ragChatbotFaq0Question,
  ragChatbotFaq1Question,
  ragChatbotFaq2Question,
  ragChatbotFaq3Question,
  ragChatbotFaq0Answer,
  ragChatbotFaq1Answer,
  ragChatbotFaq2Answer,
  ragChatbotFaq3Answer
} from "@/locales/.generated/server";

export const nav = (lang: SupportedLanguage) => {
  const data = [
    { label: ragChatbotNavItems0Label(lang), href: "#key-features" },
    { label: ragChatbotNavItems1Label(lang), href: "#how-it-works" },
    { label: ragChatbotNavItems2Label(lang), href: "#what-is-included" },
    { label: ragChatbotNavItems3Label(lang), href: "#faqs" }
  ];
  return data;
};

export const getKeyFeatures = (lang: SupportedLanguage) => {
  const data = [
    {
      title: ragChatbotKeyFeaturesFeatures0Title(lang),
      description: ragChatbotKeyFeaturesFeatures0Text(lang),
      icon: "/images/inferenceai/why-work-with-us/tailored-to-your-workflow.svg"
    },
    {
      title: ragChatbotKeyFeaturesFeatures1Title(lang),
      description: ragChatbotKeyFeaturesFeatures1Text(lang),
      icon: "/images/inferenceai/why-work-with-us/speed-to-launch.svg"
    },
    {
      title: ragChatbotKeyFeaturesFeatures2Title(lang),
      description: ragChatbotKeyFeaturesFeatures2Text(lang),
      icon: "/images/inferenceai/why-work-with-us/ongoing-support-n-optimization.svg"
    },
    {
      title: ragChatbotKeyFeaturesFeatures3Title(lang),
      description: ragChatbotKeyFeaturesFeatures3Text(lang),
      icon: "/images/inferenceai/why-work-with-us/speed-to-launch.svg"
    },
    {
      title: ragChatbotKeyFeaturesFeatures4Title(lang),
      description: ragChatbotKeyFeaturesFeatures4Text(lang),
      icon: "/images/inferenceai/why-work-with-us/ongoing-support-n-optimization.svg"
    }
  ];

  return data;
};

export const getHowItWorks = (lang: SupportedLanguage) => {
  const data = [
    {
      title: ragChatbotHowItWorksSteps0Title(lang),
      description: ragChatbotHowItWorksSteps0Text(lang),
      image: "/images/inferenceai/how-it-works/discovery-n-strategy.png"
    },
    {
      title: ragChatbotHowItWorksSteps1Title(lang),
      description: ragChatbotHowItWorksSteps1Text(lang),
      image: "/images/inferenceai/how-it-works/agent-design-n-prototype.png"
    },
    {
      title: ragChatbotHowItWorksSteps2Title(lang),
      description: ragChatbotHowItWorksSteps2Text(lang),
      image: "/images/inferenceai/how-it-works/integration-n-deployment.png"
    },
    {
      title: ragChatbotHowItWorksSteps3Title(lang),
      description: ragChatbotHowItWorksSteps3Text(lang),
      image: "/images/inferenceai/how-it-works/training-n-iteration.png"
    }
  ];

  return data;
};

export const getWhatIsIncluded = (lang: SupportedLanguage) => {
  const data = [
    {
      title: ragChatbotWhatIsIncludedItems0(lang),
      icon: "/images/inferenceai/what-you-get/end-to-end-strategy-session.svg"
    },
    {
      title: ragChatbotWhatIsIncludedItems1(lang),
      icon: "/images/inferenceai/what-you-get/custom-ai-agent-architecture-n-design.svg"
    },
    {
      title: ragChatbotWhatIsIncludedItems2(lang),
      icon: "/images/inferenceai/what-you-get/pompt-engineering-n-llm-integration.svg"
    },
    {
      title: ragChatbotWhatIsIncludedItems3(lang),
      icon: "/images/inferenceai/what-you-get/api-n-tool-integrations.svg"
    }
  ];

  return data;
};

export const getFaqs = (lang: SupportedLanguage) => {
  return [
    {
      question: ragChatbotFaq0Question(lang),
      answer: ragChatbotFaq0Answer(lang)
    },
    {
      question: ragChatbotFaq1Question(lang),
      answer: ragChatbotFaq1Answer(lang)
    },
    {
      question: ragChatbotFaq2Question(lang),
      answer: ragChatbotFaq2Answer(lang)
    },
    {
      question: ragChatbotFaq3Question(lang),
      answer: ragChatbotFaq3Answer(lang)
    }
  ];
};
