import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/HarmeetImages/img5.jpg"
            alt="Peaceful meditation background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-[Playfair_Display]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            "You are not broken. You are just becoming."
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Discover the path to inner peace and spiritual awakening with Harry Om's teachings
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/about"
              className="bg-white hover:bg-sky-100 text-gray-900 font-medium rounded-full py-3 px-8 transition-colors shadow-lg"
            >
              Begin Your Inner Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="/HarmeetImages/img2.jpg"
                alt="Harmeet Singh Chandhoke"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-6 text-gray-900">
                Meet Harry Om
              </h2>

              <p className="text-gray-700 mb-6 text-lg">
                Harmeet Singh Chandhoke, known as Harry Om, is a spiritual guide dedicated to helping
                the younger generation find peace in the digital age. His teachings combine ancient wisdom
                with modern understanding of mental wellbeing.
              </p>

              <p className="text-gray-700 mb-8 text-lg">
                Through his book "Living Right in the Digital Age" and his Gen Z focused spiritual coaching,
                Harry Om has helped thousands reconnect with their inner selves.
              </p>

              <Link
                to="/about"
                className="inline-block border-b-2 border-sky-400 text-gray-900 font-medium hover:border-sky-600 transition-colors"
              >
                Learn more about Harry Om →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Soul Guide Book Preview */}
      <section className="py-20 px-4 md:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
              Soul Guide Book
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Explore the teachings in "Living Right in the Digital Age"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-lavender-200 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Mind as a Supercomputer</h3>
              <p className="text-gray-700">
                Understand how your mind processes information and learn techniques to optimize its performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Sacred Love</h3>
              <p className="text-gray-700">
                Discover the deeper meaning of love beyond romantic attachments and learn to cultivate it in all relationships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Gen Z Spirituality</h3>
              <p className="text-gray-700">
                Bridging ancient spiritual wisdom with modern digital challenges faced by today's youth.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/soul-guide"
              className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-medium rounded-full py-3 px-8 transition-colors shadow-md"
            >
              Explore the Soul Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Practices Preview */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
              Daily Soul Practices
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Simple rituals to nurture your inner peace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-lavender-50 rounded-xl overflow-hidden shadow-md"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/HarmeetImages/img8.webp"
                alt="Digital Fasting"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Digital Fasting</h3>
                <p className="text-gray-700">
                  Take regular breaks from digital devices to reconnect with yourself and the physical world around you.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-sky-50 rounded-xl overflow-hidden shadow-md"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/HarmeetImages/img11.webp"
                alt="Sacred Mornings"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Sacred Mornings</h3>
                <p className="text-gray-700">
                  Create a peaceful morning routine to set a positive tone for the day ahead.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-yellow-50 rounded-xl overflow-hidden shadow-md"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/HarmeetImages/img14.webp"
                alt="Breathwork"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Breathwork</h3>
                <p className="text-gray-700">
                  Simple breathing techniques to calm your mind and energize your body.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/practices"
              className="inline-block border-b-2 border-sky-400 text-gray-900 font-medium hover:border-sky-600 transition-colors"
            >
              Explore all practices →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-sky-100 to-lavender-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-6 text-gray-900">
            Join Our Spiritual Community
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Subscribe to receive weekly insights, meditation guidance, and updates from Harry Om.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-300 border border-gray-300"
              required
            />
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-full py-3 px-6 transition-colors shadow-md whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
