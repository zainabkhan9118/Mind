import { Card,  CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useNavigate } from 'react-router-dom';

const MentalWellness = () => {
  const navigate = useNavigate();
  // Handler to navigate to About page
  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/about');
  };

  return (
     <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Reimagining Mental Wellness
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            From calming VR environments to AI-guided mental training, Mind Player redefines how people heal, grow, and thrive, anytime, anywhere.
          </p>
        </div>

        {/* Card Section */}
        <div className="flex flex-col md:flex-row gap-6 overflow-x-auto md:overflow-x-visible pb-2 scrollbar-hide">
          {/* Card 1 - Unlock a New State of Mind */}
          <Card
            className="group hover:shadow-lg w-full md:w-[48%] lg:w-[640px] h-[380px] sm:h-[420px] md:h-[464px] transition-shadow duration-300 overflow-hidden p-0 bg-[#0D0A090D] flex-shrink-0 cursor-pointer"
            onClick={handleCardClick}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Left Content */}
              <div className="flex flex-col justify-between p-6 md:p-8 order-2 md:order-1 md:w-1/2">
                <div>
                  <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 text-left">
                    Unlock a New State of Mind
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-snug text-xs sm:text-sm mb-0 text-left">
                    Step into a world where neuroscience, AI, and VR unite to help you rest, grow, and transform your mental state.
                  </CardDescription>
                </div>
                <div className="mt-20">
                  <button className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center group">
                    Who We Are 
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Right Image */}
              <div className="relative h-48 sm:h-56  md:h-full order-1 md:order-2 md:w-1/2 overflow-hidden">
                <img 
                  src="/Placeholder Image.png" 
                  alt="Person in VR experience" 
                  className="absolute inset-0 w-full h-full object-cover md:rounded-r-lg transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </Card>

          {/* Card 2 - Redefining the Future of Mental Health */}
          <Card
            className="group hover:shadow-lg w-full md:w-[24%] lg:w-[296px] h-[380px] sm:h-[420px] md:h-[464px] transition-shadow duration-300 overflow-hidden p-0 flex flex-col bg-[#0D0A090D] flex-shrink-0 cursor-pointer"
            onClick={handleCardClick}
          >
            <div className="flex-grow flex flex-col justify-between px-4 sm:px-6 pt-4 sm:pt-6 pb-0">
              <CardHeader className="p-0">
                <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 text-left">
                  Redefining the Future of Mental Health
                </CardTitle>
                <CardDescription className="text-gray-600 leading-snug text-xs sm:text-sm mb-0 text-left">
                  Immersive mental wellness that unlocks growth and peace of mind.
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-0 pt-3 mt-2 sm:mt-4 md:mt-0">
                <button className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center group">
                  Our Vision 
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </CardFooter>
            </div>
            {/* Image at the bottom - bigger on mobile */}
            <div className="w-full h-48 sm:h-56 md:h-[171px] mt-auto overflow-hidden">
              <img 
                src="/Placeholder Image2.png" 
                alt="Mental health visualization" 
                className="w-full h-full object-cover md:rounded-b-lg transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </Card>

          {/* Card 3 - Empower Every Mind to Reach Its Full Potential */}
          <Card
            className="group hover:shadow-lg w-full md:w-[24%] lg:w-[296px] h-[380px] sm:h-[420px] md:h-[464px] transition-shadow duration-300 overflow-hidden p-0 flex flex-col bg-[#0D0A090D] flex-shrink-0 cursor-pointer"
            onClick={handleCardClick}
          >
            <div className="flex-grow flex flex-col justify-between px-4 sm:px-6 pt-4 sm:pt-6 pb-0">
              <CardHeader className="p-0">
                <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 text-left">
                  Empower Every Mind to Reach Its Full Potential
                </CardTitle>
                <CardDescription className="text-gray-600 leading-snug text-xs sm:text-sm mb-0 text-left">
                  We're on a mission to revolutionize how people care for their minds.
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-0 pt-3">
                <button className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center group">
                  Our Mission 
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </CardFooter>
            </div>
            {/* Image at the bottom - bigger on mobile */}
            <div className="w-full h-48 sm:h-56 md:h-[171px] mt-auto overflow-hidden">
              <img 
                src="/Placeholder Image3.png" 
                alt="Mind empowerment visualization" 
                className="w-full h-full object-cover md:rounded-b-lg transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default MentalWellness
