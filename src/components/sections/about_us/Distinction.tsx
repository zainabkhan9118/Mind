
const Distinction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen px-2 sm:px-4">
      <div className="max-w-7xl xl:max-w-8xl 2xl:max-w-9xl 3xl:max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 py-3 sm:py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-2 sm:gap-8 justify-center items-start">
          {/* Left Content */}
          <div
            className="w-full max-w-full lg:w-[600px] h-auto p-2 sm:p-8 rounded-3xl shadow-none border-none flex flex-col justify-start"
          >
            <div
              className="text-base sm:text-[16px] font-semibold text-[#0D0A09] mb-1"
            >
                What Sets Us Apart
            </div>
            <h2
              className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#0D0A09] leading-[1.1] mb-2"
            >
              Empowering Minds Through Technology
            </h2>
          </div>
          {/* Right Content - Features List */}
          <div className="w-full max-w-full lg:w-[600px] h-auto px-2 py-4 sm:px-4">
            {/* Feature 1 */}
            <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 mt-1">
                <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12C30.6274 12 36 17.3726 36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 28L28 24L24 20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs md:text-sm text-[#0D0A09] font-semibold mb-0.5 sm:mb-1">Immersive VR environments designed for emotional reset</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1 md:mb-2">Immersive VR Environments</h3>
                <p className="text-xs sm:text-sm md:text-base leading-tight sm:leading-normal">Step into calming, immersive worlds that help ease stress and rebalance your emotional state.</p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 mt-1">
                <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="14" width="24" height="20" rx="2" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 22H28" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 26H28" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs md:text-sm text-[#0D0A09] font-semibold mb-0.5 sm:mb-1">AI-powered mind coaching tailored to your unique needs</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1 md:mb-2">AI-Powered Coaching</h3>
                <p className="text-xs sm:text-sm md:text-base leading-tight sm:leading-normal">Receive intelligent, personalized guidance that evolves with your mood, habits, and goals.</p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 mt-1">
                <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12C24 12 18 18 12 18C12 30 18.5 36 24 36C29.5 36 36 30 36 18C30 18 24 12 24 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs md:text-sm text-[#0D0A09] font-semibold mb-0.5 sm:mb-1">Therapeutic soundscapes and brainwave tools backed by science</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1 md:mb-2">Therapeutic Soundscapes</h3>
                <p className="text-xs sm:text-sm md:text-base leading-tight sm:leading-normal">Experience sound-based therapies like binaural beats and EMDR, crafted to enhance focus, sleep, and healing.</p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 mt-1">
                <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="19" r="7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="32" r="3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="32" cy="32" r="3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 26V36" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs md:text-sm text-[#0D0A09] font-semibold mb-0.5 sm:mb-1">A supportive digital community for group healing and connection</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1 md:mb-2">Supportive Community</h3>
                <p className="text-xs sm:text-sm md:text-base leading-tight sm:leading-normal">Join live group sessions or private spaces to grow and reflect with like-minded individuals.</p>
              </div>
            </div>
            
            {/* Feature 5 */}
            <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 mt-1">
                <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 24C18 24 20 28 24 28C28 28 30 24 30 24" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs md:text-sm text-[#0D0A09] font-semibold mb-0.5 sm:mb-1">Customizable sessions for sleep, anxiety, focus, and self-growth</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1 md:mb-2">Customizable Sessions</h3>
                <p className="text-xs sm:text-sm md:text-base leading-tight sm:leading-normal">Create personalized journeys by mixing sound, visuals, and techniques to suit your mental wellness needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distinction;
