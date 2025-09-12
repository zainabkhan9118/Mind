

import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
  quote: "Using the VR sessions daily helps me stay calm, and more relaxed throughout my routine.",
    name: "John Smith",
    title: "Product Designer"
  },
  {
  quote: "The platform is easy to use and makes my daily mental wellness routine enjoyable and effective.",
    name: "Sara Lee",
    title: "Entrepreneur"
  },
  {
    quote: "The guided meditations help me sleep better and wake up refreshed. Highly recommended!",
    name: "Emily Carter",
    title: "Marketing Specialist"
  },
  {
    quote: "A must-have for anyone looking to improve their mental clarity and reduce stress.",
    name: "Michael Brown",
    title: "Freelance Writer"
  },
  {
    quote: "The community support and live sessions make me feel connected and motivated.",
    name: "Priya Singh",
    title: "Graduate Student"
  }
];


const Reviews = () => {

  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to clear and restart timer
  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line
  }, [current]);

  const testimonial = testimonials[current];

  return (
    <div className='bg-[#e5e5e5] justify-center items-center flex flex-col py-20'>
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial Card with Border */}
  <div className="rounded-lg p-8 mb-6 transition-all duration-500 min-h-[220px] md:min-h-[140px] 2xl:min-h-[180px] 3xl:min-h-[220px] flex flex-col justify-center">
          <h5 className='text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl text-center text-[#0D0A09] font-bold mb-4 max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto'>
            "{testimonial.quote}"
          </h5>
          <div className="text-center text-gray-600">
            <p className="2xl:text-xl 3xl:text-2xl">{testimonial.name}</p>
            <p className="text-sm 2xl:text-base 3xl:text-lg">{testimonial.title}</p>
          </div>
        </div>
        {/* Navigation Dots */}
        <div className="min-h-[40px] flex justify-center items-center gap-2 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrent(idx);
                setTimeout(restartTimer, 0);
              }}
              className={`w-3 h-3 rounded-full border border-gray-400 transition-all duration-200 focus:outline-none ${current === idx ? 'bg-[#0D0A09]' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
