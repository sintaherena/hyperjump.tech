import { SupportedLanguage } from "@/locales/.generated/types";
import {
  whyTailoredTitle,
  why0Desc,
  whySpeedTitle,
  why1Desc,
  whySupportTitle,
  why2Desc,
  howTailoredTitle,
  how0Desc,
  howSpeedTitle,
  how1Desc,
  howSupportTitle,
  how2Desc,
  howTrainTitle,
  how3Desc,
  getTailoredTitle,
  getSpeedTitle,
  getSupportTitle,
  getTrainTitle,
  get4Title,
  get5Title,
  caseTailoredTitle,
  caseRagCategory,
  caseRagDesc,
  caseSpeedTitle,
  caseMeetingCategory,
  caseMeetingDesc,
  faqQAgentProblems,
  faqAAgentProblems,
  faqQDuration,
  faqADuration,
  faqQAiKnowledge,
  faqAAiKnowledge,
  faqQTools,
  faqATools,
  faqQInternalData,
  faqAInternalData
} from "@/locales/.generated/server";

export const getWhyWorkWithUs = (lang: SupportedLanguage) => {
  const data = [
    {
      title: whyTailoredTitle(lang),
      description: why0Desc(lang),
      icon: "/images/inferenceai/why-work-with-us/tailored-to-your-workflow.svg"
    },
    {
      title: whySpeedTitle(lang),
      description: why1Desc(lang),
      icon: "/images/inferenceai/why-work-with-us/speed-to-launch.svg"
    },
    {
      title: whySupportTitle(lang),
      description: why2Desc(lang),
      icon: "/images/inferenceai/why-work-with-us/ongoing-support-n-optimization.svg"
    }
  ];

  return data;
};

export const getHowItWorks = (lang: SupportedLanguage) => {
  const data = [
    {
      title: howTailoredTitle(lang),
      description: how0Desc(lang),
      image: "/images/inferenceai/how-it-works/discovery-n-strategy.png"
    },
    {
      title: howSpeedTitle(lang),
      description: how1Desc(lang),
      image: "/images/inferenceai/how-it-works/agent-design-n-prototype.png"
    },
    {
      title: howSupportTitle(lang),
      description: how2Desc(lang),
      image: "/images/inferenceai/how-it-works/integration-n-deployment.png"
    },
    {
      title: howTrainTitle(lang),
      description: how3Desc(lang),
      image: "/images/inferenceai/how-it-works/training-n-iteration.png"
    }
  ];

  return data;
};

export const getWhatYouGet = (lang: SupportedLanguage) => {
  const data = [
    {
      title: getTailoredTitle(lang),
      icon: "/images/inferenceai/what-you-get/end-to-end-strategy-session.svg"
    },
    {
      title: getSpeedTitle(lang),
      icon: "/images/inferenceai/what-you-get/custom-ai-agent-architecture-n-design.svg"
    },
    {
      title: getSupportTitle(lang),
      icon: "/images/inferenceai/what-you-get/pompt-engineering-n-llm-integration.svg"
    },
    {
      title: getTrainTitle(lang),
      icon: "/images/inferenceai/what-you-get/api-n-tool-integrations.svg"
    },
    {
      title: get4Title(lang),
      icon: "/images/inferenceai/what-you-get/deployment-n-hosting-setup.svg"
    },
    {
      title: get5Title(lang),
      icon: "/images/inferenceai/what-you-get/training-documentation-n-walkthrough.svg"
    }
  ];

  return data;
};

export const getCaseStudies = (lang: SupportedLanguage) => {
  const data = [
    {
      title: caseTailoredTitle(lang),
      category: caseRagCategory(lang),
      description: caseRagDesc(lang)
    },
    {
      title: caseSpeedTitle(lang),
      category: caseMeetingCategory(lang),
      description: caseMeetingDesc(lang)
    }
  ];

  return data;
};

export const getFaqs = (lang: SupportedLanguage) => {
  return [
    {
      question: faqQAgentProblems(lang),
      answer: faqAAgentProblems(lang)
    },
    {
      question: faqQDuration(lang),
      answer: faqADuration(lang)
    },
    {
      question: faqQAiKnowledge(lang),
      answer: faqAAiKnowledge(lang)
    },
    {
      question: faqQTools(lang),
      answer: faqATools(lang)
    },
    {
      question: faqQInternalData(lang),
      answer: faqAInternalData(lang)
    }
  ];
};
