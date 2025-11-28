import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Target, Award, TrendingUp, Zap, Eye, X } from 'lucide-react';
import { Button } from './ui/button';
import adZenBottles from 'figma:asset/a633db3652f756f99ae852712c39ff5f7203e753.png';
import { useState } from 'react';

interface ServiceSectionProps {
  setCurrentPage: (page: 'home' | 'service') => void;
}

export function ServiceSection({ setCurrentPage }: ServiceSectionProps) {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const scrollToContact = () => {
    // Navigate to home page first
    setCurrentPage('home');
    
    // Use setTimeout to wait for the page to render before scrolling
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const services = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Creative Excellence",
      description: "Innovative advertising concepts that capture attention and resonate with your target audience."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision Targeting",
      description: "Data-driven strategies to reach the right customers at the right time with the perfect message."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Brand Visibility",
      description: "Amplify your brand presence across multiple channels and platforms for maximum impact."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth Focus",
      description: "Measurable results that drive business growth and deliver exceptional return on investment."
    }
  ];

  return (
    <section id="service" className="pt-16 min-h-screen">
      {/* Hero Section */}
      <div className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight">
                  Ad Zen
                </h1>
                <p className="text-3xl md:text-4xl text-blue-600 font-medium">
                  Sip. See. Celebrate.
                </p>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Experience advertising in its purest form. Ad Zen combines mindful strategy with creative excellence to deliver campaigns that resonate deeply with your audience and achieve measurable results.
              </p>

              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                Our holistic approach to advertising focuses on balance, clarity, and impact. We create harmonious campaigns that align your brand message with customer needs, delivering peaceful certainty in achieving your business goals.
              </p>

              <div>
                <Button 
                  onClick={scrollToContact}
                  className="btn-primary text-white px-8 py-4 rounded-lg text-lg font-medium"
                >
                  Start Your Journey
                </Button>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative animate-gentle-float">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={adZenBottles}
                  alt="Ad Zen - Bottles with creative advertisements"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center animate-soft-pulse">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-gentle-float">
                <Award className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Features */}
      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-blue-600">Zen Principles</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ad Zen is built on four core principles that guide every campaign we create, ensuring balance, effectiveness, and lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="feature-card text-center animate-slide-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="clean-card p-12 text-center animate-fade-in-up">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              The Art of Mindful Advertising
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Ad Zen represents the perfect harmony between creativity and strategy, where every element works in balance to create powerful, resonant campaigns. Like the ancient philosophy it's named after, our approach emphasizes clarity, simplicity, and profound impact.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">∞</div>
                <p className="text-slate-700 font-medium">Limitless Creativity</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">⚖</div>
                <p className="text-slate-700 font-medium">Perfect Balance</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">☯</div>
                <p className="text-slate-700 font-medium">Harmonious Results</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding-sm bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="clean-card p-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Ready to Experience Ad Zen?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Discover how our mindful approach to advertising can transform your brand and deliver extraordinary results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="btn-primary text-white px-8 py-4 rounded-lg text-lg font-medium"
              >
                Begin Your Journey
              </Button>
              <Button 
                className="btn-outline px-8 py-4 rounded-lg text-lg font-medium"
              >
                Learn More
              </Button>
            </div>
            
            {/* Legal Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Button 
                onClick={() => setShowPrivacyModal(true)}
                className="text-blue-600 hover:text-blue-700 underline text-sm"
                variant="ghost"
              >
                Privacy Policy
              </Button>
              <Button 
                onClick={() => setShowTermsModal(true)}
                className="text-blue-600 hover:text-blue-700 underline text-sm"
                variant="ghost"
              >
                Terms & Conditions
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowPrivacyModal(false)}>
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-800">Ad Zen – Privacy Policy</h2>
              <button 
                onClick={() => setShowPrivacyModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-slate-600" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-slate-600"><strong>Effective Date:</strong> 20/11/2025</p>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">1. Information We Collect</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Advertiser contact details</li>
                  <li>Event details</li>
                  <li>Website analytics</li>
                  <li>Photos/videos of distribution activities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">2. How We Use Information</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Communication, planning, and execution</li>
                  <li>Proof-of-distribution reports</li>
                  <li>Marketing and service improvement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">3. Data Sharing</h3>
                <p className="text-slate-600">Shared only with vendors, event teams, hosting services, or legal authorities.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">4. Storage & Security</h3>
                <p className="text-slate-600">We use secure, encrypted systems. Only authorized staff may access advertiser data.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">5. Cookies & Analytics</h3>
                <p className="text-slate-600">Our site may use cookies for better experience. Users may disable cookies anytime.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">6. Your Rights</h3>
                <p className="text-slate-600">You may request data access, correction, deletion, or opt‑out.</p>
                <p className="text-slate-600 mt-2"><strong>Email:</strong> scorpiisolutions@gmail.com</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">7. Third‑Party Links</h3>
                <p className="text-slate-600">We are not responsible for external site practices.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">8. Policy Updates</h3>
                <p className="text-slate-600">We may update this without notice.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">9. Contact</h3>
                <p className="text-slate-600">Scorpii Solutions – Ad Zen Division</p>
                <p className="text-slate-600">Bengaluru, India</p>
                <p className="text-slate-600"><strong>Email:</strong> scorpiisolutions@gmail.com</p>
                <p className="text-slate-600"><strong>Phone:</strong> +91 9945939407</p>
              </div>
            </div>
            <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-4 flex justify-end">
              <Button 
                onClick={() => setShowPrivacyModal(false)}
                className="btn-primary text-white px-6 py-2 rounded-lg"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowTermsModal(false)}>
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-800">Ad Zen – Terms & Conditions</h2>
              <button 
                onClick={() => setShowTermsModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-slate-600" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-slate-600"><strong>(A Sub-Brand of Scorpii Solutions)</strong></p>
              <p className="text-slate-600"><strong>Effective Date:</strong> 20/11/2025</p>
              <p className="text-slate-600"><strong>Website:</strong> www.scorpiisolutions.com</p>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">1. Introduction</h3>
                <p className="text-slate-600">Ad Zen is a free drinking-water bottle distribution service operated by Scorpii Solutions. We distribute sealed, FSSAI-licensed bottled water carrying advertiser messages at public events, gatherings, institutions, and corporate locations.</p>
                <p className="text-slate-600 mt-2">By accessing or using our services, you agree to these Terms & Conditions.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">2. Nature of Service</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Ad Zen distributes 500ml packaged drinking water bottles, free of cost.</li>
                  <li>Bottles carry printed advertisements provided by clients.</li>
                  <li>Water is sourced only from FSSAI-licensed manufacturers.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">3. Water Quality & Liability Disclaimer</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Ad Zen does not manufacture or alter the water.</li>
                  <li>Bottles are distributed exactly as received.</li>
                  <li>Water quality is the responsibility of the licensed manufacturer.</li>
                  <li>Ad Zen is not liable for contamination, allergic reactions, or misuse.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">4. Advertiser Responsibilities</h3>
                <p className="text-slate-600 mb-2">Advertisers must ensure content:</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Is true, accurate, and compliant with ASCI</li>
                  <li>Follows Consumer Protection Act, 2019</li>
                  <li>Does not violate IP laws or contain offensive material</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">5. Distribution Policy</h3>
                <p className="text-slate-600 mb-2">Ad Zen does not guarantee:</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Specific audience reach</li>
                  <li>Exact number of impressions</li>
                  <li>Weather or event-related changes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">6. Event Permissions</h3>
                <p className="text-slate-600">Advertisers must ensure required approvals are taken for display at events.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">7. Intellectual Property</h3>
                <p className="text-slate-600">Ad Zen branding, layouts, and formats belong to Scorpii Solutions.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">8. Payment & Cancellation</h3>
                <p className="text-slate-600">All payments must be cleared before printing. Post-print cancellations are non-refundable.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">9. Prohibited Categories</h3>
                <p className="text-slate-600">No ads promoting alcohol, tobacco, drugs, scams, hate speech, adult content, etc.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">10. Limitation of Liability</h3>
                <p className="text-slate-600">Ad Zen is not responsible for delays, misuse, event changes, or third‑party actions.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">11. Governing Law</h3>
                <p className="text-slate-600">Governed by Indian law, under Bengaluru jurisdiction.</p>
              </div>
            </div>
            <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-4 flex justify-end">
              <Button 
                onClick={() => setShowTermsModal(false)}
                className="btn-primary text-white px-6 py-2 rounded-lg"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
