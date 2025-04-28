"use client";

import InferenceAILangLayout from "./[lang]/layout";
import InferenceAIPage from "./[lang]/page";

export default function NoLangInferenceAI() {
  return (
    <InferenceAILangLayout params={{ lang: "en" }}>
      <InferenceAIPage params={{ lang: "en" }} />
    </InferenceAILangLayout>
  );
}
