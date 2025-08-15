const Pricing = () => {
  return (
    <section className="min-h-[40vh] flex flex-col justify-center items-center bg-[#fcfaff] px-4 py-20">
      <h1
        className="text-4xl md:text-6xl font-bold text-center mb-6"
        style={{ color: '#181028', letterSpacing: '-0.01em', lineHeight: 1.1 }}
      >
        Choose Your Path to a<br />
        Calmer, Sharper Mind
      </h1>
      <p className="max-w-xl text-center text-base md:text-lg text-[#222] opacity-80">
        Discover the perfect plan for your wellness journey. Whether you're exploring mindfulness for the first time or deepening your practice, Mind Player offers immersive, science-backed experiences to help you relax, focus, and grow—your way.
      </p>

        {/* Cards portion */}
      <div className="flex flex-col md:flex-row gap-[48px] md:gap-[73px] items-center justify-center w-full mt-16">
        {/* Free Card */}
        <div
            className="bg-[#F8F6FD] border border-[#ece7f6] rounded-[24px] p-8 flex flex-col items-center w-full max-w-[420px] md:max-w-[640px] h-[526px] shadow-md"
            style={{ opacity: 1 }}
        >
            <div className="w-full flex flex-col items-center mb-4 gap-[24px]">
            <span className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">FREE</span>
            <p className="text-center text-base text-[#222] opacity-80 mb-10">
                Start your journey with essential sessions, soothing soundscapes, and a taste of AI-powered coaching, no cost, just calm.
            </p>
            </div>
            <ul className="text-left text-base text-[#222] opacity-90 mb-8 w-full max-w-[90%] mx-auto space-y-4">
            <li>✓ Access basic mind sessions</li>
            <li>✓ Standard music & soundscapes</li>
            <li>✓ Join community groups</li>
            <li>✓ Try AI Mind Coach (limited)</li>
            </ul>
            <button className="mt-auto w-full rounded-[100px] bg-[#e6d8fa] text-[#0D0A09] font-semibold py-3 text-base shadow-sm hover:bg-[#db91ef] transition">Contact Us</button>
        </div>

        {/* Premium Card */}
        <div
            className="bg-[#F8F6FD] border border-[#ece7f6] rounded-[24px] p-8 flex flex-col items-center w-full max-w-[420px] md:max-w-[640px] h-[526px] shadow-md"
            style={{ opacity: 1 }}
        >
            <div className="w-full flex flex-col items-center mb-4 gap-[24px]">
            <span className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">PREMIUM</span>
            <p className="text-center text-base text-[#222] opacity-80 mb-10">
                Unlock the full power of MindPlayer with unlimited sessions, advanced soundscapes, and complete AI Mind Coach access, personalized to your goals.
            </p>
            </div>
            <ul className="text-left text-base text-[#222] opacity-90 mb-8 w-full max-w-[90%] mx-auto space-y-4">
            <li>✓ All mind sessions unlocked</li>
            <li>✓ Exclusive music & advanced soundscapes</li>
            <li>✓ Host private & group sessions</li>
            <li>✓ Full AI Mind Coach access</li>
            <li>✓ Early access to new features</li>
            </ul>
            <button className="mt-auto w-full rounded-[100px] bg-[#e6d8fa] text-[#0D0A09] font-semibold py-3 text-base shadow-sm hover:bg-[#db91ef] transition">Contact Us</button>
        </div>
        </div>
     
    </section>

   
  );
};

export default Pricing;



