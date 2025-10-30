import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ brandName, navigationItems }) {
  const [open, setOpen] = useState(false);

  // close mobile menu on navigation
  const handleNavClick = () => setOpen(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/20 shadow-lg p-4 flex justify-between items-center">
      {/* Logo */}
      <motion.h1 
        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {brandName}
      </motion.h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8">
        {navigationItems.map((item, index) => (
          <motion.li
            key={`nav-${item.id || item}-${index}`}
            className="capitalize cursor-pointer text-white relative group"
            whileHover={{ y: -2, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href={typeof item === 'object' ? item.href : `#${item}`}
              onClick={handleNavClick}
              className="px-2 py-1 rounded-md text-sm font-medium hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-500 hover:text-white transition-all duration-300"
            >
              {typeof item === 'object' ? item.label : item}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full right-4 mt-2 bg-black/70 backdrop-blur rounded-lg p-4 shadow-lg">
          <ul className="flex flex-col gap-3">
            {navigationItems.map((item, index) => (
              <li key={`mobile-nav-${index}`} className="text-white">
                <a
                  href={typeof item === 'object' ? item.href : `#${item}`}
                  onClick={handleNavClick}
                  className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10"
                >
                  {typeof item === 'object' ? item.label : item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
