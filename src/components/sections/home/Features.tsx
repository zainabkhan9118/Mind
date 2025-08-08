import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const carouselData = [
  {
    subtitle: 'Features',
    title: (
      <>
        Healing Music &<br className="hidden sm:block" /> Frequencies
      </>
    ),
    description:
      'Discover the power of therapeutic sounds that gently guide your mind toward deeper relaxation, emotional balance, and improved focus.',
    list: [
      'Binaural beats',
      'Solfeggio tones',
      'EMDR audio',
      'Natural soundscapes',
    ],
    image: '/VR_Girl.svg',
    alt: 'Healing Music',
    button: 'Explore All Features',
  },
  {
    subtitle: 'Features',
    title: (
      <>
        AI-Powered<br className="hidden sm:block" /> Mind Coach
      </>
    ),
    description:
      'Get personalized daily support from your intelligent AI guide, designed to help you build better habits, stay grounded, and grow at your own pace.',
    list: [
      'Personalized suggestions',
      'Daily check-ins & support',
      'Coaching',
      'Guided self-growth journeys',
    ],
    image: '/Feature2.svg',
    alt: 'AI Mind Coach',
    button: 'Explore All Features',
  },
  {
    subtitle: 'Features',
    title: (
      <>
        Supportive<br className="hidden sm:block" /> Wellness Community
      </>
    ),
    description:
      'Join a welcoming space where you can meditate, heal, and connect with like-minded individuals through shared experiences and live group sessions.',
    list: [
      'Create & join group sessions',
      'Private spaces',
      'Peer-to-peer support',
    ],
    image: '/Feature3.svg',
    alt: 'Wellness Community',
    button: 'Explore All Featuresy',
  },
  {
    subtitle: 'Features',
    title: (
      <>
        Immersive<br className="hidden sm:block" /> VR Experiences
      </>
    ),
    description:
      'Step into calming virtual worlds designed to reduce stress, enhance mindfulness, and promote emotional healing through immersive VR journeys.',
    list: [
      'Guided meditations',
      'Therapeutic environments',
      'Interactive exercises',
      'Real-time feedback',
    ],
    image: '/Feature4.svg',
    alt: 'VR Experiences',
    button: 'Explore All Features',
  },
];

const Features = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = carouselData[index];

  // Variants for smooth animation
  const containerVariants = {
    hidden: { opacity: 0, x: direction > 0 ? 50 : -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        when: "beforeChildren" as const,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      x: direction > 0 ? -50 : 50,
      transition: {
        ease: "easeInOut" as const,
        duration: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        ease: "easeOut" as const,
        duration: 0.6
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col lg:flex-row gap-8 justify-center items-center w-full"
            >
              {/* Left Content */}
              <div className="h-auto md:h-[500px] lg:h-[640px] w-full md:max-w-[500px] lg:max-w-[600px] p-4 sm:p-6 lg:p-8 rounded-3xl shadow-none border-none flex flex-col transition-all duration-700">
                {current.subtitle && (
                  <motion.div 
                    variants={itemVariants}
                    className="text-[14px] sm:text-[16px] font-semibold text-[#0D0A09] mb-1"
                  >
                    {current.subtitle}
                  </motion.div>
                )}
                <motion.h2 
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0A09] leading-[1.1] mb-2"
                >
                  {current.title}
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-base sm:text-lg text-gray-600 max-w-lg leading-snug"
                >
                  {current.description}
                </motion.p>
                <motion.div 
                  variants={itemVariants}
                  className="space-y-2 mt-4 sm:mt-6"
                >
                  {current.list.map((item, i) => (
                    <motion.div 
                      variants={itemVariants}
                      className="flex items-center" 
                      key={i}
                      custom={i}
                    >
                      <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 mt-auto pt-8 sm:pt-12 lg:pt-16"
                >
                  <button className="bg-[#0D0A090D] border border-gray-300 text-[#0D0A09] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-gray-200 transition-colors duration-200">
                    {current.button}
                  </button>
                </motion.div>
              </div>
              {/* Right Content - Carousel Image */}
              <motion.div 
                variants={itemVariants}
                className="h-auto sm:h-[450px] md:h-[500px] lg:h-[640px] w-full sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] rounded-3xl overflow-hidden mt-8 lg:mt-0 transition-all duration-700 flex items-center justify-center"
              >
                <img
                  src={current.image}
                  alt={current.alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Features;