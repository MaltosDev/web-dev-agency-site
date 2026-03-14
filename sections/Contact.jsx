import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TypingText, TitleText } from "../components";
import { teamMembers } from "../constants";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const { t } = useLanguage();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Pour utiliser EmailJS, vous devez créer un compte sur emailjs.com
      // et remplacer les IDs ci-dessous ou utiliser des variables d'environnement.
      await emailjs.send(
        'service_ueg3kux', // Replaced by user in dashboard
        'template_fxwa4m9', // Replaced by user in dashboard
        {
          name: formData.name,
          form_name: formData.name,
          form_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'maltos.can@gmail.com',
        },
        'h4xhyrTOmsPzvBWUb' // Replaced by user in dashboard
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className={`${styles.paddings} relative z-10`} id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={`| ${t("contact.title")}`} textStyles="text-center" />
        <TitleText
          title={<>{t("contact.heading")}</>}
          textStyles="text-center"
        />

        <div className="mt-[50px] flex lg:flex-row flex-col gap-8">
          {/* Contact Info */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-1 flex flex-col gap-6 justify-center bg-primary-text/5 dark:bg-white/5 p-8 rounded-[32px] border-[1px] border-[#d1d5db] dark:border-[#6a6a6a]"
          >
            <div>
              <h4 className="font-bold sm:text-[24px] text-[20px] text-primary-text dark:text-white">
                {t("contact.linkedinTitle")}
              </h4>
              <div className="flex flex-col gap-3 mt-[12px]">
                {teamMembers.map((member) => (
                  <a
                    key={member.name}
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-text dark:text-secondary-white hover:text-primary-text dark:hover:text-white transition-colors flex flex-col gap-1 group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent-blue dark:bg-[#25618B] group-hover:scale-125 transition-transform" />
                      <span className="font-semibold text-primary-text dark:text-white">{member.name}</span>
                    </div>
                    <p className="text-[14px] ml-4 opacity-80 group-hover:opacity-100 italic transition-opacity">
                      {t("contact.viewProfile")} {member.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold sm:text-[24px] text-[20px] text-primary-text dark:text-white">
                {t("contact.email")}
              </h4>
              <p className="mt-[8px] font-normal sm:text-[16px] text-[14px] text-secondary-text dark:text-secondary-white">
                maltos.can@gmail.com
              </p>
            </div>
            <div>
              <h4 className="font-bold sm:text-[24px] text-[20px] text-primary-text dark:text-white">
                {t("contact.phone")}
              </h4>
              <p className="mt-[8px] font-normal sm:text-[16px] text-[14px] text-secondary-text dark:text-secondary-white">
                +1 438 521 1040
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex-[1.5] bg-primary-text/5 dark:bg-white/5 p-8 rounded-[32px] border-[1px] border-[#d1d5db] dark:border-[#6a6a6a] relative overflow-hidden"
          >
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-primary-bg/90 dark:bg-primary-black/90 z-20 flex flex-col items-center justify-center p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                  >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-primary-text dark:text-white font-bold text-2xl mb-2">{t("contact.form.successTitle")}</h3>
                  <p className="text-secondary-text dark:text-secondary-white">{t("contact.form.successDesc")}</p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-primary-bg/90 dark:bg-primary-black/90 z-20 flex flex-col items-center justify-center p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                  >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.div>
                  <h3 className="text-primary-text dark:text-white font-bold text-2xl mb-2">{t("contact.form.errorTitle")}</h3>
                  <p className="text-secondary-text dark:text-secondary-white">{t("contact.form.errorDesc")}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex sm:flex-row flex-col gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.form.name")}
                  className="flex-1 bg-transparent border-b-[1px] border-[#d1d5db] dark:border-[#6a6a6a] text-primary-text dark:text-white p-4 focus:outline-none focus:border-primary-text dark:focus:border-white transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.form.email")}
                  className="flex-1 bg-transparent border-b-[1px] border-[#d1d5db] dark:border-[#6a6a6a] text-primary-text dark:text-white p-4 focus:outline-none focus:border-primary-text dark:focus:border-white transition-colors"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder={t("contact.form.subject")}
                className="bg-transparent border-b-[1px] border-[#d1d5db] dark:border-[#6a6a6a] text-primary-text dark:text-white p-4 focus:outline-none focus:border-primary-text dark:focus:border-white transition-colors"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t("contact.form.message")}
                rows="4"
                className="bg-transparent border-b-[1px] border-[#d1d5db] dark:border-[#6a6a6a] text-primary-text dark:text-white p-4 focus:outline-none focus:border-primary-text dark:focus:border-white transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-4 py-4 px-8 bg-accent-blue dark:bg-[#25618B] rounded-[32px] w-fit font-bold text-[16px] text-white hover:bg-opacity-80 transition-all duration-300 self-end disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? t("contact.form.sending") : t("contact.form.sendBtn")}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
