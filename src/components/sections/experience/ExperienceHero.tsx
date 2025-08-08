
const ExperienceHero = () => {
  return (
      <div className="flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 w-full">
        <video
          src="/ExpVideo.mp4" // your video file path
          poster="/ExpImage.png"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-72 sm:h-96 md:h-[28rem] object-cover rounded-xl sm:rounded-4xl lg:rounded-4xl"
          preload="none"
        />
      </div>

      <div className="absolute flex items-center justify-center z-10 px-4 sm:px-6 md:px-12">
        <div className="max-w-2xl w-full text-center">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.7)]"
            style={{ textShadow: '0 4px 32px rgba(0,0,0,0.7), 0 1.5px 0 #000' }}
          >
            Immersive<br /> Experiences
            
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto mb-0 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]" style={{textShadow: '0 2px 12px rgba(0,0,0,0.5)'}}>
           Explore transformative environments designed to calm the mind, expand awareness, and support your personal journey — all powered by science, sound, and stunning virtual reality.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExperienceHero
