const features = [
  {
    title: 'Inbound & outbound',
    icon: './CustomerEngagement/vocalcom__InboundOutbound.svg',
    url: '#',
    alt: 'Inbound and outbound call center',
  },
  {
    title: 'Omnichannel',
    icon: './CustomerEngagement/vocalcom-icons__Omnicanal-media-blendingRS.svg',
    url: '#',
    alt: 'Omnichannel communication',
  },
  {
    title: 'AI-ready',
    icon: './CustomerEngagement/vocalcom-icons__AI-readyautomatisation.svg',
    url: '#',
    alt: 'AI ready technology',
  },
  {
    title: 'CRM integration',
    icon: './CustomerEngagement/vocalcom__Integration-connecteurs-CRM-2.svg',
    url: '#',
    alt: 'CRM integration',
  },
  {
    title: 'Native Salesforce solution',
    icon: './CustomerEngagement/vocalcom__Solution-native-Salesforce-1.svg',
    url: '#',
    alt: 'Native Salesforce integration',
  },
  {
    title: 'Cloud and on-premise',
    icon: './CustomerEngagement/vocalcom__Cloud-Onpremise.svg',
    url: '#',
    alt: 'Cloud and on-premise deployment',
  },
];

export default function CustomerEngagement() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mx-auto">
        <section className="w-full py-12 sm:py-16 md:py-20">
          <div className="mx-auto">
            <h1 className="mb-8 sm:mb-10 md:mb-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center leading-tight sm:leading-snug">
              Innovation at the service of customer engagement and performance
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center w-full max-w-[140px] sm:max-w-[160px]">
                  <a href={feature.url} className="flex flex-col items-center group w-full" target="_blank" rel="noopener noreferrer">
                    <div className="mb-3 sm:mb-4 p-4 sm:p-5 md:p-6 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300 bg-white group-hover:bg-gray-50">
                      <img src={feature.icon} alt={feature.alt} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                    </div>

                    <div className="text-center text-xs sm:text-sm md:text-base font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">{feature.title}</div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
