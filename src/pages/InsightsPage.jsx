import React from 'react';
import { motion } from 'framer-motion';


// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Sample insights data
const insightsData = [
  {
    id: 1,
    title: "The Illusion of Separation",
    excerpt: "We are not separate from the universe but are the universe experiencing itself through our unique perspective.",
    content: "One of the most profound insights from ancient wisdom traditions is that the sense of being separate from the world is an illusion. Modern science is now confirming what mystics have taught for millennia: everything is interconnected in a vast web of relationships. The atoms in your body were forged in stars billions of years ago. The energy flowing through you is the same energy that powers the cosmos. When we realize this truth experientially, not just intellectually, our entire orientation to life transforms. We begin to see that our actions affect the whole and that the whole affects us. This understanding naturally gives rise to compassion, reverence for life, and a deep sense of belonging.",
    image: "/HarmeetImages/img16.JPG",
    date: "June 15, 2023",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Technology and Inner Peace",
    excerpt: "Finding balance in the digital age requires intentional practices that ground us in present awareness.",
    content: "As our world becomes increasingly digital and our attention more fragmented, the ancient wisdom practices of mindfulness and presence become even more vital. Technology itself is neutral—it's how we relate to it that determines whether it enhances our lives or diminishes our wellbeing. Creating boundaries with technology, such as designated tech-free times and spaces, helps us maintain our sovereignty over our attention. Regular digital detoxes allow our nervous systems to reset and our minds to experience the natural state of calm alertness. The key isn't rejecting technology but developing a conscious relationship with it that serves our deeper values and aspirations for connection, growth, and meaning.",
    image: "/HarmeetImages/img13.JPG",
    date: "July 3, 2023",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Beyond Success: Finding True Fulfillment",
    excerpt: "Real success isn't measured by external achievements but by internal alignment with your authentic self.",
    content: "Our culture often defines success in terms of achievement, acquisition, and recognition. But many who reach these external markers of success still feel empty and unfulfilled. True fulfillment comes not from checking boxes on a cultural scorecard but from living in alignment with your deepest values and authentic nature. When your outer life reflects your inner truth—when what you do flows naturally from who you are—you experience a sense of rightness and peace that no external validation can provide. This doesn't mean abandoning ambition or goals; rather, it means ensuring that your ambitions emerge from your authentic self rather than from social conditioning or the need to prove your worth.",
    image: "/HarmeetImages/img8.JPG",
    date: "August 17, 2023",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "The Power of Sacred Relationship",
    excerpt: "Relationships are mirrors and portals to our highest evolution when approached with consciousness.",
    content: "Relationships offer us one of the most potent vehicles for spiritual growth and self-awareness. When we approach our relationships—whether romantic, familial, or friendly—as sacred containers for evolution, everything changes. The people closest to us inevitably trigger our unhealed wounds and unintegrated shadows, not because they're trying to hurt us, but because they're helping us see what needs healing. Every trigger becomes an invitation to look within. Every conflict becomes an opportunity to practice presence, compassion, and clear communication. By viewing relationships through this lens, we transform them from sources of struggle into portals for profound healing and awakening.",
    image: "/HarmeetImages/img10.JPG",
    date: "September 5, 2023",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Reclaiming Ancestral Wisdom",
    excerpt: "Ancient wisdom traditions offer timeless guidance for navigating our complex modern world.",
    content: "In our rush toward technological advancement and innovation, we've often disregarded the profound wisdom accumulated by our ancestors over thousands of years. Indigenous cultures, ancient spiritual traditions, and time-tested healing modalities contain insights about sustainable living, community building, and psychological wellbeing that remain deeply relevant today. The most forward-thinking approach may paradoxically involve looking backward—recovering these wisdom streams and integrating them with our scientific understanding and technological capabilities. This integration of ancient wisdom and modern knowledge offers a more complete map for addressing both personal and collective challenges in ways that honor the interconnected web of life.",
    image: "/HarmeetImages/img14.JPG",
    date: "October 12, 2023",
    readTime: "9 min read"
  }
];

// Featured insight (first item)
const featuredInsight = insightsData[0];

// Other insights
const otherInsights = insightsData.slice(1);

const InsightsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-50">
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
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              Spiritual Insights
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-serif leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Insights
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Wisdom for the modern seeker, exploring consciousness, relationships, and purposeful living
          </motion.p>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-sky-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              ⭐ Featured
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Featured Insight
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 bg-white rounded-3xl overflow-hidden border border-gray-100">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-full min-h-[400px]">
                <img
                  src={featuredInsight.image}
                  alt={featuredInsight.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 p-8 md:p-12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sky-600 font-semibold">{featuredInsight.date}</span>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                <span className="text-gray-500 font-medium">{featuredInsight.readTime}</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {featuredInsight.title}
              </h3>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                {featuredInsight.excerpt}
              </p>

              <p className="text-gray-700 mb-10 leading-relaxed">
                {featuredInsight.content.substring(0, 300)}...
              </p>

              <button className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-full py-4 px-8 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                <span>Read Full Insight</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Insights Grid */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-sky-50/30 via-white to-lavender-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-4 flex items-center gap-2 w-fit">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Latest Articles
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Explore thought-provoking perspectives on consciousness, wellbeing, relationships, and spiritual growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {otherInsights.map((insight, index) => (
              <motion.article
                key={insight.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-sky-600 font-semibold">{insight.date}</span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    <span className="text-gray-500 font-medium">{insight.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-sky-600 transition-colors">{insight.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{insight.excerpt}</p>

                  <button className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors group">
                    <span>Read More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-sky-100 via-purple-50 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-8">
              <svg className="w-10 h-10 text-sky-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>

            <blockquote>
              <p className="text-2xl md:text-3xl font-serif text-gray-900 leading-relaxed mb-10">
                "True wisdom isn't about accumulating knowledge; it's about experiencing the truth of who you are beyond all thoughts and concepts. When you rest in that spacious awareness, insights naturally arise that serve not just you, but all of life."
              </p>
            </blockquote>

            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full blur"></div>
                <img
                  src="/HarmeetImages/img1.jpg"
                  alt="Harry Om"
                  className="relative w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div className="ml-4 text-left">
                <p className="font-bold text-gray-900 text-lg">Harry Om</p>
                <p className="text-gray-600">Spiritual Guide & Philosopher</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-sky-500 via-sky-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/30 rounded-full blur-3xl"></div>

            <div className="flex flex-col md:flex-row items-center relative z-10">
              <div className="w-full md:w-1/2 p-10 md:p-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 border border-white/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                  </svg>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Get Weekly Insights
                </h2>

                <p className="text-lg text-white/95 mb-10 leading-relaxed">
                  Join our community and receive thought-provoking insights, meditation guidance, and practical wisdom for your journey.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 mb-6">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-6 py-4 rounded-full bg-white/95 border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white hover:bg-gray-100 text-sky-600 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>

                <p className="text-sm text-white/80 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  No spam, ever. Unsubscribe anytime.
                </p>
              </div>

              <div className="w-full md:w-1/2 flex justify-center p-10">
                <div className="relative">
                  <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl"></div>
                  <img
                    src="/HarmeetImages/img19.JPG"
                    alt="Newsletter"
                    className="relative max-h-96 object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
