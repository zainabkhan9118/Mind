
const List = () => {
  return (
       <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 w-full">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[80px]">

        <div className="flex flex-col lg:flex-col gap-4 sm:gap-6 lg:gap-8 justify-start items-self">
            <h3 className="font-bold text-[24px] sm:text-[28px] lg:text-[32px] 2xl:text-[40px] 3xl:text-[48px] leading-[120%] tracking-[-0.01em] font-[Wix Madefor Text]">
              Your Gateway to Mindful <br /> Transformation!
            </h3>

            <p className='font-wix font-normal text-[14px] sm:text-[16px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[24px] leading-[150%] tracking-normal max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl'>
                From immersive VR meditation to AI-powered mental training and global expert connections, Mind Player guides you toward relaxation, focus, better sleep, and personal growth — all in one transformative journey.
            </p>
        </div>


        {/*1st Card Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl">

        <div
            className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[762px] 2xl:h-[900px] 3xl:h-[950px] 4xl:h-[1100px] overflow-hidden shadow-none border-none bg-transparent"
          >
            <img
              src="/2.png"
              alt="Learn more image"
              className="w-full h-full object-cover rounded-t-xl sm:rounded-t-2xl lg:rounded-t-none lg:rounded-l-3xl"
              loading="lazy"
            />
          </div>

          {/* Left Content */}
          <div
            className="w-full lg:w-1/2 h-auto lg:h-[640px] 2xl:h-[800px] 3xl:h-[900px] 4xl:h-[1000px] p-5 sm:p-6 lg:p-8 2xl:p-10 3xl:p-12 4xl:p-16 shadow-none border-none flex flex-col"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold text-white mb-2 sm:mb-4 2xl:mb-6 3xl:mb-8 4xl:mb-10">
              Discover Your Inner Peace
            </h2>

            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-white font-medium mb-2 sm:mb-4 2xl:mb-5 3xl:mb-6 4xl:mb-8">
              Deep relaxation through immersive VR meditation.
            </p>

            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-400 mb-4 sm:mb-6 lg:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">
              Step into calming virtual worlds designed to help you reduce stress, quiet your thoughts, and reconnect with inner balance. Our guided VR meditation sessions combine science, mindfulness, and immersive technology to bring clarity and peace to your everyday life.
            </p>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 2xl:space-y-8 3xl:space-y-10 4xl:space-y-12">
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Immersive Worlds</p>
                  <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Explore calming 3D environments for meditation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Guided Sessions</p>
                  <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Step-by-step practices to ease stress.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Clarity of Mind</p>
                  <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Clear away distractions and mental fog.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Inner Balance</p>
                  <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Build resilience for everyday challenges.</p>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>

        {/* 2nd Card Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl">

          {/* Left Content */}
          <div
            className="w-full lg:w-1/2 h-auto lg:h-[640px] 2xl:h-[800px] 3xl:h-[900px] 4xl:h-[1000px] p-5 sm:p-6 lg:p-8 2xl:p-10 3xl:p-12 4xl:p-16 shadow-none border-none flex flex-col"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold text-white mb-2 sm:mb-4 2xl:mb-6 3xl:mb-8 4xl:mb-10">
             Transform Your
                <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Mental Wellness
            </h2>

            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-white font-medium mb-2 sm:mb-4 2xl:mb-5 3xl:mb-6 4xl:mb-8">
              AI-powered experiences for emotional strength and resilience.
            </p>

            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-400 mb-4 sm:mb-6 lg:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">
              Your mental wellness is unique — and so should your journey be. MindPlayer uses AI-driven personalization to adapt sessions to your needs, empowering you to overcome stress, strengthen emotions, and thrive in your personal and professional life every single day
            </p>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base">Personalized AI</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Sessions tailored to your goals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base">Build Resilience</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Train your mind for daily challenges.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base">Emotional Strength</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Balance emotions and improve mood.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base">Daily Wellness</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Easy routines for lasting results.</p>
                </div>
              </div>
              
            </div>
            
          </div>

          <div
            className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[686px] 2xl:h-[900px] 3xl:h-[950px] 4xl:h-[1100px] overflow-hidden shadow-none border-none bg-transparent"
          >
            <img
              src="/l2.png"
              alt="Learn more image"
              className="w-full h-full object-cover rounded-b-xl sm:rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl"
              loading="lazy"
            />
          </div>
        </div>

        {/*3rd Card Section */}

         <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl">

        <div
            className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[762px] 2xl:h-[900px] 3xl:h-[950px] 4xl:h-[1100px] overflow-hidden shadow-none border-none bg-transparent"
          >
            <img
              src="/l3.png"
              alt="Person using VR headset"
              className="w-full h-full object-cover rounded-t-xl sm:rounded-t-2xl lg:rounded-t-none lg:rounded-l-3xl"
              loading="lazy"
            />
          </div>

          {/* Left Content */}
          <div
            className="w-full lg:w-1/2 h-auto lg:h-[640px] 2xl:h-[800px] 3xl:h-[900px] 4xl:h-[1000px] p-5 sm:p-6 lg:p-8 2xl:p-10 3xl:p-12 4xl:p-16 shadow-none border-none flex flex-col"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold text-white mb-2 sm:mb-4 2xl:mb-6 3xl:mb-8 4xl:mb-10">
              Elevate Your

              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Mind Today
            </h2>

            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-white font-medium mb-2 sm:mb-4 2xl:mb-5 3xl:mb-6 4xl:mb-8">
              Unlock focus, creativity, and limitless potential.
            </p>

            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-400 mb-4 sm:mb-6 lg:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">
              Go beyond meditation — elevate your mind with transformative sessions that enhance focus, spark creativity, and drive motivation. From group coaching to immersive hypnosis and mental training, MindPlayer helps you unleash your full potential and perform at your very best.
            </p>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 2xl:space-y-8 3xl:space-y-10 4xl:space-y-12">
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Boost Focus</p>
                  <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Cut distractions, improve concentration.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Spark Creativity</p>
                  <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Inspire new ideas effortlessly.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Motivate Daily</p>
                  <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Keep energy and drive alive.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Unlock Potential</p>
                  <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Reach your peak mental performance.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        
         {/* 4th Card Section */}
      

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl">
          {/* Left Content */}
          <div
            className="w-full lg:w-1/2 h-auto lg:h-[640px] 2xl:h-[800px] 3xl:h-[900px] 4xl:h-[1000px] p-5 sm:p-6 lg:p-8 2xl:p-10 3xl:p-12 4xl:p-16 shadow-none border-none flex flex-col"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold text-white mb-2 sm:mb-4 2xl:mb-6 3xl:mb-8 4xl:mb-10">
              Discover
            <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Restful Nights
            </h2>

            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-white font-medium mb-2 sm:mb-4 2xl:mb-5 3xl:mb-6 4xl:mb-8">
              Rest deeper. Wake brighter.
            </p>

            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-400 mb-4 sm:mb-6 lg:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">
              Unlock restorative sleep with immersive VR sessions designed to calm your mind, ease your body, and guide you into natural, refreshing rest. Wake up with clarity, energy, and balance to embrace your day.
            </p>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 2xl:space-y-8 3xl:space-y-10 4xl:space-y-12">
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Fall Asleep Faster</p>
                  <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Gentle VR-guided relaxation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Improve Sleep Quality</p>
                  <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Reduce night-time awakenings.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Dream in Clarity</p>
                  <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Lucid, calm, and creative dreaming.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Wake Restored</p>
                  <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Start fresh with energy and focus.</p>
                </div>
              </div>
            </div>
            
          </div>

          <div
            className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[686px] 2xl:h-[900px] 3xl:h-[950px] 4xl:h-[1100px] overflow-hidden shadow-none border-none bg-transparent"
          >
            <img
              src="/l4.png"
              alt="learn more image"
              className="w-full h-full object-cover rounded-b-xl sm:rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl"
              loading="lazy"
            />
          </div>
        </div>

          {/* 5th Card Section */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl">

            <div
              className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[762px] 2xl:h-[900px] 3xl:h-[950px] 4xl:h-[1100px] overflow-hidden shadow-none border-none bg-transparent"
            >
              <img
                src="/l5.png"
                alt="Learn more image"
                className="w-full h-full object-cover rounded-t-xl sm:rounded-t-2xl lg:rounded-t-none lg:rounded-l-3xl"
                loading="lazy"
              />
            </div>

            {/* Left Content */}
            <div
              className="w-full lg:w-1/2 h-auto lg:h-[640px] 2xl:h-[800px] 3xl:h-[900px] 4xl:h-[1000px] p-5 sm:p-6 lg:p-8 2xl:p-10 3xl:p-12 4xl:p-16 shadow-none border-none flex flex-col"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold text-white mb-2 sm:mb-4 2xl:mb-6 3xl:mb-8 4xl:mb-10">
                Connect Your Mind<br /> Globally
              </h2>

              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-white font-medium mb-2 sm:mb-4 2xl:mb-5 3xl:mb-6 4xl:mb-8">
                Grow together. Learn from the best.
              </p>

              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-400 mb-4 sm:mb-6 lg:mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-16">
                Connect with a global network of Mind Experts and like-minded users. Join live sessions, exchange experiences, and access expert guidance in psychology, coaching, hypnosis, and mindfulness — all inside the immersive Mind Player Hub.
              </p>
            
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 2xl:space-y-8 3xl:space-y-10 4xl:space-y-12">
                <div className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Join Live Sessions</p>
                    <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Meditations, coaching, hypnosis & more.</p>
                  </div>
                </div>
              
                <div className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Meet Mind Experts</p>
                    <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Psychology, coaching, hypnosis, mindfulness.</p>
                  </div>
                </div>
              
                <div className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Create Groups</p>
                    <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Share, learn, and grow together.</p>
                  </div>
                </div>
              
                <div className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">Exclusive Spaces</p>
                    <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Premium communities with unique content.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-5 4xl:mr-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl">AI Mind Coach</p>
                    <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl">Personalized support available anytime.</p>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
      </div>
        </div>
        </div>
  )
}

export default List
