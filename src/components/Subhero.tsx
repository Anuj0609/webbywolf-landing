import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

function Subhero() {
  return (
    <div
      className="
        w-full md:w-3/4 lg:w-2/3 xl:w-1/2
        px-4 sm:px-8 md:px-12 lg:px-[66px]
        pt-10 sm:pt-20 md:pt-28 lg:pt-[226px]
        flex flex-col gap-5
      "
    >
      <div
        className="
        font-['Roboto_Condensed'] font-bold
        text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px]
        leading-[38px] sm:leading-[46px] md:leading-[56px] lg:leading-[70px]
        tracking-[-0.02em]
      "
      >
        Lorem ipsum dolor sit amet
      </div>
      <div className="font-['Inter'] font-normal text-[16px] sm:text-[17px] md:text-[18px] leading-[22px] md:leading-[25px] tracking-[0em]">
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
          className="border border-[#C3C3C3] rounded px-4 sm:px-6 py-3 font-['Inter'] font-bold text-[15px] leading-[100%] tracking-[0em] align-middle flex-1 min-w-0"
          required
        />
        <button
          type="submit"
          className="mt-2 sm:mt-0 px-4 sm:px-6 py-3 bg-[#1959AC] rounded font-['Inter'] font-bold text-[15px] leading-[100%] tracking-[0em] align-middle text-white flex items-center justify-center"
        >
          Submit
          <IoIosArrowRoundForward className="text-white ml-1" />
        </button>
      </form>
      <div className="flex flex-row items-center gap-2 mt-2">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#155ADA] flex items-center justify-center">
          <Image
            src="/vector8.png"
            alt="No credit card required"
            width={10}
            height={10}
            className="w-[10px] h-[10px]"
          />
        </div>
        <div className="font-medium text-[14px] sm:text-[15px] leading-[20px] sm:leading-[25px] tracking-[0em] font-inter">
          No credit card required!
        </div>
      </div>
    </div>
  );
}

export default Subhero;
