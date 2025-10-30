import React from 'react';

export type PageHeroProps = {
  title: string;
  subtitle?: string;
  gradientFromClassName?: string;
  gradientToClassName?: string;
  children?: React.ReactNode; // CTA buttons or any extra content
};

export function PageHero({
  title,
  subtitle,
  gradientFromClassName = 'from-blue-600',
  gradientToClassName = 'to-blue-800',
  children,
}: PageHeroProps) {
  return (
    <section className={`py-16 lg:py-20 text-white bg-gradient-to-r ${gradientFromClassName} ${gradientToClassName}`}>
      <div className='container'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl lg:text-6xl font-bold mb-6'>
            {title}
          </h1>
          {subtitle ? (
            <p className='text-xl lg:text-2xl text-blue-100 leading-relaxed'>
              {subtitle}
            </p>
          ) : null}
          {children ? (
            <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center'>
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
