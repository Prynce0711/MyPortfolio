import { useEffect, useRef, useState } from "react";
import VerseOfTheDay from "./VerseOfTheDay";

export default function Hero({ personalInfo }) {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  // Scroll / load animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === textRef.current && entry.isIntersecting) {
            setTextVisible(true);
            observer.unobserve(entry.target);
          }
          if (entry.target === imageRef.current && entry.isIntersecting) {
            setImageVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    const targets = [textRef.current, imageRef.current].filter(Boolean);
    targets.forEach((el) => observer.observe(el));

    return () => targets.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-[72vh] md:min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full px-2 sm:px-4 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
          {/* Left column: larger image, centered vertically on md+ */}
          <div className="flex-shrink-0 md:w-1/3 flex items-center justify-center">
            <div
              ref={imageRef}
              className={`w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-2 border-gray-700 bg-gray-900 transition-all duration-600 ease-out transform ${
                imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <img
                src={personalInfo.image}
                alt={personalInfo.name ? `${personalInfo.name} avatar` : "Profile image"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column: text card */}
          <div className="md:w-2/3 flex items-center">
            <div
              ref={textRef}
              className={`w-full bg-gray-900/95 border border-gray-800 shadow-lg rounded-2xl p-6 sm:p-8 transition-transform duration-700 ease-out transform ${
                textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-white text-center md:text-left">
                Hi, I'm <span className="text-gray-200">{personalInfo.name}</span>
              </h1>

              <p className="mb-4 sm:mb-6 text-gray-300 text-center md:text-left text-base sm:text-lg max-w-2xl">
                {personalInfo.title}
              </p>

              <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center sm:gap-4 gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 bg-gray-200 text-black font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-500 text-sm sm:text-base"
                >
                  View My Work
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 bg-transparent text-gray-200 border border-gray-700 rounded-lg hover:bg-gray-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-600 text-sm sm:text-base"
                >
                  Contact Me
                </a>

                {personalInfo.resume && (
                  <a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 sm:mt-0 inline-flex items-center justify-center px-4 py-2 text-sm text-gray-200 bg-transparent border border-dashed border-gray-700 rounded-lg hover:bg-gray-800"
                  >
                    Resume
                  </a>
                )}
              </div>

              {/* Verse of the Day - monochrome wrapper */}
              <div className="mt-6 flex justify-center md:justify-start">
                <div className="w-full max-w-xs">
                  <div className="bg-gray-800/60 p-3 rounded-lg border border-gray-700">
                    <VerseOfTheDay className="w-full text-sm text-gray-200" showSourceLink={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

