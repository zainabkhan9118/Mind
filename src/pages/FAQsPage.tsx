import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Mind Player?',
    answer:
      'Mind Player is a mental state regulation platform designed to help you control how you feel, think and perform — on demand.',
  },
  {
    question: 'How is Mind Player different from meditation apps?',
    answer:
      'Most apps provide content. Mind Player creates immersive environments that help you actively shift your mental state.',
  },
  {
    question: 'What can I use Mind Player for?',
    answer: null,
    list: [
      'Focus and productivity',
      'Stress reduction',
      'Sleep improvement',
      'Emotional balance',
      'Creativity',
    ],
  },
  {
    question: 'Do I need a VR headset?',
    answer:
      'No. Mind Player works on mobile devices. VR is an optional immersive experience.',
  },
  {
    question: 'What are "Minds"?',
    answer:
      '"Minds" are customizable experiences that combine sound, environments and guidance to help you shift your mental state.',
  },
  {
    question: 'Can I create my own Minds?',
    answer:
      'Yes. You can create and personalize your own "Minds" based on your goals.',
  },
  {
    question: 'Are there live or group sessions?',
    answer:
      'Yes. Mind Player allows group sessions and interactions within communities.',
  },
  {
    question: 'Is Mind Player a medical product?',
    answer:
      'No. Mind Player is not a medical device and does not replace professional healthcare.',
  },
];

const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="min-h-screen bg-[#fcfaff] px-4 sm:px-6 py-16 sm:py-24 md:py-32">
      <div className="max-w-screen-2xl 2xl:max-w-[90%] 3xl:max-w-[85%] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold mb-4 sm:mb-6"
            style={{ color: '#181028', letterSpacing: '-0.01em', lineHeight: 1.1 }}
          >
            Frequently Asked Questions
          </h1>
          <p className="max-w-xl sm:max-w-2xl 2xl:max-w-3xl mx-auto text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-[#222] opacity-80">
            Everything you need to know about Mind Player and how it can help you on your wellness journey.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === i
                  ? 'bg-white border-[#e6d8fa] shadow-lg shadow-purple-100/40'
                  : 'bg-[#F8F6FD] border-[#ece7f6] hover:border-[#d8ccee]'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left cursor-pointer"
              >
                <span className="font-semibold text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-[#181028] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-[#9b7dd4] transition-transform duration-300 2xl:w-6 2xl:h-6 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-5 sm:pb-6">
                  {faq.answer && (
                    <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                  {faq.list && (
                    <ul className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#222] opacity-80 space-y-2 mt-1">
                      {faq.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-[#9b7dd4] mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsPage;
