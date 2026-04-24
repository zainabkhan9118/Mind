const PrivacyPolicyPage = () => {
  return (
    <section className="min-h-screen bg-[#fcfaff] px-4 sm:px-6 py-16 sm:py-24 md:py-32">
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold mb-4 sm:mb-6"
            style={{ color: '#181028', letterSpacing: '-0.01em', lineHeight: 1.1 }}
          >
            Privacy Policy
          </h1>
          <p className="max-w-xl sm:max-w-2xl 2xl:max-w-3xl mx-auto text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-[#222] opacity-80">
            Your privacy matters to us. Learn how Mind Player collects, uses and protects your personal data.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto flex flex-col gap-6">
          {/* Section 1 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">1. Introduction</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              This Privacy Policy explains how Mind Player collects, uses and protects your personal data when you use our platform.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">2. Data We Collect</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              We may collect the following types of data:
            </p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Email</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Name (optional)</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Usage data (non-sensitive analytics)</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Device information</span></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">3. How We Use Data</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              We use your data to:
            </p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Provide and improve the service</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Personalize your experience</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Communicate with you</span></li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">4. Legal Basis (GDPR)</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              We process your data based on:
            </p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Consent</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Contractual necessity</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Legitimate interest</span></li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">5. Data Sharing</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              We may share data with:
            </p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2 mb-3">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Payment providers</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Analytics tools</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Service providers</span></li>
            </ul>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed font-medium">
              We do not sell personal data.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">6. Data Storage and Security</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              Your data is securely stored and protected.
            </p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>We retain personal data only for as long as necessary to provide our services or comply with legal obligations</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>We implement appropriate technical and organizational measures to protect your data</span></li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">7. User Rights</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Access your data</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Request deletion of your data</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Withdraw consent at any time</span></li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">8. Cookies and Tracking</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              We may use cookies and similar technologies to improve your experience. For more information, please refer to our{' '}
              <a href="/cookies" className="text-[#9b7dd4] hover:text-[#7a5dba] underline font-medium transition-colors">
                Cookies Policy
              </a>.
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">9. Contact</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              If you have any questions, you can contact us at:{' '}
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

export default PrivacyPolicyPage;
