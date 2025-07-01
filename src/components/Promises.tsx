import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";

export default function Promises() {
  const steps = ["Research", "Plan", "Design"];

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: easeOut, delay: 0.2 },
    },
  };

  return (
    <div className="px-4 sm:px-8 sm:py-20 xl:px-20 xl:py-40 py-10">
      <div className="flex flex-col sm:flex-row xl:flex-row items-center justify-between gap-10">
        <motion.div
          className="w-full xl:w-1/2 flex flex-col gap-6 sm:gap-10 xl:pr-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeLeft}
        >
          <div className="font-['Roboto_Condensed'] font-bold text-[26px] sm:text-[32px] sm:leading-[110%] sm:tracking-[-0.02em] uppercase text-[#0F172A]">
            Lorem ipsum dolor sit amet
          </div>

          <div className="flex flex-col sm:flex-row">
            {steps.map((label, index) => (
              <motion.button
                key={label}
                className={`font-['Inter'] font-semibold hover:bg-[#F1F5F9] text-[16px] sm:text-[18px] sm:leading-[100%] sm:tracking-[-0.02em] text-[#0F172A] px-6 sm:px-[40px] sm:py-[12px] border border-[#CBD5E1] 
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

          <div className="font-['Inter'] font-normal text-[15px] sm:text-[16px] leading-[22px] sm:leading-[25px] tracking-[0em] text-[#475569]">
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
          className="w-full sm:w-auto flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeRight}
        >
          <Image
            src="/Promise1.png"
            alt=""
            width={600}
            height={406}
            style={{ height: "auto" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
