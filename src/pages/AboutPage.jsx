import { motion } from 'framer-motion';

const AboutPage = () => {
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

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-purple-900/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/20">
              ✨ Spiritual Guide & Mentor
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-[Playfair_Display] leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            About Harry Om
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            The story of Harmeet Singh Chandhoke and his vision for spiritual guidance in the digital age
          </motion.p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-sky-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-16">
            <motion.div
              className="w-full md:w-1/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative mb-10">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-purple-400 rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src="/HarmeetImages/img3.jpg"
                  alt="Harmeet Singh Chandhoke Portrait"
                  className="relative w-full h-auto rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-sky-100">
                <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                  <span className="text-2xl">⚡</span> Quick Facts
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <span className="text-sky-600 mr-3 text-xl group-hover:scale-125 transition-transform">•</span>
                    <span className="text-gray-700">Spiritual Guide & Author</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-purple-600 mr-3 text-xl group-hover:scale-125 transition-transform">•</span>
                    <span className="text-gray-700">Music Producer (Meet Bros)</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-sky-600 mr-3 text-xl group-hover:scale-125 transition-transform">•</span>
                    <span className="text-gray-700">Gen Z Mental Wellbeing Advocate</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-purple-600 mr-3 text-xl group-hover:scale-125 transition-transform">•</span>
                    <span className="text-gray-700">Meditation & Breathwork Practitioner</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-sky-600 mr-3 text-xl group-hover:scale-125 transition-transform">•</span>
                    <span className="text-gray-700">Digital Wellness Expert</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-2/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                📖 His Journey
              </span>
              <h2 className="text-3xl md:text-5xl font-[Playfair_Display] font-bold mb-8 text-gray-900 leading-tight">
                The Journey of Harmeet Singh Chandhoke
              </h2>

              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Harmeet Singh Chandhoke, known professionally as Harry Om, is a renowned spiritual guide
                  whose journey began in the bustling music industry of Bollywood as part of the famous
                  duo "Meet Bros". After years of success in the entertainment world, Harmeet felt a calling
                  toward deeper spiritual work.
                </p>

                <p>
                  His transformation from music producer to spiritual mentor came after a profound period
                  of self-reflection and inner work. Recognizing the growing mental health challenges
                  facing Generation Z in our hyper-connected digital world, Harmeet dedicated himself to
                  creating a bridge between ancient spiritual wisdom and modern psychological understanding.
                </p>

                <p>
                  Through his book "Living Right in the Digital Age," Harry Om offers practical guidance
                  for young people navigating the complexities of modern life. His teachings emphasize the
                  importance of digital detox, mindful living, authentic connection, and developing a
                  personal spiritual practice that fits within contemporary lifestyles.
                </p>

                <p>
                  Harry Om combines his understanding of music, vibration, and energy with spiritual
                  principles to create a unique approach to wellbeing. His work has touched thousands of
                  young lives, offering hope and practical tools for finding peace and purpose in a
                  chaotic world.
                </p>

                <blockquote className="border-l-4 border-sky-400 pl-6 italic my-10 bg-gradient-to-r from-sky-50 to-purple-50 py-6 rounded-r-xl">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    "My vision is to help the younger generation rediscover their inner wisdom and peace
                    without disconnecting from the modern world. We can embrace technology while maintaining
                    our spiritual core."
                  </p>
                </blockquote>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Today, Harry Om divides his time between writing, speaking engagements, one-on-one
                  coaching, and creating spiritual content that resonates with younger audiences. His
                  approach is non-dogmatic, inclusive, and focused on practical spirituality for everyday life.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-lavender-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              🎯 Our Purpose
            </span>
            <h2 className="text-3xl md:text-5xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
              Vision & Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The guiding principles behind Harry Om's work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-sky-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Vision</h3>
              <p className="text-gray-700 mb-5 leading-relaxed text-lg">
                To create a world where young people can thrive spiritually while navigating the
                complexities of the digital age, finding balance between technological advancement
                and inner peace.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We envision a generation that uses technology mindfully, cultivates meaningful human
                connections, and develops a strong inner foundation based on timeless spiritual principles.
              </p>
            </motion.div>

            <motion.div
              className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Mission</h3>
              <p className="text-gray-700 mb-5 leading-relaxed text-lg">
                To provide practical spiritual guidance, tools, and resources specifically designed for
                Generation Z and young millennials who are seeking meaning, purpose, and emotional wellbeing
                in the digital era.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We accomplish this through accessible content, community building, and teaching practices
                that integrate seamlessly into modern lifestyles while honoring ancient wisdom.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              💎 Core Principles
            </span>
            <h2 className="text-3xl md:text-5xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
              Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to spiritual guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "➕",
                title: "Authenticity",
                description: "We believe in being true to oneself and expressing genuine emotions, thoughts, and beliefs.",
                gradient: "from-sky-400 to-cyan-500"
              },
              {
                icon: "⚡",
                title: "Balance",
                description: "Finding harmony between traditional wisdom and modern life, technology and nature, work and rest.",
                gradient: "from-amber-400 to-orange-500"
              },
              {
                icon: "🧘",
                title: "Mindfulness",
                description: "Cultivating present-moment awareness and intentionality in our actions and choices.",
                gradient: "from-emerald-400 to-teal-500"
              },
              {
                icon: "❤️",
                title: "Compassion",
                description: "Approaching ourselves and others with kindness, understanding, and empathy.",
                gradient: "from-rose-400 to-pink-500"
              },
              {
                icon: "🌱",
                title: "Growth",
                description: "Embracing continuous learning, evolution, and transformation throughout life's journey.",
                gradient: "from-purple-400 to-violet-500"
              },
              {
                icon: "🌍",
                title: "Inclusivity",
                description: "Welcoming people of all backgrounds, beliefs, and experiences on their spiritual journey.",
                gradient: "from-indigo-400 to-blue-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
