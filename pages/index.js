import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  GetStarted,
  WhatsNew,
  World,
  Insights,
  Feedback,
  Hero,
  Pricing,
  Team,
  FAQ,
  Contact,
  Portfolio,
} from "../sections";

const Home = () => (
  <div className="bg-primary-bg dark:bg-primary-black overflow-clip transition-colors duration-300">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Team />
    </div>
    <div className="relative">
      <Portfolio />
      <div className="gradient-04 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-03 z-0" />
      <Pricing />
    </div>
    <div className="relative">
      <WhatsNew />
      <div className="gradient-04 z-0" />
      <FAQ />
    </div>
    <div className="relative">
      <Insights />
      <div className="gradient-03 z-0" />
      <Feedback />
    </div>
    <div className="relative">
      <div className="gradient-05 z-0" />
      <Contact />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Footer />
    </div>
  </div>
);

export default Home;
