"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, TitleText, TeamMember } from "../components";
import { teamMembers } from "../constants";
import { useLanguage } from "../context/LanguageContext";

const Team = () => {
  const { t } = useLanguage();

  return (
    <section className={`${styles.paddings} relative z-10`} id="team">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={`| ${t("team.title")}`} textStyles="text-center" />
        <TitleText
          title={<>{t("team.heading")}</>}
          textStyles="text-center"
        />

        <div className="mt-[50px] flex md:flex-row flex-col gap-[30px] justify-center flex-wrap">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={member.name} 
              {...member} 
              role={t("team.members")[index].role}
              desc={t("team.members")[index].desc}
              index={index} 
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
