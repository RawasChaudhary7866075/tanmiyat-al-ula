import HomeNavbar from "@/components/home/HomeNavbar";
import HomeFooter from "@/components/home/HomeFooter";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";

export const metadata = {
  title: "Terms of Service · Tanmiyat Al-Ula",
  description: "Terms governing subscriptions, payments, and service delivery by Tanmiyat Al-Ula.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <HomeNavbar />

      <main className="legal-page">

        {/* HERO */}
        <section className="legal-hero">
          <div className="legal-hero-inner">
            <p className="legal-eyebrow">Tanmiyat Al-Ula for Operations &amp; Maintenance</p>
            <h1>Terms of Service</h1>
            <div className="legal-meta">
              <span>VAT Registration: 311035667800003</span>
              <span className="legal-meta-dot">·</span>
              <span>Riyadh, Kingdom of Saudi Arabia</span>
              <span className="legal-meta-dot">·</span>
              <span>Last updated: June 2026</span>
              <span className="legal-meta-dot">·</span>
              <span>Governed by Saudi Arabian law</span>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="legal-body">
          <div className="legal-body-inner">

            {/* SUMMARY */}
            <div className="legal-summary">
              <p className="legal-summary-label">Summary</p>
              <p>
                By subscribing or booking a service with Tanmiyat Al-Ula, you agree to
                these terms. They explain how our subscriptions work, what we are
                responsible for, how payments work, and how disputes are handled. Please
                read them — they protect both of us.
              </p>
            </div>

            {/* 1 */}
            <div className="legal-section">
              <h2><span className="legal-num">1.</span> About Us &amp; These Terms</h2>
              <div className="legal-divider" />
              <p>
                These Terms of Service govern the relationship between Tanmiyat Al-Ula for
                Operations &amp; Maintenance Company (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) and any individual or
                organisation (&ldquo;you&rdquo;, &ldquo;client&rdquo;) who subscribes to our maintenance plans, books a
                one-off service, or engages us for project work.
              </p>
              <p>
                By subscribing, signing a service agreement, or making a payment, you agree to be
                bound by these terms. If you do not agree, please do not use our services.
              </p>
            </div>

            {/* 2 */}
            <div className="legal-section">
              <h2><span className="legal-num">2.</span> Subscription Plans</h2>
              <div className="legal-divider" />
              <p>
                We offer four subscription tiers (Bronze, Silver, Gold, Platinum) as described on
                our subscriptions page. Each plan includes:
              </p>
              <ul className="legal-list">
                <li>A defined number of Planned Preventive Maintenance (PPM) visits per year</li>
                <li>Reactive callout allowances with the first hour of labour free per callout</li>
                <li>Materials included up to a monthly allowance (SAR 50–300 depending on plan)</li>
                <li>Emergency response within the timeframes stated on the subscriptions page</li>
              </ul>
              <p>
                PPM visits are scheduled on your property&apos;s designated zone day. We will notify
                you at least 5 days in advance of each scheduled visit. Emergency callouts are
                available any day regardless of zone scheduling.
              </p>
              <p>
                Platinum and custom plans are individually scoped following a site assessment. The
                agreed scope document forms part of these terms for Platinum clients.
              </p>
            </div>

            {/* 3 */}
            <div className="legal-section">
              <h2><span className="legal-num">3.</span> What Is and Is Not Included</h2>
              <div className="legal-divider" />
              <p>
                <strong>Included in all plans:</strong> Labour for PPM visits within included hours; first hour of
                labour per reactive callout (within monthly callout allowance); materials up to
                the monthly allowance specified in your plan; photo inspection report after each
                PPM visit; access to your property&apos;s dedicated request portal.
              </p>
              <p>
                <strong>Not included — charged separately:</strong> Labour beyond the included first hour per
                callout (billed at published hourly rates); materials beyond the monthly allowance
                (quoted and approved before ordering); major component replacements (AC units,
                water heaters, pumps, electrical panels); structural or civil works beyond minor
                repairs; any work requiring third-party specialists; night rate premium (20–25%
                above day rate) for callouts between 8pm and 7am.
              </p>
              <p>
                We will always provide a written quote and obtain your approval before undertaking
                any chargeable work beyond your plan. No extra charges will be applied without
                your prior consent.
              </p>
            </div>

            {/* 4 */}
            <div className="legal-section">
              <h2><span className="legal-num">4.</span> Add-On Services</h2>
              <div className="legal-divider" />
              <p>
                Optional add-ons (swimming pool maintenance, generator servicing, desalination
                plant care, garden &amp; irrigation) are available as monthly additions to any plan at
                the rates published on our subscriptions page. Add-ons can be added or removed
                with 30 days notice.
              </p>
            </div>

            {/* 5 */}
            <div className="legal-section">
              <h2><span className="legal-num">5.</span> Payment Terms</h2>
              <div className="legal-divider" />
              <ul className="legal-list">
                <li><strong>Monthly subscriptions:</strong> Invoiced at the start of each calendar month. Payment due within 7 days of invoice date.</li>
                <li><strong>Annual subscriptions:</strong> Invoiced upfront for the full year (with 15% discount applied). Payment due within 14 days.</li>
                <li><strong>Custom / Platinum contracts:</strong> 50% payable upon signing, 50% at the 6-month mark.</li>
                <li><strong>One-off services:</strong> Payment due upon completion of the job, or as agreed in the service quotation.</li>
                <li><strong>Project work:</strong> Milestone-based payments as agreed in the project contract.</li>
              </ul>
              <p>
                All prices are exclusive of Saudi VAT at 15%, which will be added to all invoices.
                VAT invoices are issued via our accounting system and are ZATCA-compliant.
              </p>
              <p>
                <strong>Late payments:</strong> Invoices unpaid after 14 days may result in suspension of
                subscription services. We reserve the right to charge interest on overdue balances
                at the rate permitted under Saudi law.
              </p>
            </div>

            {/* 6 */}
            <div className="legal-section">
              <h2><span className="legal-num">6.</span> Cancellation &amp; Refunds</h2>
              <div className="legal-divider" />
              <ul className="legal-list">
                <li><strong>Monthly plans:</strong> Cancel with 30 days written notice. No refund for the current billing month.</li>
                <li><strong>Annual plans:</strong> Cancel after the first 6 months with 30 days notice. A prorated refund will be issued for unused full months, minus a 10% administration fee.</li>
                <li><strong>Platinum / custom contracts:</strong> As specified in the individual contract. Typically 60 days notice required.</li>
                <li><strong>One-off services:</strong> Cancellations made less than 24 hours before a booked visit may incur a SAR 150 cancellation fee.</li>
              </ul>
              <p>
                We reserve the right to terminate a subscription immediately and without refund if
                a client is abusive to our technicians, repeatedly denies access to the property,
                or fails to pay two or more consecutive invoices.
              </p>
            </div>

            {/* 7 */}
            <div className="legal-section">
              <h2><span className="legal-num">7.</span> Access to Property</h2>
              <div className="legal-divider" />
              <p>
                You agree to provide our technicians with safe, timely access to your property on
                agreed visit days. If our technician arrives at the scheduled time and cannot
                access the property, the visit will be marked as completed and the PPM slot will
                be considered used for that period.
              </p>
              <p>
                For properties requiring security pre-clearance (e.g. Diplomatic Quarter), you are
                responsible for arranging access in advance. We require at least 48 hours notice
                of any access restrictions.
              </p>
            </div>

            {/* 8 */}
            <div className="legal-section">
              <h2><span className="legal-num">8.</span> Our Responsibilities</h2>
              <div className="legal-divider" />
              <ul className="legal-list">
                <li>To provide services with reasonable skill and care using qualified technicians</li>
                <li>To notify you of any issues found during visits and recommend appropriate action</li>
                <li>To obtain your approval before undertaking any chargeable work beyond your plan</li>
                <li>To respond to emergency callouts within the timeframes specified in your plan</li>
                <li>To protect your property and personal data in accordance with our Privacy Policy</li>
                <li>To issue VAT-compliant invoices for all services rendered</li>
              </ul>
            </div>

            {/* 9 */}
            <div className="legal-section">
              <h2><span className="legal-num">9.</span> Limitations of Liability</h2>
              <div className="legal-divider" />
              <p>We are not liable for:</p>
              <ul className="legal-list">
                <li>Pre-existing defects or damage to your property not caused by our work</li>
                <li>Issues arising from equipment or materials supplied by third parties or the client</li>
                <li>Delays caused by circumstances outside our control (extreme weather, road closures, supplier delays)</li>
                <li>Consequential or indirect losses arising from a service failure</li>
              </ul>
              <p>
                Our liability for any direct damage caused by our technicians is limited to the
                cost of remedying that specific damage, up to a maximum of the total annual
                subscription value paid by the client in the preceding 12 months.
              </p>
            </div>

            {/* 10 */}
            <div className="legal-section">
              <h2><span className="legal-num">10.</span> Intellectual Property &amp; Marketing</h2>
              <div className="legal-divider" />
              <p>
                By engaging our services, you grant Tanmiyat Al-Ula the right to reference your
                property type (not your name or address) in anonymised case studies and service
                portfolios. For commercial clients, we may request permission to use your logo in
                our company profile — this requires your explicit written consent and can be
                withdrawn at any time.
              </p>
            </div>

            {/* 11 */}
            <div className="legal-section">
              <h2><span className="legal-num">11.</span> Governing Law &amp; Disputes</h2>
              <div className="legal-divider" />
              <p>
                These Terms of Service are governed by the laws of the Kingdom of Saudi Arabia.
                Any disputes shall first be attempted to be resolved through direct negotiation.
                If unresolved within 30 days, disputes shall be referred to the competent courts
                of Riyadh, Saudi Arabia.
              </p>
            </div>

            {/* 12 */}
            <div className="legal-section">
              <h2><span className="legal-num">12.</span> Changes to These Terms</h2>
              <div className="legal-divider" />
              <p>
                We may update these Terms from time to time. We will provide at least 30 days
                notice of any material changes via WhatsApp or email. Continued use of our
                services after that notice period constitutes acceptance of the updated terms.
              </p>
            </div>

            {/* 13 */}
            <div className="legal-section">
              <h2><span className="legal-num">13.</span> Contact Us</h2>
              <div className="legal-divider" />
              <div className="legal-contact-box">
                <p className="legal-contact-name">Tanmiyat Al-Ula for Operations &amp; Maintenance</p>
                <p>Riyadh, Kingdom of Saudi Arabia</p>
                <p>VAT Registration: 311035667800003</p>
                <p>Email: <a href="mailto:Sales@tanmiyat-ula.com.sa" className="legal-link">Sales@tanmiyat-ula.com.sa</a></p>
                <p>WhatsApp: <a href="https://wa.me/966561213606" className="legal-link">+966 56 121 3606</a></p>
                <p>Website: <a href="https://tanmiyat-ula.com" className="legal-link">tanmiyat-ula.com</a></p>
              </div>
            </div>

          </div>
        </section>

        <WhatsAppFloat />
      </main>

      <HomeFooter />
    </>
  );
}
