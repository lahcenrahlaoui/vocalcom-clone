const ctaLink = './UseCasesSection/customer-engagement-platform/';
const imageUrl = './UseCasesSection/Adam-et-Sofia.jpg';

export default function UseCasesSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="split-left">
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-5/12">
            <div className="mx-auto">
              <h2 className="mb-6 sm:mb-8 md:mb-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight sm:leading-snug">The use cases of Hermès Digital Journey</h2>

              <div>
                <p className="text-muted text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed sm:leading-loose">
                  Discover the adventures of Sofia and Adam, through five use cases that revolutionize customer engagement, on all channels: Call deflection and omnichannel orders, debt collection,
                  online order and product return, car assistance, retail and upsell.
                </p>
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-3 bg-red-600 text-white text-sm sm:text-base font-medium hover:bg-red-700 transition-colors duration-300 text-center w-full sm:w-auto"
                >
                  Watch the use cases
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center rounded-lg lg:rounded-xl shadow-lg" style={{ backgroundImage: `url(${imageUrl})` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
