import { motion } from "framer-motion";

function TiltCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, rotate: -2 }}
  className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700 w-64 sm:w-80 p-5 sm:p-6 rounded-2xl shadow-xl flex-shrink-0 hover:shadow-blue-500/30 transition-transform"
    >
      <h3 className="text-2xl font-semibold text-blue-400">{exp.role}</h3>
      <p className="text-sm text-gray-400 mb-3">
        {exp.company} • {exp.period}
      </p>
      <p className="text-gray-300">{exp.description}</p>
    </motion.div>
  );
}

export default function Experience({ experiences = [] }) {
  // Original experiences data
  const defaultExperiences = [
    {
      role: "Converge Sales Agent",
      company: "Converge ICT Solutions",
      period: "2022 - Present",
      description:
        "Promoted and sold internet plans, handled customer inquiries, and achieved monthly sales targets while providing excellent client service.",
    },
    {
      role: "Service Crew",
      company: "Jolly Management Solutions Inc.",
      period: "2023",
      description:
        "Provided fast and friendly customer service, prepared food and beverages, maintained cleanliness, and supported daily store operations.",
    },
    {
      role: "Assistant Merchandiser",
      company: "Pandayan Bookshop",
      period: "2025",
      description:
        "Organized product displays, monitored inventory, assisted in pricing updates, and ensured shelves were fully stocked for customers.",
    },
    {
      role: "Re-packer",
      company: "Gorgeous Glow Cosmetics",
      period: "2023",
      description:
        "Carefully repacked beauty products, checked quality and accuracy, labeled items, and ensured timely preparation for distribution.",
    },
  ];

  const experienceList = experiences.length > 0 ? experiences : defaultExperiences;
  
  return (
    <section id="experience" className="relative min-h-[auto] flex items-center justify-center text-white py-10 px-3 sm:py-12 sm:px-6 overflow-hidden">
      {/* 🔥 Animated Dark Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "300% 300%" }}
      />

      <div className="relative max-w-7xl w-full text-center z-10 overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12"
        >
          Work Experience
        </motion.h2>

        {/* Cards: horizontally scrollable on small screens, arranged in grid on larger screens */}
        <div className="w-full">
          <div className="flex gap-6 items-stretch overflow-x-auto py-4 px-2 sm:px-0">
            {experienceList.map((exp, index) => (
              <TiltCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Adjust card width for small screens inside this file to avoid overflow */
