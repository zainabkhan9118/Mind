import { motion } from 'framer-motion';


const Distinction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen px-2 sm:px-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-10 sm:py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center">
          {/* Left Content */}
          <motion.div
            className="w-full max-w-full lg:w-[600px] h-[220px] sm:h-[320px] md:h-[400px] lg:h-[640px] p-4 sm:p-8 rounded-3xl shadow-none border-none flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="text-base sm:text-[16px] font-semibold text-[#0D0A09] mb-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
                What Sets Us Apart
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#0D0A09] leading-[1.1] mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Where Innovation
              <br />
              Meets Inner Calm
            </motion.h2>
          </motion.div>
          {/* Right Content - VR Person Image */}
          <div className="w-full max-w-full lg:w-[600px] h-[420px] sm:h-[450px] md:h-[400px] lg:h-[640px] flex items-center justify-center">
            <img
              src="/Timeline.svg"
              alt="Person using VR headset"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distinction;
