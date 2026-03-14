"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import headset from "../public/headset.svg";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <motion.footer
      id="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-primary-text dark:text-white">
            {t("footer.heading")}
          </h4>

          <div className="flex flex-col w-full mt-4">
            <div className="mb-[50px] h-[2px] bg-primary-text dark:bg-white opacity-10" />

            <div className="flex items-center justify-between flex-wrap gap-4">
              <h4 className="font-extrabold text-[24px] text-primary-text dark:text-white">Maltos Dev</h4>
              <p className="font-normal text-[14px] text-primary-text dark:text-white opacity-50 text-center sm:text-left">
                {t("footer.copyright")}
              </p>

              <div className="flex gap-4">
                {socials.map((social) => (
                  <Image
                    key={social.name}
                    src={social.url}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer dark:invert"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
