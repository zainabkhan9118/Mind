
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
                Why Choose Mind Player
              </h2>
              <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                Experience a new era of mental wellness where immersive technology, neuroscience, and AI come together to help you feel better, think clearer, and grow from within.
              </p>
            </div>
    
            {/* Card Section */}
            <div className="relative mt-16">
              {/* Three-column layout with brain in center */}
              <div className="flex flex-col lg:flex-row justify-between items-center">
                {/* Left Column */}
                <div className="w-full lg:w-1/3 space-y-4">
                  <div className="text-center p-4">
                    <h3 className="font-bold text-xl 2xl:text-2xl 3xl:text-3xl mb-2 text-white">Calm Your<br/> Inner World</h3>
                    <p className="text-sm 2xl:text-base 3xl:text-lg text-gray-400">
                      Release tension and anxiety through<br/> immersive VR journeys and focused <br/>breathwork.
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <h3 className="font-bold text-xl 2xl:text-2xl 3xl:text-3xl mb-2 text-white">Feel Wonderfully <br/>Present</h3>
                    <p className="text-sm 2xl:text-base 3xl:text-lg text-gray-400">
                      Step into awe-inspiring digital spaces that<br/> reconnect you to the here and now.
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <h3 className="font-bold text-xl 2xl:text-2xl 3xl:text-3xl mb-2 text-white">Find Your<br/> Mental Reset</h3>
                    <p className="text-sm 2xl:text-base 3xl:text-lg text-gray-400">
                      Tap into deep relaxation and emotional<br/> restoration whenever or wherever you<br/> need it.
                    </p>
                  </div>
                </div>
                
                {/* Center Column with Brain Image */}
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
                  <div className="text-center p-4">
                    <h3 className="font-bold text-xl 2xl:text-2xl 3xl:text-3xl mb-2 text-white">Strengthen from the<br/> Inside Out</h3>
                    <p className="text-sm 2xl:text-base 3xl:text-lg text-gray-400">
                      Build resilience and self-trust with<br/> personalized guidance and empowering<br/> mind sessions.
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <h3 className="font-bold text-xl 2xl:text-2xl 3xl:text-3xl mb-2 text-white">Ease Into<br/> Restful Sleep</h3>
                    <p className="text-sm 2xl:text-base 3xl:text-lg text-gray-400">
                      Unwind with sleep-inducing sounds and<br/> stories designed to gently quiet the mind.
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <h3 className="font-bold text-xl 2xl:text-2xl 3xl:text-3xl mb-2 text-white">Sharpen Your Mental<br/> Flow</h3>
                    <p className="text-sm 2xl:text-base 3xl:text-lg text-gray-400">
                      Enhance focus and clarity with sound-<br/>driven tools and AI-powered mind<br/> coaching.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Benefits
