const items = [
  {
    title: 'Omnichannel call center software in the cloud for a seamless customer experience',
    description: `Implement latest-generation, all-in-one call center software technology. Designed to manage omnichannel customer interactions like a single conversation, Vocalcom’s cloud call center software is a simple and user-friendly tool to manage all communication channels—voice, text messages, web, chat, e-mails, WhatsApp and social media—in a single platform that integrates seamlessly with your CRM application to deliver personalized customer interactions.`,
  },
  {
    title: 'Your cloud call center software, now available natively in Salesforce',
    description: `Vocalcom Salesforce Edition enables companies to manage their call center and all of the customer interactions from a single application: Salesforce. No need for a connector – your call center software is natively available in Salesforce so you can offer a seamless omnichannel customer experience and improve your agents’ productivity.`,
  },
  {
    title: 'Vocalcom, a leader since 1995',
    description: `Vocalcom is the market leader in cloud call center software and in omnichannel customer experience optimization for customer service, sales, telemarketing and debt collection. Our call center software solutions are constantly enriched to better meet your needs and offer all of the features and flexibility you need for an exceptional customer experience.`,
  },
];

export default function FinalCTASection() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose">
            {items.map((item, index) => (
              <div key={index} className="mb-8 sm:mb-10 md:mb-12 gap-1.5">
                <h2 className="mb-4 text-2xl font-bold text-center text-darkText sm:mb-5 md:mb-6">{item.title}</h2>
                <p className="text-muted text-sm md:text-base text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
