interface StatisticsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
}

export default function StatisticsCard({ imageUrl, title, description, linkUrl }: StatisticsCardProps) {
  return (
    <article className="group relative flex-1 flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <div className="relative pb-[75%] sm:pb-[70%] md:pb-[65%]">
          <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white text-center p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h3>
        <div className="flex-1 text-muted text-sm sm:text-base leading-relaxed sm:leading-loose mb-4 sm:mb-5 md:mb-6">
          <p>{description}</p>
        </div>
        <a
          href={linkUrl}
          className="button-main small mt-sm inline-block px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 bg-accent text-white text-sm sm:text-base font-medium rounded-full hover:bg-teal-600 transition-colors duration-300 w-full text-center hover:shadow-md"
          target="_self"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </div>
    </article>
  );
}
