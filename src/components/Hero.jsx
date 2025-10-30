import { useEffect, useRef, useState } from "react";
import DP_FB from "../assets/images/DP_FB.jpg"; // Make sure file exists here
import ApiNavbar from "./api.jsx";

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
      { threshold: 0.3 }
    );

    const targets = [textRef.current, imageRef.current].filter(Boolean);
    targets.forEach((el) => observer.observe(el));

    return () => targets.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 px-6 overflow-hidden"
    >
      {/* Decorative floating circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-30 animate-pulse dark:bg-purple-700"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-400 rounded-full opacity-20 animate-pulse dark:bg-indigo-700"></div>
      <div className="absolute top-1/2 right-20 w-24 h-24 bg-purple-300 rounded-full opacity-20 animate-bounce dark:bg-blue-700"></div>

      <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl w-full gap-10 z-10">
        {/* Circular Image on the left */}
        <div
          ref={imageRef}
          className={`w-48 h-48 md:w-64 md:h-64 flex-shrink-0 transition-all duration-1000 ease-out ${
            imageVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <img
            src={personalInfo.image}
            alt={personalInfo.name}
            className="rounded-full border-8 border-blue-600 dark:border-blue-400 object-cover w-full h-full shadow-2xl transform transition hover:scale-105"
          />
        </div>

        {/* Text / Card on the right */}
        <div
          ref={textRef}
          className={`w-full md:w-1/2 bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-10 text-center md:text-left transition-all duration-1000 ease-out transform ${
            textVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          } hover:scale-105`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Hi, I'm {personalInfo.name}
          </h1>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            {personalInfo.title}   
          </p>

          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all"
          >
            View My Work
          </a>
        </div>
      </div>


      {/* Verse of the Day fetched from Bible API */}
      <div className="mb-4 p-10 items-center">
        <ApiNavbar />
      </div>




    </section>
  );
}
