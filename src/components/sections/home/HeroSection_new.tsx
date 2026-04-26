const HeroSection = () => {
  return (
  <div className="relative w-full h-72 sm:h-96 md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero.png"
        preload="auto"
        className="absolute inset-0 w-full h-72 sm:h-96 md:h-full object-cover object-center z-0"
        style={{ background: "transparent" }}
      >
        <source src="/Holographic Sphere.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex items-center text-black justify-start z-10 px-4 sm:px-6 md:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        <div className="max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] 3xl:max-w-[1000px]">
          <h1
            className="text-xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold leading-tight mb-4"
            style={{ textTransform: "uppercase" }}
          >
            CONTROL YOUR MIND. ON DEMAND.
          </h1>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl mb-0">
            Not a meditation app.<br />
            A system to regulate how you think, feel, and perform — in real time.
          </p>
          </div>
        </div>
      
    </div>
  );
};

export default HeroSection;