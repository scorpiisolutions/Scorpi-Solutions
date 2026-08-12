import { Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface FooterProps {
  currentPage: 'home' | 'service' | 'terms' | 'privacy';
  setCurrentPage: (page: 'home' | 'service' | 'terms' | 'privacy') => void;
}

export function Footer({ currentPage, setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (page: 'home' | 'service' | 'terms' | 'privacy', sectionId?: string) => {
    setCurrentPage(page);
    if (sectionId) {
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex flex-col items-start mb-4 cursor-pointer" onClick={() => handleNavigation('home')}>
                <img src={logoImg} alt="Scorpii Solutions" className="h-12 w-auto object-contain mb-1" />
                <p className="text-blue-600 text-xs sm:text-sm font-semibold italic tracking-wide">"The better way, the better thing"</p>
              </div>
              <p className="text-slate-600 mb-6 max-w-md leading-relaxed">
                Experienced advertising professionals delivering innovative, technology-driven solutions 
                that build trust and drive measurable growth for businesses of all sizes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-600">scorpiisolutions@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-600">#22, Venkatappa Layout, Bidadi, Ramanagara TQ & DT, Karnataka 562109</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-slate-800 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => handleNavigation('home', 'home')}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('service')}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Service
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('home', 'about')}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('home', 'faq')}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('home', 'contact')}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('privacy')}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('terms')}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Terms and Conditions
                  </button>
                </li>
              </ul>
            </div>

            {/* Services & Social */}
            <div>
              <h3 className="font-bold text-slate-800 mb-4">Our Services</h3>
              <ul className="space-y-2.5 text-slate-600 mb-6">
                <li>
                  <button 
                    onClick={() => handleNavigation('service')}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200 text-left text-sm"
                  >
                    Statutory & Liaisoning
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('service')}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200 text-left text-sm"
                  >
                    Event Management
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('service')}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200 text-left text-sm"
                  >
                    DOOH Advertising
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('service')}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200 text-left text-sm"
                  >
                    OOH Advertising
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('service')}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200 text-left text-sm"
                  >
                    Media Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('service')}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200 text-left text-sm"
                  >
                    Brand Activations
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('service')}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200 text-left text-sm"
                  >
                    Ad Zen Bottle Ads
                  </button>
                </li>
              </ul>
              
              <h4 className="font-bold text-slate-800 mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://www.facebook.com/share/1DLPYiTKDw/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                </a>

                <a 
                  href="https://x.com/Scorpii_1910"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="#2563eb">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>


                <a 
  href="https://www.instagram.com/scorpiisolutions?igsh=MWhtbnV4djE5Nm91Nw=="
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
>
  <Instagram className="h-5 w-5 text-blue-600" />
</a>


                <a 
  href="https://www.linkedin.com/in/scorpii-solutions-70457a38b/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
>
  <Linkedin className="h-5 w-5 text-blue-600" />
</a>


              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Scorpii Solutions. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="btn-light flex items-center space-x-2 px-4 py-2 rounded-lg"
            >
              <ArrowUp className="h-4 w-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}