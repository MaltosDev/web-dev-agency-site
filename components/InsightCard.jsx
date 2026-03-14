"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../utils/motion";
import arrow from "../public/arrow.svg";

const InsightCard = ({ imgUrl, title, subtitle, url, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <Image
      src={imgUrl}
      alt="planet-01"
      placeholder="blur"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />

      <div className="flex md:flex-row flex-col justify-between items-center w-full">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-primary-text dark:text-white">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-text dark:text-secondary-white">
            {subtitle}
          </p>
        </div>
        
        <a 
          href={url || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] rounded-full bg-transparent border-[1px] border-primary-text dark:border-white transition-transform hover:scale-110 mt-6 md:mt-0"
        >
          <Image
            src={arrow}
            alt="arrow"
            className="w-[30%] h-[30%] object-contain"
          />
        </a>
      </div>
  </motion.div>
);

export default InsightCard;
