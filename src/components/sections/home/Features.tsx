import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    image: '/Feature 1.jpg',
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
    image: '/Feature 2.png',
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
    image: '/Feature 3.jpg',
    alt: 'Wellness Community',
    button: 'Explore All Features',
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
    image: '/Feature 4.png',
    alt: 'VR Experiences',
    button: 'Explore All Features',
  },
];

const Features = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  // Helper to clear and restart timer
  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % carouselData.length);
    }, 8000);
  };

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line
  }, [index]);

  const current = carouselData[index];

  // Variants for smooth animation
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const containerVariants = isMobile
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.4,
            when: "beforeChildren" as const,
            staggerChildren: 0.1
          }
        },
        exit: {
          opacity: 0,
          transition: {
            duration: 0.3
          }
        }
      }
    : {
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
  <div className="flex flex-col items-center justify-center min-h-[800px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-screen bg-[#e5e5e5] py-10 sm:py-16 md:py-20">
      <div className="max-w-7xl xl:max-w-8xl 2xl:max-w-9xl 3xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 py-12 md:py-16 lg:py-20">
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
              <div className="h-[400px] md:h-[500px] lg:h-[640px] w-full md:max-w-[500px] lg:max-w-[600px] xl:max-w-[550px] 2xl:max-w-[500px] p-4 sm:p-6 lg:p-8 rounded-3xl shadow-none border-none flex flex-col justify-between transition-all duration-700">
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
                  className="text-base sm:text-lg text-gray-600 max-w-lg leading-snug min-h-[90px]"
                >
                  {current.description}
                </motion.p>
                <motion.div 
                  variants={itemVariants}
                  className="space-y-2 mt-4 sm:mt-6 min-h-[100px]"
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
                  <button className="bg-[#0D0A090D] border border-gray-300 text-[#0D0A09] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-gray-200 transition-colors duration-200"
                    onClick={() => {
                      // Handle button click
                      navigate('/features')
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {current.button}
                  </button>
                </motion.div>
              </div>
              {/* Right Content - Carousel Image */}
              <motion.div 
                variants={itemVariants}
                className="h-[500px] sm:h-[450px] md:h-[550px] lg:h-[640px] w-full sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] rounded-3xl overflow-hidden mt-8 lg:mt-0 transition-all duration-700 flex items-center justify-center"
              >
                <img
                  src={current.image}
                  alt={current.alt}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* Navigation Dots */}
  <div className="min-h-[40px] flex justify-center items-center gap-3 mt-4 mb-10">
        {carouselData.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
              setTimeout(restartTimer, 0); // Reset timer after click
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 focus:outline-none ${
              i === index
                ? 'bg-[#0D0A09] border-[#0D0A09] scale-125'
                : 'bg-gray-300 border-gray-300 opacity-60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;