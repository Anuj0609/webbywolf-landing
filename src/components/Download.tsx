import React from "react";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";

function Download() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };
  const imageVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut, delay: 0.2 },
    },
  };

  return (
    <motion.div
      className="
        bg-[#F3F3F3] mb-16 md:mb-40 relative
        pt-8 sm:pt-16 md:pt-24  2xl:pt-60
        pl-4 sm:pl-10 md:pl-20
        pb-8 sm:pb-16 md:pb-20
        pr-4 sm:pr-10 md:pr-[90px] 
        gap-8 md:gap-[66px]
        flex flex-col w-full overflow-hidden
      "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="flex flex-col gap-3 md:gap-5 lg:pr-[50px] xl:pr-[850px]"
        variants={fadeUpVariants}
      >
        <div className="font-['Inter'] font-semibold text-[20px] sm:text-[22px] md:text-[24px] leading-[100%] tracking-[-0.04em] text-[#0546D2]">
          Lorem Ipsum
        </div>
        <div className="font-inter font-extrabold text-[26px] sm:text-[32px] md:text-[42px] leading-[110%] tracking-[-0.02em] capitalize text-black">
          Lorem ipsum dolor sit amet
        </div>
        <div className="font-inter font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] tracking-[0em] text-black">
          Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
          suspendisse convallis. Urna a urna lectus donec felis risus duis
          pellentesque. Pellentesque ultricies ipsum.
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 md:gap-6"
        variants={fadeUpVariants}
      >
        <motion.button
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
          whileTap={{ scale: 0.96 }}
          style={{ borderRadius: 8 }}
        >
          <Image src="/Download1.png" alt="" width={140} height={42} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
          whileTap={{ scale: 0.96 }}
          style={{ borderRadius: 8 }}
        >
          <Image src="/Download2.png" alt="" width={140} height={42} />
        </motion.button>
      </motion.div>
      <motion.img
        src="./Download3.png"
        alt=""
        className="hidden xl:block absolute right-[50px] bottom-0 w-[1075px] h-[550px]"
        variants={imageVariants}
      />
    </motion.div>
  );
}

export default Download;
