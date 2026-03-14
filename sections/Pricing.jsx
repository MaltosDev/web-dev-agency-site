"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, TitleText, PricingCard } from "../components";
import { pricingPlans } from "../constants";

const Pricing = () => (
  <section className={`${styles.paddings} relative z-10`} id="pricing">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Tarifs" textStyles="text-center" />
      <TitleText
        title={<>Des forfaits adaptés à vos besoins</>}
        textStyles="text-center"
      />

      <div className="mt-[50px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={plan.id} {...plan} index={index} />
        ))}
      </div>

      {/* Maintenance info banner */}
      <motion.div
        variants={staggerContainer}
        className="mt-[40px] p-6 rounded-[24px] border-[1px] border-accent-blue/30 dark:border-dark-accent/30 bg-accent-blue/5 dark:bg-dark-accent/10 text-center"
      >
        <p className="text-secondary-text dark:text-secondary-white text-[16px]">
          💡 <strong className="text-primary-text dark:text-white">Proposé à la fin de chaque contrat</strong> — Notre forfait Service Après-Vente assure la pérennité de votre site avec un maintien continu, des mises à jour de sécurité et un support prioritaire.
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default Pricing;
