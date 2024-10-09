"use client";

import ClientOnly from "./client-only";

const messages = [
  "Suka ngoprek JavaScript/CSS/TypeScript/Node.js/React/Vue.js/Kotlin/Go/Swift?",
  "Pengen maju bersama tukang coding yang menggandrungi dunia open-source?",
  "Ingin eksplorasi teknologi keren kayak CI/CD, Docker, microservice, dkk?",
  "UDAH DEH: Gabung kita aja -> https://hyperjump.tech/jobs/",
];

export default function Console() {
  return (
    <ClientOnly>
      <Print />
    </ClientOnly>
  );
}

const Print = () => {
  console.log(messages.join("\n"));
  return null;
};
