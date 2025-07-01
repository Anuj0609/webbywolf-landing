import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, easeOut } from "framer-motion";

function Gallery() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i = 0) => ({
      opacity: 1,
      transition: { duration: 0.7, ease: easeOut, delay: i * 0.12 },
    }),
  };

  const galleryImages = [
    { src: "./Gallery1.png", className: "absolute top-[109px] right-[570px]" },
    { src: "./Gallery2.png", className: "absolute top-20 right-[81px]" },
    { src: "/Gallery3.png", className: "absolute top-[266px] right-[735px]" },
    { src: "/Gallery4.png", className: "absolute top-[350px] right-[81px]" },
    { src: "/Gallery5.png", className: "absolute bottom-0 right-[1224px]" },
    { src: "/Gallery6.png", className: "absolute bottom-0 right-[736px]" },
    { src: "/Gallery7.png", className: "absolute bottom-0 right-[570px]" },
    { src: "/Gallery8.png", className: "absolute bottom-0 right-[81px]" },
  ];

  const galleryImagesMobile = [
    "./Gallery1.png",
    "./Gallery2.png",
    "/Gallery3.png",
    "/Gallery4.png",
    "/Gallery5.png",
    "/Gallery6.png",
    "/Gallery7.png",
    "/Gallery8.png",
  ];

  return (
    <div className="bg-[#F1F5F9] w-full relative mb-20 md:mb-60">
      {/* Section Title and Button */}
      <motion.div
        className="px-4 sm:px-10 md:px-20 pt-8 sm:pt-14 md:pt-20 pb-8  xl:pb-[370px] max-w-full xl:max-w-[470px] 2xl:max-w-[1500px] flex flex-col gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="font-['Inter'] font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[100%] tracking-[0.08em] text-[#475569] pt-[-16px]">
            NO LIMITS
          </div>
          <div className="font-['Roboto_Condensed'] font-bold text-[26px] sm:text-[32px] md:text-[42px] leading-[110%] tracking-[-0.02em] uppercase text-[#475569]">
            Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="font-['Inter'] font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] tracking-[0] text-black">
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
          pharetra tempor quis arcu. Ipsum nullam.
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

      {/* Absolute-positioned images for xl and above */}
      <div className="hidden xl:block w-full h-full absolute top-0 left-0 pointer-events-none">
        {galleryImages.map((img, i) => (
          <motion.img
            key={img.src}
            src={img.src}
            alt=""
            className={img.className + " pointer-events-auto"}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            whileHover={{ scale: 1.15, zIndex: 20 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      {/* 2-column grid for mobile, md, and lg screens */}
      <div className="block xl:hidden px-4 pt-4 pb-8">
        <div className="grid grid-cols-2 gap-3">
          {galleryImagesMobile.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              className="rounded-lg w-full h-32 object-cover"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              whileHover={{ scale: 1.08, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
