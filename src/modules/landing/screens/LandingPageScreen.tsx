import HeroSection from '../sections/HeroSection';
import InnovationFeatures from '../sections/InnovationSection';

import ValueProposition from '../sections/ValueProposition';
import UseCasesSection from '../sections/UseCasesSection';
import CustomerEngagement from '../sections/CustomerEngagement';
import TrustedCompanies from '../sections/TrustedCompanies';

import SolutionExperience from '../sections/SolutionExperience';
import TestimonialSection from '../sections/TestimonialSection';
import NewsSection from '../sections/NewsSection';
import ContactFormSection from '../sections/ContactFormSection';
import FinalCTASection from '../sections/FinalCTASection';

import FooterSection from '../sections/FooterSection';
const LandingPageScreen = () => {
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center">
      <HeroSection />
      <InnovationFeatures />

      <ValueProposition />
      <UseCasesSection />

      <CustomerEngagement />
      <TrustedCompanies />
      <SolutionExperience />

      <TestimonialSection />

      <NewsSection />
      <ContactFormSection />

      <FinalCTASection />
      <FooterSection />
    </div>
  );
};

export default LandingPageScreen;
