import { motion } from 'framer-motion'


const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">

          {/* Left Content */}
          <motion.div
            className="h-auto md:h-[500px] lg:h-[640px] w-full md:max-w-[500px] lg:max-w-[600px] p-4 sm:p-6 lg:p-8 rounded-3xl shadow-none border-none flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="text-[14px] sm:text-[16px] font-semibold text-[#0D0A09] mb-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Features
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0A09] leading-[1.1] mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Mind Sessions for<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Inner Calm
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-gray-600 max-w-lg leading-snug"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Get personalized daily support from your intelligent AI guide, designed to help you build better habits, stay grounded, and grow at your own pace.
            </motion.p>
            
            <motion.div
              className="space-y-2 mt-4 sm:mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.1 }}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Meditations</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Hypnosis</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Coaching</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Breathwork</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Sleep stories</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-auto pt-8 sm:pt-12 lg:pt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button className="bg-[#0D0A090D] border border-gray-300 text-[#0D0A09] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-gray-200 transition-colors duration-200">
                Explore All Features
              </button>
              
            </motion.div>
          </motion.div>

          {/* Right Content - VR Person Image */}
          <motion.div
            className="h-auto sm:h-[450px] md:h-[500px] lg:h-[640px] w-full sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] rounded-3xl overflow-hidden mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <img
              src="/VR_Girl.svg"
              alt="Person using VR headset"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Features
