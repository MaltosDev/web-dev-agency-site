"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import headset from "../public/headset.svg";

// We are getting this "id, imgUrl, title" props from "{...world} spread".
const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10] z-20" : "lg:flex-[0.5] flex-[2] z-10"
    } ${
      styles.flexCenter
    } min-w-[120px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer rounded-[24px] overflow-hidden group`}
    onClick={() => handleClick(id)}
  >
    {/* Click overlay to ensure the entire card is clickable without child interference */}
    <div className="absolute inset-0 z-50 w-full h-full" />
    <Image
      src={imgUrl}
      alt={title}
      placeholder="blur"
      className="absolute w-full h-full object-cover rounded-[24px] transition-opacity duration-300 group-hover:opacity-80"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] pointer-events-none">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] pointer-events-none">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <Image
            src={headset}
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase ">
          Découvrir ce service
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white ">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
