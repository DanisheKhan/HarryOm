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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/HarmeetImages/img18.JPG"
            alt="Insights"
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
            Insights
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto"
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
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Featured Insight
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <motion.img
                src={featuredInsight.image}
                alt={featuredInsight.title}
                className="w-full h-auto rounded-xl shadow-lg object-cover aspect-video"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-blue-600 font-medium">{featuredInsight.date}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-gray-500">{featuredInsight.readTime}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {featuredInsight.title}
              </h3>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {featuredInsight.excerpt}
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                {featuredInsight.content.substring(0, 300)}...
              </p>

              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors inline-flex items-center">
                <span>Read Full Insight</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Grid */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Latest Insights
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Explore thought-provoking perspectives on consciousness, wellbeing, relationships, and spiritual growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {otherInsights.map((insight, index) => (
              <motion.article
                key={insight.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-blue-600 font-medium">{insight.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-gray-500">{insight.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900">{insight.title}</h3>
                  <p className="text-gray-600 mb-6">{insight.excerpt}</p>

                  <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-colors">
                    <span>Read More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
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
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 mx-auto mb-6 text-blue-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
          </svg>

          <blockquote>
            <p className="text-2xl md:text-3xl font-serif text-gray-900 leading-relaxed mb-8">
              "True wisdom isn't about accumulating knowledge; it's about experiencing the truth of who you are beyond all thoughts and concepts. When you rest in that spacious awareness, insights naturally arise that serve not just you, but all of life."
            </p>
          </blockquote>

          <div className="flex items-center justify-center">
            <img
              src="/HarmeetImages/img1.jpg"
              alt="Harry Om"
              className="w-14 h-14 rounded-full object-cover mr-4"
            />
            <div className="text-left">
              <p className="font-bold text-gray-900">Harry Om</p>
              <p className="text-gray-600">Spiritual Guide & Philosopher</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Get Weekly Insights
                </h2>

                <p className="text-blue-100 mb-8 text-lg">
                  Join our community and receive thought-provoking insights, meditation guidance, and practical wisdom for your journey.
                </p>

                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-5 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white w-full"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white hover:bg-blue-50 text-blue-600 font-medium px-6 py-3 rounded-full transition-colors shadow-md whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>

                <p className="text-sm text-blue-100 mt-4 opacity-80">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src="/HarmeetImages/img19.JPG"
                  alt="Newsletter"
                  className="max-h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
