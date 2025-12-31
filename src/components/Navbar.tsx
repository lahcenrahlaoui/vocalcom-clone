'use client';

import { useState } from 'react';
import Link from 'next/link';
interface MenuItem {
  title: string;
  dropdown: boolean;
  items: {
    title: string;
    submenu?: boolean;
    items?: {
      title: string;
    }[];
  }[];
}

const menuItems: MenuItem[] = [
  {
    title: 'Capabilities',
    dropdown: true,
    items: [
      { title: 'Overview' },
      {
        title: 'Inbound & Outbound calls',
        submenu: false,
      },
    ],
  },
  {
    title: 'Solutions',
    dropdown: true,
    items: [{ title: 'Customer Service' }, { title: 'Sales & Telemarketing' }],
  },
  {
    title: 'Offers',
    dropdown: true,
    items: [
      {
        title: 'Hermes360',
        submenu: false,
      },
      { title: 'Salesforce Edition' },
    ],
  },
  {
    title: 'Industries',
    dropdown: true,
    items: [{ title: 'Banks & Financial Services' }, { title: 'Insurance' }],
  },
  {
    title: 'Resources',
    dropdown: true,
    items: [{ title: 'Blog & News' }, { title: 'Ebooks & Studies' }],
  },
  {
    title: 'About us',
    dropdown: true,
    items: [{ title: 'Who we are' }, { title: 'Worldwide Presence & Partners' }],
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string | null) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    setOpenSubDropdown(null);
  };

  const toggleSubDropdown = (submenu: string | null) => {
    setOpenSubDropdown(openSubDropdown === submenu ? null : submenu);
  };

  return (
    <header className="w-full bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.06)]">
      <div className="hidden lg:block bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 2xl:px-0">
          <div className="flex justify-end items-center py-3">
            <div className="flex items-center space-x-6">
              <div className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">Contact us</div>

              <div className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-accent text-white hover:bg-teal-600">Request a demo</div>

              <div className="font-semibold text-gray-700 hover:text-accent transition-colors">+216 71 168 400</div>

              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-accent transition-colors">
                  <span className="font-medium">English</span>
                </button>

                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link href="" className="block px-4 py-2 text-sm text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors">
                    Portuguese
                  </Link>
                  <Link href="" className="block px-4 py-2 text-sm text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors">
                    Español
                  </Link>
                  <Link href="" className="block px-4 py-2 text-sm text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors">
                    Français
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 2xl:px-0">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0">
            <Link href="" className="block">
              <div className="relative w-40 h-10 md:w-48 md:h-12">
                <img src="/Navbar/logo-vocalcom.svg" alt="Vocalcom Logo" className="w-full h-full object-contain" />
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map(item => (
              <div key={item.title} className="relative group">
                <button onClick={() => toggleDropdown(item.title)} className="flex items-center space-x-1 text-gray-700 hover:text-accent transition-colors font-medium text-sm py-2 relative group">
                  <span>{item.title}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>

                {openDropdown === item.title && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-md shadow-xl py-4 z-50 animate-fadeIn">
                    {item.items.map((dropdownItem, index) => (
                      <div key={index} className="relative">
                        {dropdownItem.submenu ? (
                          <>
                            <button
                              onClick={() => toggleSubDropdown(`${item.title}-${index}`)}
                              className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors text-sm"
                            >
                              <span>{dropdownItem.title}</span>
                              <img src="/Navbar/chevron-right.svg" alt="Chevron" width={12} height={12} className="w-3 h-3" />
                            </button>

                            {openSubDropdown === `${item.title}-${index}` && (
                              <div className="absolute left-full top-0 w-64 bg-white rounded-md shadow-xl py-4 ml-1 z-50">
                                <Link href={''} className="block px-4 py-2 text-xs uppercase font-semibold text-accent mb-2">
                                  {dropdownItem.title}
                                </Link>
                                {dropdownItem.items?.map((subItem, subIndex) => (
                                  <Link key={subIndex} href={''} className="block px-4 py-2 text-sm text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors">
                                    {subItem.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link href={''} className="block px-4 py-2 text-sm text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors">
                            {dropdownItem.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="lg:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <img src="/Navbar/mail-icon.svg" alt="Contact" width={20} height={20} className="w-5 h-5" />
              </button>

              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <img src="/Navbar/phone-icon.svg" alt="Phone" width={20} height={20} className="w-5 h-5" />
              </button>

              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <img src="./Navbar/en.png" alt="English" width={24} height={16} className="w-6 h-4 rounded" />
              </button>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block w-full h-0.5 bg-gray-700 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-gray-700 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-full h-0.5 bg-gray-700 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4">
            <div className="flex flex-col space-y-3 mb-6">
              <Link href="" className="px-4 py-3 rounded-md text-center font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">
                Contact us
              </Link>

              <Link href="" className="px-4 py-3 rounded-md text-center font-medium transition-colors bg-accent text-white hover:bg-teal-600">
                Request a demo
              </Link>

              <Link href="" className="px-4 py-3 rounded-md bg-gray-50 text-center font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                +216 71 168 400
              </Link>
            </div>

            <nav className="space-y-1">
              {menuItems.map(item => (
                <div key={item.title} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => toggleDropdown(`mobile-${item.title}`)}
                    className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-accent transition-colors font-medium"
                  >
                    <span>{item.title}</span>
                    <img
                      src="/Navbar/chevron-bottom.svg"
                      alt="Chevron"
                      width={12}
                      height={12}
                      className={`w-3 h-3 transition-transform ${openDropdown === `mobile-${item.title}` ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {openDropdown === `mobile-${item.title}` && (
                    <div className="pl-4 pb-3 space-y-2">
                      {item.items.map((dropdownItem, index) => (
                        <div key={index}>
                          {dropdownItem.submenu ? (
                            <>
                              <button
                                onClick={() => toggleSubDropdown(`mobile-${item.title}-${index}`)}
                                className="w-full flex items-center justify-between py-2 text-muted hover:text-accent transition-colors"
                              >
                                <span>{dropdownItem.title}</span>
                                <img src="/Navbar/chevron-right.svg" alt="Chevron" width={12} height={12} className="w-3 h-3" />
                              </button>

                              {openSubDropdown === `mobile-${item.title}-${index}` && (
                                <div className="pl-4 space-y-2 mt-2">
                                  {dropdownItem.items?.map((subItem, subIndex) => (
                                    <Link key={subIndex} href={''} className="block py-2 text-gray-500 hover:text-accent transition-colors">
                                      {subItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link href={''} className="block py-2 text-muted hover:text-accent transition-colors">
                              {dropdownItem.title}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
