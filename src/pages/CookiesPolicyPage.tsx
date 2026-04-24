const CookiesPolicyPage = () => {
  return (
    <section className="min-h-screen bg-[#fcfaff] px-4 sm:px-6 py-16 sm:py-24 md:py-32">
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold mb-4 sm:mb-6"
            style={{ color: '#181028', letterSpacing: '-0.01em', lineHeight: 1.1 }}
          >
            Cookies Policy
          </h1>
          <p className="max-w-xl sm:max-w-2xl 2xl:max-w-3xl mx-auto text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-[#222] opacity-80">
            Understand how Mind Player uses cookies and similar technologies to enhance your experience.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto flex flex-col gap-6">
          {/* Section 1 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">1. Introduction</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              This Cookies Policy explains how Mind Player uses cookies and similar technologies when you access or use our platform.
              By continuing to use Mind Player, you agree to the use of cookies as described in this policy.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">2. What Are Cookies?</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              Cookies are small text files stored on your device (computer, smartphone or tablet) when you visit a website or use an application. They help us:
            </p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Recognize your device</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Improve performance</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Enhance your experience</span></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">3. Types of Cookies We Use</h2>

            {/* 3a */}
            <div className="mb-6">
              <h3 className="font-semibold text-base sm:text-lg 2xl:text-xl text-[#181028] mb-2">a) Essential Cookies</h3>
              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-2">
                These cookies are necessary for the platform to function properly. They enable:
              </p>
              <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2 mb-2">
                <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Basic navigation</span></li>
                <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Account access</span></li>
                <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Security features</span></li>
              </ul>
              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-70 italic">
                Without these cookies, the platform cannot operate correctly.
              </p>
            </div>

            {/* 3b */}
            <div className="mb-6">
              <h3 className="font-semibold text-base sm:text-lg 2xl:text-xl text-[#181028] mb-2">b) Performance and Analytics Cookies</h3>
              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-2">
                These cookies help us understand how users interact with Mind Player. They allow us to:
              </p>
              <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2 mb-2">
                <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Analyze usage patterns</span></li>
                <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Improve performance</span></li>
                <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Optimize user experience</span></li>
              </ul>
              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#9b7dd4] font-medium">
                👉 These cookies collect non-sensitive, aggregated data.
              </p>
            </div>

            {/* 3c */}
            <div className="mb-6">
              <h3 className="font-semibold text-base sm:text-lg 2xl:text-xl text-[#181028] mb-2">c) Functional Cookies</h3>
              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-2">
                These cookies allow the platform to remember your preferences. They help with:
              </p>
              <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
                <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Personalized settings</span></li>
                <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Improved usability</span></li>
              </ul>
            </div>

            {/* 3d */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg 2xl:text-xl text-[#181028] mb-2">d) Marketing Cookies (if applicable)</h3>
              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-2">
                These cookies may be used to deliver relevant content or advertisements.
              </p>
              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#9b7dd4] font-medium">
                👉 At this stage, Mind Player may not actively use marketing cookies, but we reserve the right to introduce them in the future.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">4. Third-Party Cookies</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              We may use third-party services that place cookies on your device, such as:
            </p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2 mb-3">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Analytics providers (e.g., Google Analytics or similar)</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Payment providers</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Infrastructure services</span></li>
            </ul>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              These third parties have their own privacy and cookies policies.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">5. How to Manage Cookies</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              You can control or disable cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Block cookies</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Delete stored cookies</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Receive alerts before cookies are stored</span></li>
            </ul>
            <div className="bg-[#fff3e0] border border-[#ffe0b2] rounded-xl px-4 py-3">
              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#e65100] font-medium">
                ⚠️ Please note: Disabling cookies may affect the functionality of Mind Player.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">6. Legal Basis (GDPR)</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              We use cookies based on:
            </p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Consent (for non-essential cookies)</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Legitimate interest (for essential functionality and basic analytics)</span></li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">7. Updates to This Policy</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              We may update this Cookies Policy from time to time. Any changes will be reflected on this page.
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">8. Contact</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              If you have any questions about this Cookies Policy, you can contact us at:{' '}
              <a href="mailto:support@mindplayer.com" className="text-[#9b7dd4] hover:text-[#7a5dba] underline font-medium transition-colors">
                support@mindplayer.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiesPolicyPage;
