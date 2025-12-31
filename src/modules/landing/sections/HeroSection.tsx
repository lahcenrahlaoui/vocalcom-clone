'use client';

const HeroSection = () => {
  // Custom shape component with different color options
  const CurvedShape = ({ className = '', rotate = 0, color = 'orange' }) => {
    const colorFilters = {
      orange: 'invert(44%) sepia(95%) saturate(1375%) hue-rotate(2deg) brightness(101%) contrast(103%)',
      red: 'invert(17%) sepia(99%) saturate(4685%) hue-rotate(359deg) brightness(97%) contrast(108%)',
      green: 'invert(62%) sepia(64%) saturate(476%) hue-rotate(87deg) brightness(93%) contrast(90%)',
      blue: 'invert(36%) sepia(91%) saturate(514%) hue-rotate(183deg) brightness(94%) contrast(96%)',
      purple: 'invert(30%) sepia(88%) saturate(1246%) hue-rotate(249deg) brightness(93%) contrast(102%)',
      teal: 'invert(56%) sepia(84%) saturate(415%) hue-rotate(130deg) brightness(94%) contrast(101%)',
      accent: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(154deg) brightness(101%) contrast(101%)',
    };

    return (
      <img
        src="/shape-illu-red.svg"
        alt="Curved Shape"
        className={className}
        style={{
          filter: colorFilters[color as keyof typeof colorFilters] || colorFilters.orange,
          transform: rotate ? `rotate(${rotate}deg)` : undefined,
        }}
      />
    );
  };

  return (
    <section className="w-full min-h-screen relative">
      {/* Main gray section with curved bottom */}
      <div
        className="relative bg-gray-50 pt-16 md:pt-20 lg:pt-24 pb-24 md:pb-32 lg:pb-48 overflow-hidden min-h-screen"
        style={{
          clipPath: 'ellipse(140% 100% at 50% 0%)',
        }}
      >
        {/* Background Shapes Container */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top Left - Single prominent shape (orange) */}
          <div className="absolute -bottom-24 md:-bottom-32 lg:-bottom-24 -left-24 md:-left-32 lg:-left-48 w-80 h-80 md:w-100 md:h-100 lg:w-140 lg:h-140 z-0">
            <CurvedShape className="w-full h-full" rotate={180} color="orange" />
          </div>

          {/* Top Right - Medium shape (red) */}
          <div className="absolute -top-10 md:-top-12 -right-16 md:-right-24 lg:-right-50 w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 z-0">
            <CurvedShape className="w-full h-full" rotate={0} color="red" />
          </div>

          {/* Bottom Right - Small shape (green) */}
          <div className="absolute -bottom-12 md:-bottom-16 -right-8 md:-right-12 lg:-right-16 w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 z-0">
            <CurvedShape className="w-full h-full" rotate={195} color="green" />
          </div>

          {/* Additional accent shape (teal brand color) */}
          <div className="absolute top-20 md:top-24 lg:top-32 left-1/4 md:left-1/3 w-60 h-60 md:w-70 md:h-70 lg:w-80 lg:h-80 z-0 opacity-70">
            <CurvedShape className="w-full h-full" rotate={45} color="accent" />
          </div>

          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100/60 via-gray-50 to-gray-100/50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-10 lg:gap-12 h-full py-8 md:py-12 lg:py-0">
            <div className="w-full lg:w-8/12">
              <div data-kira-timeline-onload="" className="text-center lg:text-left">
                <h1 className="text-accent mb-3 md:mb-4 text-base md:text-lg font-medium" data-kira-item="fadeInUp.parallax.sm">
                  Call Center Software
                </h1>

                <h2 className="text-gl sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 lg:pr-8 leading-tight md:leading-snug lg:leading-normal" data-kira-item="fadeInUp.parallax.sm">
                  Your Omnichannel Cloud Contact Center Solution
                </h2>

                <div className="text-darkText mt-4 md:mt-6 text-sm sm:text-base md:text-lg w-full lg:w-5/6 font-normal leading-relaxed md:leading-loose" data-kira-item="fadeInUp.parallax.sm">
                  Engage your customers wherever they are, no matter their communication channel, with an intuitive and flexible contact center solution to intelligently manage your inbound and
                  outbound contacts. For more seamless customer relations and more productive agents.
                </div>

                <div className="mt-6 md:mt-8" data-kira-item="fadeInUp.parallax.sm">
                  <a
                    href="#bottom-form"
                    title="#bottom-form"
                    className="inline-block px-6 py-3 md:px-20 md:py-4 bg-accent border border-accent  text-white text-sm md:text-base font-medium rounded-full hover:bg-white hover:text-accent transition-colors shadow-lg hover:shadow-xl"
                  >
                    <span>Ask for a demo</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-4/12 mt-8 md:mt-10 lg:mt-0">
              <div className="relative max-w-xl mx-auto lg:max-w-none">
                <div className="relative aspect-video md:aspect-square lg:aspect-video overflow-hidden rounded-lg lg:rounded-xl">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{
                      transform: 'scale(1.75)',
                      transformOrigin: 'center center',
                    }}
                  >
                    <source src="https://www.vocalcom.com/wp-content/themes/yagami-adveris/web/src/img/video/anim.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 via-red-100/15 to-green-100/15 rounded-lg lg:rounded-xl blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
