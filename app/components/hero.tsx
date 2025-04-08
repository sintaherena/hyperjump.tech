import "@/app/galaxy.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PartnersList } from "./partner-list";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen bg-[#1C1F2E] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner.webp"
            alt="Hero background"
            className="object-cover object-center"
            fill
            priority
          />
        </div>

        <article className="relative z-10 flex items-center min-h-screen">
          <div className="w-full mx-auto px-4 lg:py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 md:mb-6">
                Accelerating Enterprise Innovation
              </h1>
              <p className="text-white text-base md:text-lg mb-6 md:mb-8">
                Strategic technology solutions for scalable growth and
                efficiency
              </p>
              <Button
                asChild
                className="w-[240px] bg-white text-hyperjump-blue hover:bg-white hover:text-blue-400 border border-hyperjump-blue"
              >
                <Link href="mailto:solutions@hyperjump.tech">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
            <PartnersList />
          </div>
        </article>
      </section>
    </>
  );
}
