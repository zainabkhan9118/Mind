
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="text-[24px] font-semibold text-gray-600 mb-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              MindPlayer
            </motion.div>

            <motion.h1
              className="text-[92px] lg:text-6xl font-bold text-[#0D0A09] leading-[1.1] mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Unlock the<br />
              Power<br />
              <span className="text-gray-900">of Your Mind</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 max-w-lg leading-snug"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Welcome to Mind Player, where we harness the power of VR, neuroscience, and AI to enhance your mental well-being. Discover immersive experiences designed to
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button className="bg-[#DCD3F7] text-black px-8 py-3 rounded-full font-medium hover:bg-[#ccc0f2] transition-colors duration-200">
                Contact Us
              </button>
              <button className="bg-[#0D0A090D] border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors duration-200">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Brain Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <img
              src="/HeroSection.svg"
              alt="Mind Enhancement Visualization"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto"
            />
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default HeroSection
