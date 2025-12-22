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
        staggerChildren: 0.1
      }
    }
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-sky-50 via-white to-lavender-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/HarmeetImages/img5.jpg"
            alt="Spiritual wisdom background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 to-purple-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4 font-[Playfair_Display]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Wisdom & Quotes
          </motion.h1>
          
          <motion.p
            className="text-xl text-white/90 max-w-2xl mx-auto"
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
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-sky-600">{quotes.length}</p>
              <p className="text-gray-600 text-sm md:text-base mt-1">Quotes</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-purple-600">∞</p>
              <p className="text-gray-600 text-sm md:text-base mt-1">Wisdom</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-sky-600">1</p>
              <p className="text-gray-600 text-sm md:text-base mt-1">Truth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                variants={quoteVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
                  hoveredIndex === index ? 'scale-[1.02]' : ''
                }`}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-purple-400 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-2xl"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 md:p-10">
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-medium">
                      {quote.category}
                    </span>
                    <div className="w-10 h-10 bg-gradient-to-br from-sky-100 to-purple-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-sky-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* Quote text */}
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-[Lora]">
                    "{quote.text}"
                  </p>

                  {/* Bottom decoration */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-0.5 w-12 bg-gradient-to-r from-sky-400 to-purple-400"></div>
                    <span className="text-xs text-gray-400 font-medium">HARRY OM</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-sky-600 via-sky-500 to-purple-600 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[Playfair_Display]">
              Let Wisdom Guide Your Path
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Explore more insights, practices, and teachings for your spiritual growth
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/practices"
                className="bg-white hover:bg-gray-100 text-sky-700 font-medium rounded-full py-3 px-8 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Practices
              </a>
              <a
                href="/wisdom"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 font-medium rounded-full py-3 px-8 transition-all duration-300"
              >
                Wisdom Drops
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuotesPage;
