import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  GetStarted,
  WhatsNew,
  Insights,
  Feedback,
  Hero,
  Pricing,
  Team,
  FAQ,
  Contact,
} from "../sections";
import Head from "next/head";
import { useLanguage } from "../context/LanguageContext";
import LanguageModal from "../components/LanguageModal";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-primary-bg dark:bg-primary-black overflow-clip transition-colors duration-300">
      <Head>
        <title>{t("head.title")}</title>
        <meta name="description" content={t("head.description")} />
      </Head>
      <LanguageModal />
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Team />
      </div>
      <div className="relative">
        <Explore />
        <div className="gradient-04 z-0" />
        <GetStarted />
      </div>
      <div className="relative">
        <Pricing />
        <div className="gradient-03 z-0" />
        <WhatsNew />
      </div>
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <FAQ />
      </div>
      <div className="relative">
        <Feedback />
        <div className="gradient-05 z-0" />
        <Contact />
      </div>
      <div className="relative">
        <div className="gradient-04 z-0" />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
