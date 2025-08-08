const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-fill object-center z-0"
        style={{ background: "transparent" }}
      >
        <source src="/Holographic Sphere.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex items-center text-black justify-start z-10 px-4 sm:px-6 md:px-12">
        <div className="max-w-[700px]">
          <h1
            className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4"
            style={{ textTransform: "uppercase" }}
          >
            LONG HEADING IS WHAT YOU
            <br /> SEE HERE IN THIS FEATURES.
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md mb-0">
            Immerse yourself in stunning virtual
            <br /> environments that promote relaxation and.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
