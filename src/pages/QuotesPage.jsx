import { motion } from 'framer-motion';
import { useState } from 'react';

const QuotesPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const quotes = [
    {
      text: "Through the prism of your thought, the whole world looks like a problem. Seen through the teardrops of your love and ecstasy, the whole world is a blessing.",
      category: "Perspective"
    },
    {
      text: "If you can see every being as divine, the Earth is heaven.",
      category: "Divinity"
    },
    {
      text: "You do not need to know how to meditate. With absolute involvement, everything is Meditation.",
      category: "Meditation"
    },
    {
      text: "Conceptual knowledge is the way of the academic. Perceptual knowing is the way of the Yogi.",
      category: "Knowledge"
    },
    {
      text: "If you become an absolute Yes to life, you become intense. In that intensity, you are at your full potential.",
      category: "Life"
    },
    {
      text: "A genuine Seeker will always find their Guru.",
      category: "Seeking"
    },
    {
      text: "If you create emotional friction, you become hate. If you create emotional Grace, you become Love.",
      category: "Love"
    },
    {
      text: "With intellect, you learn how to make a living. With Devotion, you know how to make a Life out of yourself.",
      category: "Devotion"
    },
    {
      text: "Meditation is not an act – it is like a Flower blossoming, emanating fragrance.",
      category: "Meditation"
    },
    {
      text: "Once your thoughts and emotions become Conscious, you can craft a Spectacular Life.",
      category: "Consciousness"
    },
    {
      text: "Both Suffering and Joy are manufactured in your Mind.",
      category: "Mind"
    },
    {
      text: "Yoga means obliterating the boundaries of your individuality to Experience Oneness with the universe.",
      category: "Yoga"
    },
    {
      text: "You do not have any duty towards anyone or anything. If you have Love and Care, you will do what is needed.",
      category: "Love"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const categoryColors = {
    Perspective: "from-sky-400 to-cyan-500",
    Divinity: "from-purple-400 to-pink-500",
    Meditation: "from-indigo-400 to-purple-500",
    Knowledge: "from-amber-400 to-orange-500",
    Life: "from-emerald-400 to-teal-500",
    Seeking: "from-rose-400 to-pink-500",
    Love: "from-pink-400 to-rose-500",
    Devotion: "from-violet-400 to-purple-500",
    Consciousness: "from-blue-400 to-indigo-500",
    Mind: "from-cyan-400 to-sky-500",
    Yoga: "from-teal-400 to-emerald-500"
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden bg-gray-50">
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
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Timeless Wisdom
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-[Playfair_Display]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Wisdom Quotes
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Timeless insights to illuminate your spiritual journey
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-4 bg-gradient-to-b from-white via-sky-50/30 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative mb-2 flex justify-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <p className="relative text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 bg-clip-text text-transparent mb-1 text-center">
                  {quotes.length}
                </p>
                <p className="relative text-gray-700 text-sm font-semibold text-center">Quotes</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative mb-2 flex justify-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p className="relative text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 text-center">
                  ∞
                </p>
                <p className="relative text-gray-700 text-sm font-semibold text-center">Wisdom</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative mb-2 flex justify-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <p className="relative text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-1 text-center">
                  1
                </p>
                <p className="relative text-gray-700 text-sm font-semibold text-center">Truth</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          >
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                variants={quoteVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group ${hoveredIndex === index ? 'scale-[1.03] -translate-y-2' : ''
                  }`}
              >
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${categoryColors[quote.category] || "from-sky-400 to-purple-500"} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} style={{ padding: '3px' }}>
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 md:p-10">
                  {/* Category badge */}
                  <div className="mb-7">
                    <span className={`inline-block px-5 py-2 bg-gradient-to-r ${categoryColors[quote.category] || "from-sky-100 to-purple-100"} bg-opacity-20 rounded-full text-sm font-semibold shadow-sm`}>
                      <span className="text-white">
                        {quote.category}
                      </span>
                    </span>
                  </div>

                  {/* Quote icon */}
                  <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <svg className="w-16 h-16 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote text */}
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-[Lora] mb-8 relative z-10">
                    {quote.text}
                  </p>

                  {/* Bottom decoration */}
                  <div className="flex items-center gap-3">
                    <div className={`h-1 w-16 bg-gradient-to-r ${categoryColors[quote.category] || "from-sky-400 to-purple-400"} rounded-full`}></div>
                    <span className="text-xs text-gray-500 font-bold tracking-wider">HARRY OM</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-br from-sky-500 via-sky-600 to-purple-600 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-400/15 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[Playfair_Display]">
              Let Wisdom Guide Your Path
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore more insights, practices, and teachings for your spiritual growth
            </p>

            <div className="flex flex-wrap gap-5 justify-center">
              <a
                href="/practices"
                className="bg-white hover:bg-gray-100 text-sky-700 font-bold rounded-full py-4 px-9 transition-all duration-300 shadow-2xl hover:shadow-xl hover:scale-105 transform"
              >
                Explore Practices
              </a>
              <a
                href="/insights"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-full py-4 px-9 transition-all duration-300 border-2 border-white/40 hover:border-white/60 hover:scale-105 transform"
              >
                Read Insights
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuotesPage;
