
const Statement = () => {
  return (
      <div className='bg-[#FBFAFE] flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 px-2 sm:px-4'>
        <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto">
          {/* Testimonial Card with Border */}
          <div className="rounded-lg p-4 sm:p-6 md:p-8 mb-4">
            <p className='text-base sm:text-lg font-semibold text-center text-[#0D0A09] mb-4 sm:mb-6'>Who We Are</p>
            <h5 className='text-base sm:text-xl md:text-2xl text-center text-[#0D0A09] font-bold max-w-2xl sm:max-w-3xl mx-auto'>
              Mind Player is a pioneering MindTech platform blending neuroscience, virtual reality, sound therapy, and AI to create transformative mental wellness experiences. Our mission is to help people reset, grow, and reconnect with themselves in ways that feel natural, immersive, and inspiring.
              <br /><br />
              We believe wellness is not one-size-fits-all. That's why Mind Player offers personalized, science-backed journeys that support relaxation, focus, healing, and emotional balance — accessible from anywhere.
            </h5>
          </div>
        </div>
      </div>
  )
}

export default Statement
