import React from 'react';
import { Smartphone, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  highContrast: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, highContrast }) => {
  const bgClasses = darkMode 
    ? 'bg-gray-900' 
    : highContrast
    ? 'bg-black'
    : 'bg-gray-800';

  const textClasses = 'text-gray-300';
  const linkClasses = 'hover:text-white transition-colors';

  return (
    <footer id="contato\" className={`${bgClasses} text-gray-300 py-12 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Smartphone className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-white">TechSênior</h3>
            </div>
            <p className={`${textClasses} mb-4 leading-relaxed`}>
              Democratizando o acesso à tecnologia para pessoas da melhor idade. 
              Aprenda no seu ritmo, com conteúdo pensado especialmente para você.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@techsenior.com.br</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className={linkClasses}>Início</a></li>
              <li><a href="#tutoriais" className={linkClasses}>Tutoriais</a></li>
              <li><a href="#sobre" className={linkClasses}>Sobre</a></li>
              <li><a href="#contato" className={linkClasses}>Contato</a></li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li><a href="#" className={linkClasses}>WhatsApp</a></li>
              <li><a href="#" className={linkClasses}>Internet</a></li>
              <li><a href="#" className={linkClasses}>Email</a></li>
              <li><a href="#" className={linkClasses}>Videochamadas</a></li>
              <li><a href="#" className={linkClasses}>Aplicativos</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className={`${textClasses} text-sm`}>
            © 2025 TechSênior. Todos os direitos reservados. Feito com ❤️ para pessoas especiais.
          </p>
        </div>
      </div>
    </footer>
  );
};