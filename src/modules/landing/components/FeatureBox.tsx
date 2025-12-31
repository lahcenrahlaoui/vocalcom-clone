import Link from 'next/link';

type FeatureBoxProps = {
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  circularImageUrl?: string;
};

export default function FeatureBox({ title, description, cta, ctaLink, circularImageUrl }: FeatureBoxProps) {
  return (
    <article className="relative flex flex-col h-full pt-12 lg:pt-0">
      <div className="relative overflow-hidden flex-shrink-0">
        <div className="relative" style={{ paddingBottom: '125%' }}>
          {circularImageUrl && (
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden p-[18px]">
              <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${circularImageUrl})` }} />
            </div>
          )}
        </div>
      </div>

      <div className="relative px-5 -mt-[140px] grow">
        <div className="bg-white rounded-lg duration-300 text-center h-full flex flex-col">
          <div className="min-h-[100px] flex items-end justify-center pt-10 px-4 pb-0">
            <h3 className="text-xl md:text-2xl lg:text-2xl font-semibold text-gray-900">{title}</h3>
          </div>

          <div className="px-8 py-4 grow">
            <p className="text-muted text-[17px] leading-relaxed">{description}</p>
          </div>

          <div className="mt-auto pb-8 pt-4">
            <Link
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-20 py-3 bg-accent text-white text-sm font-medium rounded-full transition-colors duration-300"
              title={cta}
            >
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
