import Hero from "../components/sections/Hero";
import Capabilities from "../components/sections/Capabilities";
import Enterprise from "../components/sections/Enterprise";
import TeamBacking from "../components/sections/TeamBacking";
import Footer from "../components/sections/Footer";
import SaleandSupport from "../components/sections/SaleandSupport";
import CaseStudiesSection from "../components/sections/CaseStudy";

const Home = () => {
  return (
    <div>
      <Hero />
      <SaleandSupport />
      <Capabilities />
      {/* <CaseStudiesSection /> */}
      {/* <Enterprise /> */}
      <TeamBacking />
      <Footer />
    </div>
  );
};
export default Home;
