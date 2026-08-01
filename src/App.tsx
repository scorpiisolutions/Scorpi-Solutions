import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { ServiceSection } from './components/ServiceSection';
import { ServicesPreviewSection } from './components/ServicesPreviewSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { TermsSection } from './components/TermsSection';
import { PrivacySection } from './components/PrivacySection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'service' | 'terms' | 'privacy'>('home');
  const [activeServiceCategory, setActiveServiceCategory] = useState<string | null>(null);

  const handleSetPage = (page: 'home' | 'service' | 'terms' | 'privacy') => {
    setCurrentPage(page);
    if (page !== 'service') {
      setActiveServiceCategory(null);
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={handleSetPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <HomeSection />
            <ServicesPreviewSection 
              setCurrentPage={handleSetPage} 
              setActiveCategory={setActiveServiceCategory} 
            />
            <AboutSection />
            <ContactSection />
          </>
        ) : currentPage === 'service' ? (
          <ServiceSection 
            setCurrentPage={handleSetPage} 
            activeCategory={activeServiceCategory}
            setActiveCategory={setActiveServiceCategory}
          />
        ) : currentPage === 'terms' ? (
          <TermsSection />
        ) : (
          <PrivacySection />
        )}
      </main>
      <Footer currentPage={currentPage} setCurrentPage={handleSetPage} />
      <Toaster />
    </div>
  );
}