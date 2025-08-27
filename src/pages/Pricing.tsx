const Pricing = () => {
  return (
    <section className="min-h-[40vh] flex flex-col justify-center items-center bg-[#fcfaff] px-2 sm:px-4 py-10 sm:py-16 md:py-20">
      <h1
        className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4 sm:mb-6"
        style={{ color: '#181028', letterSpacing: '-0.01em', lineHeight: 1.1 }}
      >
        Choose Your Path to a<br />
        Calmer, Sharper Mind
      </h1>
      <p className="max-w-md sm:max-w-xl text-center text-sm sm:text-base md:text-lg text-[#222] opacity-80 mb-4 sm:mb-8">
        Discover the perfect plan for your wellness journey. Whether you're exploring mindfulness for the first time or deepening your practice, Mind Player offers immersive, science-backed experiences to help you relax, focus, and grow—your way.
      </p>

      {/* Cards portion */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] lg:gap-[73px] items-center justify-center w-full mt-10 sm:mt-16">
        {/* Free Card */}
        <div
          className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col items-center w-full max-w-xs sm:max-w-md md:max-w-[420px] lg:max-w-[480px] h-auto md:h-[526px] shadow-md"
          style={{ opacity: 1 }}
        >
          <div className="w-full flex flex-col items-center mb-2 sm:mb-4 gap-4 sm:gap-[24px]">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 tracking-tight">FREE</span>
            <p className="text-center text-sm sm:text-base text-[#222] opacity-80 mb-4 sm:mb-10">
              Start your journey with essential sessions, soothing soundscapes, and a taste of AI-powered coaching, no cost, just calm.
            </p>
          </div>
          <ul className="text-left text-sm sm:text-base text-[#222] opacity-90 mb-6 sm:mb-8 w-full max-w-[90%] mx-auto space-y-3 sm:space-y-4">
            <li>✓ Access basic mind sessions</li>
            <li>✓ Standard music & soundscapes</li>
            <li>✓ Join community groups</li>
            <li>✓ Try AI Mind Coach (limited)</li>
          </ul>
          <button className="mt-auto w-full rounded-full bg-[#e6d8fa] text-[#0D0A09] font-semibold py-3 text-base shadow-sm hover:bg-[#db91ef] transition">Try For Free</button>
        </div>

        {/* Premium Card */}
        <div
          className="bg-[#ffe6f7] border border-[#ffb3de] rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col items-center w-full max-w-xs sm:max-w-md md:max-w-[420px] lg:max-w-[480px] h-auto md:h-[526px] shadow-md"
          style={{ opacity: 1 }}
        >
          <div className="w-full flex flex-col items-center mb-2 sm:mb-4 gap-4 sm:gap-[24px]">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 tracking-tight">PREMIUM</span>
            <p className="text-center text-sm sm:text-base text-[#222] opacity-80 mb-4 sm:mb-10">
              Unlock the full power of MindPlayer with unlimited sessions, advanced soundscapes, and complete AI Mind Coach access, personalized to your goals.
            </p>
          </div>
          <ul className="text-left text-sm sm:text-base text-[#222] opacity-90 mb-6 sm:mb-8 w-full max-w-[90%] mx-auto space-y-3 sm:space-y-4">
            <li>✓ All mind sessions unlocked</li>
            <li>✓ Exclusive music & advanced soundscapes</li>
            <li>✓ Host private & group sessions</li>
            <li>✓ Full AI Mind Coach access</li>
            <li>✓ Early access to new features</li>
          </ul>
          <button className="mt-auto w-full rounded-full bg-[#e6d8fa] text-[#0D0A09] font-semibold py-3 text-base shadow-sm hover:bg-[#db91ef] transition">Unlock Premium</button>
        </div>
      </div>
    </section>

   
  );
};

export default Pricing;



