"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import planet9 from "../public/images/PXL_20251129_153843509.MP.jpg";
import stamp from "../public/stamp.png";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import { TypingText } from "../components";
import { useLanguage } from "../context/LanguageContext";

const Feedback = () => {
  const { t } = useLanguage();

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={`| ${t("feedback.title")}`} textStyles="text-center" />

        <div className="flex lg:flex-row flex-col gap-6 mt-8">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#d1d5db] dark:border-[#6a6a6a] relative "
          >
            <div className="feedback-gradient" />

            <div>
              <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-primary-text dark:text-white">
                {t("feedback.heading")}
              </h4>
              <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-primary-text dark:text-white">
                {t("feedback.year")}
              </p>
            </div>
            <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-primary-text dark:text-white">
              {t("feedback.desc")}
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="relative flex-1 flex justify-center items-center"
          >
            <Image
              src={planet9}
              alt="planet-09"
              placeholder="blur"
              className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
            />

            <motion.div
              variants={zoomIn(0.4, 1)}
              className="lg:block hidden absolute -left-[10%] top-[3%]"
            >
              <a href="https://www.conuhacks.io/">
                <Image
                  src={stamp}
                  alt="stamp"
                  className="w-[155px] h-[155px] object-contain"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Feedback;
