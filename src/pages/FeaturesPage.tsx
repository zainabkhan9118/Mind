import FeaturesHeroSection from "@/components/sections/features/FeaturesHeroSection";
import List from "@/components/sections/features/List";
import Benefits from "@/components/sections/home/Benefits";
import Reviews from "@/components/sections/home/Reviews";

const FeaturesPage = () => {
  return (
    <div > 
      <FeaturesHeroSection />
      <List />
      <Benefits />
      <Reviews />
    </div>
  );
};

export default FeaturesPage;
