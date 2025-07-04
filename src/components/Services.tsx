import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";

function Services() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: easeOut, delay: 0.2 },
    },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut, delay: 0.3 },
    },
  };

  return (
    <div className="bg-white py-10 md:py-[176px] overflow-hidden">
      <div
        className="relative bg-[#F1F1F1] w-full"
        style={{
          borderBottom: "20px solid",
          borderImage:
            "linear-gradient(90deg, #043898 0%, #079902 45.96%, #170041 91.18%) 1",
          borderImageSlice: 1,
        }}
      >
        <motion.div
          className="px-4 sm:px-8 md:px-[80px] pt-8 sm:pt-12 md:pt-16 pb-8 xl:pb-[400px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeLeft}
        >
          <div className="flex flex-col gap-6 md:gap-10 xl:pr-[715px]">
            <div className="font-['Roboto_Condensed'] font-bold text-[24px] sm:text-[32px] md:text-[42px] leading-[110%] tracking-[-0.02em] uppercase text-[#1959AC]">
              Lorem ipsum dolor sit amet consectetur. Dignissim tellus.
            </div>
            <div className="font-['Inter'] font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] text-black">
              Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
              blandit laoreet urna sapien quam pulvinar. Dolor aliquet est
              tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis
              porta nisl felis. Massa in facilisis semper libero eget eu quisque
              bibendum platea. Tortor fames.
            </div>
            <motion.button
              className="inline-flex items-center text-white gap-1 bg-[#1959AC] px-4 py-2 rounded w-fit"
              whileHover={{
                scale: 1.07,
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                backgroundColor: "#043898",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Loerum Ipsum <FaLongArrowAltRight className="text-white" />
            </motion.button>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6 px-4 pb-8 xl:hidden">
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
          >
            <Image
              src="/Service1.png"
              alt="Service"
              width={500}
              height={350}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              style={{ height: "auto" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="bg-white rounded-xl shadow-lg p-4 max-w-full">
              <div className="font-['Inter'] font-semibold text-[16px] md:text-[18px] leading-[100%] tracking-[-0.02em] text-[#222222] my-4">
                Lorem ipsum dolor sit
              </div>
              <div className="font-['Inter'] font-normal text-[14px] md:text-[16px] leading-[22px] tracking-[0em] text-gray-700 flex flex-col gap-2">
                <span>
                  Lorem ipsum dolor sit amet consectetur. Habitant vestibulum
                  vitae amet habitasse semper.
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Egestas congue mattis
                  ut placerat vitae amet suspendisse fermentum velit. Nibh dolor
                  nunc id tristique sit.
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Hac netus consectetur
                  amet quisque scelerisque facilisi. Ultrices lectus viverra
                  pharetra commodo.
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hidden xl:block absolute right-0 top-[-10%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeRight}
        >
          <Image
            src="/Service1.png"
            alt="Service"
            width={500}
            height={350}
            style={{ height: "auto" }}
            sizes="500px"
          />
        </motion.div>

        <motion.div
          className="hidden xl:block absolute left-0 bottom-[-10%] px-4 md:px-[60px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-5 max-w-full md:max-w-[400px] lg:max-w-[420px]">
            <div className="font-['Inter'] font-semibold text-[18px] md:text-[18px] lg:text-[19px] leading-[100%] tracking-[-0.02em] text-[#222222] my-6 md:my-6 lg:my-7">
              Lorem ipsum dolor sit
            </div>
            <div className="font-['Inter'] font-normal text-[15px] md:text-[16px] lg:text-[16px] leading-[22px] md:leading-[24px] lg:leading-[24px] tracking-[0em] text-gray-700 flex flex-col gap-3 md:gap-3 lg:gap-3">
              <span>
                Lorem ipsum dolor sit amet consectetur. Habitant vestibulum
                vitae amet habitasse semper.
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
                placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc
                id tristique sit.
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur. Hac netus consectetur
                amet quisque scelerisque facilisi. Ultrices lectus viverra
                pharetra commodo.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
