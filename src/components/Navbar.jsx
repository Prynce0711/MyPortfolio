import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";



export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/20 shadow-lg p-4 flex justify-between items-center">
      {/* Logo */}
      <Motion.h1
        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></Motion.h1>

      {/* Links */}
      <ul className="flex gap-8">
        {["about", "skills", "projects", "contact"].map((link) => (
          <Motion.li
            key={link}
            className="capitalize cursor-pointer text-gray-900 dark:text-white relative group"
            whileHover={{ y: -2, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href={typeof item === 'object' ? item.href : `#${item}`}
              className="px-2 py-1 rounded-md text-sm font-medium hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-500 hover:text-white transition-all duration-300"
            >
              {typeof item === 'object' ? item.label : item}
            </a>
          </Motion.li>
        ))}
      </ul>

      

      {/* Dark/Light Toggle with Morph Animation */}
      <Motion.button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-lg text-white flex items-center justify-center overflow-hidden"
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {darkMode ? (
            <Motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaSun className="w-5 h-5 text-yellow-400" />
            </Motion.div>
          ) : (
            <Motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaMoon className="w-5 h-5 text-gray-100" />
            </Motion.div>
          )}
        </AnimatePresence>
      </Motion.button>
    </nav>
  );
}
