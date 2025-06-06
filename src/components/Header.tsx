import React from 'react';
import { Menu, X, Smartphone } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  highContrast: boolean;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  highContrast,
  mobileMenuOpen,
  onToggleMobileMenu,
}) => {
  const baseClasses = darkMode 
    ? 'bg-gray-900 text-white' 
    : highContrast 
    ? 'bg-black text-white' 
    : 'bg-white text-gray-800';

  const linkClasses = darkMode 
    ? 'hover:text-blue-400 transition-colors' 
    : highContrast
    ? 'hover:text-yellow-300 transition-colors'
    : 'hover:text-blue-600 transition-colors';

  return (
    <header className={`${baseClasses} shadow-lg fixed w-full top-0 z-40`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Smartphone className="w-8 h-8 text-blue-600" />
            <h1 className="text-xl font-bold">TechSênior</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className={linkClasses}>Início</a>
            <a href="#tutoriais" className={linkClasses}>Tutoriais</a>
            <a href="#sobre" className={linkClasses}>Sobre</a>
            <a href="#contato" className={linkClasses}>Contato</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={onToggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className={linkClasses}>Início</a>
              <a href="#tutoriais" className={linkClasses}>Tutoriais</a>
              <a href="#sobre" className={linkClasses}>Sobre</a>
              <a href="#contato" className={linkClasses}>Contato</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};