import { Card, CardContent } from "@/components/ui/card"


const ExperienceCards = () => {
  return (
    <div className="flex flex-col w-full justify-between max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 pb-10 sm:pb-16 md:pb-20 pt-2 sm:py-8 lg:py-10 gap-4 sm:gap-10">
      <div className="flex flex-col lg:flex-col gap-2 sm:gap-6 lg:gap-8 justify-start items-self">
        <h3 className="font-bold text-[24px] sm:text-[28px] lg:text-[32px] 2xl:text-[40px] 3xl:text-[48px] leading-[120%] tracking-[-0.01em] font-[Wix Madefor Text] text-white">
          Designed to shift your state
        </h3>
        <p className='font-wix font-normal text-[14px] sm:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[150%] tracking-normal max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl text-gray-400'>
          Each experience is built to move you from one state to another — using environment, sound and guidance working together.
        </p>
      </div>

      {/* Card Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-4 xl:gap-6 2xl:gap-10 3xl:gap-12 flex-wrap md:flex-nowrap justify-between w-full overflow-x-auto md:overflow-x-visible pb-0 scrollbar-hide">
        {/* Card 1 */}
        <Card className="group w-full md:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%] 3xl:w-[48%] h-[700px] sm:h-[750px] md:h-[950px] lg:h-[950px] xl:h-[1000px] 2xl:h-[1150px] 3xl:h-[1250px] border-none shadow-none duration-300 overflow-hidden p-0 flex-shrink-0 glass-card flex flex-col">
          <div className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] 3xl:h-[700px] flex-shrink-0">
            <img src="/E1.svg" alt="Step into new states" className="w-full h-full object-cover rounded-3xl e1-mobile-top" loading="lazy" />
          </div>
          <CardContent className="p-5 sm:p-6 lg:p-6 xl:p-8 2xl:p-10 flex-1 flex flex-col justify-start">
            <h3 className="font-wix font-bold text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-white leading-[120%] tracking-[-0.01em] mb-2 lg:mb-3 2xl:mb-4">
              Step into new states
            </h3>
            <p className="font-wix text-base lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-semibold text-gray-300 leading-[150%] mb-3 lg:mb-3 2xl:mb-6">
              Your environment defines your mind.
            </p>
            <p className="font-wix text-sm sm:text-sm lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-[140%] lg:leading-[140%] mb-4">
              Enter immersive worlds designed to shift your perception, regulate your nervous system and move you into clarity, calm or focus.
            </p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="group w-full md:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%] 3xl:w-[48%] h-[700px] sm:h-[750px] md:h-[950px] lg:h-[950px] xl:h-[1000px] 2xl:h-[1150px] 3xl:h-[1250px] border-none shadow-none duration-300 overflow-hidden p-0 flex-shrink-0 glass-card flex flex-col">
          <div className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] 3xl:h-[700px] flex-shrink-0">
            <img src="/E2.jpeg" alt="Build your state" className="w-full h-full object-cover rounded-3xl" loading="lazy" />
          </div>
          <CardContent className="p-5 sm:p-6 lg:p-6 xl:p-8 2xl:p-10 flex-1 flex flex-col justify-start">
            <h3 className="font-wix font-bold text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-white leading-[120%] tracking-[-0.01em] mb-2 lg:mb-3 2xl:mb-4">
              Build your state
            </h3>
            <p className="font-wix text-base lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-semibold text-gray-300 leading-[150%] mb-3 lg:mb-3 2xl:mb-6">
              Design how you want to feel.
            </p>
            <p className="font-wix text-sm sm:text-sm lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-[140%] lg:leading-[140%] mb-4">
              Combine environments, sounds and sessions to create a personalized system that puts you into the exact state you need.
            </p>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

export default ExperienceCards
