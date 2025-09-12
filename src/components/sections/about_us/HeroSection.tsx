const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 w-full">
        <video
          src="/Aboutbg.mp4" // your video file path
          poster="/Header Video Image.png"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-72 sm:h-96 md:h-[28rem] 2xl:h-[32rem] 3xl:h-[36rem] object-cover rounded-xl sm:rounded-4xl lg:rounded-4xl"
          preload="none"
        />
      </div>

      <div className="absolute flex items-center justify-center z-10 px-4 sm:px-6 md:px-12">
        <div className="max-w-2xl w-full text-center">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl font-extrabold leading-tight mb-6 text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.7)]"
            style={{ textShadow: '0 4px 32px rgba(0,0,0,0.7), 0 1.5px 0 #000' }}
          >
            Unlock your mind,<br />
            Experience the future
          </h1>
          <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl text-white max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto mb-0 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]" style={{textShadow: '0 2px 12px rgba(0,0,0,0.5)'}}>
            Mind Player combines neuroscience, immersive VR, and AI to offer a transformative mental wellness experience. Explore the core features that empower you to relax deeply, grow mindfully, and connect authentically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
