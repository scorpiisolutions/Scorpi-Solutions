import { useState, useMemo, useEffect } from 'react';
import { 
  ShieldCheck, 
  Calendar, 
  Tv, 
  Map, 
  Megaphone, 
  Zap, 
  Droplet, 
  Search, 
  ArrowLeft, 
  Check, 
  CheckCircle2,
  ChevronRight, 
  X, 
  Building2, 
  Sparkles, 
  Phone, 
  Mail, 
  FileText,
  MessageSquare,
  Clock,
  ArrowRight,
  HelpCircle,
  Award,
  Layers,
  Send
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ImageWithFallback } from './figma/ImageWithFallback';
import serviceStatutoryImg from '../assets/service_statutory.png';
import serviceEventsImg from '../assets/service_events.png';
import serviceDoohImg from '../assets/service_dooh.png';
import oohAdvertisingImg from '../assets/ooh_advertising.jpg';

// High-quality images for services with local asset fallbacks
const serviceStatutory = serviceStatutoryImg;
const serviceEvents = serviceEventsImg;
const serviceDooh = serviceDoohImg;
const adZenBottles = "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=800";
const serviceOoh = oohAdvertisingImg;
const serviceMedia = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800";
const serviceActivations = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800";

interface ServiceSectionProps {
  setCurrentPage: (page: 'home' | 'service' | 'terms' | 'privacy') => void;
}

// Icon mapper for Lucide icons
const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Calendar': return <Calendar className={className} />;
    case 'Tv': return <Tv className={className} />;
    case 'Map': return <Map className={className} />;
    case 'Megaphone': return <Megaphone className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Droplet': return <Droplet className={className} />;
    default: return <Sparkles className={className} />;
  }
};

interface ServicePoint {
  title: string;
  desc: string;
}

interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  imageUrl: string;
  iconName: string;
  // Colors unified to a premium, consistent Slate-Blue and Silver theme
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  badgeColor: string;
  points?: ServicePoint[];
  subsections?: {
    title: string;
    points: ServicePoint[];
  }[];
  isAdZen?: boolean;
}

const servicesData: ServiceItem[] = [
  {
    id: "statutory-approvals",
    title: "Statutory Approvals, Liaisoning & Compliance Management Services",
    shortTitle: "Statutory & Liaisoning",
    description: "End-to-end regulatory approvals, government liaisoning, compliance certificates, and legal documentation management for land, building, and commercial establishments.",
    imageUrl: serviceStatutory,
    iconName: "ShieldCheck",
    color: "from-blue-600 to-slate-700",
    bgColor: "bg-blue-50/50",
    borderColor: "hover:border-blue-400/80",
    textColor: "text-blue-700",
    badgeColor: "bg-blue-100 text-blue-800",
    subsections: [
      {
        title: "1. Land & Development Approvals",
        points: [
          {
            title: "End-to-End Statutory Approvals Handling",
            desc: "Managing complex municipal and state-level clearance processes, securing construction permits and occupancy certificates seamlessly."
          },
          {
            title: "Land Conversion & Regulatory Coordination",
            desc: "Processing agricultural to commercial or residential land conversions with state planning authorities."
          },
          {
            title: "Zonal Planning & Regulatory Sanctions",
            desc: "Aligning construction projects with municipal master plans to secure necessary zone clearances."
          },
          {
            title: "Construction Plan Sanction Management",
            desc: "Submitting and managing structural and architectural plan reviews for building approvals."
          },
          {
            title: "Property Registration & Legal Formalities",
            desc: "Assisting with title deeds, stamp duties, sale deeds, and final government property registry."
          },
          {
            title: "Post-OC Legal Documentation Handling",
            desc: "Securing and verifying legal clearance folders after the Occupancy Certificate (OC) is issued."
          }
        ]
      },
      {
        title: "2. Government Liaisoning & Authority Coordination",
        points: [
          {
            title: "Government Authority Liaisoning",
            desc: "Representing client interests in front of municipal bodies, utility boards, and state secretariats."
          },
          {
            title: "Political & Civic Authority Coordination",
            desc: "Facilitating communication and community-level clearances with local representatives and civic associations."
          },
          {
            title: "Police Liaison & Compliance Management",
            desc: "Securing public permissions, loudspeaker licenses, crowd control permits, and general law enforcement clearances."
          },
          {
            title: "Liaisoning Services",
            desc: "Specialized representative consulting services to bridge corporate needs with administrative bodies."
          }
        ]
      },
      {
        title: "3. Fire, Safety & Risk Management Services",
        points: [
          {
            title: "Fire & Safety Services",
            desc: "Structural fire safety consultations and compliance audits based on national building codes."
          },
          {
            title: "Fire Training Programs",
            desc: "Conducting mandatory staff mock drills, emergency response training, and safety handling certification."
          },
          {
            title: "Fire Certificate Processing & Renewal",
            desc: "Securing initial Fire NOCs and handling annual audit checks for certificate renewal."
          },
          {
            title: "Operational & Risk Management Support",
            desc: "Drafting emergency evacuation plans and conducting hazard analysis."
          }
        ]
      },
      {
        title: "4. Utility, Infrastructure & Technical Approvals",
        points: [
          {
            title: "Lift License Processing",
            desc: "Securing official lift operating licenses from government safety inspectors."
          },
          {
            title: "Lift Safety Inspection & CEIG Approval",
            desc: "Coordinating with the Chief Electrical Inspector to the Government (CEIG) for mechanical and lift safety clearances."
          },
          {
            title: "CEIG Approval & Electrical Safety Compliance",
            desc: "Electrical grid load approvals, generator clearances, and substation compliance audits."
          },
          {
            title: "Borewell Renewal Services",
            desc: "Securing state water authority permissions, registrations, and renewal licenses for ground borewells."
          },
          {
            title: "Solar Rooftop Installation & Approvals",
            desc: "Liaisoning with electrical distribution companies (discoms) for solar net-metering approvals."
          },
          {
            title: "Tree Clearance & Road Cutting Permissions",
            desc: "Obtaining permissions from forest departments and civic road authorities for municipal development works."
          }
        ]
      },
      {
        title: "5. Environmental & Regulatory Compliance",
        points: [
          {
            title: "Environmental Compliance & Regulatory Filings",
            desc: "Submitting quarterly and annual environmental audits to pollution boards."
          },
          {
            title: "PCB CFO (Pollution Control Board – Consent for Operation)",
            desc: "Securing air and water discharge consents from the State Pollution Control Board."
          },
          {
            title: "Statutory Records & Documentation Control",
            desc: "Drafting and maintaining regulatory logs, registers, and filings for government audits."
          }
        ]
      },
      {
        title: "6. Trade, Commercial & Business Licensing",
        points: [
          {
            title: "FSSAI License Application & Renewal",
            desc: "Securing food business registration, state and central licenses for hospitality and retail brands."
          },
          {
            title: "BBMP Trade License Compliance",
            desc: "Applying for municipal trade certificates and health clearance licenses."
          },
          {
            title: "Liquor License Processing & Renewals",
            desc: "Liaisoning with state excise departments for restaurant, bar, and event alcohol licenses."
          },
          {
            title: "Discotheque Licensing & Statutory Clearance",
            desc: "Specialized approvals for sound limits, structural safety, and public entertainment licenses."
          }
        ]
      },
      {
        title: "7. Property, Revenue & Tax Documentation",
        points: [
          {
            title: "Khata Processing & Tax Compliance",
            desc: "Facilitating Khata transfer, bifurcation, and regular municipal property tax assessments."
          },
          {
            title: "NOC & CC Renewal Services",
            desc: "Obtaining and renewing Commencement Certificates (CC) and various NOCs."
          }
        ]
      },
      {
        title: "8. Event & Public Permission Management",
        points: [
          {
            title: "Event Approvals & Statutory Permissions",
            desc: "One-stop clearance for public gatherings, corporate festivals, concerts, and commercial events."
          }
        ]
      }
    ]
  },
  {
    id: "event-management",
    title: "Event Management Services",
    shortTitle: "Event Management",
    description: "Complete event planning, coordination, and technical production. We manage corporate events, product launches, exhibitions, weddings, sound, lighting, LED screens, and permissions.",
    imageUrl: serviceEvents,
    iconName: "Calendar",
    color: "from-blue-600 to-slate-700",
    bgColor: "bg-blue-50/50",
    borderColor: "hover:border-blue-400/80",
    textColor: "text-blue-700",
    badgeColor: "bg-blue-100 text-blue-800",
    points: [
      {
        title: "Corporate Events",
        desc: "Design, planning, and execution of premium shareholder meetings, conferences, seminars, and networking sessions."
      },
      {
        title: "Product Launch Events",
        desc: "High-impact reveal setups with bespoke staging, multimedia coverage, and immersive brand displays."
      },
      {
        title: "Exhibition & Trade Show Management",
        desc: "End-to-end management of consumer expos, trade show pavilions, and heavy-footfall fairs."
      },
      {
        title: "Stage Setup & Decorations",
        desc: "Custom set design, premium carpentry, fabric draping, and modern architectural stage sets."
      },
      {
        title: "Flower Decorations",
        desc: "Curated floral arrangements, backdrops, and installations matching the theme of your gala or ceremony."
      },
      {
        title: "Wedding & Private Event Coordination",
        desc: "Bespoke planning, guest hosting, hospitality, catering coordination, and theme design for private parties."
      },
      {
        title: "Sound & Lighting Setup",
        desc: "State-of-the-art line array speaker systems, ambient mood lighting, stage spots, and visual audio desks."
      },
      {
        title: "LED Wall Arrangements",
        desc: "High-resolution, bright indoor and outdoor LED screen displays for dynamic video backdrops."
      },
      {
        title: "Photography & Videography",
        desc: "Cinematographic event documentation, commercial camera teams, and high-definition photo editing."
      },
      {
        title: "Event Camera Coverage",
        desc: "Live-feed camera systems, crane rigs, and multi-angle broadcast setups for large screens."
      },
      {
        title: "Artist & Celebrity Management",
        desc: "Booking, hosting, hospitality, and scheduling for performers, speakers, and public figures."
      },
      {
        title: "Venue Branding & Setup",
        desc: "Comprehensive directional signage, step-and-repeat backdrops, entrance arches, and flags."
      },
      {
        title: "Stall Fabrication & Installation",
        desc: "Custom wood/aluminum modular stalls for trade show vendors, including graphics and power setup."
      },
      {
        title: "Event Permissions & Coordination",
        desc: "Obtaining performance licenses, fire clearances, electrical NOCs, and security liaisoning."
      }
    ]
  },
  {
    id: "dooh-advertising",
    title: "DOOH (Digital Out-of-Home Advertising)",
    shortTitle: "DOOH Advertising",
    description: "Cutting-edge digital display advertisements. Showcase your brand on digital billboards, airport screens, mall displays, metro promotions, and high-traffic interactive digital campaigns.",
    imageUrl: serviceDooh,
    iconName: "Tv",
    color: "from-blue-600 to-slate-700",
    bgColor: "bg-blue-50/50",
    borderColor: "hover:border-blue-400/80",
    textColor: "text-blue-700",
    badgeColor: "bg-blue-100 text-blue-800",
    points: [
      {
        title: "Digital Billboard Advertising",
        desc: "Dynamic, scheduled ad displays on premium digital screens located along high-traffic expressways."
      },
      {
        title: "LED Screen Advertising",
        desc: "Vibrant video ad loops on commercial outdoor LED screens in prime shopping and dining districts."
      },
      {
        title: "Mall Display Advertising",
        desc: "Reaching active shoppers through digital signage networks, elevator screens, and atrium displays."
      },
      {
        title: "Airport Digital Advertising",
        desc: "Capturing high-income business travelers via premium digital baggage belt screens and lounge displays."
      },
      {
        title: "Metro Station Digital Promotions",
        desc: "High-frequency display ads targeting daily commuters on platform and ticketing hall screens."
      },
      {
        title: "Interactive Digital Campaigns",
        desc: "Engaging audience interactions using motion sensors, touch screens, and gamified digital displays."
      },
      {
        title: "Video Advertisement Displays",
        desc: "Rich media video campaigns optimized for crisp readability on high-brightness outdoor screens."
      },
      {
        title: "Commercial Display Solutions",
        desc: "Bespoke screens and content management systems for corporate lobbies and retail fronts."
      },
      {
        title: "Digital Signage Installation",
        desc: "End-to-end hardware setup, media player configuration, and content management installation."
      },
      {
        title: "High Traffic Area Promotions",
        desc: "Strategic scheduling of display media during peak hours in dense market squares."
      }
    ]
  },
  {
    id: "ooh-advertising",
    title: "OOH Advertising (Out-of-Home)",
    shortTitle: "OOH Advertising",
    description: "Traditional outdoor branding at key high-visibility locations. From massive highways billboards and bus shelters to transit media, auto/cab branding, and mobile van promotions.",
    imageUrl: serviceOoh,
    iconName: "Map",
    color: "from-blue-600 to-slate-700",
    bgColor: "bg-blue-50/50",
    borderColor: "hover:border-blue-400/80",
    textColor: "text-blue-700",
    badgeColor: "bg-blue-100 text-blue-800",
    points: [
      {
        title: "Billboard Advertising",
        desc: "Classic static large-format print boards placed at prime city junctions for permanent visibility."
      },
      {
        title: "Hoarding Advertising",
        desc: "Eye-level printed temporary screens around major construction sites in high-value zones."
      },
      {
        title: "Bus Shelter Advertising",
        desc: "Illuminated poster frames at transit stops, delivering close-up impressions to pedestrians and commuters."
      },
      {
        title: "Pole Kiosk Advertising",
        desc: "Sequential double-sided display panels installed on street utility poles along busy commercial avenues."
      },
      {
        title: "Traffic Signal Branding",
        desc: "High-frequency close-up poster positions at major signals capturing stationary vehicles."
      },
      {
        title: "Wall Wrap Advertising",
        desc: "Massive visual building wraps converting large concrete structures into custom brand landmarks."
      },
      {
        title: "Transit Media Advertising",
        desc: "Mobile brand campaigns wrapped on city buses, passenger trains, and commercial metro coaches."
      },
      {
        title: "Auto & Cab Branding",
        desc: "High-mileage hyper-local advertising using vinyl wraps on taxis and auto-rickshaws."
      },
      {
        title: "Mobile Van Promotions",
        desc: "Customized trucks carrying illuminated billboards and speakers, navigating targeted campaign routes."
      },
      {
        title: "Retail Branding Displays",
        desc: "Premium shop-front branding, glow-sign boards, and exterior wall-mounted commercial frames."
      },
      {
        title: "Highway Advertising",
        desc: "Monumental highway displays targeting long-distance intercity travelers."
      },
      {
        title: "Outdoor Campaign Planning",
        desc: "Route analysis, traffic count auditing, and site selection for optimal outdoor budget allocation."
      }
    ]
  },
  {
    id: "media-services",
    title: "Media Services",
    shortTitle: "Media Services",
    description: "Comprehensive multi-channel media planning, production, and execution. Covers newspaper ads, TV/radio, social media marketing, content creation, graphic design, and PR activities.",
    imageUrl: serviceMedia,
    iconName: "Megaphone",
    color: "from-blue-600 to-slate-700",
    bgColor: "bg-blue-50/50",
    borderColor: "hover:border-blue-400/80",
    textColor: "text-blue-700",
    badgeColor: "bg-blue-100 text-blue-800",
    points: [
      {
        title: "Newspaper Advertising",
        desc: "Full-page, half-page, and classified print placements in leading regional and national dailies."
      },
      {
        title: "Television Advertising",
        desc: "Commercial video ad spots scheduled during prime time slots on major entertainment and news channels."
      },
      {
        title: "Radio Promotions",
        desc: "Catchy audio jingles, sponsorship spots, and presenter mentions on popular FM stations."
      },
      {
        title: "Social Media Marketing",
        desc: "Targeted ad campaigns, organic content plans, and community building on Instagram, LinkedIn, and Facebook."
      },
      {
        title: "Digital Marketing Campaigns",
        desc: "Pay-per-click ads, search engine marketing, and programmatic web banner display networks."
      },
      {
        title: "Content Creation Services",
        desc: "Copywriting, article drafting, video scripts, and press releases written by media professionals."
      },
      {
        title: "Graphic Designing",
        desc: "Visual design of logos, flyers, social posts, print layouts, and corporate identity guidelines."
      },
      {
        title: "Video Production",
        desc: "Filming corporate profiles, promotional reels, animated explainer videos, and social clips."
      },
      {
        title: "Corporate Branding Solutions",
        desc: "Comprehensive identity design, including business cards, letterheads, and brand style guides."
      },
      {
        title: "Print Media Services",
        desc: "Premium printing of annual reports, brochures, catalogs, and marketing collateral."
      },
      {
        title: "Public Relations (PR) Activities",
        desc: "Drafting and distributing press releases, coordinating media interviews, and press event planning."
      },
      {
        title: "Media Buying & Planning",
        desc: "Liaisoning with media houses to negotiate bulk rates and design multi-channel media plans."
      }
    ]
  },
  {
    id: "brand-activations",
    title: "Brand Activations & Promotions",
    shortTitle: "Brand Activations",
    description: "Direct consumer engagement programs that build awareness. We run product sampling campaigns, road shows, mall promotions, influencer marketing, and public area activations.",
    imageUrl: serviceActivations,
    iconName: "Zap",
    color: "from-blue-600 to-slate-700",
    bgColor: "bg-blue-50/50",
    borderColor: "hover:border-blue-400/80",
    textColor: "text-blue-700",
    badgeColor: "bg-blue-100 text-blue-800",
    points: [
      {
        title: "Product Sampling Campaigns",
        desc: "Direct product distribution booths at hypermarkets, offices, and colleges to build product trial."
      },
      {
        title: "In-Mall Promotions",
        desc: "Pop-up brand experiences, product trials, and interactive setups in high-footfall mall atriums."
      },
      {
        title: "Road Shows & Promotional Activities",
        desc: "Promotional trucks traveling across multiple cities with live games, music, and product demos."
      },
      {
        title: "Influencer Marketing Campaigns",
        desc: "Collaborations with micro and macro digital creators to review products and drive social reach."
      },
      {
        title: "Customer Engagement Activities",
        desc: "On-ground contests, puzzles, interactive VR experiences, and giveaways to build brand loyalty."
      },
      {
        title: "Promotional Event Setup",
        desc: "Designing and erecting attractive customized pop-up gazebos, counters, and branding arches."
      },
      {
        title: "Brand Awareness Campaigns",
        desc: "Street-level flash mobs, custom installations, and experiential displays in high-density areas."
      },
      {
        title: "Retail Activation Programs",
        desc: "In-store visual merchandising, displays, and demo staff placed at key point-of-sale locations."
      },
      {
        title: "Experiential Marketing",
        desc: "Creating memorable live brand experiences that evoke emotional connection with consumers."
      },
      {
        title: "Corporate Brand Promotions",
        desc: "Pop-up counters and engagement games set up inside major corporate business parks."
      },
      {
        title: "College & Public Area Activations",
        desc: "Reaching gen-z audiences through college festival sponsorships and interactive campus booths."
      },
      {
        title: "Promotional Merchandise Distribution",
        desc: "Custom printing and gifting of branded t-shirts, caps, bags, and stationery."
      }
    ]
  },
  {
    id: "ad-zen",
    title: "Ad Zen (Water Bottle Advertising)",
    shortTitle: "Ad Zen Bottle Ads",
    description: "Premium drinking-water bottle distribution carrying your custom brand messages. Sourced from FSSAI-licensed manufacturers and distributed at targeted events, malls, and public spaces.",
    imageUrl: adZenBottles,
    iconName: "Droplet",
    color: "from-blue-600 to-slate-700",
    bgColor: "bg-blue-50/50",
    borderColor: "hover:border-blue-400/80",
    textColor: "text-blue-700",
    badgeColor: "bg-blue-100 text-blue-800",
    points: [
      {
        title: "Free Packaged Water Distribution",
        desc: "Distributing 100% free, premium drinking-water bottles at events, public gatherings, and commercial spaces."
      },
      {
        title: "FSSAI Licensed Water Sourcing",
        desc: "Sourcing pure, certified drinking water only from fully inspected and FSSAI-licensed manufacturing facilities."
      },
      {
        title: "Custom Full-Wrap Bottle Branding",
        desc: "High-quality, full-wrap waterproof vinyl bottle labels carrying your corporate brand message and QR codes."
      },
      {
        title: "Targeted Public Event Distribution",
        desc: "Deploying distribution teams to hand out bottles to runners, concert-goers, or business convention delegates."
      },
      {
        title: "Corporate Office Placements",
        desc: "Placing custom-branded water bottles inside corporate lobbies, boardrooms, and cafeteria areas."
      },
      {
        title: "Eco-Conscious Brand Campaigns",
        desc: "Supporting hydration initiatives with recyclable PET bottles, linking corporate responsibility with marketing."
      }
    ],
    isAdZen: true
  }
];

interface ServiceSectionProps {
  setCurrentPage: (page: 'home' | 'service' | 'terms' | 'privacy') => void;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

export function ServiceSection({ setCurrentPage, activeCategory, setActiveCategory }: ServiceSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [highlightedPoint, setHighlightedPoint] = useState<string | null>(null);

  // Form handling
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const activeCategoryData = useMemo(() => {
    return servicesData.find(s => s.id === activeCategory) || null;
  }, [activeCategory]);

  // Global search through services
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const results: { categoryId: string; categoryTitle: string; subheading?: string; text: string }[] = [];
    const query = searchQuery.toLowerCase();

    servicesData.forEach(service => {
      // Check title/description
      if (service.title.toLowerCase().includes(query) || service.description.toLowerCase().includes(query)) {
        results.push({
          categoryId: service.id,
          categoryTitle: service.shortTitle,
          text: service.title
        });
      }

      // Check points
      if (service.points) {
        service.points.forEach(point => {
          if (point.title.toLowerCase().includes(query) || point.desc.toLowerCase().includes(query)) {
            results.push({
              categoryId: service.id,
              categoryTitle: service.shortTitle,
              text: point.title
            });
          }
        });
      }

      // Check subsections
      if (service.subsections) {
        service.subsections.forEach(sub => {
          if (sub.title.toLowerCase().includes(query)) {
            results.push({
              categoryId: service.id,
              categoryTitle: service.shortTitle,
              subheading: sub.title,
              text: sub.title
            });
          }
          sub.points.forEach(point => {
            if (point.title.toLowerCase().includes(query) || point.desc.toLowerCase().includes(query)) {
              results.push({
                categoryId: service.id,
                categoryTitle: service.shortTitle,
                subheading: sub.title,
                text: point.title
              });
            }
          });
        });
      }
    });

    return results.slice(0, 8); // Limit to top 8 search results
  }, [searchQuery]);

  const handleSearchResultClick = (categoryId: string, pointText: string) => {
    setActiveCategory(categoryId);
    setSearchQuery('');
    setHighlightedPoint(pointText);
    
    // Smooth scroll to top of service area
    window.scrollTo({ top: 400, behavior: 'smooth' });

    // Remove highlight after a few seconds
    setTimeout(() => {
      setHighlightedPoint(null);
    }, 4000);
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subjectMessage = activeCategoryData 
      ? `Inquiry for ${activeCategoryData.title}` 
      : 'General Service Inquiry';

    try {
      const response = await fetch("https://formspree.io/f/xnngrkyo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: `[${subjectMessage}] - ${formData.message}`,
        }),
      });

      if (response.ok) {
        toast.success("Thank you! Your inquiry has been sent successfully. We will get back to you shortly.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Service Inquiry submission error:", error);
      toast.error("Failed to send inquiry. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Scroll to top when page loaded or category changed
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  return (
    <section id="service" className="pt-16 min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      {/* Visual Hero Header */}
      <div className="bg-slate-900 text-white relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-12 w-80 h-80 bg-blue-600/5 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-400 text-sm font-semibold tracking-wide uppercase">
            <Sparkles className="h-4 w-4" />
            <span>Discover Scorpii Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Our Professional Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Statutory approvals, expert event coordination, and multi-channel advertising solutions engineered to accelerate business compliance and market presence.
          </p>


        </div>
      </div>

      {/* Main Services Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* OVERVIEW GRID VIEW */}
        {!activeCategory ? (
          <div className="space-y-12 animate-fade-in-up">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white">Browse Our Offerings</h2>
              <p className="text-slate-300 mt-2 font-medium">Select a category below to explore specific details, legal requirements, technical details, and send a direct service inquiry.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => setActiveCategory(service.id)}
                  className={`bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group`}
                >
                  <div>
                    {/* Visual Card Image Header */}
                    <div className="h-56 overflow-hidden relative bg-slate-800">
                      <ImageWithFallback 
                        src={service.imageUrl} 
                        alt={service.shortTitle} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-800/50 to-transparent"></div>
                      {/* Category tag badge at top-left */}
                      <div className="absolute top-3 left-3 flex items-center space-x-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg uppercase tracking-wide">
                        <IconComponent name={service.iconName} className="h-3.5 w-3.5" />
                        <span>Scorpii Expert</span>
                      </div>
                      <div className="absolute bottom-4 left-6 flex items-center space-x-3 text-white pr-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shrink-0">
                          <IconComponent name={service.iconName} className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-extrabold text-white leading-tight drop-shadow-md">
                          {service.shortTitle}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>


                </div>
              ))}
            </div>

            {/* General FAQs/Trust Section */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-slate-700/60 flex flex-col lg:flex-row items-center justify-between gap-8 mt-16 shadow-xl">
              <div className="space-y-4 max-w-2xl">
                <h3 className="text-2xl font-bold text-white">Unsure which services fit your project requirements?</h3>
                <p className="text-slate-300 leading-relaxed font-medium">
                  Our regulatory specialists, marketing experts, and brand activation managers are standing by to consult with you. We customize compliance audits, OOH routes, and event production schedules tailored directly to your project budgets.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center space-x-2 text-sm text-slate-200 font-medium bg-slate-700/60 px-3.5 py-1.5 rounded-full">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <span>Free Consultations</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-200 font-medium bg-slate-700/60 px-3.5 py-1.5 rounded-full">
                    <Award className="h-4 w-4 text-blue-400" />
                    <span>Expert Guidance</span>
                  </div>
                </div>
              </div>
              <Button 
                onClick={() => {
                  const contact = document.getElementById('contact-form');
                  if (contact) {
                    contact.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setCurrentPage('home');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className="btn-primary text-white text-lg font-medium px-8 py-6 rounded-xl shadow-lg shadow-blue-500/20 w-full lg:w-auto flex-shrink-0"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>Contact Our Experts</span>
              </Button>
            </div>
          </div>
        ) : (
          /* DETAILED SINGLE CATEGORY VIEW */
          <div className="grid lg:grid-cols-12 gap-12 items-start animate-fade-in-up">
            
            {/* Sidebar quick switch */}
            <div className="lg:col-span-3 space-y-3 lg:sticky lg:top-24">
              <Button 
                onClick={() => setActiveCategory(null)}
                variant="ghost" 
                className="w-full justify-start text-slate-600 hover:text-blue-600 hover:bg-blue-50 py-3 rounded-lg mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span>Back to all services</span>
              </Button>
              
              <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm space-y-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-3">Service Categories</p>
                {servicesData.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveCategory(service.id)}
                    className={`w-full text-left px-3.5 py-3 rounded-xl text-sm font-medium transition-all flex items-center space-x-3 ${
                      activeCategory === service.id 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                        : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <div className={activeCategory === service.id ? 'text-white' : service.textColor}>
                      <IconComponent name={service.iconName} className="h-4.5 w-4.5" />
                    </div>
                    <span className="truncate">{service.shortTitle}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Category content area */}
            <div className="lg:col-span-6 space-y-8">
              <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm space-y-6">
                
                {/* Large visual banner header */}
                <div className="h-80 relative bg-slate-800">
                  <ImageWithFallback 
                    src={activeCategoryData?.imageUrl || ''} 
                    alt={activeCategoryData?.title || ''} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 space-y-6 pt-6">
                  <div className="space-y-3">
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-800 shadow-sm">
                      <IconComponent name={activeCategoryData?.iconName || ''} className="h-4 w-4 mr-1 text-blue-700" />
                      <span>Scorpii Expert service</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                      {activeCategoryData?.title}
                    </h2>
                  </div>

                  <p className="text-slate-700 text-base leading-relaxed font-medium">
                    {activeCategoryData?.description}
                  </p>

                  {/* Statutory Approvals subsections display */}
                  {activeCategoryData?.subsections && (
                    <div className="space-y-6 border-t border-slate-100 pt-6">
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Detailed Regulatory Divisions</p>
                      <Accordion type="single" collapsible className="w-full space-y-4">
                        {activeCategoryData.subsections.map((sub, i) => (
                          <AccordionItem key={i} value={`item-${i}`} className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-2">
                            <AccordionTrigger className="text-lg font-extrabold text-slate-900 hover:text-blue-600 hover:no-underline flex items-center justify-between">
                              <div className="flex items-center text-left">
                                <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 mr-3"></span>
                                {sub.title}
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4">
                              <ul className="space-y-4 pl-1 mt-2">
                                {sub.points.map((p, idx) => {
                                  const isHighlighted = highlightedPoint && p.title.toLowerCase() === highlightedPoint.toLowerCase();
                                  return (
                                    <li 
                                      key={idx} 
                                      className={`flex items-start text-slate-700 text-sm leading-relaxed p-4 rounded-xl transition-all duration-300 ${
                                        isHighlighted ? 'bg-amber-100 text-amber-900 font-semibold ring-2 ring-amber-300 scale-105' : 'bg-white border border-slate-100 shadow-sm'
                                      }`}
                                    >
                                      <Check className="h-5 w-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
                                      <div className="flex-1">
                                        <span className="font-bold block text-slate-900 text-sm sm:text-base">{p.title}</span>
                                        <span className="text-slate-700 text-xs sm:text-sm mt-1 block leading-relaxed">{p.desc}</span>
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )}

                  {/* Standard Points display for normal services */}
                  {activeCategoryData?.points && !activeCategoryData.isAdZen && (
                    <div className="space-y-6 border-t border-slate-100 pt-6">
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Available Channels & Operations</p>
                      <div className="space-y-4">
                        {activeCategoryData.points.map((point, idx) => {
                          const isHighlighted = highlightedPoint && point.title.toLowerCase() === highlightedPoint.toLowerCase();
                          return (
                            <div 
                              key={idx} 
                              className={`flex items-start space-x-4 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50/50 transition-all ${
                                isHighlighted ? 'bg-amber-100 text-amber-900 font-semibold ring-2 ring-amber-300 scale-105' : 'bg-slate-50/50'
                              }`}
                            >
                              <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <span className="font-bold block text-slate-900 text-sm sm:text-base">{point.title}</span>
                                <span className="text-slate-700 text-xs sm:text-sm mt-0.5 block leading-relaxed">{point.desc}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Custom layout for Ad Zen */}
                  {activeCategoryData?.isAdZen && (
                    <div className="space-y-8 border-t border-slate-100 pt-8">
                      {/* Visual Bottle showcase */}
                      <div className="grid sm:grid-cols-2 gap-8 items-center bg-blue-50/40 p-6 rounded-2xl border border-blue-100/50">
                        <div className="aspect-square rounded-xl overflow-hidden shadow-md">
                          <img 
                            src={adZenBottles} 
                            alt="Ad Zen - Water Bottle Advertisements" 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-bold text-slate-800 text-lg">Sip. See. Celebrate.</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            Mindful advertising placed directly into customers' hands. We distribute FSSAI-licensed water bottles with custom advertiser wraps to target events.
                          </p>
                          <div className="flex flex-col gap-2 pt-2">
                            <Button 
                              onClick={() => setShowPrivacyModal(true)}
                              className="text-blue-600 hover:text-blue-800 underline text-xs font-semibold justify-start p-0 h-auto" 
                              variant="ghost"
                            >
                              Privacy Policy Details
                            </Button>
                            <Button 
                              onClick={() => setShowTermsModal(true)}
                              className="text-blue-600 hover:text-blue-800 underline text-xs font-semibold justify-start p-0 h-auto" 
                              variant="ghost"
                            >
                              Terms & Conditions Details
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Ad Zen Strategy Highlights</p>
                        <div className="space-y-4">
                          {activeCategoryData.points?.map((p, idx) => (
                            <div key={idx} className="flex items-start space-x-4 p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                              <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <span className="font-semibold block text-slate-800 text-sm sm:text-base">{p.title}</span>
                                <span className="text-slate-500 text-xs sm:text-sm mt-0.5 block leading-relaxed">{p.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sticky Lead Request Form */}
            <div className="lg:col-span-3 lg:sticky lg:top-24">
              <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                    <MessageSquare className="h-3.5 w-3.5 mr-1" />
                    <span>Quick Quote</span>
                  </div>
                  <h3 className="text-xl font-bold">Inquire About This Service</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Submit your query. Our service managers respond within 24 business hours.
                  </p>
                </div>

                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs text-slate-300 font-semibold">Your Name *</Label>
                    <Input 
                      id="name"
                      name="name"
                      type="text" 
                      required 
                      placeholder="Your full name"
                      className="bg-white/5 border-slate-800 text-white rounded-lg text-sm focus:bg-white focus:text-slate-900"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs text-slate-300 font-semibold">Email Address *</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email" 
                      required 
                      placeholder="you@company.com"
                      className="bg-white/5 border-slate-800 text-white rounded-lg text-sm focus:bg-white focus:text-slate-900"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs text-slate-300 font-semibold">Phone Number</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      placeholder="+91 0000000000"
                      className="bg-white/5 border-slate-800 text-white rounded-lg text-sm focus:bg-white focus:text-slate-900"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-xs text-slate-300 font-semibold">Company / Brand</Label>
                    <Input 
                      id="company"
                      name="company"
                      type="text" 
                      placeholder="Company name"
                      className="bg-white/5 border-slate-800 text-white rounded-lg text-sm focus:bg-white focus:text-slate-900"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-xs text-slate-300 font-semibold">Message / Scope *</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      required 
                      placeholder="Describe your requirements (scope, timeline, locations)..."
                      rows={4}
                      className="bg-white/5 border-slate-800 text-white rounded-lg text-sm resize-none focus:bg-white focus:text-slate-900"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold py-5 inline-flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Request</span>
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}
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

      {/* Terms & Conditions Modal */}
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
