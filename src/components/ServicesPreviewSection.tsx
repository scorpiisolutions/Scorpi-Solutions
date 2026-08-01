import { 
  ShieldCheck, 
  Calendar, 
  Tv, 
  Map, 
  Megaphone, 
  Zap, 
  Droplet, 
  ArrowRight,
  Sparkles,
  Briefcase,
  Flame,
  Settings
} from 'lucide-react';
import { Button } from './ui/button';

interface ServicesPreviewSectionProps {
  setCurrentPage: (page: 'home' | 'service' | 'terms' | 'privacy') => void;
  setActiveCategory: (category: string | null) => void;
}

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Calendar': return <Calendar className={className} />;
    case 'Tv': return <Tv className={className} />;
    case 'Map': return <Map className={className} />;
    case 'Megaphone': return <Megaphone className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Droplet': return <Droplet className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Flame': return <Flame className={className} />;
    case 'Settings': return <Settings className={className} />;
    default: return <Sparkles className={className} />;
  }
};

const previewData = [
  {
    id: "statutory-approvals",
    title: "Statutory Approvals & Compliance",
    description: "End-to-end regulatory approvals, compliance certificates, and legal documentation management.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    iconName: "ShieldCheck"
  },
  {
    id: "statutory-approvals",
    title: "Government Liaisoning",
    description: "Representing client interests in front of municipal bodies, utility boards, and state secretariats.",
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800",
    iconName: "Briefcase"
  },
  {
    id: "statutory-approvals",
    title: "Fire & Safety Services",
    description: "Structural fire safety consultations and compliance audits based on national building codes.",
    imageUrl: "https://images.unsplash.com/photo-1542622589-70335e236318?auto=format&fit=crop&q=80&w=800",
    iconName: "Flame"
  },
  {
    id: "statutory-approvals",
    title: "Utility & Technical Approvals",
    description: "Electrical grid load approvals, generator clearances, and substation compliance audits.",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800",
    iconName: "Settings"
  },
  {
    id: "event-management",
    title: "Event Management",
    description: "Complete corporate and private event planning, coordination, sound, lighting, and permissions.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    iconName: "Calendar"
  },
  {
    id: "dooh-advertising",
    title: "DOOH Advertising",
    description: "Cutting-edge digital display advertisements on mall walls, airport screens, and digital billboards.",
    imageUrl: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800",
    iconName: "Tv"
  },
  {
    id: "ooh-advertising",
    title: "OOH Advertising",
    description: "Traditional highway billboards, hoardings, transit wrappers, and auto/cab branding.",
    imageUrl: "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?auto=format&fit=crop&q=80&w=800",
    iconName: "Map"
  },
  {
    id: "media-services",
    title: "Media Services",
    description: "Multi-channel media plans covering newspaper ads, television slots, and radio jingles.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    iconName: "Megaphone"
  },
  {
    id: "brand-activations",
    title: "Brand Activations",
    description: "Direct consumer engagement road shows, interactive mall pavilions, and sampling booths.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    iconName: "Zap"
  }
];

export function ServicesPreviewSection({ setCurrentPage, setActiveCategory }: ServicesPreviewSectionProps) {
  const handleNavigateToService = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage('service');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="services-preview" className="section-padding bg-slate-50/50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Services Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-blue-600 font-semibold tracking-wider uppercase mb-4 text-sm sm:text-base">
            Professional Business Solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Our <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
            From statutory regulatory liaisoning to full-cycle event production and billboard networks, we handle everything required to drive compliance and visual growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewData.map((service) => (
            <div 
              key={service.id}
              onClick={() => handleNavigateToService(service.id)}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
            >
              <div>
                {/* Visual Cover Image */}
                <div className="h-56 overflow-hidden relative bg-slate-200">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 flex items-center space-x-3 text-white pr-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shrink-0">
                      <IconComponent name={service.iconName} className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <Button 
                  className="w-full justify-between items-center group-hover:bg-blue-600 group-hover:text-white transition-colors py-5 border border-slate-200 hover:border-blue-600 rounded-xl text-slate-900 font-semibold"
                  variant="outline"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
