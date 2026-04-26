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

const PrivacyPolicyPage = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-16 sm:py-24 md:py-32">
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-2 sm:space-y-4">
          <p className="text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-mind-violet font-semibold">Legal</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-white leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="max-w-xl sm:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400">
            Your privacy matters to us. Learn how Mind Player collects, uses and protects your personal data.
          </p>
        </div>

        <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto flex flex-col gap-5">
          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">1. Introduction</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed">
              This Privacy Policy explains how Mind Player collects, uses and protects your personal data when you use our platform.
            </p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">2. Data We Collect</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mb-3">We may collect the following types of data:</p>
            {renderList(['Email', 'Name (optional)', 'Usage data (non-sensitive analytics)', 'Device information'])}
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">3. How We Use Data</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mb-3">We use your data to:</p>
            {renderList(['Provide and improve the service', 'Personalize your experience', 'Communicate with you'])}
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">4. Legal Basis (GDPR)</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mb-3">We process your data based on:</p>
            {renderList(['Consent', 'Contractual necessity', 'Legitimate interest'])}
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">5. Data Sharing</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mb-3">We may share data with:</p>
            {renderList(['Payment providers', 'Analytics tools', 'Service providers'])}
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-white/80 leading-relaxed mt-3 font-medium">We do not sell personal data.</p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">6. Data Storage and Security</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mb-3">Your data is securely stored and protected.</p>
            {renderList(['We retain personal data only for as long as necessary to provide our services or comply with legal obligations', 'We implement appropriate technical and organizational measures to protect your data'])}
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">7. User Rights</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mb-3">You have the right to:</p>
            {renderList(['Access your data', 'Request deletion of your data', 'Withdraw consent at any time'])}
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">8. Cookies and Tracking</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed">
              We may use cookies and similar technologies to improve your experience. For more information, please refer to our{' '}
              <a href="/cookies" className="text-mind-violet underline font-medium hover:opacity-70 transition-opacity">Cookies Policy</a>.
            </p>
          </div>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">9. Contact</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed">
              If you have any questions, you can contact us at:{' '}
              <a href="mailto:support@mindplayer.com" className="text-mind-violet underline font-medium hover:opacity-70 transition-opacity">support@mindplayer.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
