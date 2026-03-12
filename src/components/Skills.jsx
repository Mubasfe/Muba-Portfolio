// components/Skills.jsx
import React from 'react';
import { Code, Server, Database, Globe, Zap, CheckCircle } from 'lucide-react';

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'HTML', percentage: 100, icon: <Globe className="w-5 h-5" /> },
      { name: 'CSS', percentage: 95, icon: <Code className="w-5 h-5" /> },
      { name: 'JavaScript', percentage: 95, icon: <Zap className="w-5 h-5" /> },
      { name: 'React', percentage: 90, icon: <Code className="w-5 h-5" /> },
      { name: 'Tailwind CSS', percentage: 90, icon: <Code className="w-5 h-5" /> }
    ],
    backend: [
      { name: 'PHP', percentage: 90, icon: <Server className="w-5 h-5" /> },
      { name: 'MySQL', percentage: 85, icon: <Database className="w-5 h-5" /> },
      { name: 'Spring Boot', percentage: 80, icon: <Server className="w-5 h-5" /> },
      { name: 'Node.js', percentage: 85, icon: <Server className="w-5 h-5" /> },
      { name: 'MongoDB', percentage: 80, icon: <Database className="w-5 h-5" /> }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            I've mastered a variety of technologies in the web development world, 
            from backend systems to interactive frontend experiences. My skills 
            evolve with the industry to deliver cutting-edge solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Frontend Skills */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-cyan-400/10 rounded-xl">
                <Code className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Frontend Skills</h3>
            </div>
            
            <div className="grid gap-4">
              {skillsData.frontend.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Backend Skills - Now with cyan colors like frontend */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-cyan-400/10 rounded-xl">
                <Server className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Backend Skills</h3>
            </div>
            
            <div className="grid gap-4">
              {skillsData.backend.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} color="cyan" />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Banner */}
        {/* <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-4 bg-gray-800/50 rounded-2xl border border-gray-700">
            <span className="text-gray-400">Continuously learning:</span>
            {['TypeScript', 'Next.js', 'Docker', 'GraphQL', 'AWS'].map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-700/50 text-cyan-300 rounded-full text-sm 
                  border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-cyan-400/10 
                  transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

// Skill Card Component - Now using cyan for both sections
const SkillCard = ({ skill, index }) => {
  return (
    <div
      className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 
        border border-gray-700 hover:border-cyan-400/50 transition-all duration-500
        hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-1
        overflow-hidden cursor-default"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-blue-500/0 
        group-hover:from-cyan-400/5 group-hover:via-cyan-400/5 group-hover:to-blue-500/5 
        rounded-xl transition-all duration-700"></div>

      <div className="relative z-10">
        {/* Skill Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-400/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <span className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
              {skill.name}
            </span>
          </div>
          <span className="text-cyan-400 font-bold text-lg">{skill.percentage}%</span>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500 
              rounded-full transition-all duration-1000 ease-out group-hover:from-cyan-300 group-hover:to-blue-400"
            style={{ width: `${skill.percentage}%` }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
              -translate-x-full group-hover:animate-shimmer"></div>
          </div>
        </div>

        {/* Hover Stats */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-1 text-xs text-cyan-400 bg-gray-900/80 px-2 py-1 rounded-full">
            <CheckCircle size={12} />
            <span>Proficient</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-cyan-400/5 
        rounded-full blur-xl group-hover:bg-cyan-400/20 transition-all duration-700"></div>
    </div>
  );
};

// Add custom animation for shimmer effect
const style = document.createElement('style');
style.textContent = `
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
  .group:hover .animate-shimmer {
    animation: shimmer 1.5s infinite;
  }
`;
document.head.appendChild(style);

export default Skills;