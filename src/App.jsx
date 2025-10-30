// App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/experience";
import DP_FB from "./assets/images/DP_FB.jpg";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaJava, FaPython 
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiGodotengine, SiFigma, SiMysql } from "react-icons/si";
import { GoDot } from "react-icons/go";

export default function App() {
  // Personal Information Data
  const personalInfo = {
    name: "Prynceeee Carloooooo Clemente",
    title: "Bachelor of Science in Information Technology Student",
    image: DP_FB,
    aboutText: `I'm a BSIT student with a strong passion for web development and modern technologies. I enjoy learning and building responsive, user-friendly, and efficient web applications using tools like React and Tailwind CSS. My goal is to turn ideas into functional and visually appealing digital experiences, while continuously improving my skills in programming, problem-solving, and software development.`
  };

  // Navigation Data
  const navigationItems = [
    { id: "about", label: "About", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" }
  ];
  const brandName = "Prynce";

  // Skills Data with categories
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: <FaReact size={24} />, color: "text-blue-400", level: 90 },
        { name: "JavaScript", icon: <FaJs size={24} />, color: "text-yellow-400", level: 85 },
        { name: "HTML", icon: <FaHtml5 size={24} />, color: "text-orange-500", level: 95 },
        { name: "CSS", icon: <FaCss3Alt size={24} />, color: "text-blue-600", level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={24} />, color: "text-teal-400", level: 85 }
      ]
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={24} />, color: "text-green-500", level: 75 },
        { name: "Java", icon: <FaJava size={24} />, color: "text-red-500", level: 80 },
        { name: "Python", icon: <FaPython size={24} />, color: "text-yellow-300", level: 70 },
        { name: "MySQL", icon: <SiMysql size={24} />, color: "text-sky-400", level: 75 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "GitHub", icon: <FaGithub size={24} />, color: "text-gray-300", level: 85 },
        { name: "Vite", icon: <SiVite size={24} />, color: "text-purple-500", level: 80 },
        { name: "Figma", icon: <SiFigma size={24} />, color: "text-pink-400", level: 75 },
        { name: "Godot", icon: <SiGodotengine size={24} />, color: "text-indigo-400", level: 65 }
      ]
    }
  ];

  // Experience Data
  const experienceData = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Tech Startup",
      period: "2024 - Present",
      description: "Working on React-based web applications and responsive design implementations.",
      technologies: ["React", "JavaScript", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Web Development Student",
      company: "University Projects",
      period: "2023 - 2024",
      description: "Completed various web development projects including full-stack applications.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
      id: 3,
      title: "Game Development Enthusiast",
      company: "Personal Projects",
      period: "2023 - Present",
      description: "Creating games using Godot engine and learning game development principles.",
      technologies: ["Godot", "GDScript", "Game Design"]
    }
  ];

  // Projects Data
  const projectsData = [
    {
      id: 1,
      name: "Portfolio Website",
      link: "#",
      desc: "A personal portfolio website showcasing my skills, experience, and projects. Built using React and Tailwind CSS for a modern, responsive design.",
      tech: ["React", "TailwindCSS"],
      icon: <FaReact className="text-blue-500 w-6 h-6" />,
      image: "/src/assets/images/Mine.jpg",
      status: "Completed",
      year: "2024"
    },
    {
      id: 2,
      name: "Barcie International Center",
      link: "#",
      desc: "A web application for Barcie International Center, featuring a blog and content management system. Developed with HTML, CSS, JavaScript, PHP, Node.js, and MySQL.",
      tech: ["Html", "Css", "Javascript", "Php", "Node.js", "MySQL"],
      icon: <FaHtml5 className="text-green-600 w-6 h-6" />,
      image: "/src/assets/images/barcie.jpg",
      status: "In Progress",
      year: "2024"
    },
    {
      id: 3,
      name: "Voting System",
      link: "#",
      desc: "A secure voting system application designed for managing elections and user authentication. Built with Java and MySQL for reliability and efficiency.",
      tech: ["Java", "MySQL"],
      icon: <FaJava className="text-green-600 w-6 h-6" />,
      image: "/src/assets/images/Voting.jpg",
      status: "Completed",
      year: "2023"
    },
    {
      id: 4,
      name: "Game APP",
      link: "#",
      desc: "A game application created using the Godot engine, demonstrating gameplay mechanics and design principles with GDScript.",
      tech: ["Godot", "GDScript"],
      icon: <GoDot className="text-green-600 w-6 h-6" />,
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg",
      status: "Completed",
      year: "2023"
    },
  ];

  // Social Links Data
  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: <FaGithub size={24} /> },
    { name: "LinkedIn", url: "https://linkedin.com", icon: <FaReact size={24} /> }
  ];

  // Portfolio Sections mapping
  const portfolioSections = [
    { component: Hero, props: { personalInfo }, id: "hero" },
    { component: About, props: { aboutText: personalInfo.aboutText, name: personalInfo.name }, id: "about" },
    { component: Skills, props: { skillCategories }, id: "skills" },
    { component: Experience, props: { experiences: experienceData }, id: "experience" },
    { component: Projects, props: { projects: projectsData }, id: "projects" },
    { component: Contact, props: { socialLinks }, id: "contact" },
    { component: Footer, props: {}, id: "footer" }
  ];
  return (
    <div className="relative scroll-smooth min-h-screen text-white overflow-x-hidden bg-gray-900">

      {/* Moving diagonal streaks - Enhanced mapping */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => {
          const randomTop = -50 + Math.random() * 100;
          const randomLeft = Math.random() * 100;
          const randomDuration = 5 + Math.random() * 5;
          const randomRotation = Math.random() * 45;
          
          return (
            <div
              key={`streak-${i}`}
              className="absolute w-[2px] h-[100vh] bg-blue-600/50 opacity-40 animate-[slide_10s_linear_infinite]"
              style={{
                top: `${randomTop}vh`,
                left: `${randomLeft}%`,
                animationDuration: `${randomDuration}s`,
                transform: `rotate(${randomRotation}deg)`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          );
        })}
      </div>

      {/* Glassmorphic wrapper */}
      <div className="relative z-10 backdrop-blur-md bg-black/40 min-h-screen border border-gray-700">
        {/* Navbar */}
        <Navbar 
          brandName={brandName}
          navigationItems={navigationItems}
        />
        
        {/* Portfolio Sections Mapping */}
        {portfolioSections.map((section, index) => {
          const { component: Component, props, id } = section;
          // Special handling for Experience component to use its internal data
          if (id === 'experience') {
            return (
              <div key={`section-${id}-${index}`} id={id}>
                <Experience />
              </div>
            );
          }
          return (
            <div key={`section-${id}-${index}`} id={id}>
              <Component {...props} />
            </div>
          );
        })}
      </div>

      {/* Tailwind keyframes for streak animation */}
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateY(-100vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
