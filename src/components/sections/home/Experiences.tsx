import { Card} from '@/components/ui/card'
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
const Experiences = () => {
  const navigate = useNavigate();

   const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
   
  };

  return (
  <div className=" bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-16">
              <p className="text-lg text-gray-900 max-w-4xl mx-auto mt-[-30px] mb-2">
                Experiences
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                <span className="whitespace-nowrap block text-balance">Escape.Explore.Evolve</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Step into virtual worlds that relax, heal, and inspire by experiencing guided escapes designed for clarity, calm, and growth.
              </p>
            </div>


            {/* Card Section */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-6 flex-wrap md:flex-nowrap overflow-x-auto md:overflow-x-visible pb-2 scrollbar-hide">
              {/* Card 1 - Unlock a New State of Mind */}
              <Card className="group hover:shadow-lg w-full md:w-[48%] lg:w-[624px] h-[420px] sm:h-[480px] md:h-[668px] border-none transition-shadow duration-300 overflow-hidden p-0 flex-shrink-0 text-white relative">
                <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: "url('/Experience.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
                <div className="flex flex-col h-full p-4 sm:p-8 relative z-10">
                  {/* Large Number */}
                  <div className="w-[80px] sm:w-[120px] md:w-[142px] h-[120px] sm:h-[200px] md:h-[312px]">
                    <span className="text-[100px] sm:text-[160px] md:text-[220px] font-bold">1</span>
                  </div>

                  {/* Content Section */}
                  <div className="mt-6 sm:mt-10 md:mt-16">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-left">
                      Step Into Stunning <br />360° & VR Worlds
                    </h3>

                    {/* Text - 4 lines for mobile readability */}
                    <div>
                      <p className="text-sm sm:text-base text-left leading-snug">
                        Wander through breathtaking VR environments<br />
                        and discover immersive visuals.<br />
                        Let landscapes transport your mind<br />
                        to new states of calm and clarity.
                      </p>
                      <div className="mt-6 sm:mt-8 md:mt-4 lg:mt-2 flex justify-end">
                        <div className="relative group flex items-center justify-center w-16 h-16 border border-white rounded-full flex-shrink-0 cursor-pointer transition-all">
                          <ArrowRight className="text-white transition-opacity duration-200 group-hover:opacity-0" size={20} />
                          <button
                            className="absolute inset-0 flex items-center justify-center bg-black/80 text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            onClick={() => {
                              handleNavClick();
                              navigate('/learn-more');
                            }}
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>



              {/* Card 2 - Redefining the Future of Mental Health */}
              <Card className="group hover:shadow-lg text-white w-full md:w-[48%] lg:w-[624px] h-[420px] sm:h-[480px] md:h-[668px] border-none transition-shadow duration-300 overflow-hidden p-0 flex-shrink-0 relative">
                <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: "url('/2.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
                <div className="flex flex-col h-full p-4 sm:p-8 relative z-10">
                  {/* Large Number */}
                  <div className="w-[80px] sm:w-[120px] md:w-[142px] h-[120px] sm:h-[200px] md:h-[312px]">
                    <span className="text-[100px] sm:text-[160px] md:text-[220px] font-bold">2</span>
                  </div>
                  {/* Content Section */}
                  <div className="mt-6 sm:mt-10 md:mt-16">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-left">Craft Your Own<br /> Mental Journey</h3>
                    <div>
                      <p className="text-sm sm:text-base text-left leading-snug">
                        Blend your favorite sounds and visuals<br />
                        with guided sessions to create<br />
                        fully personalized immersive experiences—<br />
                        tailored to your mood and goals.
                      </p>
                      <div className="mt-6 sm:mt-8 md:mt-4 lg:mt-2 flex justify-end">
                        <div className="relative group flex items-center justify-center w-16 h-16 border border-white rounded-full flex-shrink-0 cursor-pointer transition-all">
                          <ArrowRight className="text-white transition-opacity duration-200 group-hover:opacity-0" size={20} />
                          <button
                            className="absolute inset-0 flex items-center justify-center bg-black/80 text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            onClick={() => {
                              handleNavClick();
                              navigate('/learn-more');
                            }}
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
  )
}

export default Experiences
