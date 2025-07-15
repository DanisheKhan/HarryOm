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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/HarmeetImages/img9.JPG"
            alt="Connect With Us"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Connect With Us
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto"
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
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>

              <p className="text-gray-700 mb-10">
                Whether you're seeking personal guidance, interested in a workshop, or exploring collaboration opportunities, we're here to connect with you on your journey.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700">info@harryom.com</p>
                    <p className="text-gray-500 text-sm mt-1">We aim to respond within 24 hours</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-700">+91 98765 43210</p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Fri, 10am-6pm IST</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Wellness Center</h3>
                    <p className="text-gray-700">Harry Om Center for Consciousness</p>
                    <p className="text-gray-700">Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6">
                  <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {/* Instagram */}
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-500 hover:to-pink-400 transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>

                    {/* Spotify */}
                    <a href="https://spotify.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-500 transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-all">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start">
                      <input
                        id="consent"
                        type="checkbox"
                        className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                        required
                      />
                      <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                        I agree to receive email communications and can unsubscribe at any time.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-md whitespace-nowrap"
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

      {/* Workshops & Sessions */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Workshops & Sessions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience transformation through our in-person and virtual events, designed to guide you towards greater clarity and spiritual connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Workshop 1 */}
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src="/HarmeetImages/img19.JPG"
                  alt="Inner Alchemy Workshop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold uppercase py-1 px-3 rounded-bl-lg">
                  Virtual
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Inner Alchemy Workshop</h3>
                <p className="text-gray-500 mb-4">July 18-19, 2023 • 10:00 AM - 1:00 PM IST</p>
                <p className="text-gray-600 mb-6">A two-day intensive on transforming emotional patterns and awakening your highest potential.</p>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-blue-600">₹2,500</span>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Workshop 2 */}
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src="/HarmeetImages/img6.JPG"
                  alt="Sacred Relationships Retreat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold uppercase py-1 px-3 rounded-bl-lg">
                  In Person
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Sacred Relationships Retreat</h3>
                <p className="text-gray-500 mb-4">August 5-7, 2023 • Goa, India</p>
                <p className="text-gray-600 mb-6">A weekend immersion into the art of conscious relationships and authentic connection.</p>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-blue-600">₹15,000</span>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Workshop 3 */}
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src="/HarmeetImages/img11.JPG"
                  alt="Soul Purpose Discovery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold uppercase py-1 px-3 rounded-bl-lg">
                  Hybrid
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Soul Purpose Discovery</h3>
                <p className="text-gray-500 mb-4">September 12, 2023 • 3:00 PM - 6:00 PM IST</p>
                <p className="text-gray-600 mb-6">Uncover your unique gifts and align with your soul's mission in this transformative session.</p>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-blue-600">₹3,500</span>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              <span>View All Upcoming Events</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps / Location */}
      <section className="relative h-96">
        <div className="absolute inset-0 bg-gray-200">
          {/* Replace with actual Google Maps iframe */}
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <p className="text-gray-600 text-center p-4">
              Google Maps Embed would go here.<br />
              For implementation, add Google Maps API and iframe.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our services, sessions, and philosophy.
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What can I expect from a personal session with Harry Om?
              </h3>
              <p className="text-gray-700">
                Each session with Harry Om is uniquely tailored to your needs and may include spiritual guidance, energy work, meditation techniques, and practical tools for integration. Sessions typically last 60-90 minutes and can be conducted in person or online. You'll leave with greater clarity, specific practices, and a deeper connection to your authentic self.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do I need previous meditation experience for your workshops?
              </h3>
              <p className="text-gray-700">
                No previous experience is required. Our workshops accommodate all levels, from complete beginners to experienced practitioners. We provide clear instructions and supportive guidance throughout the process. Each participant's journey is honored exactly where they are.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How can I book Harry Om for speaking engagements?
              </h3>
              <p className="text-gray-700">
                For speaking engagements, corporate workshops, or media appearances, please use our contact form with details about your event, including the date, location, audience, and theme. Our team will respond within 48 hours with availability and requirements.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Are scholarships available for your programs?
              </h3>
              <p className="text-gray-700">
                Yes, we believe in making spiritual guidance accessible. We offer a limited number of scholarships for each program based on financial need. Please contact us at least one month before the program start date to apply, explaining your circumstances and how the program would benefit your growth.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-700 mb-4">
              Still have questions? We're here to help.
            </p>
            <a href="#contact-form" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors">
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectPage;
