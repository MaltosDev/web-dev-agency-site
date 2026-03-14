"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import headset from "../public/headset.svg";

const Footer = () => (
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
          Développez Votre Activité
        </h4>


        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-primary-text dark:bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-primary-text dark:text-white">Maltos Dev</h4>
            <p className="font-normal text-[14px] text-primary-text dark:text-white opacity-50">
              Copyright © 2026 Maltos Web Dev Agency. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);
export default Footer;
