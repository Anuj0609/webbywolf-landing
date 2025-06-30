import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, easeOut } from "framer-motion";

export default function Promises() {
  const steps = ["Research", "Plan", "Design"];

  // Animation variants
  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: easeOut, delay: 0.2 },
    },
  };

  return (
    <div className="px-4 sm:px-8 md:px-20 py-10 sm:py-20 md:py-40">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10 md:pr-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeLeft}
        >
          <div className="font-['Roboto_Condensed'] font-bold text-[26px] sm:text-[32px] md:text-[42px] leading-[110%] tracking-[-0.02em] uppercase text-[#0F172A]">
            Lorem ipsum dolor sit amet
          </div>

          <div className="flex flex-col sm:flex-row">
            {steps.map((label, index) => (
              <motion.button
                key={label}
                className={`font-['Inter'] font-semibold hover:bg-[#F1F5F9] text-[16px] sm:text-[18px] md:text-[20px] leading-[100%] tracking-[-0.02em] text-[#0F172A] px-6 sm:px-[40px] md:px-[56.33px] py-2 sm:py-[12px] border border-[#CBD5E1] 
                  ${index === 0 ? "rounded-l-lg" : ""}
                  ${index === steps.length - 1 ? "rounded-r-lg" : ""}
                  ${index !== 0 ? "border-l-0" : ""}`}
                whileHover={{
                  scale: 1.06,
                  backgroundColor: "#E0E7EF",
                  color: "#1959AC",
                  transition: { type: "spring", stiffness: 400 },
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {label}
              </motion.button>
            ))}
          </div>
          <div className="font-['Inter'] font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] tracking-[0em] text-[#475569]">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
            in accumsan.
          </div>

          <motion.div
            className="font-['Roboto'] font-medium text-[15px] sm:text-[16px] leading-[24px] tracking-[0.5px] text-[#1959AC] flex items-center gap-2"
            whileHover={{ x: 8, color: "#0F172A" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Check tools <FaLongArrowAltRight />
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full md:w-auto flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeRight}
        >
          <img
            src="./Promise1.png"
            alt=""
            className="w-full max-w-xs sm:max-w-md md:w-[600px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
