import { useEffect, useRef, useState } from "react";

export default function About({ aboutText, name }) {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  // Typing effect state
  const fullText = aboutText;
  const [typedText, setTypedText] = useState("");

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index >= fullText.length) {
        clearInterval(typingInterval); // stop typing when done
      }
    }, 50); // typing speed in ms

    return () => clearInterval(typingInterval); // cleanup on unmount
  }, [fullText]);
  // IntersectionObserver for scroll animations
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

    return () => {
      targets.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Code lines for background scroll
  const codeLines = [
    `const portfolio = '${name}';`,
    "function greet() { console.log('Hi, I am a Frontend Developer'); }",
    "const skills = ['React', 'Tailwind CSS', 'JavaScript', 'Node.js'];",
    "const projects = ['Portfolio', 'Todo App', 'Blog Platform'];",
    "// Keep scrolling... 🌟",
  ];

  return (
    <section
      id="about"
      className="relative p-10 bg-gray-900 text-green-400 font-mono overflow-hidden"
    >
      {/* Inline scroll animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s step-start infinite;
        }
      `}</style>

      {/* Scrolling code background */}
      <div className="absolute inset-0 text-green-400 opacity-20 pointer-events-none">
        <div className="animate-scroll">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i}>
              {codeLines.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <h2 className="relative z-10 text-4xl font-bold mb-10 text-center text-white">
        About Me
      </h2>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div
          ref={imageRef}
          className={`flex-shrink-0 w-full md:w-1/3 transition-all duration-1000 ease-out ${
            imageVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          
        </div>

        {/* Typing text */}
        <div
          ref={textRef}
          className={`w-full md:w-2/3 bg-gray-900 bg-opacity-80 rounded-3xl p-8 shadow-xl transform transition-all duration-1000 ease-out ${
            textVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <p className="text-lg md:text-xl leading-relaxed whitespace-pre-wrap text-green-400">
            {typedText}
            <span className="animate-blink">|</span>
          </p>
        </div>
      </div>
    </section>
  );
}
