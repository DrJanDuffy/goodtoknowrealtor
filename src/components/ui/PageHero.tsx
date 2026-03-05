import React from 'react';

export type PageHeroProps = {
  title: string;
  subtitle?: string;
  gradientFromClassName?: string;
  gradientToClassName?: string;
  children?: React.ReactNode; // CTA buttons or any extra content
  backgroundImageUrl?: string; // optional background image for more visual context
};

export function PageHero({
  title,
  subtitle,
  gradientFromClassName = 'from-blue-600',
  gradientToClassName = 'to-blue-800',
  children,
  backgroundImageUrl,
}: PageHeroProps) {
  return (
    <section className={`relative py-16 lg:py-20 text-white bg-gradient-to-r ${gradientFromClassName} ${gradientToClassName}`}>
      {backgroundImageUrl ? (
        <div
          className='absolute inset-0 opacity-20'
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ) : null}
      <div className='container relative'>
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
