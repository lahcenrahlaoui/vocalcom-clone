'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import type { SwiperRef } from 'swiper/react';

import GradientBackgroundWithShapes from '../components/GradientBackgroundWithShapes';

import 'swiper/css';
import 'swiper/css/navigation';

const companies = [
  {
    name: 'Bioderma',
    logo: './TrustedCompanies/Bioderma-Logo-150x0-c-default.png',
  },
  {
    name: 'Bouygues Telecom',
    logo: './TrustedCompanies/Bouygues_Telecom-150x0-c-default.png',
  },
  {
    name: 'FC Barcelona',
    logo: './TrustedCompanies/FC_Barcelona-150x0-c-default.png',
  },
  {
    name: 'Renault',
    logo: './TrustedCompanies/Renault_2021_Text.svg',
  },
  {
    name: 'Abu Dhabi Distribution',
    logo: './TrustedCompanies/logo-desktop-1.svg',
  },
  {
    name: 'Nespresso',
    logo: './TrustedCompanies/120px-Monogramme_Nespresso-150x0-c-default.png',
  },
  {
    name: 'Vinci',
    logo: './TrustedCompanies/Vinci_Unternehmen_logo.svg',
  },
  {
    name: 'Majid Al Futtaim (Dubai)',
    logo: './TrustedCompanies/Majid-Al-Futtaim-150x0-c-default.png',
  },
  {
    name: 'Mauritius Telecom',
    logo: './TrustedCompanies/Mauritius-Telecom-150x0-c-default.jpg',
  },
  {
    name: 'Armatis',
    logo: './TrustedCompanies/Logo-couleur-Baseline-Armatis-150x0-c-default.png',
  },
  {
    name: "Mc Donald's",
    logo: './TrustedCompanies/Mcdonalds.svg',
  },
  {
    name: 'My M&Ms',
    logo: './TrustedCompanies/MMs-2.svg',
  },
  {
    name: 'The Petroleum Institute',
    logo: './TrustedCompanies/The-Petroleum-Institute-150x0-c-default.png',
  },
  {
    name: 'AB in Bev',
    logo: './TrustedCompanies/Anheuser-Busch_InBev_Logo_2022.svg',
  },
  {
    name: 'Axa',
    logo: './TrustedCompanies/AXA_Logo.svg',
  },
  {
    name: 'Attijari Wafa Bank',
    logo: './TrustedCompanies/Logo_AWB.svg',
  },
];

const stats = [
  { value: '25+', label: 'years of expertise in customer engagement' },
  {
    value: '550,000+',
    label: 'users in 47+ countries across five continents',
  },
  { value: '1200+', label: 'customers worldwide' },
  { value: '1 Billion', label: 'interactions processed annually' },
];

export default function TrustedCompanies() {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section className="w-full overflow-hidden py-8 sm:py-12 md:py-16  ">
      <div className="w-full  ">
        <header className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight sm:leading-snug">Leading companies put their trust in us</h2>
        </header>

        <div className="relative mb-12 sm:mb-16 md:mb-20 px-4 sm:px-8 lg:px-12 xl:px-16">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation]}
            spaceBetween={16}
            slidesPerView={2}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.custom-next-btn',
              prevEl: '.custom-prev-btn',
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 32,
              },
            }}
            className="pb-8"
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index}>
                <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
                  <div className="max-w-full max-h-full">
                    <img src={company.logo} alt={company.name} className="w-auto h-auto max-w-full max-h-12 sm:max-h-16 md:max-h-20 object-contain" loading="lazy" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
            <button
              className="custom-prev-btn w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
            <button
              className="custom-next-btn w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => swiperRef.current?.swiper.slideNext()}
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <GradientBackgroundWithShapes height="h-auto sm:h-64 md:h-80 lg:h-96" shapeColor="white" shapeOpacity={0.4} className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 ">
          <div className="h-full flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-3 sm:mb-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 transition-transform duration-300 group-hover:scale-105">{stat.value}</div>
                    <div className="text-white text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-xs mx-auto opacity-90">{stat.label}</div>
                  </div>

                  <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-white/50 mx-auto mt-3 sm:mt-4 rounded-full transition-all duration-300 group-hover:w-20"></div>
                </div>
              ))}
            </div>
          </div>
        </GradientBackgroundWithShapes>
      </div>
    </section>
  );
}
