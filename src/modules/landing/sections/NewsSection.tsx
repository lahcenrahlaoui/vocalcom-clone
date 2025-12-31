const newsArticles = [
  {
    category: 'Smart Automated Dialer Blog article',

    title: 'Predictive analytics: an opportunity to improve customer service performance',
    image: './NewsSection/team-of-helpline-operators-with-headsets-consultin-2025-03-18-17-37-38-utc_resultat-540x0-c-default.jpg',
    link: '#',
  },
  {
    category: 'Cloud Blog article',

    title: 'Moving to a Cloud Contact Center: steps, precautions, and best practices',
    image: './NewsSection/cloud-computing-future-technology-and-people-conc-2025-10-11-12-10-31-utc_resultat-540x0-c-default.jpg',
    link: '#',
  },
  {
    category: 'Chatbot & Artificial Intelligence Blog article',

    title: 'Artificial intelligence in call center software: trend or revolution?',
    image: './NewsSection/businessman-hand-pointing-at-abstract-glowing-circ-2025-10-15-02-51-02-utc_resultat-540x0-c-default.jpg',
    link: '#',
  },
];

export default function NewsSection() {
  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" id="last-news">
      <header>
        <div className="mx-auto text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-10 md:mb-12">News</div>
        </div>
      </header>

      <div className="mx-auto">
        <div className="space-y-6 sm:space-y-8">
          {newsArticles.map((article, index) => (
            <article className="bg-white shadow-lg hover:shadow-xl   overflow-hidden transition-all duration-300" key={index}>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-5/12">
                  <div className="h-48 sm:h-56 md:h-64 lg:h-72 w-full bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }}></div>
                </div>

                <div className="md:w-7/12 p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <p className="text-accent font-medium uppercase tracking-wide text-xs sm:text-sm">{article.category}</p>
                    </div>

                    <div className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 leading-tight sm:leading-snug md:leading-relaxed">{article.title}</div>

                    <a href={article.link} className="inline-flex items-center font-medium text-accent hover:text-teal-700 transition-colors group" target="_blank" rel="noopener noreferrer">
                      <span className="underline">Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 md:mt-16 text-center">
          <a
            href="#"
            className="inline-block px-8 py-2.5 sm:px-12 sm:py-3 bg-accent text-white text-sm sm:text-base font-medium 
           hover:bg-white hover:text-accent border border-accent transition-colors duration-300 hover:shadow-md rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Other news
          </a>
        </div>
      </div>
    </section>
  );
}
