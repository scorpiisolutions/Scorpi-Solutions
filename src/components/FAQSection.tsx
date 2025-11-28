import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { HelpCircle, MessageCircle } from 'lucide-react';

export function FAQSection() {
  const scrollToContactForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToContactInfo = () => {
    const element = document.getElementById('contact-info');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const faqs = [
    {
      id: "item-1",
      question: "What types of advertising do you specialize in?",
      answer: "We specialize in comprehensive digital advertising solutions including Virtual Reality brand experiences, Interactive Social Media campaigns, Augmented Reality filters and product try-ons, AI-personalized content, and sustainable Eco-Friendly campaigns. Our data-driven approach ensures maximum ROI and meaningful customer engagement across all platforms."
    },
    {
      id: "item-2",
      question: "Can you create AI-powered campaigns?",
      answer: "Yes, we excel in AI-powered advertising! Our campaigns use machine learning algorithms to analyze audience behavior, optimize content in real-time, and deliver personalized experiences at scale. We leverage predictive analytics, automated optimization, dynamic content generation, and intelligent targeting to ensure superior performance and measurable results."
    },
    {
      id: "item-3",
      question: "How do you measure success?",
      answer: "We use advanced analytics and comprehensive performance tracking to measure success across multiple dimensions: engagement rates, conversion metrics, brand awareness growth, customer acquisition costs, lifetime value improvements, and ROI analysis. Our detailed reporting provides clear insights into campaign performance and actionable recommendations for continuous improvement."
    },
    {
      id: "item-4",
      question: "Do you work with both startups and large companies?",
      answer: "Absolutely! We offer scalable solutions tailored to businesses of all sizes. For startups, we provide cost-effective packages focusing on high-impact digital strategies. For large enterprises, we deliver comprehensive multi-platform campaigns with dedicated account management, advanced analytics, and strategic consulting. Every client receives professional service and cutting-edge technology regardless of company size."
    },
    {
      id: "item-5",
      question: "What makes your approach different from other agencies?",
      answer: "Our unique advantage lies in combining creative excellence with advanced technology and data-driven insights. We focus on building long-term client relationships, maintaining transparency in all communications, using sustainable practices, and delivering measurable results. Our team brings together experienced strategists, creative professionals, and technology experts to ensure every campaign exceeds expectations."
    },
    {
      id: "item-6",
      question: "How long does it typically take to see results?",
      answer: "Results timelines vary depending on campaign type and objectives. For digital campaigns, you can expect to see initial metrics within 24-48 hours, with meaningful insights emerging within the first week. Comprehensive results and optimization recommendations typically become clear within 30-60 days. We provide regular reporting and maintain open communication throughout the entire process."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageCircle className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get answers to common questions about our professional advertising services and innovative approach to digital marketing.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="clean-card border-none rounded-lg px-6 animate-slide-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-slate-800 group [&[data-state=open]]:text-blue-600">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors duration-200">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-semibold text-lg text-left">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-6 leading-relaxed ml-14">
                <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 clean-card">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-slate-600 mb-6">
            Our team is here to help you understand how we can best serve your advertising needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContactForm}
              className="btn-primary text-white px-6 py-3 rounded-lg font-medium"
            >
              Schedule a Consultation
            </button>
            <button 
              onClick={scrollToContactInfo}
              className="btn-outline px-6 py-3 rounded-lg font-medium"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}