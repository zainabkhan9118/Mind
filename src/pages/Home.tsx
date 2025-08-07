import Benefits from "@/components/sections/home/Benefits";
import Experiences from "@/components/sections/home/Experiences";
import Features from "@/components/sections/home/Features";
import HeroSection from "@/components/sections/home/HeroSection_new";
import MentalWellness from "@/components/sections/home/MentalWellness";
import Reviews from "@/components/sections/home/Reviews";


const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <MentalWellness /> 
      <Experiences />
      <Features />
      <Benefits />
      <Reviews />
    </div>
  );
};

export default Home;

