import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={24} />, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} />, color: "text-teal-400" },
  { name: "JavaScript", icon: <FaJs size={24} />, color: "text-yellow-400" },
  { name: "Vite", icon: <SiVite size={24} />, color: "text-purple-500" },
  { name: "Node.js", icon: <FaNodeJs size={24} />, color: "text-green-500" },
  { name: "HTML", icon: <FaHtml5 size={24} />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt size={24} />, color: "text-blue-600" },
  { name: "GitHub", icon: <FaGithub size={24} />, color: "text-gray-300" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="p-10 bg-gray-900 text-gray-100"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

      {/* Inline float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`flex items-center gap-2 px-4 py-3 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 animate-float ${skill.color}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-2xl">
              {skill.icon}
            </div>
            <span className="ml-2 font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
