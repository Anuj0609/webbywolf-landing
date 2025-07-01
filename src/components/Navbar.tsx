import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { div } from "framer-motion/client";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      title: "Lorem Ipsum",
      dropdownOptions: ["Option 1", "Option 2", "Option 3"],
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      dropdownOptions: ["Option A", "Option B", "Option C"],
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      dropdownOptions: ["One", "Two", "Three"],
    },
  ];

  const handleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div
      className={`w-full px-6 sm:px-[80px] py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between ${
        menuOpen ? "mb-[240px]" : ""
      }`}
    >
      {" "}
      <div className="flex justify-between items-center w-full sm:w-auto">
        <div className="font-inter font-extrabold text-[24px] sm:text-[32px] text-black px-4 py-2 bg-[#DBDBDB]">
          LOGO
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-3xl text-[#1959AC]"
        >
          <HiMenu />
        </button>
      </div>
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col sm:flex sm:flex-row sm:gap-8 mt-4 sm:mt-0 sm:items-center`}
      >
        <div className="flex flex-col sm:flex-row sm:gap-8 w-full sm:w-auto">
          {items.map((item) => (
            <div key={item.id} className="relative group mb-2 sm:mb-0">
              <div
                className="flex items-center text-base lg:text-lg md:text-[10px] font-semibold text-[#1959AC] cursor-pointer"
                onClick={() => {
                  if (window.innerWidth < 640) handleDropdown(item.id);
                }}
              >
                {item.title}
                <RiArrowDropDownLine className="ml-1 text-2xl" />
              </div>

              <ul className="hidden sm:block absolute mt-2 bg-white shadow-lg border border-gray-200 rounded-lg py-2 px-4 z-50 text-sm space-y-1 w-48 transition-all duration-200 ease-in-out opacity-0 invisible group-hover:visible group-hover:opacity-100">
                {item.dropdownOptions.map((option, index) => (
                  <li
                    key={index}
                    className="text-gray-700 hover:bg-[#f0f4ff] hover:text-[#1959AC] px-3 py-1 rounded cursor-pointer transition-colors duration-150"
                  >
                    {option}
                  </li>
                ))}
              </ul>

              {openDropdown === item.id && (
                <ul className="block sm:hidden mt-2 bg-white shadow-lg border border-gray-200 rounded-lg py-2 px-4 z-50 text-sm space-y-1 w-full">
                  {item.dropdownOptions.map((option, index) => (
                    <li
                      key={index}
                      className="text-gray-700 hover:bg-[#f0f4ff] hover:text-[#1959AC] px-3 py-1 rounded cursor-pointer transition-colors duration-150"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-3 sm:mt-0 sm:ml-8 font-inter font-bold text-[15px] text-black cursor-pointer px-[20px] py-[10px] bg-white self-start sm:self-auto">
          Sign In
        </div>
      </div>
    </div>
  );
}

export default Navbar;
