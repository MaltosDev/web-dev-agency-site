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
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-clip">
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
    <World />
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

export default Page;
