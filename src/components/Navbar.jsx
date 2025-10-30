import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ brandName, navigationItems }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);

  // close mobile menu on navigation
  const handleNavClick = () => setOpen(false);

  // Accessibility: trap focus inside menu and close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
      }
      if (e.key === "Tab") {
        const focusable = menuRef.current
          ? Array.from(
              menuRef.current.querySelectorAll(
                'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
              )
            ).filter((el) => !el.hasAttribute("disabled"))
          : [];
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    if (open) {
      document.addEventListener("keydown", onKeyDown);
      // lock scroll
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // focus first link
      setTimeout(() => {
        try {
          const first = menuRef.current?.querySelector("a");
          if (first) first.focus();
        } catch (err) {}
      }, 50);

      return () => {
        document.removeEventListener("keydown", onKeyDown);
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

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
          aria-expanded={open}
          aria-controls="mobile-menu"
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

      {/* Mobile Menu (animated with overlay) */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
            />

            <motion.aside
              key="menu"
              id="mobile-menu"
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 w-72 max-w-[80%] h-full p-6 bg-gray-900 text-white shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-lg font-bold">{brandName}</div>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
                {navigationItems.map((item, index) => (
                  <a
                    key={`mobile-nav-${index}`}
                    href={typeof item === 'object' ? item.href : `#${item}`}
                    onClick={handleNavClick}
                    ref={index === 0 ? firstLinkRef : null}
                    className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {typeof item === 'object' ? item.label : item}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
