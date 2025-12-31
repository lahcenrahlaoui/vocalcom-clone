'use client';

export default function FooterSection() {
  return (
    <footer className="py-8 max-w-7xl ">
      <div className="mx-auto px-4">
        <ul className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-8 text-gray-700">
          <li className="text-sm">© 2025 Vocalcom</li>

          <li>
            <a href="#" title="Legals" className="text-sm hover:text-teal-600 transition-colors">
              Legals
            </a>
          </li>

          <li>
            <a href="#" title="Privacy" className="text-sm hover:text-teal-600 transition-colors">
              Privacy
            </a>
          </li>

          <li>
            <a href="#" title="Cookie policy" className="text-sm hover:text-teal-600 transition-colors">
              Cookie policy
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).openAxeptioCookies) {
                  (window as any).openAxeptioCookies();
                }
              }}
              className="text-sm hover:text-teal-600 transition-colors"
            >
              Cookies settings
            </a>
          </li>

          <li className="relative group">
            <button className="flex items-center gap-2 text-sm hover:text-teal-600 transition-colors">
              <img src="./FooterSection/languages-icon.svg" alt="World" className="w-4 h-4" />
              <span className="flex items-center gap-1">
                English
                <img src="./FooterSection/chevron-bottom.svg" alt="Chevron" className="w-3 h-3" />
              </span>
            </button>

            <ul className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 min-w-[120px] opacity-0   group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <li className="hover:bg-gray-50 rounded">
                <a className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600" href="#">
                  Portuguese
                </a>
              </li>
              <li className="hover:bg-gray-50 rounded">
                <a className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600" href="#">
                  Español
                </a>
              </li>
              <li className="hover:bg-gray-50 rounded">
                <a className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600" href="#">
                  Français
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}
