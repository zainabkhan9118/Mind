
const leftBullets = [
  { top: "You don't lack motivation", bottom: "you lack state control" },
  { top: "Your mind isn't broken", bottom: "it's untrained" },
  { top: "Performance isn't effort", bottom: "it's regulation" },
];

const rightBullets = [
  { top: "You don't need more discipline", bottom: "you need better state access" },
  { top: "Most people react to their mind", bottom: "you'll learn to direct it" },
  { top: "Clarity isn't something you find", bottom: "it's something you enter" },
];

const Benefits = () => {
  return (
    <div>
      <div className="py-10 sm:py-16 md:py-20">
        <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-4 sm:mb-16 space-y-2 sm:space-y-4">
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              Benefits
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Mental performance starts with state
            </h2>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              Everything you experience — focus, clarity, emotion — is driven by your internal state.<br />
              Most people leave it to chance. You won't.
            </p>
          </div>

          {/* Card Section */}
          <div className="relative mt-16">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              {/* Left Column */}
              <div className="w-full lg:w-1/3 space-y-4">
                {leftBullets.map((bullet, i) => (
                  <div key={i} className="text-center p-4">
                    <h3 className="font-bold text-xl 2xl:text-2xl 3xl:text-3xl mb-2 text-white">
                      {bullet.top}
                    </h3>
                    <p className="text-sm 2xl:text-base 3xl:text-lg text-gray-400">
                      {bullet.bottom}
                    </p>
                  </div>
                ))}
              </div>

              {/* Center Column with Brain Video */}
              <div className="w-full lg:w-1/3 flex justify-center my-12 lg:my-0">
                <div className="rounded-4xl overflow-hidden flex items-center justify-center">
                  <video
                    src="/Brain.mp4"
                    poster="/Brain.png"
                    className="w-[440px] h-[440px] md:w-[400px] md:h-[500px] 2xl:w-[500px] 2xl:h-[600px] 3xl:w-[600px] 3xl:h-[720px] object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full lg:w-1/3 space-y-4">
                {rightBullets.map((bullet, i) => (
                  <div key={i} className="text-center p-4">
                    <h3 className="font-bold text-xl 2xl:text-2xl 3xl:text-3xl mb-2 text-white">
                      {bullet.top}
                    </h3>
                    <p className="text-sm 2xl:text-base 3xl:text-lg text-gray-400">
                      {bullet.bottom}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Benefits
