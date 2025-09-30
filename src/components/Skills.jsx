export default function Skills({ skillCategories }) {
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

      {/* Skills Categories Mapping */}
      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div key={`category-${category.category}-${categoryIndex}`} className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-purple-400">
              {category.category}
            </h3>
            
            <div className="flex flex-wrap gap-6 justify-center">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={`skill-${skill.name}-${skillIndex}`}
                  className={`flex flex-col items-center gap-2 px-4 py-3 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 animate-float ${skill.color}`}
                  style={{ animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s` }}
                >
                  <div className="text-2xl">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-center">{skill.name}</span>
                  
                  {/* Skill Level Bar */}
                  {skill.level && (
                    <div className="w-16 bg-gray-700 rounded-full h-2 mt-1">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${skill.color.replace('text-', 'bg-')}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  )}
                  
                  {/* Skill Level Percentage */}
                  {skill.level && (
                    <span className="text-xs text-gray-400">{skill.level}%</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
