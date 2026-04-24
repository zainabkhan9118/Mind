const TermsPage = () => {
  return (
    <section className="min-h-screen bg-[#fcfaff] px-4 sm:px-6 py-16 sm:py-24 md:py-32">
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold mb-4 sm:mb-6"
            style={{ color: '#181028', letterSpacing: '-0.01em', lineHeight: 1.1 }}
          >
            Terms &amp; Conditions
          </h1>
          <p className="max-w-xl sm:max-w-2xl 2xl:max-w-3xl mx-auto text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-[#222] opacity-80">
            Please read these terms carefully before using the Mind Player platform.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto flex flex-col gap-6">
          {/* Section 1 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">1. Introduction</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              Welcome to Mind Player. By accessing or using the platform, you agree to be bound by these Terms.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">2. Services</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              Mind Player provides digital content and tools for mental state regulation, including audio, visual environments and guided sessions.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">3. Age Requirement</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              Mind Player is built for mental training and state regulation. It is intended for users aged 18 and over. Users aged 16–17 may use the app with parental consent.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">4. User Accounts</h2>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>You are responsible for maintaining the security of your account</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>You must provide accurate and complete information</span></li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">5. User Content</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              Users may create and share content (e.g., sessions, groups). You retain ownership of your content but grant Mind Player a license to use, display and distribute it within the platform.
            </p>
          </div>

          {/* Payments & Marketplace Header */}
          <div className="mt-4">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-center mb-2"
              style={{ color: '#181028', letterSpacing: '-0.01em' }}
            >
              💰 Payments &amp; Marketplace
            </h2>
          </div>

          {/* Section 6 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">6. Payments and Transactions</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">Mind Player may offer:</p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2 mb-3">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Subscriptions</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Digital content</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Group sessions</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Individual sessions</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Other paid experiences</span></li>
            </ul>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              All payments are processed through third-party providers. By using paid features, you agree to their terms. Prices, fees and commissions may be updated at any time.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">7. Marketplace and Intermediation</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              Mind Player operates as a platform that enables users, creators and professionals to offer and access paid content, sessions, groups and digital experiences. Mind Player acts solely as an intermediary and is not a party to agreements between users.
            </p>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 mb-2 font-medium">Users are solely responsible for:</p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>The content they provide</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>The services they offer</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>The accuracy of descriptions</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>The delivery of sessions or experiences</span></li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">8. Commissions and Fees</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              Mind Player may charge a commission on transactions. By offering paid services, you agree that:
            </p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Mind Player may retain a percentage of each transaction</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Fees will be disclosed within the platform</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Payouts may be subject to processing times and provider rules</span></li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">9. Payouts</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              Payouts are handled through third-party payment providers. Mind Player is not responsible for:
            </p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2 mb-3">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Delays caused by payment processors</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Failed transfers due to incorrect information</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Taxes or reporting obligations</span></li>
            </ul>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              Users are responsible for complying with applicable tax laws.
            </p>
          </div>

          {/* Section 10 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">10. Refund Policy</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">Unless otherwise stated:</p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2 mb-3">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>All purchases are final</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Refunds are not guaranteed</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Refunds may be granted at Mind Player's sole discretion</span></li>
            </ul>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">For sessions or experiences:</p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>If a session is not delivered, a refund may be issued</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>If a user fails to attend, refunds may not apply</span></li>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">11. Disputes Between Users</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              Mind Player is not responsible for disputes between users. However, we may, at our sole discretion:
            </p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2 mb-3">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Review disputes</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Request evidence</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Issue refunds or take action</span></li>
            </ul>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed font-medium">
              All decisions made by Mind Player are final.
            </p>
          </div>

          {/* Use, Responsibility & Limitations Header */}
          <div className="mt-4">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-center mb-2"
              style={{ color: '#181028', letterSpacing: '-0.01em' }}
            >
              ⚖️ Use, Responsibility &amp; Limitations
            </h2>
          </div>

          {/* Section 12 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">12. Acceptable Use</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">You agree not to:</p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Misuse the platform</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Upload harmful or illegal content</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Violate applicable laws</span></li>
            </ul>
          </div>

          {/* Section 13 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">13. Content and Conduct</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 mb-2 font-medium">Users offering paid services must:</p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Act in good faith</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Provide accurate descriptions</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Deliver the promised experience</span></li>
            </ul>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 mb-2 font-medium">Mind Player reserves the right to:</p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Remove content</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Suspend accounts</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Restrict access</span></li>
            </ul>
          </div>

          {/* Section 14 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">14. Prohibited Use</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">You may not:</p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Offer fraudulent services</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Misrepresent qualifications</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Manipulate reviews or payments</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Attempt to bypass platform payments</span></li>
            </ul>
          </div>

          {/* Section 15 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">15. No Professional or Medical Advice</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              Mind Player is not a medical service. Services provided through the platform do not constitute medical, psychological or professional advice unless explicitly stated and verified. Use is at your own risk.
            </p>
          </div>

          {/* Section 16 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">16. Platform Role</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">
              Mind Player provides infrastructure for users to connect and transact. We do not:
            </p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Guarantee results</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Supervise all interactions</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Act as a direct service provider</span></li>
            </ul>
          </div>

          {/* Section 17 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">17. Limitation of Liability</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed mb-3">Mind Player is not liable for:</p>
            <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Indirect or consequential damages</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>The quality of services provided by users</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>Outcomes of sessions or experiences</span></li>
              <li className="flex items-start gap-2"><span className="text-[#9b7dd4] mt-0.5">•</span><span>User-to-user interactions</span></li>
            </ul>
          </div>

          {/* Section 18 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">18. Termination</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </div>

          {/* Section 19 */}
          <div className="bg-[#F8F6FD] border border-[#ece7f6] rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-[#181028] mb-3">19. Changes to Terms</h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
              We may update these Terms at any time. Continued use of the platform constitutes acceptance of the updated Terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
