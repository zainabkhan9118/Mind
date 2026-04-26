const sections = [
  { title: '1. Introduction', content: 'Welcome to Mind Player. By accessing or using the platform, you agree to be bound by these Terms.' },
  { title: '2. Services', content: 'Mind Player provides digital content and tools for mental state regulation, including audio, visual environments and guided sessions.' },
  { title: '3. Age Requirement', content: 'Mind Player is built for mental training and state regulation. It is intended for users aged 18 and over. Users aged 16–17 may use the app with parental consent.' },
  { title: '4. User Accounts', list: ['You are responsible for maintaining the security of your account', 'You must provide accurate and complete information'] },
  { title: '5. User Content', content: 'Users may create and share content (e.g., sessions, groups). You retain ownership of your content but grant Mind Player a license to use, display and distribute it within the platform.' },
  { title: '6. Payments and Transactions', content: 'Mind Player may offer:', list: ['Subscriptions', 'Digital content', 'Group sessions', 'Individual sessions', 'Other paid experiences'], footer: 'All payments are processed through third-party providers. By using paid features, you agree to their terms. Prices, fees and commissions may be updated at any time.' },
  { title: '7. Marketplace and Intermediation', content: 'Mind Player operates as a platform that enables users, creators and professionals to offer and access paid content, sessions, groups and digital experiences. Mind Player acts solely as an intermediary and is not a party to agreements between users.', listLabel: 'Users are solely responsible for:', list: ['The content they provide', 'The services they offer', 'The accuracy of descriptions', 'The delivery of sessions or experiences'] },
  { title: '8. Commissions and Fees', content: 'Mind Player may charge a commission on transactions. By offering paid services, you agree that:', list: ['Mind Player may retain a percentage of each transaction', 'Fees will be disclosed within the platform', 'Payouts may be subject to processing times and provider rules'] },
  { title: '9. Payouts', content: 'Payouts are handled through third-party payment providers. Mind Player is not responsible for:', list: ['Delays caused by payment processors', 'Failed transfers due to incorrect information', 'Taxes or reporting obligations'], footer: 'Users are responsible for complying with applicable tax laws.' },
  { title: '10. Refund Policy', content: 'Unless otherwise stated:', list: ['All purchases are final', 'Refunds are not guaranteed', 'Refunds may be granted at Mind Player\'s sole discretion'], listLabel2: 'For sessions or experiences:', list2: ['If a session is not delivered, a refund may be issued', 'If a user fails to attend, refunds may not apply'] },
  { title: '11. Disputes Between Users', content: 'Mind Player is not responsible for disputes between users. However, we may, at our sole discretion:', list: ['Review disputes', 'Request evidence', 'Issue refunds or take action'], footer: 'All decisions made by Mind Player are final.' },
  { title: '12. Acceptable Use', content: 'You agree not to:', list: ['Misuse the platform', 'Upload harmful or illegal content', 'Violate applicable laws'] },
  { title: '13. Content and Conduct', listLabel: 'Users offering paid services must:', list: ['Act in good faith', 'Provide accurate descriptions', 'Deliver the promised experience'], listLabel2: 'Mind Player reserves the right to:', list2: ['Remove content', 'Suspend accounts', 'Restrict access'] },
  { title: '14. Prohibited Use', content: 'You may not:', list: ['Offer fraudulent services', 'Misrepresent qualifications', 'Manipulate reviews or payments', 'Attempt to bypass platform payments'] },
  { title: '15. No Professional or Medical Advice', content: 'Mind Player is not a medical service. Services provided through the platform do not constitute medical, psychological or professional advice unless explicitly stated and verified. Use is at your own risk.' },
  { title: '16. Platform Role', content: 'Mind Player provides infrastructure for users to connect and transact. We do not:', list: ['Guarantee results', 'Supervise all interactions', 'Act as a direct service provider'] },
  { title: '17. Limitation of Liability', content: 'Mind Player is not liable for:', list: ['Indirect or consequential damages', 'The quality of services provided by users', 'Outcomes of sessions or experiences', 'User-to-user interactions'] },
  { title: '18. Termination', content: 'We reserve the right to suspend or terminate accounts that violate these Terms.' },
  { title: '19. Changes to Terms', content: 'We may update these Terms at any time. Continued use of the platform constitutes acceptance of the updated Terms.' },
];

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

const TermsPage = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-16 sm:py-24 md:py-32">
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-2 sm:space-y-4">
          <p className="text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-mind-violet font-semibold">Legal</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-white leading-[1.1]">
            Terms &amp; Conditions
          </h1>
          <p className="max-w-xl sm:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-gray-400">
            Please read these terms carefully before using the Mind Player platform.
          </p>
        </div>

        <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto flex flex-col gap-5">
          {sections.map((s, i) => (
            <div key={i} className="glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-6 sm:py-8">
              <h2 className="font-bold text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl text-white mb-3">{s.title}</h2>
              {s.content && <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mb-3">{s.content}</p>}
              {'listLabel' in s && s.listLabel && <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-white/80 font-medium mb-2">{s.listLabel}</p>}
              {s.list && <div className="mb-3">{renderList(s.list)}</div>}
              {'listLabel2' in s && (s as any).listLabel2 && <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-white/80 font-medium mb-2 mt-4">{(s as any).listLabel2}</p>}
              {'list2' in s && (s as any).list2 && renderList((s as any).list2)}
              {'footer' in s && s.footer && <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-400 leading-relaxed mt-3 font-medium">{s.footer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
