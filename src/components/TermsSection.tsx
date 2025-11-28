import { FileText } from 'lucide-react';

export function TermsSection() {
  return (
    <section id="terms" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-slate-800 mb-4">Terms and Conditions</h1>
          <div className="space-y-2 text-slate-600">
            <p>Website: scorpiisolutions.com</p>
            <p>Company: Scorpii Solutions, Bengaluru, India</p>
            <p>Email: scorpiisolutions@gmail.com</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using this website, you agree to be bound by these Terms and Conditions. 
              If you do not agree, please do not use our website or services.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">2. Company Overview</h2>
            <p className="text-slate-600 leading-relaxed">
              Scorpii Solutions ('we,' 'our,' 'us') is an advertising and event management agency that provides 
              brand promotion through customized solutions such as Ad Zen — placing advertisements on drinking 
              water bottles — and through event campaigns.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">3. Website Use</h2>
            <p className="text-slate-600 leading-relaxed">
              You agree to use our website and services only for lawful purposes and in accordance with these Terms. 
              You must not:
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-2 ml-4">
              <li>Use the website for unlawful activities</li>
              <li>Upload or transmit harmful content</li>
              <li>Attempt to hack or interfere with the website</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">4. Services</h2>
            <p className="text-slate-600 leading-relaxed">
              All advertising and event management services are subject to mutual agreement. Pricing and deliverables 
              are shared in writing. Confirmed projects cannot be cancelled without applicable charges.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">5. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              All website content, including text, logos, and graphics, are owned or licensed by Scorpii Solutions. 
              You may not copy or distribute them without written permission.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">6. Payments and Refunds</h2>
            <p className="text-slate-600 leading-relaxed">
              Payments must be made as per the invoice. Refunds, if any, are at the discretion of Scorpii Solutions 
              for cancellations made before project execution.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">7. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              Scorpii Solutions is not liable for any direct, indirect, or consequential damages arising from your 
              use of the website or services.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">8. Third-Party Links</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website may contain links to third-party sites. We are not responsible for their content or 
              privacy practices.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">9. Data Protection</h2>
            <p className="text-slate-600 leading-relaxed">
              We handle user data responsibly under our Privacy Policy, which forms part of these Terms.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">10. Termination</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to terminate access for users who violate these Terms.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">11. Governing Law and Jurisdiction</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms are governed by Indian law, under the jurisdiction of Bengaluru courts.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">12. Contact</h2>
            <p className="text-slate-600 leading-relaxed">
              For any queries, contact us at <a href="mailto:scorpiisolutions@gmail.com" 
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                scorpiisolutions@gmail.com
              </a>.
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-500">
          <p>Last Updated: November 20, 2025</p>
        </div>
      </div>
    </section>
  );
}
