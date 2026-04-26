import ExperienceCards from "@/components/sections/experience/ExperienceCards";
import ExperienceHero from "@/components/sections/experience/ExperienceHero";
import Reason from "@/components/sections/experience/Reason";
import Benefits from "@/components/sections/home/Benefits";


const ExperiencePage = () => {
  return (
    <div> 
      <ExperienceHero />
      <ExperienceCards />
      <div>
        <Benefits />
      </div>
      <Reason />

    </div>
  );
};

export default ExperiencePage;
