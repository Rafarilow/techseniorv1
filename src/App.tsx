import React, { useState, useEffect } from 'react';
import { AccessibilityMenu } from './components/AccessibilityMenu';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TutorialsSection } from './components/TutorialsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Apply font size to document
  useEffect(() => {
    const root = document.documentElement;
    switch (fontSize) {
      case 'large':
        root.style.fontSize = '18px';
        break;
      case 'extra-large':
        root.style.fontSize = '22px';
        break;
      default:
        root.style.fontSize = '16px';
    }
  }, [fontSize]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const changeFontSize = (size: 'normal' | 'large' | 'extra-large') => setFontSize(size);
  const toggleHighContrast = () => setHighContrast(!highContrast);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      darkMode ? 'dark' : ''
    } ${highContrast ? 'high-contrast' : ''}`}>
      <AccessibilityMenu
        darkMode={darkMode}
        fontSize={fontSize}
        highContrast={highContrast}
        onToggleDarkMode={toggleDarkMode}
        onChangeFontSize={changeFontSize}
        onToggleHighContrast={toggleHighContrast}
      />
      
      <Header
        darkMode={darkMode}
        highContrast={highContrast}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
      />
      
      <main>
        <Hero darkMode={darkMode} highContrast={highContrast} />
        <TutorialsSection darkMode={darkMode} highContrast={highContrast} />
        <AboutSection darkMode={darkMode} highContrast={highContrast} />
      </main>
      
      <Footer darkMode={darkMode} highContrast={highContrast} />
    </div>
  );
}

export default App;