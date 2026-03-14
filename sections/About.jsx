"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import arrowDown from "../public/arrow-down.svg";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title={`| ${t("about.heading")}`} textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 0.8)}
        className="mt-[10px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-text dark:text-secondary-white"
        dangerouslySetInnerHTML={{ __html: t("about.description") }}
      />
      <a href="#team">
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src={arrowDown.src}
          alt="arrow-down"
          className="w-[18px] h-[28px] object-contain mt-[28px] "
        />
      </a>
    </motion.div>
  </section>
  );
};

export default About;
