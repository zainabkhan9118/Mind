
import { Card} from '@/components/ui/card'
const Experiences = () => {
  return (
    <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-16">
              <p className="text-lg text-gray-900 max-w-4xl mx-auto">
                Experiences
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Escape.Explore.Evolve
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Step into virtual worlds that relax, heal, and inspire by experiencing guided escapes designed for clarity, calm, and growth.
              </p>
            </div>
    
            {/* Card Section */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-6 flex-wrap md:flex-nowrap overflow-x-auto md:overflow-x-visible pb-2 scrollbar-hide">
              {/* Card 1 - Unlock a New State of Mind */}
              <Card className="group hover:shadow-lg w-full md:w-[48%] lg:w-[624px] h-[340px] sm:h-[420px] md:h-[668px] border-none transition-shadow duration-300 overflow-hidden p-0 flex-shrink-0 bg-white">
                <div className="flex flex-col h-full justify-center items-center p-4 sm:p-8">
                  <div className="flex-1 flex items-center justify-center w-full">
                    <img 
                      src="/Content.svg" 
                      alt="VR Experience Content" 
                      className="w-full h-full max-h-[320px] sm:max-h-[400px] md:max-h-[600px] object-contain"
                    />
                  </div>
                  {/* You can add more content here if needed */}
                </div>
              </Card>
              {/* Card 2 - Redefining the Future of Mental Health */}
              <Card className="group hover:shadow-lg w-full md:w-[48%] lg:w-[624px] h-[340px] sm:h-[420px] md:h-[668px] border-none transition-shadow duration-300 overflow-hidden p-0 flex-shrink-0">
                <div className="flex flex-col h-full p-4 sm:p-8">
                  <div className="w-[80px] sm:w-[120px] md:w-[142px] h-[120px] sm:h-[200px] md:h-[312px]">
                    <span className="text-[100px] sm:text-[160px] md:text-[220px] font-bold">2</span>
                  </div>
                  <div className="mt-6 sm:mt-10 md:mt-16">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Craft Your Own Mental Journey</h3>
                    <p className="text-sm sm:text-base">
                      Blend your favorite sounds, visuals, and sessions to<br /> create fully personalized immersive experiences—<br />tailored to your mood and goals.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
  )
}

export default Experiences
