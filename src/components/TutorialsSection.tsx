import React from 'react';
import { TutorialCard } from './TutorialCard';

interface TutorialsSectionProps {
  darkMode: boolean;
  highContrast: boolean;
}

export const TutorialsSection: React.FC<TutorialsSectionProps> = ({ darkMode, highContrast }) => {
  const bgClasses = darkMode 
    ? 'bg-gray-900' 
    : highContrast
    ? 'bg-white'
    : 'bg-gray-50';

  const textClasses = darkMode || highContrast ? 'text-white' : 'text-gray-800';
  const subtextClasses = darkMode ? 'text-gray-300' : highContrast ? 'text-black' : 'text-gray-600';

  const tutorials = [
    {
      title: "Como usar WhatsApp no celular",
      description: "Aprenda a enviar mensagens, fazer chamadas e compartilhar fotos com sua família.",
      duration: "15 min",
      difficulty: "Básico",
      image: "whats.jpg"
    },
    {
      title: "Navegando na Internet com Segurança",
      description: "Descubra como pesquisar informações, acessar sites e se proteger online.",
      duration: "20 min",
      difficulty: "Básico",
      image: "idosoo.jpg"
    },
    {
      title: "Configurando Email no Smartphone",
      description: "Passo a passo para configurar e usar email no seu celular de forma simples.",
      duration: "12 min",
      difficulty: "Básico",
      image: "email.jpg"
    },
    {
      title: "Fazendo Videochamadas",
      description: "Conecte-se com familiares através de videochamadas pelo WhatsApp e Zoom.",
      duration: "18 min",
      difficulty: "Básico",
      image: "call.jpg"
    },
    {
      title: "Baixando e Usando Aplicativos",
      description: "Como encontrar, baixar e instalar aplicativos úteis no seu smartphone.",
      duration: "25 min",
      difficulty: "Intermediário",
      image: "aplicativo.jpg"
    },
    {
      title: "Internet Banking Seguro",
      description: "Aprenda a acessar sua conta bancária online com total segurança.",
      duration: "30 min",
      difficulty: "Intermediário",
      image: "banco.jpg"
    }
  ];

  return (
    <section id="tutoriais" className={`${bgClasses} py-16 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${textClasses} mb-4`}>
            Tutoriais em Destaque
          </h2>
          <p className={`text-xl ${subtextClasses} max-w-3xl mx-auto`}>
            Aprenda no seu ritmo com nossos guias passo a passo, criados especialmente para facilitar sua jornada digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <TutorialCard
              key={index}
              {...tutorial}
              darkMode={darkMode}
              highContrast={highContrast}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Ver Todos os Tutoriais
          </button>
        </div>
      </div>
    </section>
  );
};