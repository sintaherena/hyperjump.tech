import Script from "next/script";
import Projects from "@/app/components/projects";

export default function Home() {
  return (
    <>
      <Projects />
      <Script src="https://buttons.github.io/buttons.js" />
    </>
  );
}
