import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Join() {
  const people = [
    {
      icon: "./Icon1.png",
      description:
        "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      profile: "/User1.png",
      name: "Jane Cooper",
    },
    {
      icon: "./Icon2.png",
      description:
        "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
      profile: "/User2.png",
      name: "Ralph Edwards",
    },
    {
      icon: "./Icon3.png",
      description:
        "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
      profile: "/User3.png",
      name: "Courtney Henry",
    },
    {
      icon: "./Icon4.png",
      description:
        "Hendrerit augue ut nec,  quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      profile: "/User4.png",
      name: "Cameron Williamson",
    },
    {
      icon: "./Icon1.png",
      description:
        "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      profile: "/User1.png",
      name: "Vikram Iyer",
    },
  ];

  // Responsive: show 3 cards on md+, 1 card on mobile
  const isMd = typeof window !== "undefined" && window.innerWidth >= 768;
  const [cardsPerView, setCardsPerView] = useState(isMd ? 3 : 1);

  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth >= 768 ? 3 : 1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    if (currentIndex + cardsPerView < people.length) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visiblePeople = people.slice(currentIndex, currentIndex + cardsPerView);

  // Animation variants for the cards
  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 60 },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <div className="bg-white py-10 md:py-45">
      <div className="bg-[#155ADA] text-white flex flex-col items-start px-4 sm:px-8 md:p-20 gap-10 md:gap-20">
        <div className="flex flex-col md:flex-row justify-between w-full items-center md:pr-12 gap-6">
          <div className="text-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">
              Join other Sun harvesters
            </h2>
            <p className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
              Lorem ipsum dolor sit amet
            </p>
            <p className="max-w-2xl mx-auto text-sm md:text-base">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <button className="font-['Inter'] font-bold text-[14px] md:text-[15px] leading-[100%] tracking-[0%] align-middle bg-white text-black px-8 md:px-[71.5px] py-2 md:py-[10px] rounded">
            Lorem Ipsum
          </button>
        </div>
        <div className="flex flex-col items-center gap-6 w-full">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full`}>
            <AnimatePresence initial={false} custom={direction}>
              {visiblePeople.map((person, index) => (
                <motion.div
                  key={person.name + currentIndex} // unique key for animation
                  className="bg-white text-[#0F172A] p-6 rounded-xl shadow-md flex flex-col gap-4 
                         transition-transform duration-300 ease-in-out hover:scale-105"
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  layout
                >
                  <img src={person.icon} alt="icon" className="w-10 h-10" />
                  <p className="text-[#475569] text-[15px] md:text-[18px] leading-[22px] md:leading-[25px] font-normal font-['Inter']">
                    {person.description}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={person.profile}
                      alt={person.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="text-[14px] md:text-[16px] font-medium font-['Roboto'] tracking-[0.5px]">
                      {person.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center w-full">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center 
             bg-[#155ADA] text-white text-xl 
             rounded-full shadow border border-white disabled:opacity-50"
          >
            <FaLongArrowAltLeft />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex + cardsPerView >= people.length}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center 
             bg-[#155ADA] text-white text-xl 
             rounded-full shadow border border-white disabled:opacity-50"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}
