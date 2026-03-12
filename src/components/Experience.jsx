// components/Experience.jsx
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      title: 'Full Stack Developer',
      company: 'Self Employed',
      date: '2025 - Present',
      description: 'Building and deploying full-stack web applications independently, focusing on scalable backend systems and engaging frontend interfaces.'
    },
    {
      title: 'Web Developer | Internship',
      company: 'Federal Civil Service Commission (FCSC) | Addis Ababa, Ethiopia',
      date: 'March 2025 - June 2025',
      description: 'Assisted in the development of secure web applications, contributed to frontend and backend tasks, and gained exposure to real-world projects.'
    },
    {
      title: 'Project Manager',
      company: 'Mizan-Tepi University',
      date: 'December 2024 - February 2025',
      description: 'Led a student software development project, coordinated team efforts, managed timelines, and ensured successful delivery of project milestones.'
    },
    {
      title: 'Senior Project | Website Developer',
      company: 'Mizan-Tepi University',
      date: 'March 2023 - June 2023',
      description: 'Developed a full-featured academic project website, focusing on frontend design and implementation.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-cyan-400 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Experience
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Glowing Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            {/* Base line */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-cyan-400 to-cyan-500/20"></div>
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-blue-400 to-cyan-400 animate-pulse blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-blue-400 to-cyan-400"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {experienceData.map((item, index) => (
              <div key={index} className="relative">
                {/* Desktop Layout - Alternating Cards */}
                <div className="hidden md:flex items-center">
                  {/* Left Side Card */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-12">
                        <ExperienceCard item={item} />
                      </div>
                      <div className="w-1/2 pl-12"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-12"></div>
                      <div className="w-1/2 pl-12">
                        <ExperienceCard item={item} />
                      </div>
                    </>
                  )}
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      {/* Outer ring */}
                      <div className="w-6 h-6 bg-cyan-400/20 rounded-full animate-ping absolute"></div>
                      {/* Inner dot */}
                      <div className="w-6 h-6 bg-cyan-400 rounded-full relative z-10 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="relative pl-8">
                    {/* Mobile Timeline Line */}
                    <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-400"></div>
                    
                    {/* Mobile Timeline Dot */}
                    <div className="absolute left-0 top-6">
                      <div className="relative">
                        <div className="w-4 h-4 bg-cyan-400 rounded-full animate-ping absolute"></div>
                        <div className="w-4 h-4 bg-cyan-400 rounded-full relative z-10"></div>
                      </div>
                    </div>
                    
                    <ExperienceCard item={item} isMobile={true} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Card Component
const ExperienceCard = ({ item, isMobile = false }) => {
  return (
    <div
      className={`group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 
        border border-gray-700 hover:border-cyan-400/50 transition-all duration-500
        hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] 
        ${!isMobile && 'hover:-translate-y-2'}
        overflow-hidden`}
    >
      {/* Neon glow background effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-blue-500/0 
        group-hover:from-cyan-400/10 group-hover:via-cyan-400/5 group-hover:to-blue-500/10 
        rounded-2xl transition-all duration-700"></div>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
          bg-gradient-to-r from-cyan-400 to-blue-500 mask-gradient"></div>
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        {/* Date Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full 
          bg-gradient-to-r from-cyan-400/10 to-blue-500/10 
          border border-cyan-400/30 mb-5">
          <span className="text-cyan-400 text-sm font-medium">{item.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 
          transition-colors duration-300 leading-tight">
          {item.title}
        </h3>

        {/* Company */}
        <p className="text-gray-300 font-medium mb-4">{item.company}</p>

        {/* Description */}
        <p className="text-gray-400 text-base leading-relaxed">
          {item.description}
        </p>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 
          rounded-full blur-2xl group-hover:from-cyan-400/20 group-hover:to-blue-500/20 
          transition-all duration-700"></div>
      </div>
    </div>
  );
};

// Add custom CSS for gradient mask
const style = document.createElement('style');
style.textContent = `
  .mask-gradient {
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    padding: 2px;
  }
`;
document.head.appendChild(style);

export default Experience;