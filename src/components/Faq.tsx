import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
    },
    {
      id: 4,
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="px-4 sm:px-8 md:px-25 py-6 sm:py-10 flex flex-col items-start bg-white w-full">
      <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-14 md:mb-[110px] w-full">
        FREQUENTLY ASKED QUESTIONS (FAQs)
      </h2>
      {faqData.map((faq, index) => (
        <div
          key={faq.id}
          className="py-4 sm:py-6 px-2 sm:px-6 md:px-10 w-full flex flex-col items-center justify-center"
          style={{ borderTop: "1px solid #11111133" }}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center text-left font-semibold text-base sm:text-lg focus:outline-none space-y-5"
          >
            <span className="font-semibold text-[16px] sm:text-[18px] leading-[22px] sm:leading-[25px] align-middle font-inter">
              {faq.question}
            </span>
            <span className="text-xl sm:text-2xl">
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.p
                className="mt-2 text-gray-700 text-[15px] sm:text-[18px] leading-[22px] sm:leading-[25px] font-normal align-middle font-inter"
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {faq.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
