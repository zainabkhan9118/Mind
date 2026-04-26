import { Card } from '@/components/ui/card'

const Experiences = () => {
  return (
    <div className="py-10 sm:py-16 md:py-20">
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Shift your state. Instantly.
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            Step into engineered environments designed to change how your brain operates.
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1 - Enter the environment */}
          <Card className="group hover:shadow-lg hover:shadow-mind-violet/10 h-[420px] sm:h-[480px] md:h-[668px] w-full border-none transition-shadow duration-300 overflow-hidden p-0 text-white relative rounded-xl md:rounded-2xl lg:rounded-3xl">
            <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: "url('/Experience.jpg')", backgroundSize: "100% 100%", backgroundPosition: "center" }} />
            <div className="flex flex-col h-full p-4 sm:p-8 relative z-10">
              {/* Large Number */}
              <div className="w-[80px] sm:w-[120px] md:w-[142px] h-[120px] sm:h-[200px] md:h-[312px]">
                <span className="text-[100px] sm:text-[160px] md:text-[220px] font-bold">1</span>
              </div>

              {/* Content Section */}
              <div className="mt-6 sm:mt-10 md:mt-16">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-left">
                  Enter the<br />environment
                </h3>
                <p className="text-sm sm:text-base text-left leading-snug">
                  Step into immersive spaces designed to interrupt your current state<br />
                  and initiate change at a neurological level.
                </p>
              </div>
            </div>
          </Card>

          {/* Card 2 - Take control of your state */}
          <Card className="group hover:shadow-lg hover:shadow-mind-violet/10 text-white h-[420px] sm:h-[480px] md:h-[668px] w-full border-none transition-shadow duration-300 overflow-hidden p-0 relative rounded-xl md:rounded-2xl lg:rounded-3xl">
            <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: "url('/2.png')", backgroundSize: "100% 100%", backgroundPosition: "center" }} />
            <div className="flex flex-col h-full p-4 sm:p-8 relative z-10">
              {/* Large Number */}
              <div className="w-[80px] sm:w-[120px] md:w-[142px] h-[120px] sm:h-[200px] md:h-[312px]">
                <span className="text-[100px] sm:text-[160px] md:text-[220px] font-bold">2</span>
              </div>
              {/* Content Section */}
              <div className="mt-6 sm:mt-10 md:mt-16">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-left">
                  Take control<br />of your state
                </h3>
                <p className="text-sm sm:text-base text-left leading-snug">
                  Your mind shifts from reactive to directed —<br />
                  giving you clarity, focus, and control on demand.
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
