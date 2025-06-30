import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function Quotation() {
  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  const formVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };
  const buttonVariants = {
    tap: { scale: 0.95 },
  };

  return (
    <div className="py-10 md:py-45 px-4">
      <motion.div
        className="pb-8 md:pb-[131px] text-center font-['Roboto_Condensed'] font-bold text-[26px] sm:text-[32px] md:text-[42px] leading-[110%] tracking-[-0.02em] uppercase text-[#222222]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headingVariants}
      >
        REQUEST A QUOTE
      </motion.div>
      <motion.form
        className="max-w-3xl mx-auto p-4 sm:p-6 bg-white space-y-6 rounded-lg shadow-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={formVariants}
      >
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded bg-[#F4F4F4]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded bg-[#F4F4F4]"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 px-4 py-2 rounded bg-[#F4F4F4]"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Timeframe <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="w-full border border-gray-300 px-4 py-2 rounded bg-[#F4F4F4]"
            >
              <option value="">Select timeframe</option>
              <option value="1 week">1 week</option>
              <option value="2 weeks">2 weeks</option>
              <option value="1 month">1 month</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Size <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="w-full border border-gray-300 px-4 py-2 rounded bg-[#F4F4F4]"
            >
              <option value="">Select size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Custom">Custom</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="w-full border border-gray-300 px-4 py-2 rounded bg-[#F4F4F4]"
            >
              <option value="">Select quantity</option>
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
              <option value="10+">10+</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 px-4 py-2 rounded bg-[#F4F4F4]"
            placeholder="Choose a project type"
          ></textarea>
        </div>

        <div className="font-['Inter'] font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-[30px] md:leading-[60px] tracking-[0px] align-middle text-center">
          By submitting this form you agree to our{" "}
          <span className="underline cursor-pointer">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>.
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <motion.button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 flex justify-center items-center gap-1"
            whileTap="tap"
            variants={buttonVariants}
          >
            Loerum Ipsum <FaArrowRightLong className="text-white" />
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}

export default Quotation;
