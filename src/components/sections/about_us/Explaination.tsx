
const Explaination = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto gap-8 sm:gap-12 md:gap-20">

      {/* Mission Section */}
      <div className="w-full flex flex-col md:flex-row gap-6 sm:gap-10">
        <div className="w-full md:w-1/2">
          <h3 className="text-base sm:text-[16px] 2xl:text-lg 3xl:text-xl text-mind-violet mb-2 sm:mb-4">Our Mission</h3>
          <h2 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold mb-4 sm:mb-6 text-white">Give people control over their state</h2>
        </div>
        <div className="w-full md:w-3/5 text-[16px]">
          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400">
            Most people try to improve performance without controlling the system behind it.
          </p>
          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400 mt-2 sm:mt-4">
            Our mission is to change that — by making state regulation accessible, simple and part of everyday life.
          </p>
        </div>
      </div>

      <div className="mt-3 sm:mt-4 md:mt-0"></div>

      {/* Vision Section */}
      <div className="w-full flex flex-col md:flex-row gap-6 sm:gap-10">
        <div className="w-full md:w-1/2">
          <h3 className="text-base sm:text-[16px] 2xl:text-lg 3xl:text-xl text-mind-violet mb-2 sm:mb-4">Our Vision</h3>
          <h2 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold mb-4 sm:mb-6 text-white">Redefine how humans manage their mind</h2>
        </div>
        <div className="w-full md:w-3/5 text-[16px]">
          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400">
            We believe the future of mental health and performance is not external.
          </p>
          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400 mt-2 sm:mt-4">
            It's internal.
          </p>
          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400 mt-2 sm:mt-4">
            A world where people can shift their state as easily as they change a playlist.
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
            You don't need more motivation.<br />
            You need control.<br />
            Mind Player gives you access<br />
            to the state you need — when you need it.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Explaination
