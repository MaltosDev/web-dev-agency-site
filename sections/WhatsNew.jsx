"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { TypingText, TitleText, NewFeatures } from "../components";
import { newFeatures } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import whats_new from "../public/whats-new.png";

const WhatsNew = () => {
  const { t } = useLanguage();

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className={`${styles.innerWidth} flex mx-auto w-full lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={`| ${t("whatsNew.title")}`} />
          <TitleText title={<>{t("whatsNew.heading")}</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {t("whatsNew.features").map((feature, index) => (
              <NewFeatures key={index} {...feature} imgUrl={newFeatures[index].imgUrl} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src={whats_new}
            alt="new-features"
            placeholder="blur"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
