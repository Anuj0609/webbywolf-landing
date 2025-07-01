import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";

export default function Feature() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.9, ease: easeOut, delay: 0.3 },
    },
  };

  return (
    <div className="relative bg-white w-full pr-0 xl:pr-[74px]">
      <motion.div
        className="
          bg-[#F8F8F8]
          w-full
          px-4 sm:px-8 xl:pl-[658px] md:pr-20
          pt-8 sm:pt-14 xl:pt-[150px]
          pb-8 sm:pb-14 md:pb-[84px]
          flex flex-col gap-6 md:gap-10
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="flex flex-col gap-3 md:gap-5">
          <div className="font-['Inter'] font-semibold text-[18px] sm:text-[20px] md:text-[24px] leading-[100%] tracking-[-0.04em] text-[#0546D2]">
            Lorem ipsum
          </div>
          <div className="font-['Roboto_Condensed'] font-bold text-[24px] sm:text-[32px] md:text-[42px] leading-[110%] tracking-[-0.02em] uppercase">
            <span className="text-[#1959AC]">Lorem</span> ipsum dolor sit amet
            consectetur. Enim donec.
          </div>
          <p className="font-['Inter'] font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] tracking-[0%]">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim
            amet non.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 md:gap-[45px]">
          <div className="flex flex-col gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={`left-${i}`}
                className="font-['Inter'] font-semibold text-[17px] sm:text-[18px] md:text-[20px] leading-[100%] tracking-[-0.02em] text-[#222222] pb-2 md:pb-3"
              >
                Lorem Ipsum
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={`right-${i}`}
                className="font-['Inter'] font-semibold text-[17px] sm:text-[18px] md:text-[20px] leading-[100%] tracking-[-0.02em] text-[#222222] pb-2 md:pb-3"
              >
                Lorem Ipsum
              </div>
            ))}
          </div>
        </div>

        <motion.button
          className="w-fit bg-[#1959AC] text-white font-['Inter'] font-bold text-[14px] sm:text-[15px] leading-[100%] tracking-[0%] align-middle px-4 py-2 rounded flex gap-1"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Loerum Ipsum <FaArrowRightLong className="text-white" />
        </motion.button>
      </motion.div>

      <motion.div
        className="block xl:hidden mt-10 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Image
          src="/Feature1.png"
          alt="Feature"
          width={400}
          height={400}
          className="w-[200px] sm:w-[300px] md:w-[400px] h-auto"
        />
      </motion.div>

      <motion.div
        className="hidden xl:block absolute left-0 top-[-10%]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Image
          src="/Feature1.png"
          alt="Feature"
          width={550}
          height={550}
          className="w-[220px] xl:w-[550px] h-auto"
        />
      </motion.div>
    </div>
  );
}
