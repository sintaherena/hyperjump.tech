import Image from "next/image";
import { github } from "@/data.json";
import StickyNavigation from "@/app/components/sticky-nav";
import { cn } from "@/app/utils/tailwind";

export default function Nav() {
  return (
    <StickyNavigation>
      <div className="w-full group-[[data-scroll='true']]:text-black group-[[data-scroll='false']]:text-white container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href={"/"}
          >
            {["/images/hyperjump-white.png", "/images/hyperjump-black.png"].map(
              (src, i) => (
                <Image
                  key={i}
                  id="brandlogo"
                  className={cn(
                    "w-32",
                    src === "/images/hyperjump-white.png"
                      ? `group-[[data-scroll='false']]:block group-[[data-scroll='true']]:hidden`
                      : `group-[[data-scroll='true']]:block group-[[data-scroll='false']]:hidden`
                  )}
                  src={src}
                  alt="Hyperjump Logo"
                  width={128}
                  height={32}
                />
              )
            )}
          </a>
        </div>

        <div
          className="w-full flex-grow lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="flex flex-row space-x-2 items-center no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                target="blank"
                rel="noopener noreferrer"
                href={github}
              >
                <i className="fa fa-github" aria-hidden="true"></i>
                <span>Github</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </StickyNavigation>
  );
}
