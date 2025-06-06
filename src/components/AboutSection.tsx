import React from 'react';
import { Heart, Users, Award, Lightbulb } from 'lucide-react';

interface AboutSectionProps {
  darkMode: boolean;
  highContrast: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode, highContrast }) => {
  const bgClasses = darkMode 
    ? 'bg-gray-800' 
    : highContrast
    ? 'bg-gray-100'
    : 'bg-white';

  const textClasses = darkMode || highContrast ? 'text-white' : 'text-gray-800';
  const subtextClasses = darkMode ? 'text-gray-300' : highContrast ? 'text-black' : 'text-gray-600';

  const features = [
    {
      icon: Heart,
      title: "Feito com Carinho",
      description: "Cada tutorial é pensado com amor e paciência, respeitando seu tempo de aprendizado."
    },
    {
      icon: Users,
      title: "Comunidade Acolhedora",
      description: "Faça parte de uma comunidade que se ajuda mutuamente, sem julgamentos."
    },
    {
      icon: Award,
      title: "Conteúdo de Qualidade",
      description: "Tutoriais testados e aprovados por pessoas da sua idade, garantindo eficácia."
    },
    {
      icon: Lightbulb,
      title: "Linguagem Simples",
      description: "Explicações claras, sem termos técnicos complicados, direto ao ponto."
    }
  ];

  return (
    <section id="sobre" className={`${bgClasses} py-16 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="idosa.jpg"
              alt="Grupo de idosos aprendendo a usar computador em aula de tecnologia"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className={`text-4xl font-bold ${textClasses} mb-6`}>
              Nunca é tarde para
              <span className="text-blue-600 block">começar sua jornada digital</span>
            </h2>
            <p className={`text-lg ${subtextClasses} mb-8 leading-relaxed`}>
              O TechSênior nasceu da necessidade de criar um espaço acolhedor onde pessoas da melhor idade 
              possam aprender tecnologia sem pressa, sem complicação e com todo o suporte necessário.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-blue-600 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className={`font-semibold ${textClasses} mb-2`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm ${subtextClasses}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};