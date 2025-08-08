import { Card, CardContent } from "@/components/ui/card"


const ExperienceCards = () => {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 gap-[80px]">
     <div className="flex flex-col lg:flex-col gap-4 sm:gap-6 lg:gap-8 justify-start items-self">
            <h3 className="font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-[120%] tracking-[-0.01em] font-[Wix Madefor Text]">
                 A simple path to deeper calm, clarity,<br className="hidden sm:block" /> <span className="sm:hidden"></span>and personal growth!
            </h3>

            <p className='font-wix font-normal text-[14px] sm:text-[16px] leading-[150%] tracking-normal max-w-3xl'>
                From calming VR environments to AI-guided mental training, Mind Player redefines how people heal, grow, and thrive, anytime, anywhere.
            </p>
        </div>

        {/* Card Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-6 flex-wrap md:flex-nowrap overflow-x-auto md:overflow-x-visible pb-2 scrollbar-hide mt-6">
          {/* Card 1 - Unlock a New State of Mind */}
          <Card className="group  w-full md:w-[48%] lg:w-[624px] h-[1050px] sm:h-[700px] md:h-[950px] border-none shadow-none duration-300 overflow-hidden p-0 flex-shrink-0 bg-white flex flex-col">
            <div className="w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex-shrink-0">
              <img src="/E1.svg" alt="Person using VR headset" className="w-full h-full object-cover rounded-3xl" loading="lazy" />
            </div>
            <CardContent className="p-6 bg-white flex-1 flex flex-col justify-start">
              {/* New Heading */}
              <h3 className="font-wix font-bold text-2xl sm:text-3xl text-[#0D0A09] leading-[120%] tracking-[-0.01em]  mb-2">
                360° & VR Worlds
              </h3>
              {/* Subtitle */}
              <p className="font-wix text-base font-semibold text-[#0D0A09]  leading-[150%] mb-4">
                Step into breathtaking mental landscapes.
              </p>
              {/* Paragraph */}
              <p className="font-wix text-sm sm:text-base text-gray-600  leading-[150%] mb-6">
                Let your mind wander through beautifully crafted virtual environments — from serene natural retreats to abstract dreamscapes. These 360° VR experiences are designed to shift your state of consciousness, reduce anxiety, and cultivate mindfulness through immersive visuals and spatial audio.
              </p>
            </CardContent>
          </Card>


            {/* Card 2 - Redefining the Future of Mental Health */}
            <Card className="group  w-full md:w-[48%] lg:w-[624px] h-[1050px] sm:h-[700px] md:h-[950px] border-none shadow-none duration-300 overflow-hidden p-0 flex-shrink-0 bg-white flex flex-col">
              <div className="w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex-shrink-0">
                <img src="/E2.svg" alt="Person using VR headset" className="w-full h-full object-cover rounded-3xl" loading="lazy" />
              </div>
              <CardContent className="p-6 bg-white flex-1 flex flex-col justify-start">
              {/* New Heading */}
              <h3 className="font-wix font-bold text-2xl sm:text-3xl text-[#0D0A09] leading-[120%] tracking-[-0.01em]  mb-2">
                Custom Minds
              </h3>
              {/* Subtitle */}
              <p className="font-wix text-base font-semibold text-[#0D0A09]  leading-[150%] mb-4">
                Design your own mental journey.
              </p>
              {/* Paragraph */}
              <p className="font-wix text-sm sm:text-base text-gray-600  leading-[150%] mb-6">
                Every mind is unique — and so are your needs. Custom Minds lets you create personalized experiences by blending your favorite visuals, sounds, and session types into one. Whether you want to relax, reflect, or re-energize, you can craft the perfect mental escape.
              </p>
              
            </CardContent>
            </Card>
          </div>

        </div>

  )
}

export default ExperienceCards
