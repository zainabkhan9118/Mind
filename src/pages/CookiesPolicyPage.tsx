const renderList = (items: string[]) => (
  <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-center gap-2">
        <svg className="w-4 h-4 2xl:w-5 2xl:h-5 text-mind-violet flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const CookiesPolicyPage = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-16 sm:py-24 md:py-32">
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-2 sm:space-y-4">
          <p className="text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-mind-violet font-semibold">Legal</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-white leading-[1.1]">
            Cookies Policy
          </h1>
          <p className="max-w-xl sm:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400">
            Understand how Mind Player uses cookies and similar technologies to enhance your experience.
          </p>
        </div>

        <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto flex flex-col gap-5">
          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">1. Introduction</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed">
              This Cookies Policy explains how Mind Player uses cookies and similar technologies when you access or use our platform. By continuing to use Mind Player, you agree to the use of cookies as described in this policy.
            </p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">2. What Are Cookies?</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mb-3">
              Cookies are small text files stored on your device when you visit a website or use an application. They help us:
            </p>
            {renderList(['Recognize your device', 'Improve performance', 'Enhance your experience'])}
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">3. Types of Cookies We Use</h2>

            <div className="mb-6">
              <h3 className="font-semibold text-base sm:text-lg 2xl:text-xl text-white/90 mb-2">a) Essential Cookies</h3>
              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mb-2">These are necessary for the platform to function properly. They enable:</p>
              {renderList(['Basic navigation', 'Account access', 'Security features'])}
              <p className="text-xs sm:text-sm 2xl:text-base text-gray-500 italic mt-2">Without these cookies, the platform cannot operate correctly.</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-base sm:text-lg 2xl:text-xl text-white/90 mb-2">b) Performance and Analytics Cookies</h3>
              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mb-2">These help us understand how users interact with Mind Player. They allow us to:</p>
              {renderList(['Analyze usage patterns', 'Improve performance', 'Optimize user experience'])}
              <p className="text-xs sm:text-sm 2xl:text-base text-white/70 font-medium mt-2">These cookies collect non-sensitive, aggregated data.</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-base sm:text-lg 2xl:text-xl text-white/90 mb-2">c) Functional Cookies</h3>
              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mb-2">These allow the platform to remember your preferences. They help with:</p>
              {renderList(['Personalized settings', 'Improved usability'])}
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg 2xl:text-xl text-white/90 mb-2">d) Marketing Cookies (if applicable)</h3>
              <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed">
                These may be used to deliver relevant content or advertisements. At this stage, Mind Player may not actively use marketing cookies, but we reserve the right to introduce them in the future.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">4. Third-Party Cookies</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mb-3">We may use third-party services that place cookies on your device, such as:</p>
            {renderList(['Analytics providers (e.g., Google Analytics or similar)', 'Payment providers', 'Infrastructure services'])}
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mt-3">These third parties have their own privacy and cookies policies.</p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">5. How to Manage Cookies</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mb-3">You can control or disable cookies through your browser settings. Most browsers allow you to:</p>
            {renderList(['Block cookies', 'Delete stored cookies', 'Receive alerts before cookies are stored'])}
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-yellow-400/80 font-medium mt-3">⚠️ Disabling cookies may affect the functionality of Mind Player.</p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">6. Legal Basis (GDPR)</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mb-3">We use cookies based on:</p>
            {renderList(['Consent (for non-essential cookies)', 'Legitimate interest (for essential functionality and basic analytics)'])}
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">7. Updates to This Policy</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed">
              We may update this Cookies Policy from time to time. Any changes will be reflected on this page.
            </p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">8. Contact</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed">
              If you have any questions about this Cookies Policy, you can contact us at:{' '}
              <a href="mailto:support@mindplayer.com" className="text-mind-violet underline font-medium hover:opacity-70 transition-opacity">support@mindplayer.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiesPolicyPage;
