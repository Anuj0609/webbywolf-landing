import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Contact() {
  const features = [
    {
      icon: "/Contact1.png",
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description:
        "GLorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
      icon: "/Contact1.png",
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description:
        "GLorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
    {
      icon: "/Contact1.png",
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      description:
        "GLorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
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
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div className="bg-white w-full h-auto flex flex-col relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-15">
      <motion.div
        className="
          flex flex-col gap-5
          xl:pl-20 xl:pr-[622px]
          md:pl-10 md:pr-32
          sm:pl-4 sm:pr-4
        "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="font-['Inter'] font-semibold text-[20px] sm:text-[22px] md:text-[24px] leading-[100%] tracking-[-0.04em] text-[#0546D2]">
          Lorem ipsum dolor sit amet
        </div>
        <div className="font-['Roboto_Condensed'] font-bold text-[28px] sm:text-[34px] md:text-[42px] leading-[100%] tracking-[-0.02em] uppercase text-[#222222]">
          Lorem ipsum dolor sit amet consectetur. Eu elit.
        </div>
        <div className="text-[15px] sm:text-[16px] md:text-[18px]">
          Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo
          eleifend condimentum in vitae faucibus. Amet massa malesuada sit
          pretium. Donec pharetra erat lacus suspendisse ornare.{" "}
        </div>
      </motion.div>

      <motion.div
        className="
          flex flex-col gap-3 py-7
          xl:pl-20 xl:pr-[598px]
          md:pl-10 md:pr-32
          sm:pl-4 sm:pr-4
        "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex gap-2 items-start py-5"
            variants={featureVariants}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
              <Image
                src={feature.icon}
                alt="icon"
                width={36}
                height={36}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <div className="font-['Inter'] font-semibold text-[17px] sm:text-[18px] md:text-[20px] leading-[100%] tracking-[-0.02em] text-[#222222] mb-1">
                {feature.title}
              </div>
              <p className="font-['Inter'] text-[15px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] text-[#000000]">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="
          hidden md:block
          absolute right-0 top-12
          w-[200px] h-[220px]
          sm:w-[300px] sm:h-[340px]
          md:w-[400px] md:h-[440px]
          xl:w-[570px] xl:h-[620px]
          z-10
        "
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src="/Contact2.png"
          alt="Contact Illustration"
          width={570}
          height={620}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="
          block md:hidden mt-6 mx-auto w-full max-w-xs sm:max-w-sm
        "
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src="/Contact2.png"
          alt="Contact Illustration"
          width={300}
          height={340}
          className="w-full h-auto object-cover rounded"
        />
      </motion.div>

      <div className="w-full h-[6px] sm:h-[8px] bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] mt-4 mb-6"></div>
    </div>
  );
}

export default Contact;
