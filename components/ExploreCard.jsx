"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import monitor from "../public/monitor.svg";
import { useLanguage } from "../context/LanguageContext";

// We are getting this "id, imgUrl, title" props from "{...world} spread".
const ExploreCard = ({ id, imgUrl, title, index, active, handleHover, handleClick }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${active === id ? "lg:flex-[3.5] flex-[10] z-20" : "lg:flex-[0.5] flex-[2] z-10"
        } ${styles.flexCenter
        } min-w-[170px] h-[600px] transition-[flex] duration-[0.6s] ease-out-flex cursor-pointer rounded-[32px] overflow-hidden group shadow-lg hover:shadow-2xl`}
      onMouseEnter={() => handleHover && handleHover(id)}
      onClick={() => handleClick(id)}
    >
      {/* Click overlay for better interaction area */}
      <div className="absolute inset-0 z-50 w-full h-full lg:hidden" />
      
      <Image
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover object-top rounded-[32px] transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dynamic Background Overlay */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${active === id ? 'bg-black/30' : 'bg-black/10 group-hover:bg-black/20'}`} />

      {active !== id ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="font-bold text-[24px] md:text-[32px] text-white text-center px-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110 lg:rotate-[-90deg] lg:origin-[center]">
            {title}
          </h3>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 p-8 justify-start w-full flex-col bg-white/20 dark:bg-black/30 backdrop-blur-md rounded-b-[32px] pointer-events-none border-t border-white/20"
        >
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <Image
              src={monitor}
              alt="monitor"
              className="w-1/2 h-1/2 object-contain brightness-0 invert"
            />
          </div>
          <p className="font-bold text-[14px] leading-[20px] text-white uppercase tracking-widest bg-accent-blue/80 dark:bg-dark-accent/80 w-fit px-3 py-1 rounded-lg">
            {t("explore.buttonText")}
          </p>
          <h2 className="mt-[16px] font-extrabold sm:text-[40px] text-[28px] text-white drop-shadow-lg">
            {title}
          </h2>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
