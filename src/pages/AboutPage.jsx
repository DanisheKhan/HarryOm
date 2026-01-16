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
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/5"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold border border-gray-200 whitespace-nowrap">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Spiritual Guide & Mentor
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-[Playfair_Display] leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            About Harry Om
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
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
                <img
                  src="/HarmeetImages/img3.jpg"
                  alt="Harmeet Singh Chandhoke Portrait"
                  className="relative w-full h-auto rounded-2xl hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div className="bg-sky-50 rounded-2xl p-8 shadow-sm border border-sky-100">
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
                <svg className="w-4 h-4 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>His Journey
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
      <section className="py-24 px-4 md:px-8 bg-white">
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
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>Our Purpose
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
              <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              <svg className="w-4 h-4 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>Core Principles
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
                icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>,
                title: "Authenticity",
                description: "We believe in being true to oneself and expressing genuine emotions, thoughts, and beliefs.",
                gradient: "from-sky-400 to-cyan-500"
              },
              {
                icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>,
                title: "Balance",
                description: "Finding harmony between traditional wisdom and modern life, technology and nature, work and rest.",
                gradient: "from-amber-400 to-orange-500"
              },
              {
                icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>,
                title: "Mindfulness",
                description: "Cultivating present-moment awareness and intentionality in our actions and choices.",
                gradient: "from-emerald-400 to-teal-500"
              },
              {
                icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>,
                title: "Compassion",
                description: "Approaching ourselves and others with kindness, understanding, and empathy.",
                gradient: "from-rose-400 to-pink-500"
              },
              {
                icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>,
                title: "Growth",
                description: "Embracing continuous learning, evolution, and transformation throughout life's journey.",
                gradient: "from-purple-400 to-violet-500"
              },
              {
                icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" /></svg>,
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
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300">
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
