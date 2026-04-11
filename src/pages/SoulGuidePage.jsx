import { useState } from 'react';
import { motion } from 'framer-motion';

const SoulGuidePage = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      title: "Mind as a Supercomputer",
      image: "/HarmeetImages/img12.JPG",
      description: "In this chapter, Harmeet explores the powerful capabilities of the human mind and how to program it for peace and clarity instead of chaos. Learn techniques to manage your thoughts, reduce mental noise, and optimize your mind's natural abilities.",
      keyPoints: [
        "Understanding the mind's operating system",
        "Techniques to clear mental clutter",
        "Creating healthy thought patterns",
        "Integrating mindfulness into digital life"
      ]
    },
    {
      title: "Gen Z Spirituality",
      image: "/HarmeetImages/img13.JPG",
      description: "This chapter bridges ancient spiritual wisdom with the unique challenges facing the younger generation. Discover how to maintain spiritual grounding while navigating social media, information overload, and rapidly changing technology.",
      keyPoints: [
        "Adapting timeless wisdom for modern challenges",
        "Building a personal spiritual practice",
        "Finding community in a fragmented world",
        "Creating meaningful digital experiences"
      ]
    },
    {
      title: "Sacred Love",
      image: "/HarmeetImages/img6.jpg",
      description: "Explore the true meaning of love beyond romantic relationships. Learn how to cultivate self-love, create authentic connections with others, and extend compassion to all beings through daily practices and mindset shifts.",
      keyPoints: [
        "The foundation of self-acceptance",
        "Healing relationship patterns",
        "Communication as a spiritual practice",
        "Expanding your capacity to love"
      ]
    },
    {
      title: "Digital Detox Protocol",
      image: "/HarmeetImages/img9.JPG",
      description: "Learn practical strategies to maintain a healthy relationship with technology. This chapter offers step-by-step guidance for creating boundaries with digital devices without completely disconnecting from the modern world.",
      keyPoints: [
        "Creating a personalized digital wellness plan",
        "Screen-free rituals and practices",
        "Mindful consumption of digital content",
        "Using technology as a spiritual tool"
      ]
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

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[62svh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/5"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 border border-gray-200 rounded-full text-gray-700 mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            <span className="font-semibold text-sm tracking-wide">Soul Guide</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-8 font-[Playfair_Display] leading-tight"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Soul Guide Book
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            "Living Right in the Digital Age" - A modern spiritual guide for Gen Z by Harmeet Singh Chandhoke
          </motion.p>
        </div>
      </section>

      {/* Book Overview */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-sky-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              className="w-full md:w-2/5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="/HarmeetImages/img8.JPG"
                  alt="Soul Guide Book"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="relative w-full h-auto rounded-3xl hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-3/5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-6 flex items-center gap-2 w-fit">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                The Book
              </span>

              <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold mb-8 text-gray-900 leading-tight">
                About the Book
              </h2>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "Living Right in the Digital Age" is a comprehensive soul guide for the modern generation
                navigating the complexities of a digital world while seeking deeper meaning and connection.
              </p>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Written with Gen Z and young millennials in mind, this book offers practical spiritual
                wisdom that bridges ancient traditions with contemporary challenges. It addresses the
                unique mental, emotional, and spiritual obstacles faced by young people today.
              </p>

              <p className="text-gray-700 mb-10 text-lg leading-relaxed">
                Through personal stories, research, meditation practices, and actionable advice,
                Harmeet Singh Chandhoke provides a roadmap for finding peace, purpose, and authentic
                connection in an age of digital distraction and information overload.
              </p>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter Slider */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4 flex items-center gap-2 w-fit mx-auto">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Inside the Book
            </span>
            <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold mb-6 text-gray-900">
              Explore the Chapters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A preview of the wisdom contained within "Living Right in the Digital Age"
            </p>
          </div>

          {/* Chapter Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {chapters.map((chapter, index) => (
              <button
                key={index}
                onClick={() => setActiveChapter(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-semibold ${activeChapter === index
                  ? "bg-sky-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
                  }`}
              >
                {chapter.title}
              </button>
            ))}
          </div>

          {/* Active Chapter Content */}
          <motion.div
            key={activeChapter}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="w-full md:w-2/5 relative overflow-hidden">
                <img
                  src={chapters[activeChapter].image}
                  alt={chapters[activeChapter].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center min-h-[280px] sm:min-h-[360px] md:min-h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent font-[Playfair_Display]">
                  {chapters[activeChapter].title}
                </h3>

                <p className="text-gray-700 mb-10 text-lg leading-relaxed">
                  {chapters[activeChapter].description}
                </p>

                <h4 className="text-xl font-bold mb-5 text-gray-900 flex items-center gap-2">
                  <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Key Takeaways:
                </h4>

                <ul className="space-y-4 mb-12">
                  {chapters[activeChapter].keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="text-sky-600 mr-3 text-xl group-hover:scale-125 transition-transform">•</span>
                      <span className="text-gray-700 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-2 group text-lg"
                >
                  <span>Read sample</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4 flex items-center gap-2 w-fit mx-auto">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold mb-6 text-gray-900">
              Reader Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What people are saying about "Living Right in the Digital Age"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              className="bg-sky-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-sky-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-sky-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">
                  A
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Aisha K.</p>
                  <p className="text-sm text-gray-600">College Student, 19</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "This book came to me during my freshman year when I was feeling overwhelmed by social
                media and college life. The digital detox protocol literally saved my mental health.
                Thank you, Harryy Om!"
              </p>
            </motion.div>

            <motion.div
              className="bg-purple-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-purple-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">
                  R
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Ryan T.</p>
                  <p className="text-sm text-gray-600">Tech Professional, 26</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "As someone working in tech, I was skeptical about a book on digital detox. But 'Living Right'
                is not anti-technology — it's about using tech mindfully. The mind as supercomputer analogy
                really clicked for me."
              </p>
            </motion.div>

            <motion.div
              className="bg-orange-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-orange-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">
                  M
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Maya J.</p>
                  <p className="text-sm text-gray-600">Content Creator, 22</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "The chapter on Sacred Love transformed how I view relationships and self-worth. I used to
                seek validation through likes and comments. Now I have a healthier relationship with social
                media and more authentic connections IRL."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Preview */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-100 rounded-full mb-8">
              <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold mb-6 text-gray-900">
              Get a Free Chapter
            </h2>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our newsletter to receive a complimentary chapter from "Living Right in the Digital Age"
              and weekly spiritual insights from Harryy Om.
            </p>

            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-sky-200 border-2 border-gray-200 text-gray-900 placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-full py-4 px-8 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform whitespace-nowrap"
              >
                Download Now
              </button>
            </form>

            <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SoulGuidePage;
