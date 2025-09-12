import ExperienceCards from "@/components/sections/experience/ExperienceCards";
import ExperienceHero from "@/components/sections/experience/ExperienceHero";
import Reason from "@/components/sections/experience/Reason";
import Benefits from "@/components/sections/home/Benefits";


const ExperiencePage = () => {
  return (
    <div> 
      <ExperienceHero />
      <ExperienceCards />
      <div className="mt-[-60px] sm:mt-[-80px] md:mt-[-140px] lg:mt-[-200px] xl:mt-[-180px] 2xl:mt-[-200px] 3xl:mt-[-220px] 4xl:mt-[-240px]">
        <Benefits />
      </div>
      <Reason />

    </div>
  );
};

export default ExperiencePage;
