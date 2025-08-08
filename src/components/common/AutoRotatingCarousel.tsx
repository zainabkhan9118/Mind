// Auto-rotating carousel component
import { useEffect, useRef, useState } from 'react';

const AutoRotatingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Array of carousel items (images, content, etc.)
  const carouselItems = [
    {
      src: "/Image 01.jpg",
      alt: "Elevate Your Mind Today",
      title: "Elevate Your Mind Today",
      description: "Join us for transformative experiences that enhance your mental well-being and unlock your potential."
    },
    {
      src: "/Image 02.png",
      alt: "Discover Your Inner Peace",
      title: "Discover Your Inner Peace",
      description: "Experience our immersive VR meditation sessions designed for deep relaxation and mental clarity."
    },
    {
      src: "/Image 03.png",
      alt: "Transform Your Mental Wellness",
      title: "Transform Your Mental Wellness",
      description: "Personalized AI-driven experiences to help you build resilience and emotional strength."
    }
  ];
  // Clone the first slide for seamless looping
  const extendedItems = [...carouselItems, carouselItems[0]];

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (carouselItems.length + 1));
      setIsTransitioning(true);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  // Handle transition end for seamless looping
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex === carouselItems.length) {
        // Disable transition for the reset
        setIsTransitioning(false);
        // Use requestAnimationFrame to ensure the DOM updates before resetting
        requestAnimationFrame(() => {
          setCurrentIndex(0);
          // Re-enable transition after the reset
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
      {/* Carousel items */}
      <div
        ref={carouselRef}
  className={`absolute inset-0 flex${isTransitioning ? ' transition-transform duration-1000 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedItems.map((item, index) => (
          <div key={index} className="relative min-w-full flex-shrink-0 h-full">
            {/* Background image with overlay */}
            <div
              className="absolute inset-0 w-full h-full bg-no-repeat bg-center z-0"
              style={{ backgroundImage: `url('${item.src}')`, backgroundSize: 'cover' }}
            />
            
            {/* Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            
            {/* Text content (show for all slides, including the cloned one) */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 text-white z-10 max-w-3xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">{item.title}</h2>
              <p className="text-lg sm:text-xl mb-8">{item.description}</p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="#learn-more"
                  className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AutoRotatingCarousel;