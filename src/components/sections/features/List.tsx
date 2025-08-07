import { motion } from 'framer-motion'


const List = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 w-full">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[80px]">

        <div className="flex flex-col lg:flex-col gap-4 sm:gap-6 lg:gap-8 justify-start items-self">
            <h3 className="font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-[120%] tracking-[-0.01em] font-[Wix Madefor Text]">
                 A simple path to deeper calm, clarity,<br className="hidden sm:block" /> <span className="sm:hidden"></span>and personal growth!
            </h3>

            <p className='font-wix font-normal text-[14px] sm:text-[16px] leading-[150%] tracking-normal max-w-3xl'>
                From calming VR environments to AI-guided mental training, Mind Player redefines how people heal, grow, and thrive, anytime, anywhere.
            </p>
        </div>


        {/*1st Card Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center bg-[#0D0A090D] rounded-xl sm:rounded-2xl lg:rounded-3xl">

        <motion.div
            className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[762px] overflow-hidden shadow-none border-none bg-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <img
              src="/VR_Girl.svg"
              alt="Person using VR headset"
              className="w-full h-full object-cover rounded-t-xl sm:rounded-t-2xl lg:rounded-t-none lg:rounded-l-3xl"
            />
          </motion.div>

          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 h-auto lg:h-[640px] p-5 sm:p-6 lg:p-8 shadow-none border-none flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0A09] mb-2 sm:mb-4">
              Mind Sessions for<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Inner Calm
            </h2>

            <p className="text-sm sm:text-base text-[#0D0A09] font-medium mb-2 sm:mb-4">
              Guided practices for daily peace and self-growth.
            </p>

            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 lg:mb-8">
              Enter beautifully designed mental spaces to help you unwind, reset, and
              grow. These sessions are guided by science-backed methods and
              created to support emotional balance and cognitive health — all from the
              comfort of your chosen environment.
            </p>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Meditations</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Find stillness and clarity with guided mindfulness practices.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Hypnosis</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Dive into deeper states of awareness and relaxation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Coaching</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Unlock motivation and insight with voice-led mental coaching.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Breathwork</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Breathe deeply, release stress, and regulate your nervous system.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Sleep Stories</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Drift into restful sleep with calming, voice-guided narratives.</p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>

        {/* 2nd Card Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center bg-[#0D0A090D] rounded-xl sm:rounded-2xl lg:rounded-3xl">

          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 h-auto lg:h-[640px] p-5 sm:p-6 lg:p-8 shadow-none border-none flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0A09] mb-2 sm:mb-4">
              Healing Music &<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Frequencies
            </h2>

            <p className="text-sm sm:text-base text-[#0D0A09] font-medium mb-2 sm:mb-4">
              Sound therapies that tune your mind and body.
            </p>

            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 lg:mb-8">
              Our audio library is curated to shift brainwaves, enhance focus, and soothe your emotional state using scientifically validated sound frequencies. Pair them with visuals or use them standalone as a mental tune-up.
            </p>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Binaural Beats</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Synchronize brainwaves for focus, sleep, or relaxation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Solfeggio Tones</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Ancient frequencies believed to promote healing and balance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">EMDR Audio</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Rhythmic bilateral stimulation to support emotional processing.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Soundscapes</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Natural and ambient environments that create calming immersion.</p>
                </div>
              </div>
              
            </div>
            
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[686px] overflow-hidden shadow-none border-none bg-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <img
              src="/Feature2.svg"
              alt="Person using VR headset"
              className="w-full h-full object-cover rounded-t-xl sm:rounded-t-2xl lg:rounded-t-none lg:rounded-r-3xl"
            />
          </motion.div>
        </div>

        {/*3rd Card Section */}

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center bg-[#0D0A090D] rounded-xl sm:rounded-2xl lg:rounded-3xl">
          <motion.div
            className="w-full lg:w-1/2 h-[260px] sm:h-[350px] md:h-[420px] lg:h-[658px] max-w-full overflow-hidden shadow-none border-none bg-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <img
              src="/Feature3.svg"
              alt="Person using VR headset"
              className="w-full h-full object-cover rounded-t-xl sm:rounded-t-2xl lg:rounded-t-none lg:rounded-l-3xl"
            />
          </motion.div>

          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 h-auto p-5 sm:p-6 lg:p-8 shadow-none border-none flex flex-col max-w-full lg:max-w-[600px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0A09] mb-2 sm:mb-4">
              AI-Powered
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Mind Coach
            </h2>

            <p className="text-sm sm:text-base text-[#0D0A09] font-medium mb-2 sm:mb-4">
              Smart guidance tailored to your mind’s needs.
            </p>

            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 lg:mb-8">
              Your intelligent mental wellness companion learns from your behavior, preferences, and goals — offering personalized support every day. It helps you stay on track, build habits, and unlock deeper self-awareness through gentle nudges and custom suggestions.
            </p>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Personalized Suggestions</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Daily session and content recommendations based on your progress.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Daily Support</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Thoughtful prompts, reminders, and mood check-ins to keep you balanced.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Guided Journeys</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Multi-step experiences designed to guide long-term growth and mental transformation.</p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>

        
         {/* 4th Card Section */}
      

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center bg-[#0D0A090D] rounded-xl sm:rounded-2xl lg:rounded-3xl">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 h-auto p-5 sm:p-6 lg:p-8 shadow-none border-none flex flex-col max-w-full lg:max-w-[600px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0A09] mb-2 sm:mb-4">
              Wellness Community<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>& Shared Spaces
            </h2>

            <p className="text-sm sm:text-base text-[#0D0A09] font-medium mb-2 sm:mb-4">
              Healing happens better together.
            </p>

            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 lg:mb-8">
              Connect with others in a safe, supportive space where you can meditate, learn, and grow as a group. Whether you're joining a public session or creating a private one with friends or peers, Mind Player nurtures meaningful interaction through immersive connection.
            </p>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Create & Join Group Sessions</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Host or join live experiences with others around the world.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Private Spaces</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Build your own calming space to share with selected users or teams.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mr-2 sm:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Peer Support</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Engage in open, mindful discussions with like-minded individuals.</p>
                </div>
              </div>
            </div>
            
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 h-[260px] sm:h-[350px] md:h-[420px] lg:h-[610px] max-w-full overflow-hidden shadow-none border-none bg-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <img
              src="/Feature4.svg"
              alt="Person using VR headset"
              className="w-full h-full object-cover rounded-r-3xl"
            />
          </motion.div>
        </div>

      </div>
        </div>
        </div>
  )
}

export default List
