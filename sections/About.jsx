"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Qui sommes-nous" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[10px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">Nous sommes</span> une
        équipe passionnée dédiée à aider les petites entreprises à réussir en
        ligne. Nous créons des sites web qui ne sont pas seulement beaux, mais
        qui génèrent aussi des résultats concrets. Que vous ayez besoin d'un
        simple site vitrine ou d'une{" "}
        <span className="font-extrabold text-white">
          {" "}
          application web sur mesure{" "}
        </span>
        {", "}
        nos solutions personnalisées sont conçues pour{" "}
        <span className="font-extrabold text-white"> accélérer </span> votre
        croissance et transformer vos visiteurs en clients fidèles.{" "}
        <span className="font-extrabold text-white">Découvrez</span> comment
        nous pouvons donner vie à votre vision.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
    </motion.div>
  </section>
);

export default About;
