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
      image: "/HarmeetImages/img10.JPG",
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/HarmeetImages/img7.jpg"
            alt="Soul Guide Book"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-[Playfair_Display]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Soul Guide Book
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto"
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
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/5">
              <img
                src="/HarmeetImages/img16.JPG"
                alt="Soul Guide Book Cover"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="w-full md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-6 text-gray-900">
                About the Book
              </h2>

              <p className="text-gray-700 mb-6 text-lg">
                "Living Right in the Digital Age" is a comprehensive soul guide for the modern generation
                navigating the complexities of a digital world while seeking deeper meaning and connection.
              </p>

              <p className="text-gray-700 mb-6 text-lg">
                Written with Gen Z and young millennials in mind, this book offers practical spiritual
                wisdom that bridges ancient traditions with contemporary challenges. It addresses the
                unique mental, emotional, and spiritual obstacles faced by young people today.
              </p>

              <p className="text-gray-700 mb-8 text-lg">
                Through personal stories, research, meditation practices, and actionable advice,
                Harmeet Singh Chandhoke provides a roadmap for finding peace, purpose, and authentic
                connection in an age of digital distraction and information overload.
              </p>

              <button
                className="bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-full py-3 px-8 transition-colors shadow-md"
              >
                Purchase the Book
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Slider */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
              Explore the Chapters
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A preview of the wisdom contained within "Living Right in the Digital Age"
            </p>
          </div>

          {/* Chapter Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {chapters.map((chapter, index) => (
              <button
                key={index}
                onClick={() => setActiveChapter(index)}
                className={`px-4 py-2 rounded-full transition-colors ${activeChapter === index
                  ? "bg-sky-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                {chapter.title}
              </button>
            ))}
          </div>

          {/* Active Chapter Content */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5">
                <img
                  src={chapters[activeChapter].image}
                  alt={chapters[activeChapter].title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="w-full md:w-3/5 p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {chapters[activeChapter].title}
                </h3>

                <p className="text-gray-700 mb-6">
                  {chapters[activeChapter].description}
                </p>

                <h4 className="text-lg font-semibold mb-3 text-gray-900">
                  Key Takeaways:
                </h4>

                <ul className="space-y-2 mb-8">
                  {chapters[activeChapter].keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-sky-600 mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="text-sky-600 hover:text-sky-800 font-medium inline-flex items-center"
                >
                  <span>Read sample</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
              Reader Testimonials
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              What people are saying about "Living Right in the Digital Age"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-xl">
                  A
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Aisha K.</p>
                  <p className="text-sm text-gray-600">College Student, 19</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "This book came to me during my freshman year when I was feeling overwhelmed by social
                media and college life. The digital detox protocol literally saved my mental health.
                Thank you, Harry Om!"
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
                  R
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Ryan T.</p>
                  <p className="text-sm text-gray-600">Tech Professional, 26</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As someone working in tech, I was skeptical about a book on digital detox. But 'Living Right'
                is not anti-technology — it's about using tech mindfully. The mind as supercomputer analogy
                really clicked for me."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Maya J.</p>
                  <p className="text-sm text-gray-600">Content Creator, 22</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The chapter on Sacred Love transformed how I view relationships and self-worth. I used to
                seek validation through likes and comments. Now I have a healthier relationship with social
                media and more authentic connections IRL."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Preview */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-sky-100 to-lavender-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-6 text-gray-900">
            Get a Free Chapter
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Join our newsletter to receive a complimentary chapter from "Living Right in the Digital Age"
            and weekly spiritual insights from Harry Om.
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
              Download Now
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

export default SoulGuidePage;
