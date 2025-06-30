import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  const aboutSections = [
    {
      image: "/About1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
    },
    {
      image: "/About2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
    },
    {
      image: "/About3.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[8px] after:bg-[linear-gradient(90deg,_#043898_0%,_#079902_45.96%,_#170041_91.18%)] after:z-10">
      <div
        className="
          flex flex-col xl:flex-row gap-8 xl:gap-[30px]
          px-4 sm:px-6 md:px-10 lg:px-[80px]
          pt-10 sm:pt-14 md:pt-[80px]
          pb-10 sm:pb-14 md:pb-[88px]
          relative z-10 bg-white
        "
      >
        <motion.div
          className="
            flex flex-col flex-1
            pr-0 xl:pr-[40px]
            gap-5
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className="font-semibold text-[20px] sm:text-[22px] md:text-[24px] leading-[100%] tracking-[-0.04em] text-[#0546D2]"
            variants={textVariants}
          >
            Lorem ipsum dolor sit
          </motion.div>
          <motion.div
            className="font-bold text-[28px] sm:text-[34px] md:text-[42px] leading-[100%] tracking-[-0.02em] uppercase text-[#222222] mb-4 font-['Roboto_Condensed']"
            variants={textVariants}
          >
            Lorem ipsum dolor sit amet
          </motion.div>
          <motion.div
            className="text-[16px] sm:text-[17px] md:text-[18px] leading-[25px] font-normal tracking-normal text-gray-700 mb-10 font-['Inter']"
            variants={textVariants}
          >
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
            facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
            integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus
            at purus lectus.
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 md:gap-10"
            variants={containerVariants}
          >
            {aboutSections.map((section, index) => (
              <motion.div
                key={index}
                className="flex flex-row items-center gap-4 sm:gap-6 md:gap-[30px]"
                variants={cardVariants}
              >
                <div className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[149px] md:h-[149px] shrink-0 rounded overflow-hidden shadow-md">
                  <Image
                    src={section.image}
                    alt={`About Section ${index + 1}`}
                    width={149}
                    height={149}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] text-gray-700 font-inter tracking-[0]">
                  {section.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-9 pt-10 md:pt-20"
            variants={textVariants}
          >
            <motion.button
              type="submit"
              className="bg-blue-600 text-white px-5 sm:px-6 py-2 rounded hover:bg-blue-700 flex justify-center items-center gap-1 text-[15px] sm:text-[16px]"
              whileTap={{ scale: 0.95 }}
            >
              Loerum Ipsum <FaArrowRightLong className="text-white" />
            </motion.button>
            <div className="text-[#043898] flex flex-row items-center gap-2 text-[15px] sm:text-[16px]">
              <IoCallOutline />
              <div>123456789</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="
            flex-shrink-0
            w-full h-[300px]
            sm:w-[400px] sm:h-[400px]
            md:w-[500px] md:h-[600px]
            xl:w-[629px] xl:h-[803px]
            mx-auto
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
        >
          <Image
            src="/About4.png"
            alt="Decorative Graphic"
            width={629}
            height={803}
            className="w-full h-full object-cover rounded"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
