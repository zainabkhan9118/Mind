import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "I used to struggle to switch off after long days. Now I can actually reset my mind in minutes.",
    name: "Dr. Emily Carter",
    title: "Medical Doctor"
  },
  {
    quote: "My performance didn't change because I trained more. It changed when I showed up mentally.",
    name: "Tiago Fernandes",
    title: "Professional Athlete"
  },
  {
    quote: "I don't rely on motivation anymore. I know how to get into the right mindset when it matters.",
    name: "Ryan Brooks",
    title: "Entrepreneur"
  },
  {
    quote: "This helped me stay focused without feeling overwhelmed. It's like having control over my own mind again.",
    name: "Olivia Santos",
    title: "University Student"
  },
  {
    quote: "I'm more present, less reactive, and clearer in my decisions. That changed everything in how I lead.",
    name: "David Williams",
    title: "Executive"
  }
];


const Reviews = () => {

  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
    <div className='bg-mind-navy/40 justify-center items-center flex flex-col py-20'>
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg p-8 mb-6 transition-all duration-500 min-h-[220px] md:min-h-[140px] 2xl:min-h-[180px] 3xl:min-h-[220px] flex flex-col justify-center">
          <h5 className='text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl text-center text-white font-bold mb-4 max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto'>
            "{testimonial.quote}"
          </h5>
          <div className="text-center text-gray-400">
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
              className={`w-3 h-3 rounded-full border border-white/30 transition-all duration-200 focus:outline-none ${current === idx ? 'bg-mind-violet' : 'bg-white/20'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
