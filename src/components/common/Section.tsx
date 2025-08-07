import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', fullWidth = false }) => {
  return (
    <section className={`w-full py-10 sm:py-12 md:py-16 ${className}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${fullWidth ? 'w-full' : 'max-w-7xl'}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
