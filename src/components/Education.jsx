// components/Education.jsx
import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Engineering in Software Engineering',
      university: 'Mizan-Tepi University | Tepi Campus',
      date: '2021 - 2025',
      type: 'education',
      description: 'Pursuing a comprehensive program focused on software engineering principles with strong emphasis on modern web development practices and technologies.'
    },
    {
      degree: 'Internship in Software Engineering',
      university: 'Federal Civil Service Commission (FCSC) | Addis Ababa, Ethiopia',
      date: 'March 2025 - June 2025',
      type: 'internship',
      description: 'Hands-on internship focused on practical experience in software development, system security, and real-world application of engineering concepts.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900 relative overflow-hidden">
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
            <GraduationCap className="w-8 h-8 text-cyan-400 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Education
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
            {educationData.map((item, index) => (
              <div key={index} className="relative">
                {/* Desktop Layout - Alternating Cards */}
                <div className="hidden md:flex items-center">
                  {/* Left Side Card */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-12">
                        <EducationCard item={item} />
                      </div>
                      <div className="w-1/2 pl-12"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-12"></div>
                      <div className="w-1/2 pl-12">
                        <EducationCard item={item} />
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
                    
                    <EducationCard item={item} isMobile={true} />
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

// Education Card Component
const EducationCard = ({ item, isMobile = false }) => {
  // Determine icon based on item type
  const TypeIcon = item.type === 'internship' ? Briefcase : GraduationCap;
  
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

        {/* Degree Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 
          transition-colors duration-300 leading-tight">
          {item.degree}
        </h3>

        {/* University with Icon */}
        <div className="flex items-center gap-2 mb-4 text-gray-300">
          <TypeIcon size={16} className={item.type === 'internship' ? 'text-purple-400' : 'text-cyan-400'} />
          <span className="font-medium">{item.university}</span>
        </div>

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

export default Education;