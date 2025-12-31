'use client';

import GradientBackgroundWithShapes from '../components/GradientBackgroundWithShapes';

export default function TestimonialSection() {
  return (
    <section className="w-full ">
      <GradientBackgroundWithShapes height="h-auto" className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16  " shapeOpacity={0.15}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-12">
            <div className="w-full lg:w-3/12">
              <div className="flex justify-center lg:justify-start">
                <div className="bg-white w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-46 lg:h-46 flex items-center justify-center -rotate-45 p-4 sm:p-5 md:p-6 rounded-[35%] sm:rounded-[40%] lg:rounded-[45%] shadow-lg">
                  <img
                    src="./TestimonialSection/1200px-Sage-logo.svg-150x0-c-default.png"
                    alt="Sage logo"
                    className="w-full max-w-[120px] sm:max-w-[130px] md:max-w-[140px] lg:max-w-[150px] h-auto rotate-45"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-9/12 text-white">
              <div>
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl italic font-normal leading-relaxed sm:leading-loose mb-4 sm:mb-5 md:mb-6">
                  <p>
                    Thanks to Vocalcom's high level of commitment, Sage could deploy an important project for its contact center, with an immediate return on investment and a 60% productivity increase
                  </p>
                </div>

                <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">Fernando Gavalche</p>

                <p className="text-xs sm:text-sm uppercase tracking-wider mb-1 opacity-90">CIO</p>

                <p className="italic font-medium text-sm sm:text-base md:text-lg opacity-90">Sage Espagne</p>
              </div>
            </div>
          </div>
        </div>
      </GradientBackgroundWithShapes>
    </section>
  );
}
