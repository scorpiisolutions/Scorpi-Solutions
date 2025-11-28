import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

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
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-slate-800 font-bold text-2xl">Scorpii Solutions</span>
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
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-600">+91 9945939407</span>
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
              <h3 className="font-bold text-slate-800 mb-4">Our Services(Coming Soon)</h3>
              <ul className="space-y-3 text-slate-600 mb-6">
                <li>Virtual Reality Ads</li>
                <li>Interactive Social Media</li>
                <li>Augmented Reality</li>
                <li>AI-Personalized Campaigns</li>
                <li>Sustainable Solutions</li>
                <li>Brand Strategy</li>
              </ul>
              
              <h4 className="font-bold text-slate-800 mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a 
  href="https://www.facebook.com/share/1Cr4TxXhg2/" 
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
  aria-label="Twitter profile"
  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
>
  <Twitter className="h-5 w-5 text-blue-600" />
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
              © {currentYear} Scorpii Solutions. All rights reserved. | Creative Advertising That Builds Trust & Growth
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