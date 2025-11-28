import { Card, CardContent } from './ui/card';
import { Target, Eye, Lightbulb, TrendingUp, Users, Award, Rocket, Zap, Globe, BarChart3, Shield, Heart, Leaf } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-blue-600 font-semibold tracking-wider uppercase mb-4 text-lg">
            INNOVATE. ADVERTISE. CELEBRATE.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Experienced & <span className="text-blue-600">Innovative Professionals</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We blend creativity with technology to achieve measurable results, building lasting relationships 
            between brands and their customers through data-driven strategies and cutting-edge innovation.
          </p>
        </div>

        {/* Professional Image Showcase */}
        <div className="mb-20 animate-gentle-float">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc1OTA0Mzk5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern office workspace with professional team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Company Values Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Who We Are */}
          <div className="clean-card p-8 animate-slide-in">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Who We Are</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Experienced and innovative advertising professionals who combine creative vision with strategic thinking. 
              Our team brings decades of industry expertise, cutting-edge technology knowledge, and a proven track record 
              of delivering exceptional results for businesses of all sizes.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="trust-badge">
                <Award className="h-4 w-4" />
                <span>Industry Leaders</span>
              </div>
              <div className="trust-badge">
                <Shield className="h-4 w-4" />
                <span>Certified Experts</span>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="clean-card p-8 animate-slide-in" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Blending creativity with technology to achieve measurable results. We create advertising solutions 
              that not only capture attention but drive real business growth, building lasting relationships 
              between brands and their customers through strategic innovation and authentic storytelling.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="trust-badge">
                <Heart className="h-4 w-4" />
                <span>Relationship-Focused</span>
              </div>
              <div className="trust-badge">
                <TrendingUp className="h-4 w-4" />
                <span>Growth-Driven</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="clean-card p-8 mb-20 animate-fade-in-up">
          <div className="flex items-center mb-8 justify-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800">Our Core Values</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Trust</h4>
              <p className="text-slate-600 text-sm">Transparent communication and reliable results in every project.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Innovation</h4>
              <p className="text-slate-600 text-sm">Cutting-edge technology and creative solutions for modern challenges.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Sustainability</h4>
              <p className="text-slate-600 text-sm">Eco-friendly campaigns and responsible business practices.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Client Success</h4>
              <p className="text-slate-600 text-sm">Your growth and success is our primary mission and focus.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why Choose <span className="text-blue-600">Scorpii Solutions?</span>
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We offer unparalleled expertise in digital marketing with a focus on measurable results, 
            innovative strategies, and long-term partnerships that grow with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="feature-card text-center animate-slide-in">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-3">Data-Driven Strategies</h4>
            <p className="text-slate-600">
              Advanced analytics and market insights power every campaign decision for maximum ROI.
            </p>
          </div>

          <div className="feature-card text-center animate-slide-in" style={{animationDelay: '0.1s'}}>
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-3">Global Reach</h4>
            <p className="text-slate-600">
              Worldwide network of partnerships and platforms to amplify your brand across every market.
            </p>
          </div>

          <div className="feature-card text-center animate-slide-in" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-3">Cutting-Edge Technology</h4>
            <p className="text-slate-600">
              Latest tools and platforms including AI, AR/VR, and advanced automation for superior results.
            </p>
          </div>

          <div className="feature-card text-center animate-slide-in" style={{animationDelay: '0.3s'}}>
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-3">Proven Results</h4>
            <p className="text-slate-600">
              Long-term partnerships built on trust, transparency, and consistent delivery of exceptional results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}