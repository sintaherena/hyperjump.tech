/* eslint-disable @next/next/no-img-element */
import { demosAndDocumentation } from "@/locales/.generated/server";
import { SupportedLanguage } from "@/locales/.generated/types";

export default function DemosAndDocs({ lang }: { lang: SupportedLanguage }) {
  const items = [
    {
      image: "/images/smdd/indira.png",
      link: "https://web.festivalrelawan.com",
      title: "Indira: AI assistant for volunteering platform",
    },
    {
      image: "/images/smdd/smddcb.png",
      link: "https://digitalday.sinarmas.com",
      title: "AI Chatbot with Retrieval-Augmented Generation for SMDD 2024",
    },
    {
      image: "/images/smdd/ai.png",
      link: "https://rfynbbyeuvbhjbqiixxk.supabase.co/storage/v1/object/public/documents/ai.pdf",
      title: "How We Build RAG Chatbot for SMDD",
    },
    {
      image: "/images/smdd/volunteering-platform.png",
      link: "https://rfynbbyeuvbhjbqiixxk.supabase.co/storage/v1/object/public/documents/volunteering-platform.pdf",
      title: "Unlocking Employee Engagement with Corporate Volunteering",
    },
  ];

  return (
    <section className="bg-white w-full pt-4 sm:pt-0 xl:pt-16 px-4">
      <div className="w-full max-w-7xl mx-auto text-black container">
        <h1 className="my-4 xl:text-5xl text-2xl font-bold leading-tight mb-8">
          {demosAndDocumentation(lang)}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {items.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col  bg-white rounded-t rounded-b-none overflow-hidden shadow pb-6 space-y-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div>
                  <a
                    href={item.link}
                    className="flex flex-wrap no-underline hover:no-underline text-smdd-red font-bold px-4"
                  >
                    {item.title}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
