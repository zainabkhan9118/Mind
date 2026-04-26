
const Explaination = () => {
  return (
  <div className="flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto gap-8 sm:gap-12 md:gap-20">
      
      {/* Mission Section */}
      <div className="w-full flex flex-col md:flex-row gap-6 sm:gap-10">
        <div className="w-full md:w-1/2">
          <h3 className="text-base sm:text-[16px] 2xl:text-lg 3xl:text-xl text-mind-violet mb-2 sm:mb-4">Our Mission</h3>
          <h2 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold mb-4 sm:mb-6 text-white">To empower individuals to unlock their mind's full potential</h2>
        </div>
        <div className="w-full md:w-3/5 text-[16px]">
          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400">
            To empower every individual to unlock their mind's full potential through immersive, science-based wellness experiences — combining virtual reality, AI, and sound therapy into personalized mental health journeys.
          </p>
          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400 mt-2 sm:mt-4">
            We believe mental wellness should be accessible, engaging, and deeply personal. Our mission is to move beyond traditional self-help methods by creating a platform that doesn't just tell you how to feel better — it guides you into the experience of it.
          </p>
          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400 mt-2 sm:mt-4">
            Whether it's managing anxiety, improving focus, building emotional resilience, or simply taking a moment to breathe, Mind Player is here to support you — every step, breath, and breakthrough along the way.
          </p>
        </div>
      </div>

  {/* Vision Section - with reduced top margin in mobile */}
  <div className="mt-3 sm:mt-4 md:mt-0"></div>
      <div className="w-full flex flex-col md:flex-row gap-6 sm:gap-10">
        <div className="w-full md:w-1/2">
          <h3 className="text-base sm:text-[16px] 2xl:text-lg 3xl:text-xl text-mind-violet mb-2 sm:mb-4">Our Vision</h3>
          <h2 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold mb-4 sm:mb-6 text-white">To redefine how the world approaches mental health</h2>
        </div>
        <div className="w-full md:w-3/5 text-[16px]">
          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400">
            To redefine how the world approaches mental health and personal growth by making powerful, immersive tools available to everyone — anywhere, anytime.
          </p>
          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400 mt-2 sm:mt-4">
            We envision a future where caring for your mind is as intuitive and engaging as streaming music or going for a walk. A world where mental health support is not only clinically effective, but also beautiful, empowering, and inspiring.
          </p>
          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400 mt-2 sm:mt-4">
            Through the fusion of neuroscience, design, and technology, we aim to create an ecosystem where people of all backgrounds can explore, heal, and evolve — not because they have to, but because they love how it feels.
          </p>
        </div>
      </div>

      {/* Image */}
        <div className="w-full flex justify-center">
          <div
            className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[520px] 2xl:h-[620px] 3xl:h-[720px] bg-center bg-cover rounded-2xl sm:rounded-3xl flex items-center justify-center px-4"
            style={{ backgroundImage: "url('/AboutCard.jpg')" }}
          >
            <p
              className="text-center font-bold leading-[140%] tracking-[-0.01em] text-white text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl"
              style={{ fontFamily: "'Wix Madefor Text', sans-serif" }}
            >
              Mind wellness is the next frontier, and it's not just about<br /> 
              treatment. It's about daily support, inner exploration, and<br /> 
              becoming the best version of yourself. We're here to guide <br />
              you on that journey.
            </p>
          </div>
        </div>

    </div>
  )
}

export default Explaination
