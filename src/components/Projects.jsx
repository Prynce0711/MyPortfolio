import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCloudSun } from "react-icons/fa";

const projects = [
  { 
    name: "Portfolio Website", 
    link: "#", 
    desc: "My personal portfolio built with React & Tailwind CSS",
    tech: ["React", "TailwindCSS"], 
    icon: <FaReact className="text-blue-500 w-6 h-6" /> 
  },
  { 
    name: "Todo App", 
    link: "#", 
    desc: "A simple todo app with React and localStorage",
    tech: ["React", "LocalStorage"], 
    icon: <FaReact className="text-blue-500 w-6 h-6" /> 
  },
  { 
    name: "Weather App", 
    link: "#", 
    desc: "A weather forecast app with API integration",
    tech: ["API", "React"], 
    icon: <FaCloudSun className="text-yellow-400 w-6 h-6" /> 
  },
  { 
    name: "Blog Platform", 
    link: "#", 
    desc: "A full-stack blog application with Node.js and MongoDB",
    tech: ["Node.js", "MongoDB"], 
    icon: <FaNodeJs className="text-green-600 w-6 h-6" /> 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="p-10 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500"
          >
            {/* Animated Gradient Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>

            {/* Glassmorphic Card */}
            <div className="relative z-10 p-8 backdrop-blur-md bg-white/20 dark:bg-gray-800/30 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col justify-between h-full">
              
              {/* Animated Icon */}
              <div className="absolute top-5 right-5 transform group-hover:rotate-12 transition duration-500">
                {project.icon}
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition">{project.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-5">{project.desc}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={project.link} 
                target="_blank"
                className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition"
              >
                View Project
              </a>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-3xl transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
