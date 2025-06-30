import React, { useEffect, useState } from "react";
import { motion, easeOut } from "framer-motion";
import Navbar from "./Navbar";
import Subhero from "./Subhero";
import Image from "next/image";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarVariants = {
    initial: { backgroundColor: "rgba(255, 255, 255, 0)" },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 1)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut, delay: 0.3 },
    },
  };

  return (
    <div className="w-full relative mb-10 md:mb-[82px] min-h-[300px] md:min-h-[831px]">
      <motion.div
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        variants={navbarVariants}
        initial="initial"
        animate={scrolled ? "scrolled" : "initial"}
      >
        <Navbar />
      </motion.div>

      <div className="pt-16 md:pt-[100px] flex items-center justify-between relative">
        <motion.div
          className="relative z-20 w-full md:w-auto"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <Subhero />
        </motion.div>

        <motion.div
          className="hidden md:block absolute top-0 right-0 z-10"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/Hero-image.png"
            alt="Hero Illustration"
            width={699}
            height={831}
            className="w-[400px] lg:w-[500px] xl:w-[699px] h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
