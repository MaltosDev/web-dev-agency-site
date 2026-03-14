"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, TitleText, PortfolioCard } from "../components";
import { portfolioSites } from "../constants";

const Portfolio = () => (
  <section className={`${styles.paddings} relative z-10`} id="portfolio">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Nos Réalisations" textStyles="text-center" />
      <TitleText
        title={<>Des sites qui parlent d&apos;eux-mêmes</>}
        textStyles="text-center"
      />

      <div className="mt-[50px] flex lg:flex-row flex-col gap-[30px] justify-center items-stretch flex-wrap">
        {portfolioSites.map((site, index) => (
          <PortfolioCard key={site.id} {...site} index={index} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Portfolio;
