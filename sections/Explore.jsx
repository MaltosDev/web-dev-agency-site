"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText, ProjectModal } from "../components";
import { exploreWorlds } from "../constants";
import { useLanguage } from "../context/LanguageContext";

const Explore = () => {
  const [activeCard, setActiveCard] = useState("world-2");
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (id) => {
    const project = exploreWorlds.find((world) => world.id === id);
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={`| ${t("explore.title")}`} textStyles="text-center" />
        <TitleText
          title={
            <>
              {t("explore.heading")}{" "}
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[60px] flex lg:flex-row flex-col min-h-[70vh] gap-5 ">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              title={t("exploreData")[index]} // Use translated title
              index={index}
              active={activeCard}
              handleHover={setActiveCard}
              handleClick={handleCardClick}
            />
          ))}
        </div>
      </motion.div>

      <ProjectModal
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
        project={selectedProject}
      />
    </section>
  );
};

export default Explore;
