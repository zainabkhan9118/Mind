import HeroSection from "@/components/sections/about_us/HeroSection";
import Distinction from "@/components/sections/about_us/Distinction";
import Statement from "@/components/sections/about_us/Statement";
import Explaination from "@/components/sections/about_us/Explaination";

const AboutPage = () => {
  return (
    <div > {/* Add top padding to account for fixed header */}
      <HeroSection />
      <Distinction />
      <Statement />
      <Explaination />
    </div>
  );
};

export default AboutPage;

