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

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-purple-900/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            className="mb-6"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
          >
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
              ✨ Welcome to Your Spiritual Journey
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-[Playfair_Display] leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            "You are not broken.<br />You are just becoming."
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Discover the path to inner peace and spiritual awakening with Harry Om's teachings
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/about"
              className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold rounded-full py-4 px-8 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Begin Your Inner Journey
            </Link>
            <Link
              to="/practices"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full py-4 px-8 transition-all duration-300 border-2 border-white/30 hover:border-white/50 hover:scale-105 transform"
            >
              Explore Practices
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section Preview */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-sky-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-purple-400 rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src="/HarmeetImages/img19.JPG"
                  alt="Harmeet Singh Chandhoke"
                  className="relative w-full h-auto rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-6">
                Your Spiritual Guide
              </span>

              <h2 className="text-3xl md:text-5xl font-[Playfair_Display] font-bold mb-6 text-gray-900 leading-tight">
                Meet Harry Om
              </h2>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Harmeet Singh Chandhoke, known as Harry Om, is a spiritual guide dedicated to helping
                the younger generation find peace in the digital age. His teachings combine ancient wisdom
                with modern understanding of mental wellbeing.
              </p>

              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Through his book "Living Right in the Digital Age" and his Gen Z focused spiritual coaching,
                Harry Om has helped thousands reconnect with their inner selves.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors group"
              >
                Learn more about Harry Om
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soul Guide Book Preview */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-sky-50 via-white to-lavender-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              📖 Featured Book
            </span>
            <h2 className="text-3xl md:text-5xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
              Soul Guide Book
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the teachings in "Living Right in the Digital Age"
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                title: "Mind as a Supercomputer",
                description: "Understand how your mind processes information and learn techniques to optimize its performance.",
                color: "from-purple-400 to-purple-600"
              },
              {
                icon: "❤️",
                title: "Sacred Love",
                description: "Discover the deeper meaning of love beyond romantic attachments and learn to cultivate it in all relationships.",
                color: "from-sky-400 to-sky-600"
              },
              {
                icon: "📱",
                title: "Gen Z Spirituality",
                description: "Bridging ancient spiritual wisdom with modern digital challenges faced by today's youth.",
                color: "from-yellow-400 to-orange-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link
              to="/soul-guide"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-600 hover:to-purple-600 text-white font-semibold rounded-full py-4 px-8 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
            >
              Explore the Soul Guide
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Practices Preview */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-4">
              🧘 Daily Practices
            </span>
            <h2 className="text-3xl md:text-5xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
              Daily Soul Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple rituals to nurture your inner peace
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/HarmeetImages/img8.JPG",
                title: "Digital Fasting",
                description: "Take regular breaks from digital devices to reconnect with yourself and the physical world around you.",
                gradient: "from-lavender-400 to-purple-500"
              },
              {
                image: "/HarmeetImages/img11.JPG",
                title: "Sacred Mornings",
                description: "Create a peaceful morning routine to set a positive tone for the day ahead.",
                gradient: "from-sky-400 to-cyan-500"
              },
              {
                image: "/HarmeetImages/img14.JPG",
                title: "Breathwork",
                description: "Simple breathing techniques to calm your mind and energize your body.",
                gradient: "from-amber-400 to-orange-500"
              }
            ].map((practice, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${practice.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-sky-600 transition-colors">
                    {practice.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link
              to="/practices"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold text-lg hover:text-sky-700 transition-colors group"
            >
              Explore all practices
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-sky-500 via-sky-600 to-purple-600 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/30 rounded-full blur-3xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-5xl font-[Playfair_Display] font-bold mb-6 text-white">
              Join Our Spiritual Community
            </h2>

            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
              Subscribe to receive weekly insights, meditation guidance, and updates from Harry Om.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30 border-0 text-gray-900 placeholder-gray-500 shadow-lg"
                required
              />
              <button
                type="submit"
                className="bg-white hover:bg-gray-100 text-sky-600 font-bold rounded-full py-4 px-8 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm text-white/80">
              🔒 We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
