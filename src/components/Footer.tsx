import React from "react";
import { motion, easeOut } from "framer-motion";

export default function Footer() {
  const loremData = [
    {
      title: "Lorem Ipsum ",
      options: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum ",
      options: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum ",
      options: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum ",
      options: ["Lorem Ipsum"],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  return (
    <motion.div
      className="bg-[#171E2B] w-full py-8 sm:py-10 px-4 sm:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="flex flex-col items-center mb-6">
        <motion.button
          className="py-2 px-8 sm:py-[10.5px] sm:px-[32.5px] text-black text-[22px] sm:text-[32px] leading-[100%] tracking-[-0.02em] font-extrabold align-middle font-['Inter'] bg-[#DBDBDB] mb-1"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          LOGO
        </motion.button>
      </div>

      <div
        className="
        flex flex-col md:flex-row
        justify-center md:justify-between
        items-center md:items-start
        gap-8 md:gap-8
        text-white
        px-0 xl:pl-[392px] xl:pr-[252px]
      "
      >
        {loremData.map((section, index) => (
          <div
            key={index}
            className="min-w-[150px] mb-6 md:mb-0 text-center md:text-left"
          >
            <h3 className="text-[16px] sm:text-[18px] font-bold mb-3 font-['Inter']">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.options.map((option, idx) => (
                <motion.li
                  key={idx}
                  className="text-[15px] sm:text-[16px] font-normal font-['Inter']"
                  whileHover={{
                    color: "#1959AC",
                    x: 8,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ cursor: "pointer" }}
                >
                  {option}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
