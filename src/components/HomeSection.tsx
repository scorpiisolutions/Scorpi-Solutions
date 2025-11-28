import { Shield, Award, Users } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomeSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 section-padding bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight">
                Creative Advertising That <span className="text-blue-600">Builds Trust & Growth</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                We deliver innovative and technology-driven advertising solutions that connect your brand with the right audience through meaningful relationships.
              </p>
            </div>

            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              Scorpii Solutions combines creativity with cutting-edge technology to achieve measurable results. 
              We specialize in data-driven strategies that build lasting relationships between brands and their customers.
            </p>

            <div>
              <Button 
                onClick={scrollToContact}
                className="btn-primary text-white px-8 py-4 rounded-lg text-lg font-medium"
              >
                Start Your Campaign
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-gentle-float">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739285452621-59d92842fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBoYW5kc2hha2UlMjBtZWV0aW5nfGVufDF8fHx8MTc1OTA0Mzk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional business team handshake meeting"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center animate-soft-pulse">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-gentle-float">
              <Award className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
