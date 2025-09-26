import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative p-8 bg-white/20 dark:bg-gray-900/20 backdrop-blur-md text-gray-900 dark:text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-inner rounded-t-3xl">
      {/* Text */}
      <p className="text-sm md:text-base">
        © 2025 <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Prynce</span>. All rights reserved.
      </p>

      {/* Social Links */}
      <div className="flex gap-5">
        {[{
          icon: <FaFacebookF />,
          link: "https://www.facebook.com/pryncecarlo.clemente11"
        }, {
          icon: <FaInstagram />,
          link: "https://www.instagram.com/prynncceeee_/"
        }, {
          icon: <FaGithub />,
          link: "https://github.com/your-github"
        }].map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 text-white shadow-lg hover:scale-110 transition-transform duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
