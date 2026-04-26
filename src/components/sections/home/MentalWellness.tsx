import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const MentalWellness = () => {
  return (
    <div className="py-10 sm:py-16 md:py-20 flex justify-between">
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Control your state.
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            Performance, clarity, emotion, focus — everything starts with your state.<br />
            Most people don't control it. You will.
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 - Enter a controlled mental environment */}
          <Card
            className="group hover:shadow-lg hover:shadow-mind-violet/10 h-[380px] sm:h-[420px] md:h-[464px] 2xl:h-[600px] 3xl:h-[720px] w-full transition-all duration-300 overflow-hidden p-0 glass-card flex-shrink-0 cursor-default rounded-xl md:rounded-2xl lg:rounded-3xl flex flex-col"
          >
            <div className="flex-grow flex flex-col justify-between px-4 sm:px-6 pt-4 sm:pt-6 pb-0">
              <CardHeader className="p-0">
                <CardTitle className="text-base sm:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl font-bold text-white mb-1 text-left">
                  Enter a controlled mental environment
                </CardTitle>
                <CardDescription className="text-gray-400 leading-snug text-xs sm:text-sm 2xl:text-base 3xl:text-lg mb-0 text-left">
                  Not content. Not noise.<br />
                  A system designed to shift your internal state.
                </CardDescription>
              </CardHeader>
            </div>
            {/* Image at the bottom */}
            <div className="w-full h-48 sm:h-56 mt-auto overflow-hidden">
              <img
                src="/IMAGE 1.PNG"
                alt="Controlled mental environment"
                className="w-full h-full object-cover md:rounded-b-lg transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </Card>

          {/* Card 2 - Rewire how your mind responds */}
          <Card
            className="group hover:shadow-lg hover:shadow-mind-violet/10 h-[380px] sm:h-[420px] md:h-[464px] 2xl:h-[600px] 3xl:h-[720px] w-full transition-all duration-300 overflow-hidden p-0 flex flex-col glass-card flex-shrink-0 cursor-default rounded-xl md:rounded-2xl lg:rounded-3xl"
          >
            <div className="flex-grow flex flex-col justify-between px-4 sm:px-6 pt-4 sm:pt-6 pb-0">
              <CardHeader className="p-0">
                <CardTitle className="text-base sm:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl font-bold text-white mb-1 text-left">
                  Rewire how your mind responds
                </CardTitle>
                <CardDescription className="text-gray-400 leading-snug text-xs sm:text-sm 2xl:text-base 3xl:text-lg mb-0 text-left">
                  Train calm. Train focus. Train intensity.<br />
                  On demand.
                </CardDescription>
              </CardHeader>
            </div>
            {/* Image at the bottom */}
            <div className="w-full h-48 sm:h-56 mt-auto overflow-hidden">
              <img
                src="/IMAGE 2.PNG"
                alt="Rewire mind"
                className="w-full h-full object-cover md:rounded-b-lg transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </Card>

          {/* Card 3 - Build a mind that adapts instantly */}
          <Card
            className="group hover:shadow-lg hover:shadow-mind-violet/10 h-[380px] sm:h-[420px] md:h-[464px] 2xl:h-[600px] 3xl:h-[720px] w-full transition-all duration-300 overflow-hidden p-0 flex flex-col glass-card flex-shrink-0 cursor-default rounded-xl md:rounded-2xl lg:rounded-3xl"
          >
            <div className="flex-grow flex flex-col justify-between px-4 sm:px-6 pt-4 sm:pt-6 pb-0">
              <CardHeader className="p-0">
                <CardTitle className="text-base sm:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl font-bold text-white mb-1 text-left">
                  Build a mind that adapts instantly
                </CardTitle>
                <CardDescription className="text-gray-400 leading-snug text-xs sm:text-sm 2xl:text-base 3xl:text-lg mb-0 text-left">
                  From stress → clarity<br />
                  From fatigue → readiness
                </CardDescription>
              </CardHeader>
            </div>
            {/* Image at the bottom */}
            <div className="w-full h-48 sm:h-56 mt-auto overflow-hidden">
              <img
                src="/IMAGE 3.PNG"
                alt="Adaptive mind"
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
