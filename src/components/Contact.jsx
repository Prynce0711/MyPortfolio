import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  { name: "Email", value: "pc.clemente11@gmail.com", icon: <FaEnvelope size={28} />, link: "mailto:pc.clemente11@gmail.com" },
  { name: "Phone", value: "0961-811-1225", icon: <FaPhone size={28} />, link: "tel:09618111225" },
  { name: "Facebook", value: "pryncecarlo.clemente11", link: "https://www.facebook.com/pryncecarlo.clemente11", icon: <FaFacebookF size={28} /> },
  { name: "Instagram", value: "@prynncceeee_", link: "https://www.instagram.com/prynncceeee_/", icon: <FaInstagram size={28} /> },
  { name: "GitHub", value: "Prynce0711", link: "https://github.com/Prynce0711", icon: <FaGithub size={28} /> },
  { name: "LinkedIn", value: "prynce-carlo-clemente", link: "https://www.linkedin.com/in/prynce-carlo-clemente-a380aa25b/", icon: <FaLinkedin size={28} /> },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative p-10 bg-gray-900 text-gray-100 font-mono overflow-hidden"
    >
      <h2 className="relative z-10 text-4xl font-bold mb-10 text-center text-gray-100">
        Contact Me
      </h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {contacts.map((contact, index) => (
          contact.link ? (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-6 bg-gray-800 border border-gray-700 rounded-3xl shadow-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center"
            >
              {/* Animated neon border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-3xl opacity-0 group-hover:opacity-70 transition duration-700 blur-2xl animate-pulse"></div>

              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="mb-4 text-gray-300 group-hover:text-gray-100 transition-colors">
                  {contact.icon}
                </div>
                <p className="text-lg font-semibold">{contact.value}</p>
                <p className="text-sm text-gray-400 mt-2">{contact.name}</p>
              </div>

              {/* Glowing hover effect */}
              <div className="absolute inset-0 rounded-3xl border border-gray-600 opacity-0 group-hover:opacity-20 animate-ping"></div>
            </a>
          ) : (
            <div
              key={index}
              className="relative group p-6 bg-gray-800 border border-gray-700 rounded-3xl shadow-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-3xl opacity-0 group-hover:opacity-70 transition duration-700 blur-2xl animate-pulse"></div>

              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="mb-4 text-gray-300 group-hover:text-gray-100 transition-colors">
                  {contact.icon}
                </div>
                <p className="text-lg font-semibold">{contact.value}</p>
                <p className="text-sm text-gray-400 mt-2">{contact.name}</p>
              </div>

              <div className="absolute inset-0 rounded-3xl border border-gray-600 opacity-0 group-hover:opacity-20 animate-ping"></div>
            </div>
          )
        ))}
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-gray-700 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-800 rounded-full opacity-20 animate-pulse"></div>
    </section>
  );
}
