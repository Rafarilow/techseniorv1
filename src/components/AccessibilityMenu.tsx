import React, { useState } from 'react';
import { Settings, Sun, Moon, Type, Eye } from 'lucide-react';

interface AccessibilityMenuProps {
  darkMode: boolean;
  fontSize: 'normal' | 'large' | 'extra-large';
  highContrast: boolean;
  onToggleDarkMode: () => void;
  onChangeFontSize: (size: 'normal' | 'large' | 'extra-large') => void;
  onToggleHighContrast: () => void;
}

export const AccessibilityMenu: React.FC<AccessibilityMenuProps> = ({
  darkMode,
  fontSize,
  highContrast,
  onToggleDarkMode,
  onChangeFontSize,
  onToggleHighContrast,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          darkMode 
            ? 'bg-gray-700 text-white hover:bg-gray-600' 
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
        aria-label="Menu de Acessibilidade"
      >
        <Settings className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className={`absolute top-16 right-0 w-72 rounded-lg shadow-xl border p-4 space-y-4 ${
          darkMode 
            ? 'bg-gray-800 border-gray-600 text-white' 
            : 'bg-white border-gray-200 text-gray-800'
        }`}>
          <h3 className="font-semibold text-lg mb-3">Acessibilidade</h3>
          
          {/* Dark Mode */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              <span>Modo Escuro</span>
            </label>
            <button
              onClick={onToggleDarkMode}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                darkMode ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Font Size */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <Type className="w-5 h-5" />
              <span>Tamanho da Fonte</span>
            </label>
            <div className="flex space-x-2">
              {['normal', 'large', 'extra-large'].map((size) => (
                <button
                  key={size}
                  onClick={() => onChangeFontSize(size as any)}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    fontSize === size
                      ? 'bg-blue-600 text-white'
                      : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {size === 'normal' ? 'A' : size === 'large' ? 'A+' : 'A++'}
                </button>
              ))}
            </div>
          </div>

          {/* High Contrast */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <Eye className="w-5 h-5" />
              <span>Alto Contraste</span>
            </label>
            <button
              onClick={onToggleHighContrast}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                highContrast ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  highContrast ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};