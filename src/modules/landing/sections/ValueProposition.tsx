import FeatureBox from '../components/FeatureBox';

const features = [
  {
    title: 'Unlock powerful insights',
    description: 'With Hermes Intersections Analytics, harness the potential of conversational analysis to enhance customer experiences, support your agents and drive business growth.',
    cta: 'Discover H.I.A',
    ctaLink: '#',
    circularImageUrl: './ValueProposition/HIA_Plan-de-travail-1-1.webp',
  },
  {
    title: 'Oversee an omnichannel strategy with your CRM',
    description:
      'With Hermes Universal CRM Connector, enrich your favorite CRM with the advanced Hermes features for inbound and outbound calls, or combine several CRMs for different customers (for outsourcers).',
    cta: 'Discover H.U.C.C',
    ctaLink: '#',
    circularImageUrl: './ValueProposition/HUCC_Plan-de-travail-1_Plan-de-travail-1.webp',
  },
  {
    title: 'Engage your customers on digital channels',
    description:
      'With Hermes Digital Journey, engage your customers on a dream journey! Communicate according to their needs, on the right channel, at the right time, and with the relevant information.',
    cta: 'Discover H.D.J',
    ctaLink: '#',
    circularImageUrl: './ValueProposition/Hermes-digital-journey-wheel-en.webp',
  },
];

export default function InnovationSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <div>
        <h2 className="mb-6 sm:mb-8 md:mb-12 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center leading-tight sm:leading-snug">
          Innovation at the service of customer engagement and performance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col h-full">
              <FeatureBox {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
