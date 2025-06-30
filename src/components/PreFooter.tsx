import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion, easeOut } from "framer-motion";

function PreFooter() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  return (
    <motion.div
      className="
        px-4 sm:px-10 md:px-[80px] xl:px-[352px]
        py-10 sm:py-20 md:py-[80px] xl:py-[160px]
      "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="flex flex-col justify-center items-center gap-6 md:gap-[32px]">
        <motion.button
          className="font-extrabold text-[22px] sm:text-[28px] md:text-[32px] leading-[100%] tracking-[-0.02em] align-middle font-['Inter'] text-black bg-[#DBDBDB] px-8 sm:px-[24px] md:px-[32.5px] py-3 sm:py-[8px] md:py-[10.5px]"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          LOGO
        </motion.button>
        <div className="font-bold text-[22px] sm:text-[32px] md:text-[42px] leading-[110%] tracking-[-0.02em] text-center uppercase font-['Roboto_Condensed']">
          Lorem ipsum dolor sit amet consectetur. Dui.
        </div>
        <div className="font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] tracking-normal text-center font-['Inter'] px-2 sm:px-8 md:px-[40px] xl:px-[122px]">
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
          pharetra tempor quis arcu. Ipsum nullam.
        </div>

        <motion.button
          className="bg-[#1959AC] text-white flex gap-1 items-center px-4 sm:px-6 py-2 sm:py-[10px] rounded font-bold text-[14px] sm:text-[15px] leading-[100%] tracking-normal font-['Inter']"
          whileHover={{
            scale: 1.07,
            backgroundColor: "#043898",
            boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Lorem Ipsum{" "}
          <IoIosArrowRoundForward className="text-white text-[18px] sm:text-[20px]" />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default PreFooter;
