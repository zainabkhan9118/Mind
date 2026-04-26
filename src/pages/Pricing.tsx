const Pricing = () => {
  return (
    <section className="min-h-[40vh] flex flex-col justify-center items-center px-2 sm:px-4 py-10 sm:py-16 md:py-20">
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto w-full">
        <h1
          className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-center mb-4 sm:mb-6 text-white"
          style={{ letterSpacing: '-0.01em', lineHeight: 1.1 }}
        >
          Access your mind.<br />
          Or train it.
        </h1>
        <p className="max-w-md sm:max-w-xl md:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto text-center text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400 mb-4 sm:mb-8">
          Most people stay reactive.<br />
          Mind Player gives you the tools to take control —<br />
          when you're ready.
        </p>
      </div>

      {/* Cards portion */}
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto flex flex-col lg:flex-row gap-6 md:gap-[48px] lg:gap-[73px] xl:gap-[100px] 2xl:gap-[120px] items-center justify-center w-full mt-10 sm:mt-16">
        {/* Free Card */}
        <div
          className="glass-card-strong rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col items-center w-full max-w-xs sm:max-w-md md:max-w-[420px] lg:max-w-[480px] 2xl:max-w-[520px] 3xl:max-w-[580px] h-auto md:h-[560px] 2xl:h-[620px] 3xl:h-[700px] card-glow"
          style={{ opacity: 1 }}
        >
          <div className="w-full flex flex-col items-center mb-2 sm:mb-4 gap-4 sm:gap-[24px]">
            <span className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold mb-1 sm:mb-2 tracking-tight text-white">FREE</span>
            <p className="text-center text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 mb-2">
              Try the experience
            </p>
            <p className="text-center text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 mb-4 sm:mb-6">
              Explore the basics and experience what it feels like to shift your state.
            </p>
          </div>
          <ul className="text-left text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-300 mb-6 sm:mb-8 w-full max-w-[90%] mx-auto space-y-3 sm:space-y-4 2xl:space-y-6">
            <li>✓ Access to limited guided sessions</li>
            <li>✓ Standard sound environments</li>
            <li>✓ Join community sessions</li>
            <li>✓ Limited AI Mind Coach</li>
          </ul>
          <button className="mt-auto w-full rounded-full bg-mind-violet/20 text-white font-semibold py-3 text-base 2xl:text-lg 3xl:text-xl 2xl:py-4 3xl:py-5 shadow-sm hover:bg-mind-violet/40 transition border border-mind-violet/30">Start Free</button>
        </div>

        {/* Premium Card */}
        <div
          className="glass-card-strong rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col items-center w-full max-w-xs sm:max-w-md md:max-w-[420px] lg:max-w-[480px] 2xl:max-w-[520px] 3xl:max-w-[580px] h-auto md:h-[560px] 2xl:h-[620px] 3xl:h-[700px] card-glow"
          style={{ opacity: 1, border: '1px solid rgba(109, 95, 247, 0.3)' }}
        >
          <div className="w-full flex flex-col items-center mb-2 sm:mb-4 gap-4 sm:gap-[24px]">
            <span className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold mb-1 sm:mb-2 tracking-tight text-mind-violet">PREMIUM</span>
            <p className="text-center text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 mb-2">
              Full control
            </p>
            <p className="text-center text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 mb-4 sm:mb-6">
              Unlock the full system and train your mind to shift state on demand.
            </p>
          </div>
          <ul className="text-left text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-300 mb-6 sm:mb-8 w-full max-w-[90%] mx-auto space-y-3 sm:space-y-4 2xl:space-y-6">
            <li>✓ Unlimited sessions</li>
            <li>✓ Advanced sound systems</li>
            <li>✓ Full AI Mind Coach</li>
            <li>✓ Create and host private sessions</li>
            <li>✓ Early access to new environments</li>
          </ul>
          <button className="mt-auto w-full rounded-full bg-mind-violet text-white font-semibold py-3 text-base 2xl:text-lg 3xl:text-xl 2xl:py-4 3xl:py-5 shadow-md shadow-mind-violet/30 hover:bg-mind-violet-light transition">Unlock Premium</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
