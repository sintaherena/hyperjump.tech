import SmddLangLayout from "./[lang]/layout";
import Home from "./[lang]/page";

export default function NoLangSmdd2024() {
  return (
    <SmddLangLayout params={{ lang: "en" }}>
      <Home params={{ lang: "en" }} />
    </SmddLangLayout>
  );
}
