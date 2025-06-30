import React from "react";
import { motion } from "framer-motion";

function Brand() {
  const rowVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: i * 0.18 },
    }),
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const brandRows = [
    ["./Brand1.png", "./Brand2.png", "./Brand3.png", "./Brand4.png"],
    ["./Brand5.png", "./Brand6.png", "./Brand7.png", "./Brand8.png"],
    ["./Brand9.png", "./Brand10.png", "./Brand11.png", "./Brand12.png"],
  ];

  return (
    <div className="flex flex-col gap-[60px] md:gap-[110px] py-10 md:py-40">
      <motion.div
        className="hidden md:block text-[28px] sm:text-[36px] md:text-[42px] leading-[100%] font-['Roboto_Condensed'] font-bold tracking-[-0.02em] text-center uppercase text-black px-4 sm:px-10 md:px-[228px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
      </motion.div>

      <div className="px-2 sm:px-8 md:px-[164px] flex flex-col gap-8 md:gap-[47px]">
        {brandRows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className={
              "flex flex-col md:flex-row md:justify-between items-center " +
              (rowIndex === 0
                ? "md:px-[81px] md:gap-[120px]"
                : rowIndex === 2
                ? "md:px-9"
                : "")
            }
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={rowIndex}
          >
            {row.map((src, imgIdx) => (
              <motion.img
                key={src}
                src={src}
                alt={`Brand ${rowIndex * 4 + imgIdx + 1}`}
                className="w-32 h-16 object-contain my-2 md:my-0"
                variants={imgVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
                whileTap={{ scale: 0.96 }}
                style={{ transition: "box-shadow 0.3s" }}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Brand;
