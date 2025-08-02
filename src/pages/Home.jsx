import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Enterprise from "../components/sections/Enterprise";
import Investors from "../components/sections/Investors";
import Footer from "../components/sections/Footer";
import SaleandSupport from "../components/sections/SaleandSupport";
import CaseStudiesSection from "../components/sections/CaseStudy";

const Home = () => {
  return (
    <div>
      <Hero />
      <SaleandSupport />
      <Features />
      <CaseStudiesSection />
      <Enterprise />
      <Investors />
      <Footer />
    </div>
  );
};
export default Home;
