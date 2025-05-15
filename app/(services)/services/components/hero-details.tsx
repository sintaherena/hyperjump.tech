import Image from "next/image";

export function Hero({
  heading,
  subheading
}: {
  heading: string;
  subheading: string;
}) {
  return (
    <section
      id="hero"
      className="bg-hyperjump-black relative h-[351px] overflow-hidden px-4 text-white md:px-20">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Hero background"
          blurDataURL="/images/services/banner.webp"
          className="object-cover object-center"
          fill
          placeholder="blur"
          priority
          src="/images/services/banner.webp"
        />
      </div>

      <div className="relative z-10 flex h-[351px] flex-col items-center justify-around">
        <div className="max-w-5xl text-center text-white">
          <h1 className="mt-28 mb-4 text-3xl font-medium md:text-[40px]">
            {heading}
          </h1>
          <p className="text-lg">{subheading}</p>
        </div>
      </div>
    </section>
  );
}
