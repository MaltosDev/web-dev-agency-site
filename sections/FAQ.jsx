"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, TitleText, FaqItem } from "../components";
import { faqs } from "../constants";
import { useLanguage } from "../context/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <section className={`${styles.paddings} relative z-10`} id="faq">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={`| ${t("faq.title")}`} textStyles="text-center" />
        <TitleText
          title={<>{t("faq.heading")}</>}
          textStyles="text-center"
        />

        <div className="mt-[50px] flex flex-col gap-[20px] max-w-[800px] mx-auto w-full">
          {t("faq.items").map((faq, index) => (
            <FaqItem key={index} {...faq} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
