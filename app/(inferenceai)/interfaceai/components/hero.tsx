"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import data from "../interfaceai-data.json";
import { ScheduleConsultationButton } from "./grid-items";

export default function Hero() {
  const { header, subheader, image, banner } = data.hero;

  return (
    <section className="relative bg-[#04040B] text-white overflow-hidden">
      {/* Background Image with Zoom-in Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={image}
          alt="Hero Background"
          fill
          className="object-cover object-top"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
      <article className="relative px-4 md:px-20 mt-16 md:mt-28 z-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="items-center flex justify-center flex-col w-full"
        >
          <h1 className="mt-28 md:max-w-4xl leading-[120%] tracking-[-0.02em] font-semibold text-center bg-gradient-to-b from-white to-[#0C1711] bg-clip-text text-transparent font-figtree text-5xl md:text-6xl mb-4 md:mb-6">
            {header}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="text-[#AFB0C3] md:max-w-3xl text-base md:text-xl font-medium my-6 md:my-10"
          >
            {subheader}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          >
            <ScheduleConsultationButton />
          </motion.div>
        </motion.div>
      </article>

      {/* Bottom Banner with Fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="relative w-full h-56 md:h-[400px] z-10"
      >
        <Image
          src={banner}
          alt="Banner Bottom"
          fill
          className="object-cover md:object-top object-center"
        />
      </motion.div>
    </section>
  );
}
