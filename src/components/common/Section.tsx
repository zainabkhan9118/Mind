import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', fullWidth = false }) => {
  return (
    <section className={`w-full py-10 sm:py-12 md:py-16 ${className}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 ${fullWidth ? 'w-full' : 'max-w-7xl xl:max-w-8xl 2xl:max-w-9xl 3xl:max-w-screen-2xl'}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
