import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, easeOut } from "framer-motion";

function Information() {
  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  const paraContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18 },
    },
  };

  const paraVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easeOut, delay: 0.3 },
    },
    tap: { scale: 0.92 },
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: easeOut, delay: 0.4 },
    },
  };

  return (
    <div className="bg-[url('/Information1.png')] bg-cover bg-center w-full h-auto relative">
      <div className="flex flex-col items-center justify-center text-center h-full py-10 sm:py-14 md:py-[50px] gap-6">
        <motion.div
          className="
            font-['Roboto_Condensed'] font-bold
            text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px]
            leading-[110%] tracking-[-0.02em] uppercase text-white
            px-4 sm:px-10 md:px-[80px] xl:px-[270px]
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas
          aliquam viverra mi.
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 px-4 sm:px-8 md:px-[80px] xl:px-[354px]"
          variants={paraContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="text-white text-[15px] sm:text-[16px] md:text-[18px] font-semibold leading-[22px] md:leading-[25px] text-center font-['Inter']"
            variants={paraVariants}
          >
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
            volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
            justo pellentesque id sed. Id tellus id luctus id. At quis nunc
            libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum
            nulla quam.
          </motion.span>
          <motion.span
            className="text-white text-[15px] sm:text-[16px] md:text-[18px] font-semibold leading-[22px] md:leading-[25px] text-center font-['Inter']"
            variants={paraVariants}
          >
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
            volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
            justo pellentesque id sed. Id tellus id luctus id. At quis nunc
            libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum
            nulla quam.
          </motion.span>
        </motion.div>

        <motion.div
          className="flex justify-center"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.button
            type="submit"
            className="bg-white text-[#1959AC] px-6 py-2 rounded hover:bg-blue-700 flex justify-center items-center gap-1"
            whileTap="tap"
            variants={buttonVariants}
          >
            Loerum Ipsum <FaArrowRightLong />
          </motion.button>
        </motion.div>
      </div>

      <motion.button
        className="
          hidden md:block
          py-[10.5px] px-[32.5px] text-black text-[22px] sm:text-[26px] md:text-[32px]
          leading-[100%] tracking-[-0.02em] font-extrabold font-['Inter'] bg-[#DBDBDB] mb-1
          absolute top-4 left-4 sm:top-8 sm:left-8 md:top-10 md:left-20
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={logoVariants}
      >
        LOGO
      </motion.button>
    </div>
  );
}

export default Information;
