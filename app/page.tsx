import Script from "next/script";
import Hero from "@/app/components/hero";
import Projects from "@/app/components/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Script src="https://buttons.github.io/buttons.js" />
      <Script src="https://kit.fontawesome.com/f6999a3218.js" />
    </>
  );
}
