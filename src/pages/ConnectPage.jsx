import React from 'react';
import { motion } from 'framer-motion';

const ConnectPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission with your backend
    console.log('Form submitted');
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[58svh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/5"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 border border-gray-200 rounded-full text-gray-700 mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-sm tracking-wide">Let's Connect</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-8 font-serif leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Connect With Us
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Reach out to Harry Om for guidance, sessions, or partnership opportunities
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>

              <p className="text-gray-700 text-lg mb-12 leading-relaxed">
                Whether you're seeking personal guidance, interested in a workshop, or exploring collaboration opportunities, we're here to connect with you on your journey.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mr-5 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                    <p className="text-sky-600 font-semibold">info@harryom.com</p>
                    <p className="text-gray-500 text-sm mt-1">We aim to respond within 24 hours</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mr-5 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone</h3>
                    <p className="text-emerald-600 font-semibold">+91 98765 43210</p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Fri, 10am-6pm IST</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mr-5 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Wellness Center</h3>
                    <p className="text-gray-700 font-medium">Harry Om Center for Consciousness</p>
                    <p className="text-gray-600">Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-8">
                  <h3 className="font-bold text-gray-900 mb-5 text-lg">Follow Us</h3>
                  <div className="flex space-x-4">
                    {/* Instagram */}
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>

                    {/* Spotify */}
                    <a href="https://spotify.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-10 md:p-12 rounded-3xl shadow-lg border border-gray-100">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all bg-white"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all bg-white"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all bg-white"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Message *</label>
                    <textarea
                      id="message"
                      rows="6"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all bg-white resize-none"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-start">
                      <input
                        id="consent"
                        type="checkbox"
                        className="h-5 w-5 text-sky-600 border-gray-300 rounded focus:ring-sky-500 mt-0.5"
                        required
                      />
                      <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                        I agree to receive email communications and can unsubscribe at any time.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto bg-sky-600 hover:bg-sky-700 text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 transform whitespace-nowrap"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              ❓ FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services, sessions, and philosophy.
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-sky-600 text-2xl flex-shrink-0">Q.</span>
                <span>What can I expect from a personal session with Harry Om?</span>
              </h3>
              <p className="text-gray-700 leading-relaxed pl-0 sm:pl-8">
                Each session with Harry Om is uniquely tailored to your needs and may include spiritual guidance, energy work, meditation techniques, and practical tools for integration. Sessions typically last 60-90 minutes and can be conducted in person or online. You'll leave with greater clarity, specific practices, and a deeper connection to your authentic self.
              </p>
            </motion.div>

            {/* FAQ Item 2 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-purple-600 text-2xl flex-shrink-0">Q.</span>
                <span>Do I need previous meditation experience for your workshops?</span>
              </h3>
              <p className="text-gray-700 leading-relaxed pl-0 sm:pl-8">
                No previous experience is required. Our workshops accommodate all levels, from complete beginners to experienced practitioners. We provide clear instructions and supportive guidance throughout the process. Each participant's journey is honored exactly where they are.
              </p>
            </motion.div>

            {/* FAQ Item 3 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-emerald-600 text-2xl flex-shrink-0">Q.</span>
                <span>How can I book Harry Om for speaking engagements?</span>
              </h3>
              <p className="text-gray-700 leading-relaxed pl-0 sm:pl-8">
                For speaking engagements, corporate workshops, or media appearances, please use our contact form with details about your event, including the date, location, audience, and theme. Our team will respond within 48 hours with availability and requirements.
              </p>
            </motion.div>

            {/* FAQ Item 4 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-amber-600 text-2xl flex-shrink-0">Q.</span>
                <span>Are scholarships available for your programs?</span>
              </h3>
              <p className="text-gray-700 leading-relaxed pl-0 sm:pl-8">
                Yes, we believe in making spiritual guidance accessible. We offer a limited number of scholarships for each program based on financial need. Please contact us at least one month before the program start date to apply, explaining your circumstances and how the program would benefit your growth.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6 text-lg">
              Still have questions? We're here to help.
            </p>
            <a href="#contact-form" className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 transform">
              <span>Contact Us</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectPage;
