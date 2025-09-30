import { motion } from "framer-motion";

export default function Navbar({ brandName, navigationItems }) {

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

      {/* Links */}
      <ul className="flex gap-8">
        {navigationItems.map((item, index) => (
          <motion.li
            key={`nav-${item.id || item}-${index}`}
            className="capitalize cursor-pointer text-white relative group"
            whileHover={{ y: -2, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href={typeof item === 'object' ? item.href : `#${item}`}
              className="px-2 py-1 rounded-md text-sm font-medium hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-500 hover:text-white transition-all duration-300"
            >
              {typeof item === 'object' ? item.label : item}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
