import data from "@/data.json";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-footer-gradient text-white px-4 py-10 md:py-14 md:px-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center">
            <Image
              src="/images/hyperjump-white.png"
              alt="Hyperjump Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </div>

          <p className="text-center text-gray-400 max-w-md text-sm md:text-base">
            Accelerating Business Growth with Cutting-Edge Technology Solutions
          </p>

          <div className="flex space-x-6">
            {data.socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 text-xl"
                aria-label={s.platform}
              >
                <i className={s.icon} aria-hidden="true"></i>
              </a>
            ))}
          </div>

          <Separator className="bg-[#2D364A] w-full" />

          <p className="text-sm text-gray-400 text-center">{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
