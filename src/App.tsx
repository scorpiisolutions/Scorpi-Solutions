import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { ServiceSection } from './components/ServiceSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { TermsSection } from './components/TermsSection';
import { PrivacySection } from './components/PrivacySection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'service' | 'terms' | 'privacy'>('home');

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <HomeSection />
            <AboutSection />
            <FAQSection />
            <ContactSection />
          </>
        ) : currentPage === 'service' ? (
          <ServiceSection setCurrentPage={setCurrentPage} />
        ) : currentPage === 'terms' ? (
          <TermsSection />
        ) : (
          <PrivacySection />
        )}
      </main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Toaster />
    </div>
  );
}