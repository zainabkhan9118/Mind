import { Card, CardContent } from "@/components/ui/card"


const ExperienceCards = () => {
  return (
  <div className="flex flex-col w-full justify-between max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 pb-0 pt-2 sm:py-8 lg:py-10 gap-4 sm:gap-10">
     <div className="flex flex-col lg:flex-col gap-2 sm:gap-6 lg:gap-8 justify-start items-self">
            <h3 className="font-bold text-[24px] sm:text-[28px] lg:text-[32px] 2xl:text-[40px] 3xl:text-[48px] leading-[120%] tracking-[-0.01em] font-[Wix Madefor Text]">
                 A simple path to deeper calm, clarity,<br className="hidden sm:block" /> <span className="sm:hidden"></span>and personal growth!
            </h3>

            <p className='font-wix font-normal text-[14px] sm:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[150%] tracking-normal max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl'>
                From calming VR environments to AI-guided mental training, Mind Player redefines how people heal, grow, and thrive, anytime, anywhere.
            </p>
        </div>

        {/* Card Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-4 xl:gap-6 2xl:gap-10 3xl:gap-12 flex-wrap md:flex-nowrap justify-between w-full overflow-x-auto md:overflow-x-visible pb-0 scrollbar-hide">
          {/* Card 1 - Unlock a New State of Mind */}
          <Card className="group w-full md:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%] 3xl:w-[48%] h-[700px] sm:h-[750px] md:h-[950px] lg:h-[950px] xl:h-[1000px] 2xl:h-[1150px] 3xl:h-[1250px] border-none shadow-none duration-300 overflow-hidden p-0 flex-shrink-0 bg-white flex flex-col">
            <div className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] 3xl:h-[700px] flex-shrink-0">
              <img src="/E1.svg" alt="Person using VR headset" className="w-full h-full object-cover rounded-3xl" loading="lazy" />
            </div>
            <CardContent className="p-5 sm:p-6 lg:p-6 xl:p-8 2xl:p-10 bg-white flex-1 flex flex-col justify-start">
              {/* New Heading */}
              <h3 className="font-wix font-bold text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-[#0D0A09] leading-[120%] tracking-[-0.01em] mb-2 lg:mb-3 2xl:mb-4">
                360° & VR Worlds
              </h3>
              {/* Subtitle */}
              <p className="font-wix text-base lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-semibold text-[#0D0A09] leading-[150%] mb-3 lg:mb-3 2xl:mb-6">
                Step into breathtaking mental landscapes.
              </p>
              {/* Paragraph */}
              <p className="font-wix text-sm sm:text-sm lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl text-gray-600 leading-[140%] lg:leading-[140%] mb-4">
                Let your mind wander through beautifully crafted virtual environments — from serene natural retreats to abstract dreamscapes. These 360° VR experiences are designed to shift your state of consciousness, reduce anxiety, and cultivate mindfulness through immersive visuals and spatial audio.
              </p>
            </CardContent>
          </Card>


            {/* Card 2 - Redefining the Future of Mental Health */}
            <Card className="group w-full md:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%] 3xl:w-[48%] h-[700px] sm:h-[750px] md:h-[950px] lg:h-[950px] xl:h-[1000px] 2xl:h-[1150px] 3xl:h-[1250px] border-none shadow-none duration-300 overflow-hidden p-0 flex-shrink-0 bg-white flex flex-col">
              <div className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] 3xl:h-[700px] flex-shrink-0">
                <img src="/E2.svg" alt="Person using VR headset" className="w-full h-full object-cover rounded-3xl" loading="lazy" />
              </div>
              <CardContent className="p-5 sm:p-6 lg:p-6 xl:p-8 2xl:p-10 bg-white flex-1 flex flex-col justify-start">
              {/* New Heading */}
              <h3 className="font-wix font-bold text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-[#0D0A09] leading-[120%] tracking-[-0.01em] mb-2 lg:mb-3 2xl:mb-4">
                Custom Minds
              </h3>
              {/* Subtitle */}
              <p className="font-wix text-base lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-semibold text-[#0D0A09] leading-[150%] mb-3 lg:mb-3 2xl:mb-6">
                Design your own mental journey.
              </p>
              {/* Paragraph */}
              <p className="font-wix text-sm sm:text-sm lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl text-gray-600 leading-[140%] lg:leading-[140%] mb-4">
                Every mind is unique — and so are your needs. Custom Minds lets you create personalized experiences by blending your favorite visuals, sounds, and session types into one. Whether you want to relax, reflect, or re-energize, you can craft the perfect mental escape.
              </p>
              
            </CardContent>
            </Card>
          </div>

        </div>

  )
}

export default ExperienceCards
