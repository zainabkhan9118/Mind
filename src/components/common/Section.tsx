import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', fullWidth = false }) => {
  return (
    <section className={`w-full py-10 sm:py-12 md:py-16 ${className}`}>
      <div
        className={`mx-auto px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-20 ${fullWidth ? 'w-full' : 'max-w-screen-xl 2xl:max-w-screen-2xl'}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
