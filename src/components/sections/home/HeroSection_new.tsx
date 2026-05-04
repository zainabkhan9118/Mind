import { useState } from "react";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    const subject = encodeURIComponent("Early Access Request");
    const body = encodeURIComponent(`New early access signup:\n\nEmail: ${email}`);
    window.location.href = `mailto:mindplayer.com@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative w-full h-72 sm:h-96 md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/Hero1.jpeg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Foreground Content */}
      <div className="absolute inset-0 flex items-center text-white justify-start z-10 px-4 sm:px-6 md:px-12 xl:px-16 2xl:px-20 3xl:px-24">
        <div className="max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] 3xl:max-w-[1000px]">
          <h1
            className="text-xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold leading-tight mb-4"
            style={{ textTransform: "uppercase" }}
          >
            CONTROL YOUR MIND.<br />
            ON DEMAND.
          </h1>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl mb-6 2xl:mb-8">
            Not a meditation app.<br />
            A system to regulate how you think, feel, and perform — in real time.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg 2xl:max-w-xl">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 2xl:py-4 text-sm 2xl:text-base text-white placeholder-gray-400 rounded-xl outline-none"
              style={{
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: '0 0 14px rgba(255,255,255,0.25), inset 0 0 8px rgba(255,255,255,0.04)',
              }}
            />
            <button
              type="submit"
              className="w-full font-bold py-3 2xl:py-4 text-sm 2xl:text-base text-white rounded-xl transition-all duration-200"
              style={{
                background: '#000000',
                border: '1px solid rgba(109, 95, 247, 0.8)',
                boxShadow: '0 0 16px rgba(109, 95, 247, 0.6), inset 0 0 12px rgba(109, 95, 247, 0.1)',
              }}
            >
              Join Early Access
            </button>
            <p className="text-xs 2xl:text-sm text-gray-400">No spam, just transformative tech.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
