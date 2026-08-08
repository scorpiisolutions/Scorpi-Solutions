import { FileText, Mail, MapPin } from 'lucide-react';

export function TermsSection() {
  return (
    <section id="terms" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">TERMS AND CONDITIONS</h1>
          <div className="space-y-1 text-slate-600 font-medium">
            <p>Effective Date: August 8, 2026</p>
          </div>
          <p className="mt-6 text-slate-600 leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
            Welcome to Scorpii Solutions. By accessing or using our website or engaging our services, you agree to comply with these Terms and Conditions.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">1. About Us</h2>
            <p className="text-slate-600 leading-relaxed">
              Scorpii Solutions provides services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 ml-4">
              <li>Event Management</li>
              <li>Brand Activation</li>
              <li>Advertising Services</li>
              <li>Digital Out-of-Home (DOOH) Advertising</li>
              <li>Outdoor Advertising (OOH)</li>
              <li>Media Services</li>
              <li>Business Liaisoning and Compliance Support</li>
              <li>Marketing and Promotional Services</li>
              <li>Any additional services offered by the Company</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">2. Acceptance</h2>
            <p className="text-slate-600 leading-relaxed">
              By using this website or engaging our services, you accept these Terms and Conditions. If you do not agree, please discontinue use of the website.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">3. Quotations</h2>
            <p className="text-slate-600 leading-relaxed">
              All quotations:
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 ml-4">
              <li>are subject to availability;</li>
              <li>are valid only for the period specified;</li>
              <li>may change without prior notice unless accepted in writing.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">4. Orders and Services</h2>
            <p className="text-slate-600 leading-relaxed">
              Services commence only after written confirmation and any applicable advance payment.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Project timelines depend on client approvals, availability of vendors, government permissions, force majeure events, and other practical considerations.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">5. Payments</h2>
            <p className="text-slate-600 leading-relaxed">
              Clients agree to make payments according to agreed terms.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Late payments may:
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 ml-4">
              <li>attract applicable interest where agreed;</li>
              <li>delay ongoing work;</li>
              <li>result in suspension of services until outstanding dues are cleared.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">6. Client Responsibilities</h2>
            <p className="text-slate-600 leading-relaxed">
              Clients shall:
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 ml-4">
              <li>provide accurate information;</li>
              <li>obtain permissions not specifically assigned to Scorpii Solutions;</li>
              <li>review and approve creatives promptly;</li>
              <li>ensure supplied content does not infringe intellectual property rights or violate applicable laws.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">7. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 ml-4">
              <li>Website content belongs to Scorpii Solutions.</li>
              <li>Logos, trademarks, designs, and branding remain the property of their respective owners.</li>
              <li>No material may be copied, reproduced, or distributed without written permission.</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">8. Advertising Content</h2>
            <p className="text-slate-600 leading-relaxed">
              Clients are solely responsible for the legality and accuracy of advertisements, promotional material, logos, trademarks, and claims provided.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Scorpii Solutions reserves the right to reject advertisements that:
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 ml-4">
              <li>violate Indian law;</li>
              <li>contain misleading claims;</li>
              <li>infringe intellectual property rights;</li>
              <li>promote unlawful or prohibited products or services.</li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">9. Event Services</h2>
            <p className="text-slate-600 leading-relaxed">
              Event schedules may change due to:
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 ml-4">
              <li>weather;</li>
              <li>venue restrictions;</li>
              <li>government regulations;</li>
              <li>public safety requirements;</li>
              <li>circumstances beyond our reasonable control.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              We shall not be liable for delays arising from such events.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">10. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by law, Scorpii Solutions shall not be liable for indirect, incidental, consequential, or special damages arising from the use of our website or services.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our total liability shall not exceed the amount actually paid by the client for the specific service giving rise to the claim, except where prohibited by law.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">11. Cancellation and Refunds</h2>
            <p className="text-slate-600 leading-relaxed">
              Cancellation and refund terms shall be governed by the applicable service agreement or quotation.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Where no written agreement exists, refunds, if any, shall be determined at the sole discretion of Scorpii Solutions after deducting costs already incurred.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">12. Confidentiality</h2>
            <p className="text-slate-600 leading-relaxed">
              Both parties shall keep confidential any business information received during the course of providing services unless disclosure is required by law.
            </p>
          </div>

          {/* Section 13 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">13. Third-Party Services</h2>
            <p className="text-slate-600 leading-relaxed">
              Certain services may be performed by third-party vendors. Scorpii Solutions is not responsible for delays, defaults, or losses caused solely by such third parties beyond our reasonable control.
            </p>
          </div>

          {/* Section 14 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">14. Website Availability</h2>
            <p className="text-slate-600 leading-relaxed">
              We do not guarantee uninterrupted or error-free website operation and reserve the right to modify, suspend, or discontinue any part of the website without notice.
            </p>
          </div>

          {/* Section 15 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">15. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms and Conditions shall be governed by the laws of India.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka.
            </p>
          </div>

          {/* Section 16 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">16. Changes</h2>
            <p className="text-slate-600 leading-relaxed">
              Scorpii Solutions reserves the right to update these Terms and Conditions at any time. Continued use of the website constitutes acceptance of the revised terms.
            </p>
          </div>

          {/* Section 17 */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-800">17. Contact</h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3">
              <p className="font-semibold text-slate-900 text-lg">Scorpii Solutions</p>
              <div className="space-y-2 text-slate-700">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p>
                    Email:{' '}
                    <a
                      href="mailto:scorpiisolutions@gmail.com"
                      className="text-blue-600 hover:text-blue-700 font-medium underline transition-colors"
                    >
                      scorpiisolutions@gmail.com
                    </a>
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>
                    Registered Office: Bidadi, Ramanagara, Bengaluru South, Karnataka - 562109
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
          <p>Last Updated: August 8, 2026</p>
        </div>
      </div>
    </section>
  );
}
