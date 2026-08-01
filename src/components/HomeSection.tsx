import { useState, useEffect } from 'react';
import { Shield, Award, Users, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
const slides = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    heading: "Government Liaisoning",
    tagline: "Bridging the gap between your business and government authorities seamlessly."
  },
  {
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&q=80&w=1600",
    heading: "Statutory Approvals",
    tagline: "End-to-end regulatory compliance for land, building, and commercial establishments."
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1600",
    heading: "Compliance Management",
    tagline: "Proactive audits and regulatory filings to keep your operations running securely."
  },
  {
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=1600",
    heading: "Fire & Safety Services",
    tagline: "Comprehensive safety audits, training, and NOC certifications for your premises."
  },
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
    heading: "Event Management",
    tagline: "Transforming your corporate and private visions into unforgettable experiences."
  },
  {
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=1600",
    heading: "DOOH Advertising",
    tagline: "High-impact digital displays that capture audiences in prime metropolitan locations."
  },
  {
    image: "https://images.unsplash.com/photo-1551203673-455faad2719d?auto=format&fit=crop&q=80&w=1600",
    heading: "OOH Advertising",
    tagline: "Dominate the skyline with monumental billboards and strategic transit advertising."
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    heading: "Media Services",
    tagline: "Multi-channel planning and buying across print, broadcast, and digital networks."
  },
  {
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1600",
    heading: "Brand Activations",
    tagline: "Direct consumer engagement programs that build lasting brand loyalty and awareness."
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
    heading: "Corporate Branding",
    tagline: "Crafting powerful visual identities and strategic communications for modern enterprises."
  }
];

export function HomeSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500); // Change slide every 4.5 seconds
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 section-padding bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-blue-600 text-sm font-bold tracking-wide uppercase shadow-sm">
                <Sparkles className="h-4 w-4" />
                <span>Integrated Business Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15]">
                Your Trusted Partner for <span className="text-blue-600">Compliance, Events, Advertising & Brand Growth</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl font-medium">
              Scorpii Solutions delivers end-to-end statutory approvals, liaisoning, event management, outdoor advertising, media solutions, and brand activation services under one roof.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => {
                  const element = document.getElementById('services-preview');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5"
              >
                Explore Services
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 hover:border-blue-200 px-8 py-6 rounded-xl text-lg font-semibold shadow-sm transition-all hover:-translate-y-0.5"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Hero Image Slideshow */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative bg-slate-100">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.heading}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[4500ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent"></div>
                  <div className="absolute bottom-12 left-6 right-6 text-white flex flex-col justify-end">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-2 drop-shadow-md text-white">{slide.heading}</h3>
                    <p className="text-sm md:text-base text-slate-200 drop-shadow">{slide.tagline}</p>
                  </div>
                </div>
              ))}
              
              {/* Pagination Dots overlay */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2.5 z-20">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'bg-blue-600 w-6' : 'bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center animate-soft-pulse z-20">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-gentle-float z-20">
              <Award className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
