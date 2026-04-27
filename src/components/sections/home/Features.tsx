import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const carouselData = [
  {
    subtitle: 'Features',
    title: (
      <>
        Immersive<br className="hidden sm:block" /> Environments
      </>
    ),
    description:
      'Not for escape. For control. Designed to shift your nervous system in minutes.',
    list: [] as string[],
    image: '/Feature 1.jpg',
    alt: 'Immersive Environments',
    button: 'Explore All Features',
    objectPosition: 'center bottom',
  },
  {
    subtitle: 'Features',
    title: (
      <>
        Neural Sound<br className="hidden sm:block" /> Systems
      </>
    ),
    description:
      'Sound engineered to regulate brain states. Focus. Calm. Recovery. Activation.',
    list: [] as string[],
    image: '/IMAGE 4.PNG',
    alt: 'Neural Sound Systems',
    button: 'Explore All Features',
    objectPosition: 'center',
  },
  {
    subtitle: 'Features',
    title: (
      <>
        AI Mind<br className="hidden sm:block" /> Coach
      </>
    ),
    description:
      'Understands your patterns. Guides your state. Adapts in real time.',
    list: [] as string[],
    image: '/IMAGE 5.PNG',
    alt: 'AI Mind Coach',
    button: 'Explore All Features',
    objectPosition: 'center',
  },
  {
    subtitle: 'Features',
    title: (
      <>
        Collective<br className="hidden sm:block" /> Experiences
      </>
    ),
    description:
      'Train your mind alone or with others. Shared states. Real connection.',
    list: [] as string[],
    image: '/IMAGE 6.PNG',
    alt: 'Collective Experiences',
    button: 'Explore All Features',
    objectPosition: 'center',
  },
  {
    subtitle: 'Features',
    title: (
      <>
        Custom<br className="hidden sm:block" /> Minds
      </>
    ),
    description:
      'Build your own mental environments. Tailored to how you need to feel — not just what you want to hear.',
    list: [] as string[],
    image: '/IMAGE 7.PNG',
    alt: 'Custom Minds',
    button: 'Explore All Features',
    objectPosition: 'center',
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
  <div className="flex flex-col items-center justify-center min-h-[800px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-screen bg-mind-navy/40 py-10 sm:py-16 md:py-20">
      {/* Main Container */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 3xl:px-32 py-12 md:py-16 lg:py-20">
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
              <div className="h-[400px] md:h-[500px] lg:h-[640px] xl:h-[700px] 2xl:h-[800px] w-full md:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[850px] p-4 sm:p-6 lg:p-8 rounded-3xl shadow-none border-none flex flex-col justify-between transition-all duration-700">
                {current.subtitle && (
                  <motion.div 
                    variants={itemVariants}
                    className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold text-mind-violet mb-1"
                  >
                    {current.subtitle}
                  </motion.div>
                )}
                <motion.h2 
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.1] mb-2"
                >
                  {current.title}
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-400 max-w-3xl leading-snug min-h-[90px]"
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
                      <svg className="w-5 h-5 text-mind-violet mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 mt-auto pt-8 sm:pt-12 lg:pt-16"
                >
                  <button className="bg-white/5 border border-white/20 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-white/10 transition-colors duration-200"
                    onClick={() => {
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
                className="aspect-[4/3] sm:aspect-auto sm:h-[450px] md:h-[550px] lg:h-[640px] xl:h-[700px] 2xl:h-[800px] w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1000px] rounded-3xl overflow-hidden mt-8 lg:mt-0 transition-all duration-700"
              >
                <img
                  src={current.image}
                  alt={current.alt}
                  className="w-full h-full object-cover rounded-3xl"
                  style={{ objectPosition: current.objectPosition }}
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
              setTimeout(restartTimer, 0);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 focus:outline-none ${
              i === index
                ? 'bg-mind-violet border-mind-violet scale-125'
                : 'bg-white/20 border-white/30 opacity-60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
);

};

export default Features;