import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  highContrast: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, highContrast }) => {
  const bgClasses = darkMode 
    ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' 
    : highContrast
    ? 'bg-black'
    : 'bg-gradient-to-br from-blue-50 via-white to-purple-50';

  const textClasses = darkMode || highContrast ? 'text-white' : 'text-gray-800';
  const subtextClasses = darkMode || highContrast ? 'text-gray-200' : 'text-gray-600';

  return (
    <section id="inicio\" className={`${bgClasses} pt-20 pb-16 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className={`text-4xl lg:text-6xl font-bold ${textClasses} mb-6 leading-tight`}>
              Tecnologia Nunca É
              <span className="text-blue-600 block">Tarde Demais</span>
            </h2>
            <p className={`text-xl ${subtextClasses} mb-8 leading-relaxed`}>
              Aprenda a usar smartphones, computadores e internet de forma simples e descomplicada. 
              Tutoriais passo a passo pensados especialmente para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Ver Tutoriais</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className={`border-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'border-white text-white hover:bg-white hover:text-gray-900' 
                  : highContrast
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}>
                Sobre o Projeto
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="help.jpg"
                alt="Idoso sorrindo enquanto usa tablet, aprendendo tecnologia"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-full shadow-lg">
                <BookOpen className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};