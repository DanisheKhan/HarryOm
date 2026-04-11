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
      <section className="relative min-h-[88svh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/HarmeetImages/img6.jpg"
            alt="Peaceful meditation background"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center scale-100"
            style={{ objectPosition: 'center 5%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-6xl mx-auto py-16 md:py-20 mt-2 md:mt-6">
          <motion.div
            className="mb-10 md:mb-12"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
          >
            <span className="text-white/75 text-[10px] md:text-xs tracking-[0.35em] uppercase font-light">
              Welcome to Your Spiritual Journey
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-light text-white mb-8 md:mb-12 font-[Playfair_Display] leading-[1.15] tracking-tight px-2 sm:px-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            You are not broken.
            <br />
            <span className="italic font-normal mt-2 inline-block">You are just becoming.</span>
          </motion.h1>

          <motion.div
            className="w-20 h-[1px] bg-white/50 mx-auto mb-10 md:mb-12"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          ></motion.div>

          <motion.p
            className="text-sm md:text-base lg:text-lg text-white/80 mb-12 md:mb-20 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Discover the path to inner peace and spiritual awakening
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/about"
              className="group relative px-12 py-4 text-white font-light text-xs md:text-sm tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 hover:tracking-[0.2em]"
            >
              <span className="relative z-10">Begin Your Journey</span>
              <div className="absolute inset-0 border border-white/50 group-hover:border-white/70 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500"></div>
            </Link>
            <Link
              to="/soul-guide"
              className="text-white/65 hover:text-white/95 font-light text-xs md:text-sm tracking-[0.15em] uppercase transition-all duration-300 underline underline-offset-8 decoration-white/40 hover:decoration-white/70"
            >
              Explore the Book
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
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
                <img
                  src="/HarmeetImages/img19.JPG"
                  alt="Harmeet Singh Chandhoke"
                  loading="lazy"
                  decoding="async"
                  className="relative w-full h-auto rounded-2xl hover:scale-[1.02] transition-transform duration-500"
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
                Meet Harryy Om
              </h2>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Harmeet Singh Chandhoke, known as Harryy Om, is a spiritual guide dedicated to helping
                the younger generation find peace in the digital age. His teachings combine ancient wisdom
                with modern understanding of mental wellbeing.
              </p>

              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Through his book "Living Right in the Digital Age" and his Gen Z focused spiritual coaching,
                Harryy Om has helped thousands reconnect with their inner selves.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors group"
              >
                Learn more about Harryy Om
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soul Guide Book Preview */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>Featured Book
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
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" /></svg>,
                title: "Mind as a Supercomputer",
                description: "Understand how your mind processes information and learn techniques to optimize its performance.",
                color: "from-purple-400 to-purple-500",
                bgColor: "bg-purple-50",
                iconBg: "bg-purple-100"
              },
              {
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>,
                title: "Sacred Love",
                description: "Discover the deeper meaning of love beyond romantic attachments and learn to cultivate it in all relationships.",
                color: "from-sky-400 to-blue-400",
                bgColor: "bg-sky-50",
                iconBg: "bg-sky-100"
              },
              {
                icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>,
                title: "Gen Z Spirituality",
                description: "Bridging ancient spiritual wisdom with modern digital challenges faced by today's youth.",
                color: "from-orange-400 to-orange-500",
                bgColor: "bg-orange-50",
                iconBg: "bg-orange-100"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`group ${item.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
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
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full py-4 px-8 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
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
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>Daily Practices
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
                gradient: "from-sky-400 to-cyan-500",
                objectPosition: "center 18%"
              },
              {
                image: "/HarmeetImages/img14.JPG",
                title: "Breathwork",
                description: "Simple breathing techniques to calm your mind and energize your body.",
                gradient: "from-amber-400 to-orange-500",
                objectPosition: "center 22%"
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
                    loading="lazy"
                    decoding="async"
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: practice.objectPosition || "center" }}
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
              to="/connect"
              className="inline-flex items-center gap-2 text-sky-600 font-semibold text-lg hover:text-sky-700 transition-colors group"
            >
              Start your practice with Harryy Om
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-sky-500 via-sky-600 to-purple-600 relative overflow-hidden">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-5xl font-[Playfair_Display] font-bold mb-6 text-white">
              Join Our Spiritual Community
            </h2>

            <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
              Subscribe to receive weekly insights, meditation guidance, and updates from Harryy Om.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30 border-0 text-gray-900 placeholder-white/70 shadow-lg"
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
              <svg className="w-3 h-3 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
