import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';

interface TutorialCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  image: string;
  darkMode: boolean;
  highContrast: boolean;
}

export const TutorialCard: React.FC<TutorialCardProps> = ({
  title,
  description,
  duration,
  difficulty,
  image,
  darkMode,
  highContrast,
}) => {
  const cardClasses = darkMode 
    ? 'bg-gray-800 border-gray-700' 
    : highContrast
    ? 'bg-white border-black border-2'
    : 'bg-white border-gray-200';

  const textClasses = darkMode || highContrast ? 'text-white' : 'text-gray-800';
  const subtextClasses = darkMode ? 'text-gray-300' : highContrast ? 'text-black' : 'text-gray-600';

  return (
    <div className={`${cardClasses} border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer`}>
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {difficulty}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`text-xl font-bold ${textClasses} mb-3 group-hover:text-blue-600 transition-colors`}>
          {title}
        </h3>
        <p className={`${subtextClasses} mb-4 leading-relaxed`}>
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className={`text-sm ${subtextClasses}`}>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4 text-green-600" />
              <span className={`text-sm ${subtextClasses}`}>Iniciante</span>
            </div>
          </div>
          
          <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};