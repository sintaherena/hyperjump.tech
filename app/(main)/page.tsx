import Faqs from "../components/faqs";
import OpenSourceProducts from "../components/open-source-products";
import CaseStudies from "../components/case-studies";
import Services from "../components/services";

export default function Home() {
  return (
    <>
      <Services />
      <CaseStudies />
      <OpenSourceProducts />
      <Faqs />
    </>
  );
}
