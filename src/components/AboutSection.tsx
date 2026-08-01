import { Target, Users, ShieldCheck, Award, ThumbsUp, Clock, FileText, CheckCircle2, Navigation, Zap, Briefcase, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const coreValues = [
  { name: "Integrity", icon: <ShieldCheck className="w-6 h-6 text-blue-600" /> },
  { name: "Professional Excellence", icon: <Award className="w-6 h-6 text-blue-600" /> },
  { name: "Customer Commitment", icon: <ThumbsUp className="w-6 h-6 text-blue-600" /> },
  { name: "Transparency", icon: <Eye className="w-6 h-6 text-blue-600" /> },
  { name: "Innovation", icon: <Zap className="w-6 h-6 text-blue-600" /> },
  { name: "Timely Delivery", icon: <Clock className="w-6 h-6 text-blue-600" /> },
  { name: "Quality Service", icon: <CheckCircle2 className="w-6 h-6 text-blue-600" /> },
  { name: "Long-Term Partnerships", icon: <Users className="w-6 h-6 text-blue-600" /> }
];

const whyChooseUs = [
  "One-stop solution for statutory approvals and compliance",
  "Experienced government liaisoning professionals",
  "Complete event management solutions",
  "Premium DOOH & OOH advertising network",
  "Integrated media planning and branding",
  "Experienced project management team",
  "End-to-end execution",
  "Customer-centric approach",
  "Reliable documentation support",
  "Timely project delivery"
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Who <span className="text-blue-600">We Are</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              Scorpii Solutions is a multidisciplinary business solutions company specializing in statutory approvals, government liaisoning, regulatory compliance, event management, outdoor advertising, digital media, and brand activation services.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We help businesses, developers, institutions, and organizations navigate complex regulatory processes while delivering impactful marketing and branding solutions.
            </p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200"
              alt="Professional team discussing corporate solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 animate-slide-in">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              Our mission is to simplify regulatory compliance, deliver exceptional event experiences, and create powerful brand visibility through innovative advertising and media solutions while maintaining professionalism, integrity, and excellence.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Navigation className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              To become India's most trusted integrated business solutions company by delivering compliance, advertising, media, and event management services with innovation and reliability.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-50 group-hover:bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  {value.icon}
                </div>
                <h4 className="font-bold text-slate-900">{value.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="animate-fade-in-up bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Why Choose <span className="text-blue-400">Scorpii Solutions?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {whyChooseUs.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-slate-800/90 border border-slate-700/80 p-5 rounded-2xl shadow-sm hover:bg-slate-800 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-100 font-semibold leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}