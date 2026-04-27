
const List = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 w-full">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[80px]">

          <div className="flex flex-col lg:flex-col gap-4 sm:gap-6 lg:gap-8 justify-start items-self">
            <h3 className="font-bold text-[24px] sm:text-[28px] lg:text-[32px] 2xl:text-[40px] 3xl:text-[48px] leading-[120%] tracking-[-0.01em] text-white">
              A new way to train your mind
            </h3>
            <p className='font-wix font-normal text-[14px] sm:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[150%] tracking-normal max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl text-gray-400'>
              Not passive content. Not background noise.<br />
              A system designed to shift your state — in minutes.
            </p>
          </div>


          {/* 1st Card - Guided Sessions */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 2xl:gap-10 3xl:gap-12 justify-center items-center glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl">

            <div
              className="w-full lg:w-1/2 h-[380px] sm:h-[400px] md:h-[500px] lg:h-[762px] 2xl:h-[800px] 3xl:h-[900px] 4xl:h-[1100px] overflow-hidden shadow-none border-none bg-transparent"
            >
              <img
                src="/Feature 1.jpg"
                alt="Guided Sessions"
                className="w-full h-full object-cover object-bottom rounded-t-xl sm:rounded-t-2xl lg:rounded-t-none lg:rounded-l-3xl"
                loading="lazy"
              />
            </div>

            <div
              className="w-full lg:w-1/2 h-auto lg:h-[640px] 2xl:h-[700px] 3xl:h-[800px] 4xl:h-[1000px] p-5 sm:p-6 lg:p-8 2xl:p-10 3xl:p-12 4xl:p-14 shadow-none border-none flex flex-col"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold text-white mb-2 sm:mb-4 2xl:mb-6 3xl:mb-8 4xl:mb-10">
                Guided Sessions
              </h2>

              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-white font-medium mb-2 sm:mb-4 2xl:mb-6 4xl:mb-8">
                Shift your state with precision.
              </p>

              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-400 mb-4 sm:mb-6 lg:mb-8 2xl:mb-10 4xl:mb-12">
                Enter structured sessions designed to move you from stress to calm, from distraction to focus, from fatigue to clarity.
              </p>

              <div className="space-y-3 sm:space-y-4 lg:space-y-6 2xl:space-y-8 3xl:space-y-10">
                {[
                  { title: "Meditation", desc: "Regulate your baseline and restore mental clarity." },
                  { title: "Hypnosis", desc: "Access deeper states and rewire internal patterns." },
                  { title: "Coaching", desc: "Activate direction, focus and mental momentum." },
                  { title: "Breathwork", desc: "Control your physiology in real time." },
                  { title: "Sleep Stories", desc: "Downshift your system into deep recovery." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl">{item.title}</p>
                      <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2nd Card - Audio */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 2xl:gap-10 3xl:gap-12 justify-center items-center glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl">

            <div
              className="w-full lg:w-1/2 h-auto lg:h-[640px] 2xl:h-[700px] 3xl:h-[800px] 4xl:h-[1000px] p-5 sm:p-6 lg:p-8 2xl:p-10 3xl:p-12 4xl:p-14 shadow-none border-none flex flex-col"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold text-white mb-2 sm:mb-4 2xl:mb-6 3xl:mb-8 4xl:mb-10">
                Audio that shifts<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>your state
              </h2>

              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-white font-medium mb-2 sm:mb-4 2xl:mb-6 4xl:mb-8">
                Not background. Regulation.
              </p>

              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-400 mb-4 sm:mb-6 lg:mb-8 2xl:mb-10 4xl:mb-12">
                Our sound systems are designed to influence brain states, helping you enter focus, calm or recovery faster.
              </p>

              <div className="space-y-3 sm:space-y-4 lg:space-y-6 2xl:space-y-8 3xl:space-y-10">
                {[
                  { title: "Binaural Beats", desc: "Guide your brain into specific states." },
                  { title: "Music", desc: "Designed to shape emotion, focus, and mental performance." },
                  { title: "White Noise", desc: "Create a stable auditory environment for deep focus and calm." },
                  { title: "Soundscapes", desc: "Build immersive environments for state control." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl">{item.title}</p>
                      <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="w-full lg:w-1/2 h-[380px] sm:h-[400px] md:h-[500px] lg:h-[686px] 2xl:h-[800px] 3xl:h-[900px] 4xl:h-[1100px] overflow-hidden shadow-none border-none bg-transparent"
            >
              <img
                src="/Feature 2.png"
                alt="Audio that shifts your state"
                className="w-full h-full object-cover rounded-b-xl sm:rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* 3rd Card - Intelligent State Guidance */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 2xl:gap-10 3xl:gap-12 justify-center items-center glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl">
            <div
              className="w-full lg:w-1/2 h-[380px] sm:h-[400px] md:h-[500px] lg:h-[762px] 2xl:h-[800px] 3xl:h-[900px] 4xl:h-[1100px] overflow-hidden shadow-none border-none bg-transparent"
            >
              <img
                src="/IMAGE 5.PNG"
                alt="Intelligent State Guidance"
                className="w-full h-full object-cover rounded-t-xl sm:rounded-t-2xl lg:rounded-t-none lg:rounded-l-3xl"
                loading="lazy"
              />
            </div>

            <div
              className="w-full lg:w-1/2 h-auto lg:h-[640px] 2xl:h-[700px] 3xl:h-[800px] 4xl:h-[1000px] p-5 sm:p-6 lg:p-8 2xl:p-10 3xl:p-12 4xl:p-14 shadow-none border-none flex flex-col"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold text-white mb-2 sm:mb-4 2xl:mb-6 3xl:mb-8 4xl:mb-10">
                Intelligent State<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Guidance
              </h2>

              <p className="text-sm sm:text-base text-white font-medium mb-2 sm:mb-4">
                Know what your mind needs.
              </p>

              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 lg:mb-8">
                Your AI Mind Coach learns your patterns and helps you choose the right session, at the right moment, for the state you need.
              </p>

              <div className="space-y-3 sm:space-y-4 lg:space-y-6 2xl:space-y-8 3xl:space-y-10">
                {[
                  { title: "Smart Recommendations", desc: "Based on your current state and patterns." },
                  { title: "Daily Guidance", desc: "Stay aligned and consistent." },
                  { title: "Guided Progression", desc: "Build long-term mental control." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl">{item.title}</p>
                      <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4th Card - Train in shared environments */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 2xl:gap-10 3xl:gap-12 justify-center items-center glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl">
            <div
              className="w-full lg:w-1/2 h-auto lg:h-[640px] 2xl:h-[700px] 3xl:h-[800px] 4xl:h-[1000px] p-5 sm:p-6 lg:p-8 2xl:p-10 3xl:p-12 4xl:p-14 shadow-none border-none flex flex-col"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold text-white mb-2 sm:mb-4 2xl:mb-6 3xl:mb-8 4xl:mb-10">
                Train in shared<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>environments
              </h2>

              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-white font-medium mb-2 sm:mb-4 2xl:mb-6 4xl:mb-8">
                State is contagious.
              </p>

              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-gray-400 mb-4 sm:mb-6 lg:mb-8 2xl:mb-10 4xl:mb-12">
                Join others in immersive sessions and regulate your state together.
                The environment you're in shapes the state you enter.
              </p>

              <div className="space-y-3 sm:space-y-4 lg:space-y-6 2xl:space-y-8 3xl:space-y-10">
                {[
                  { title: "Group Sessions", desc: "Enter synchronized mental states." },
                  { title: "Private Spaces", desc: "Train with your circle." },
                  { title: "Peer Connection", desc: "Reinforce consistency and accountability." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 text-gray-400 mr-2 sm:mr-3 2xl:mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-300 text-sm sm:text-base 2xl:text-lg 3xl:text-xl">{item.title}</p>
                      <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base 3xl:text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="w-full lg:w-1/2 h-[380px] sm:h-[400px] md:h-[500px] lg:h-[686px] 2xl:h-[800px] 3xl:h-[900px] 4xl:h-[1100px] overflow-hidden shadow-none border-none bg-transparent"
            >
              <img
                src="/IMAGE 6.PNG"
                alt="Train in shared environments"
                className="w-full h-full object-cover rounded-b-xl sm:rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default List
