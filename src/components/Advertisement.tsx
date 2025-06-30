import React from "react";
import { motion, easeOut } from "framer-motion";


export default function Advertisement() {
  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };
  const logoVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: easeOut, delay: 0.2 },
    },
    tap: { scale: 0.92 },
  };

  return (
    <div className="bg-[url('/Advertisement.png')] bg-cover bg-center w-full h-auto relative">
      <motion.div
        className="
          font-['Roboto_Condensed'] font-bold
          text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px]
          leading-[110%] tracking-[-0.02em] text-center uppercase text-white
          flex items-center justify-center h-full
          px-4 sm:px-8 md:px-[80px] xl:px-[316px]
          pt-10 sm:pt-16 md:pt-[100px] xl:pt-[167px]
          pb-10 sm:pb-16 md:pb-[100px] xl:pb-[244px]
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headingVariants}
      >
        dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
        viverra mi. dolor sit amet consectetur. Quis adipiscing
      </motion.div>
      <motion.button
        className="
          hidden md:block
          py-[10.5px] px-[32.5px] text-black text-[22px] md:text-[32px]
          leading-[100%] tracking-[-0.02em] font-extrabold align-middle font-['Inter']
          bg-[#DBDBDB] mb-1 absolute top-4 left-4 md:top-10 md:left-20
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={logoVariants}
        whileTap="tap"
      >
        LOGO
      </motion.button>
    </div>
  );
}
