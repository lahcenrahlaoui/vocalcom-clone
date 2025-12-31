import StatisticsCard from '../components/StatisticsCard';

const cards = [
  {
    id: 1,
    imageUrl: './SolutionExperience/Service-Client-1.webp',
    title: 'Customer Service',
    description:
      'Provide an exceptional customer experience with contact center software that intelligently manages all of your inbound and outbound interactions, across all channels, within a single platform.',
    linkUrl: '#',
  },
  {
    id: 2,
    imageUrl: './SolutionExperience/Telemarketing-1.webp',
    title: 'Sales & Telemarketing',
    description:
      "Improve your outbound call campaign performance with our predictive dialer's powerful algorithms. Vocalcom's call center software boosts your contact rate and your agents' productivity.",
    linkUrl: '#',
  },
  {
    id: 3,
    imageUrl: './SolutionExperience/collections-1.webp',
    title: 'Debt Collection',
    description: 'Maximize your debt collection rates with call center software that immediately puts your agents in touch with the right person, avoiding voicemails and dead time between calls.',
    linkUrl: '#',
  },
];

export default function KeyStatistics() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div>
        <header className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="text-center">
            <div className="max-w-3xl mx-auto px-4">
              <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-snug">
                Improve your customers' and agents' experience with all-in-one contact center software in the cloud
              </h5>
            </div>
          </div>
        </header>

        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="transition-all duration-500 flex flex-col"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <StatisticsCard imageUrl={card.imageUrl} title={card.title} description={card.description} linkUrl={card.linkUrl} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
