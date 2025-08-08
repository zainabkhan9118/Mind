
const Benefits = () => {
  return (
    <div>
      <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-16 space-y-4">
              <p className="text-lg text-gray-900 max-w-4xl mx-auto">
                Benefits
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Mind Player
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
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
                    <h3 className="font-bold text-xl mb-2">Calm Your<br/> Inner World</h3>
                    <p className="text-sm text-gray-600">
                      Release tension and anxiety through<br/> immersive VR journeys and focused <br/>breathwork.
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <h3 className="font-bold text-xl mb-2">Feel Wonderfully <br/>Present</h3>
                    <p className="text-sm text-gray-600">
                      Step into awe-inspiring digital spaces that<br/> reconnect you to the here and now.
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <h3 className="font-bold text-xl mb-2">Find Your<br/> Mental Reset</h3>
                    <p className="text-sm text-gray-600">
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
                      className="w-[440px] h-[440px] md:w-[400px] md:h-[500px] object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="none"
                    />
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="w-full lg:w-1/3 space-y-4">
                  <div className="text-center p-4">
                    <h3 className="font-bold text-xl mb-2">Strengthen from the<br/> Inside Out</h3>
                    <p className="text-sm text-gray-600">
                      Build resilience and self-trust with<br/> personalized guidance and empowering<br/> mind sessions.
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <h3 className="font-bold text-xl mb-2">Ease Into<br/> Restful Sleep</h3>
                    <p className="text-sm text-gray-600">
                      Unwind with sleep-inducing sounds and<br/> stories designed to gently quiet the mind.
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <h3 className="font-bold text-xl mb-2">Sharpen Your Mental<br/> Flow</h3>
                    <p className="text-sm text-gray-600">
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
