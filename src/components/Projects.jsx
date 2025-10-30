import { motion } from "framer-motion";

export default function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="p-10 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white"
    >
      <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 60 }}
            /* whileInView animation + its own transition (duration & delay) */
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: index * 0.2 },
            }}
            viewport={{ once: true }}
            // Floating / interaction animations
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
            }}
            whileTap={{
              y: -20,
              scale: 0.97,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
              transition: { duration: 0.15, ease: "easeOut" }, // 👈 fast snap
            }}
            // DEFAULT transition used for animate / release bounce (spring)
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="relative group rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>

            <div className="relative z-10 p-8 backdrop-blur-md bg-white/20 dark:bg-gray-800/30 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col justify-between h-full">
              <div className="absolute top-5 right-5 transform group-hover:rotate-12 transition duration-500">
                {project.icon}
              </div>

              <div>
                {/* Project Image */}
                {project.image && (
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-40 md:h-48 lg:h-56 object-cover transform transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-5">
                  {project.desc}
                </p>

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
                rel="noreferrer"
                className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition"
              >
                View Project
              </a>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-3xl transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
