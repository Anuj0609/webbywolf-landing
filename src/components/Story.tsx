import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Story() {
  const cardsData = [
    {
      image: "/Story1.png",
      card: {
        title: "Artist & Investor",
        description:
          "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
        button: "Read Full Story",
      },
    },
    {
      image: "/Story1.png",
      card: {
        title: "Designer & Creator",
        description:
          "Morbi in fermentum et sollicitudin ac orci phasellus. Blandit turpis cursus in hac habitasse platea. Sed euismod nisi porta lorem.",
        button: "Read Full Story",
      },
    },
    {
      image: "/Story1.png",
      card: {
        title: "Founder & Leader",
        description:
          "Purus semper eget duis at tellus at urna condimentum. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus.",
        button: "Read Full Story",
      },
    },
    {
      image: "/Story1.png",
      card: {
        title: "Musician & Performer",
        description:
          "Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Aenean euismod elementum nisi quis eleifend quam adipiscing.",
        button: "Read Full Story",
      },
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const currentCard = cardsData[current];

  return (
    <div className="px-4 sm:px-8 md:px-20 py-6">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 uppercase">
          Lorem ipsum dolor sit amet{" "}
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
          Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
          aliquam at ac est nisi, interdum etiam dignissim.
        </p>
      </div>

      <div className="relative w-full md:w-1/2 mx-auto transition-all duration-700 ease-in-out">
        <div className="hidden md:block relative">
          <img
            src={currentCard.image}
            alt={currentCard.card.title}
            className="w-full object-cover rounded-lg transition-all duration-700 ease-in-out"
          />

          <div className="absolute top-[20%] right-[10%] translate-x-full w-[90%] bg-white shadow-lg p-8 rounded-lg transition-all duration-700 ease-in-out">
            <div className="font-semibold text-[24px] leading-[100%] tracking-[0.06em] font-inter mb-2 text-slate-600">
              {currentCard.card.title}
            </div>
            <div className="font-inter font-normal text-[18px] leading-[25px] tracking-[0%] text-slate-900 mb-4">
              {currentCard.card.description}
            </div>
            <button className="text-[#1959AC] px-4 py-2 rounded flex items-center gap-1 justify-center">
              {currentCard.card.button}
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        <div className="block md:hidden">
          <img
            src={currentCard.image}
            alt={currentCard.card.title}
            className="w-full object-cover rounded-lg transition-all duration-700 ease-in-out"
          />
          <div className="w-full bg-white shadow-lg p-4 rounded-lg mt-4">
            <div className="font-semibold text-lg leading-[100%] tracking-[0.06em] font-inter mb-1 text-slate-600">
              {currentCard.card.title}
            </div>
            <div className="font-inter font-normal text-[15px] leading-[22px] tracking-[0%] text-slate-900 mb-3">
              {currentCard.card.description}
            </div>
            <button className="text-[#1959AC] px-3 py-2 rounded flex items-center gap-1 justify-center text-sm">
              {currentCard.card.button}
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-8 md:mt-10">
        <button
          onClick={handlePrev}
          className="text-[#1959AC] text-lg font-bold"
          aria-label="Previous"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="text-[#1959AC] text-lg font-bold"
          aria-label="Next"
        >
          →
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {cardsData.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              i === current ? "bg-[#1959AC]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
