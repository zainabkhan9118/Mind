
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const AutoRotatingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const carouselItems = [
    {
      src: "/IMAGE 8.PNG",
      alt: "Regulate Your State",
      title: "Regulate Your State",
      description: "Train your nervous system to shift from stress to clarity on demand.\nControl how you feel, think and perform.",
      objectPosition: "center",
    },
    {
      src: "/l2.png",
      alt: "Enter Deep Recovery",
      title: "Enter Deep Recovery",
      description: "Downshift your system and access deeper sleep states.\nReal recovery starts with regulation.",
      objectPosition: "center",
    },
    {
      src: "/Image 01.jpg",
      alt: "Train Together",
      title: "Train Together",
      description: "Join shared sessions and regulate your state alongside others.\nPerformance scales with environment.",
      objectPosition: "center",
    },
    {
      src: "/IMAGE 9.PNG",
      alt: "Upgrade Your State",
      title: "Upgrade Your\nState",
      description: "Shift from overload to clarity in minutes.\nBetter state — better decisions — better outcomes.",
      objectPosition: "center",
    },
    {
      src: "/l5.jpeg",
      alt: "Find Control",
      title: "Find Control",
      description: "Calm is not enough.\nLearn to regulate and stay in control under pressure.",
      objectPosition: "left center",
    },
  ];

  const extendedItems = [...carouselItems, carouselItems[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (carouselItems.length + 1));
      setIsTransitioning(true);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex === carouselItems.length) {
        setIsTransitioning(false);
        requestAnimationFrame(() => {
          setCurrentIndex(0);
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }
    };
    const node = carouselRef.current;
    if (node) {
      node.addEventListener('transitionend', handleTransitionEnd);
    }
    return () => {
      if (node) node.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentIndex, carouselItems.length]);

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
      <div
        ref={carouselRef}
        className={`absolute inset-0 flex${isTransitioning ? ' transition-transform duration-1000 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedItems.map((item, index) => (
          <div key={index} className="relative min-w-full flex-shrink-0 h-full">
            <img
              src={item.src}
              alt={item.alt}
              className="absolute inset-0 w-full h-full object-cover z-0"
              style={{ objectPosition: item.objectPosition }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 text-white z-20 max-w-3xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 whitespace-pre-line">{item.title}</h2>
              <p className="text-lg sm:text-xl mb-8 whitespace-pre-line">{item.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
                  onClick={handleNavClick}
                >
                  Try For Free
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoRotatingCarousel;
