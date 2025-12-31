'use client';

import { useState } from 'react';
import GradientBackgroundWithShapes from '../components/GradientBackgroundWithShapes';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    function: '',
    seats: '',
    comments: '',
    marketingNews: false,
    newsletter: false,
    termsAccepted: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    alert('Form submitted successfully!');
  };

  const socialMediaLinks = [
    { href: '#', icon: FaFacebook, label: 'Facebook' },
    { href: '#', icon: FaLinkedin, label: 'LinkedIn' },
    { href: '#', icon: FaYoutube, label: 'YouTube' },
    { href: '#', icon: FaInstagram, label: 'Instagram' },
    { href: '#', icon: FaTwitter, label: 'X' },
  ];

  return (
    <section className="flex flex-col gap-6 sm:gap-8 w-full">
      <div className="w-full mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight sm:leading-snug">Request a demo or Contact Vocalcom</h2>
            <p className="text-muted text-sm sm:text-base">Any questions? Fill out the form below to contact us and learn more about our solutions or request a free, personalized demo.</p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm sm:text-base"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Company *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm sm:text-base"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="92754">Afghanistan</option>
                    <option value="93342">Tunisia</option>
                    <option value="93366">United Kingdom</option>
                    <option value="93369">United States</option>
                    <option value="93363">United Arab Emirates</option>
                    <option value="92952">France</option>
                    <option value="92970">Germany</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Function *</label>
                  <select
                    name="function"
                    value={formData.function}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm sm:text-base"
                    required
                  >
                    <option value="">Select Function</option>
                    <option value="92691">Other</option>
                    <option value="92694">Consultant</option>
                    <option value="92697">Customer Service Director</option>
                    <option value="92700">Executive Officer</option>
                    <option value="92709">IT Director</option>
                    <option value="92712">IT Manager</option>
                    <option value="92721">Marketing Manager</option>
                    <option value="92736">Sales Manager</option>
                    <option value="92739">Sales Officer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Number of seats to implement *</label>
                  <input
                    type="number"
                    name="seats"
                    value={formData.seats}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm sm:text-base mb-1 sm:mb-2">Comments</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm sm:text-base"
                  rows={3}
                />
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start">
                  <input type="checkbox" name="marketingNews" checked={formData.marketingNews} onChange={handleInputChange} className="mt-1 h-4 w-4 sm:h-5 sm:w-5 text-teal-600 rounded" />
                  <label className="ml-2 text-muted text-sm sm:text-base">I want to receive marketing news</label>
                </div>

                <div className="flex items-start">
                  <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} className="mt-1 h-4 w-4 sm:h-5 sm:w-5 text-teal-600 rounded" />
                  <label className="ml-2 text-muted text-sm sm:text-base">I want to receive Vocalcom's monthly newsletter</label>
                </div>
              </div>

              <div className="flex items-start">
                <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleInputChange} className="mt-1 h-4 w-4 sm:h-5 sm:w-5 text-teal-600 rounded" required />
                <label className="ml-2 text-muted text-xs sm:text-sm">
                  I accept terms and conditions outlined in{' '}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                    privacy policy
                  </a>
                  .
                </label>
              </div>

              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  disabled={true}
                  className={`w-full bg-accent text-white font-semibold py-3 sm:py-4 rounded-lg transition-colors text-sm sm:text-base md:text-lg
                    hover:bg-teal-600 hover:shadow-md
                  `}
                >
                  Request a demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <GradientBackgroundWithShapes height="h-auto" className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 w-full" shapeOpacity={0.15}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-white">Interested in our solutions?</p>

          <p className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
            <a href="#" className="text-white hover:underline transition-colors" title="+216 71 168 400">
              +216 71 168 400
            </a>
          </p>

          <div className="mt-4 sm:mt-6 mb-6 sm:mb-8 font-normal text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-snug">Get in touch for more information</div>

          <ul className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <li>
              <a
                href="#"
                title="Contact us"
                className="inline-block px-6 py-2 sm:px-7 sm:py-2.5 md:px-8 md:py-3 font-semibold bg-white hover:bg-[#00a0a4] text-[#00a0a4] hover:text-white rounded-full transition-colors text-sm sm:text-base"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="#"
                title="Request a demo"
                className="inline-block px-6 py-2 sm:px-7 sm:py-2.5 md:px-8 md:py-3 font-semibold bg-white hover:bg-[#00a0a4] text-[#00a0a4] hover:text-white rounded-full transition-colors text-sm sm:text-base"
              >
                Request a demo
              </a>
            </li>
          </ul>

          <div className="mt-8 sm:mt-10 md:mt-12">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6">
              {socialMediaLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <li key={index}>
                    <a href={social.href} className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full p-2 hover:scale-105 transition-all duration-300">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#00a0a4]" />
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </GradientBackgroundWithShapes>
    </section>
  );
}
