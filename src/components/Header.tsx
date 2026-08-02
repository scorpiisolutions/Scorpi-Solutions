import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface HeaderProps {
  currentPage: 'home' | 'service' | 'terms' | 'privacy';
  setCurrentPage: (page: 'home' | 'service' | 'terms' | 'privacy') => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (page: 'home' | 'service' | 'terms' | 'privacy', sectionId?: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    if (sectionId) {
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full header-nav shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer py-1" onClick={() => handleNavigation('home')}>
            <img src={logoImg} alt="Scorpii Solutions" className="h-10 sm:h-12 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleNavigation('home', 'home')}
                className="text-slate-700 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('service')}
                className="text-slate-700 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 font-medium"
              >
                Service
              </button>
              <button
                onClick={() => handleNavigation('home', 'about')}
                className="text-slate-700 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 font-medium"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('home', 'contact')}
                className="btn-primary text-white px-6 py-2 rounded-lg font-medium ml-4"
              >
                Contact Us
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <button
                onClick={() => handleNavigation('home', 'home')}
                className="text-slate-700 block px-4 py-3 rounded-lg w-full text-left transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('service')}
                className="text-slate-700 block px-4 py-3 rounded-lg w-full text-left transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 font-medium"
              >
                Service
              </button>
              <button
                onClick={() => handleNavigation('home', 'about')}
                className="text-slate-700 block px-4 py-3 rounded-lg w-full text-left transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 font-medium"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('home', 'contact')}
                className="btn-primary text-white block px-4 py-3 rounded-lg w-full text-left font-medium mt-2"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}