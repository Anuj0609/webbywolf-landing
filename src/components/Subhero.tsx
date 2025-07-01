import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

function Subhero() {
  return (
    <div
      className="
        w-full md:w-2/3 xl:w-1/2 2xl:w-1/2
        px-4 sm:px-8 md:px-12 lg:px-[66px]
        pt-10 sm:pt-20 xl:pt-[226px]
        flex flex-col gap-5
      "
    >
      <div
        className="
        font-['Roboto_Condensed'] font-bold
        text-[32px] sm:text-[40px] md:text-[25px] lg:text-[64px] xl:text-[80px] 2xl:text-[50px]
        leading-[38px] sm:leading-[46px] md:leading-[56px] lg:leading-[70px]
        tracking-[-0.02em]
      "
      >
        Lorem ipsum dolor sit amet
      </div>
      <div className="font-['Inter'] font-normal text-[16px] sm:text-[17px] md:text-[18px] 2xl:text-[20px] leading-[22px] xl:leading-[25px] 2xl:leading-[50px] tracking-[0em]">
        Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit
        sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi
        libero imperdiet neque. Justo suspendisse tristique posuere quis eget
        viverra. Nunc euismod ultrices etiam nulla habitasse.
      </div>
      <form className="gap-1 flex flex-col sm:flex-row items-stretch sm:items-center">
        <label htmlFor="newsletter" className="sr-only">
          Enter your email
        </label>
        <input
          type="email"
          name="newsletter"
          id="newsletter"
          placeholder="Enter your email"
          className="
      border border-[#C3C3C3] rounded px-4 sm:px-6 2xl:px-8 py-3 2xl:py-4
      font-['Inter'] font-bold text-[15px] 2xl:text-[17px] leading-[100%] tracking-[0em] align-middle
      flex-1 min-w-0
      md:w-40 md:flex-none
    "
          required
        />
        <button
          type="submit"
          className="
      mt-2 sm:mt-0 px-4 sm:px-6 2xl:px-8 py-3 2xl:py-4 bg-[#1959AC] rounded font-['Inter'] font-bold
      text-[15px] 2xl:text-[17px] leading-[100%] tracking-[0em] align-middle text-white flex items-center justify-center
      flex-1
      md:w-28 md:flex-none
    "
        >
          Submit
          <IoIosArrowRoundForward className="text-white ml-1 text-[20px] 2xl:text-[24px]" />
        </button>
      </form>

      <div className="flex flex-row items-center gap-2 sm:gap-3 2xl:gap-4 mt-2">
        <div className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-12 2xl:h-12 rounded-full bg-[#155ADA] flex items-center justify-center">
          <Image
            src="/vector8.png"
            alt="No credit card required"
            width={10}
            height={10}
            className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] 2xl:w-[14px] 2xl:h-[14px]"
          />
        </div>
        <div className="font-inter font-medium text-[14px] sm:text-[15px] 2xl:text-[18px] leading-[20px] sm:leading-[25px] 2xl:leading-[28px] tracking-[0em]">
          No credit card required!
        </div>
      </div>
    </div>
  );
}

export default Subhero;
