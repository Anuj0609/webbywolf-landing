import React from "react";
import { motion, easeOut } from "framer-motion";

function Details() {
  const cards = [
    {
      image: "/Detail1.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
      button: "Learn More",
    },
    {
      image: "/Detail2.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
      button: "Learn More",
    },
    {
      image: "/Detail3.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
      button: "Learn More",
    },
    {
      image: "/Detail4.png",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
      button: "Learn More",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  return (
    <div className="px-4 sm:px-8 md:px-20 py-6 md:py-10 mb-10 md:mb-40">
      <div className="hidden md:block pl-5 pr-[521px]">
        <div className="text-[24px] font-semibold leading-[100%] tracking-[-0.04em] text-[#0546D2] font-['Inter'] mb-2">
          Lorem ipsum dolor sit amet
        </div>

        <div className="text-[42px] font-bold leading-[100%] tracking-[-0.02em] uppercase text-[#222222] font-['Roboto_Condensed'] mb-4">
          LOREM IPSUM dolor sit
        </div>

        <div className="text-[18px] font-normal leading-[25px] tracking-[0em] text-[#000000] font-['Inter'] mb-10">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
          donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
          nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus
          lectus.
        </div>
      </div>

      <div className="block md:hidden mb-6">
        <div className="text-[18px] font-semibold leading-[100%] tracking-[-0.04em] text-[#0546D2] font-['Inter'] mb-1">
          Lorem ipsum dolor sit amet
        </div>
        <div className="text-[24px] font-bold leading-[110%] tracking-[-0.02em] uppercase text-[#222222] font-['Roboto_Condensed'] mb-2">
          LOREM IPSUM dolor sit
        </div>
        <div className="text-[15px] font-normal leading-[22px] tracking-[0em] text-[#000000] font-['Inter']">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
          donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
          nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus
          lectus.
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-15 px-0 md:px-[150px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-t-lg flex flex-col gap-7 shadow-md rounded-lg"
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 12px 40px rgba(0,0,0,0.13)",
            }}
            whileTap={{ scale: 0.98 }}
            style={{ transition: "box-shadow 0.3s" }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 md:h-64 object-cover rounded-t-lg mb-4"
            />
            <div className="flex flex-col gap-4 pb-8 md:pb-20 pl-2">
              <h3 className="text-[17px] md:text-[20px] font-semibold leading-[100%] tracking-[-0.02em] text-[#222222] font-['Inter'] mb-2">
                {card.title}
              </h3>
              <p className="text-[15px] md:text-[18px] leading-[22px] md:leading-[25px] font-normal text-[#000000] font-['Inter'] mb-4">
                {card.description}
              </p>
              <motion.button
                className="text-[#0546D2] hover:bg-blue-700 w-fit border-b-1 border-b-[#0546D2]"
                whileHover={{
                  color: "#fff",
                  backgroundColor: "#0546D2",
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {card.button}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Details;
