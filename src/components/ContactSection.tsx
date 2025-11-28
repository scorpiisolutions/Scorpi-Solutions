import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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
          company: formData.company,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Thank you for your message! We'll get back to you within 24 hours.");
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Let's Build Your <span className="text-blue-600">Success Story</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to elevate your brand with innovative advertising solutions? 
            Contact our experienced team to discuss your marketing goals and discover how we can help you achieve measurable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div id="contact-form" className="clean-card p-8 animate-slide-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Send className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Send Us a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-700 font-medium">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your company name (optional)"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="form-input resize-none"
                    placeholder="Tell us about your business goals, target audience, and how we can help you achieve success..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary text-white py-4 rounded-lg text-lg font-medium"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div id="contact-info" className="clean-card p-6 animate-slide-in" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-bold text-slate-800 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Email Us</h4>
                    <p className="text-slate-600">scorpiisolutions@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Call Us</h4>
                    <p className="text-slate-600">+91 9945939407</p>
                    <p className="text-sm text-slate-500">Mon-Sat 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Visit Us</h4>
                    <p className="text-slate-600">#22, Venkatappa Layout, Bidadi,<br /> Ramanagara TQ & DT,<br />Karnataka 562109</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="clean-card p-6 animate-slide-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-lg font-bold text-slate-800 mb-4">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://www.facebook.com/share/1Cr4TxXhg2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">Facebook</span>
                </a>

                <a 
                  href="https://x.com/Scorpii_1910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">Twitter</span>
                </a>

                <a 
                  href="https://www.instagram.com/scorpiisolutions?igsh=MWhtbnV4djE5Nm91Nw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">Instagram</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/scorpii-solutions-70457a38b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}