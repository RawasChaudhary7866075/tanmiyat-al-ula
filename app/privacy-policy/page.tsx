import HomeNavbar from "@/components/home/HomeNavbar";
import HomeFooter from "@/components/home/HomeFooter";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";

export const metadata = {
  title: "Privacy Policy · Tanmiyat Al-Ula",
  description: "How Tanmiyat Al-Ula collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HomeNavbar />

      <main className="legal-page">

        {/* HERO */}
        <section className="legal-hero">
          <div className="legal-hero-inner">
            <p className="legal-eyebrow">Tanmiyat Al-Ula for Operations &amp; Maintenance</p>
            <h1>Privacy Policy</h1>
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
                We collect only the information needed to provide our maintenance services.
                We do not sell your data or share it with third parties except where
                required to deliver the service or comply with Saudi law. You have the
                right to access, correct, or delete your information at any time.
              </p>
            </div>

            {/* 1 */}
            <div className="legal-section">
              <h2><span className="legal-num">1.</span> Who We Are</h2>
              <div className="legal-divider" />
              <p>
                This Privacy Policy applies to Tanmiyat Al-Ula for Operations &amp; Maintenance
                Company (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), registered in the Kingdom of Saudi Arabia with VAT
                number 311035667800003.
              </p>
              <p>
                We provide home maintenance, subscription-based property services, and related
                works to residential and commercial clients in Riyadh. This policy explains how we
                collect, use, store, and protect your personal information when you use our
                services, visit our website (tanmiyat-ula.com), or contact us via WhatsApp, email,
                or our client portal.
              </p>
            </div>

            {/* 2 */}
            <div className="legal-section">
              <h2><span className="legal-num">2.</span> What Information We Collect</h2>
              <div className="legal-divider" />
              <p>We collect information you provide directly to us and information generated through your use of our services.</p>
              <p>
                <strong>Identity &amp; contact:</strong> Full name, phone number, email address, property address and
                location details, property type and size, National ID or Iqama number (where
                required for contract purposes), and VAT registration number for commercial clients.
              </p>
              <p>
                <strong>Service &amp; operational:</strong> Work order history, service requests and job descriptions,
                photos taken during inspections (with your knowledge), technician visit logs and
                service reports, subscription plan details and billing history, and communications
                via WhatsApp, email, or our client portal.
              </p>
              <p>
                <strong>Technical (website):</strong> IP address, browser type, device information, pages visited,
                time spent on our website, and form submissions.
              </p>
            </div>

            {/* 3 */}
            <div className="legal-section">
              <h2><span className="legal-num">3.</span> How We Use Your Information</h2>
              <div className="legal-divider" />
              <ul className="legal-list">
                <li>To deliver, schedule, and manage maintenance services at your property</li>
                <li>To create and manage your subscription plan and associated work orders</li>
                <li>To send service reminders, PPM visit notifications, and job updates</li>
                <li>To generate VAT-compliant invoices through Zoho Books</li>
                <li>To log and track work orders in our maintenance management system</li>
                <li>To respond to your enquiries, complaints, and service requests</li>
                <li>To comply with Saudi Arabian legal and regulatory requirements</li>
                <li>To improve our services based on aggregated, anonymised feedback</li>
              </ul>
              <p>
                We do not use your information for automated decision-making or profiling for
                marketing purposes without your explicit consent.
              </p>
            </div>

            {/* 4 */}
            <div className="legal-section">
              <h2><span className="legal-num">4.</span> How We Share Your Information</h2>
              <div className="legal-divider" />
              <p>We do not sell, rent, or trade your personal information. We may share it only in the following limited circumstances:</p>
              <ul className="legal-list">
                <li><strong>Service delivery:</strong> Our technicians have access to your name, property address, and work order details as necessary to perform their work</li>
                <li><strong>Software platforms:</strong> We use GoHighLevel (CRM), our maintenance management system, and Zoho Books (accounting) — all bound by their own privacy policies</li>
                <li><strong>Legal compliance:</strong> We may disclose information where required by Saudi Arabian law, court order, or government authority</li>
                <li><strong>Business transfers:</strong> Your data may be transferred in the event of a merger or acquisition, with appropriate notice to you</li>
              </ul>
            </div>

            {/* 5 */}
            <div className="legal-section">
              <h2><span className="legal-num">5.</span> Photos Taken During Visits</h2>
              <div className="legal-divider" />
              <p>
                Our technicians take photographs during every PPM visit as part of the inspection
                report. Photos are taken of your property&apos;s systems and fixtures (AC units,
                electrical panels, plumbing, etc.) — not of personal belongings, people, or
                private spaces.
              </p>
              <p>
                Photos are stored securely and shared with you as part of your service report.
                They are retained for the duration of your subscription and up to 2 years after
                for warranty and dispute purposes.
              </p>
            </div>

            {/* 6 */}
            <div className="legal-section">
              <h2><span className="legal-num">6.</span> Data Retention</h2>
              <div className="legal-divider" />
              <ul className="legal-list">
                <li><strong>Active subscriber data:</strong> Retained for the duration of your subscription</li>
                <li><strong>Billing and invoice records:</strong> Retained for 7 years in compliance with Saudi tax regulations</li>
                <li><strong>Work order and visit history:</strong> Retained for 3 years after the last service date</li>
                <li><strong>Enquiry and lead data:</strong> Retained for 12 months if no contract is signed</li>
                <li><strong>Website visitor data:</strong> Retained for up to 12 months</li>
              </ul>
            </div>

            {/* 7 */}
            <div className="legal-section">
              <h2><span className="legal-num">7.</span> Your Rights</h2>
              <div className="legal-divider" />
              <p>Under Saudi Arabian data protection principles and the Personal Data Protection Law (PDPL), you have the right to:</p>
              <ul className="legal-list">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your data, subject to legal retention requirements</li>
                <li>Withdraw consent for non-essential communications at any time</li>
                <li>Lodge a complaint with the Saudi Data and Artificial Intelligence Authority (SDAIA)</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:Sales@tanmiyat-ula.com.sa" className="legal-link">Sales@tanmiyat-ula.com.sa</a>
                {" "}or WhatsApp{" "}
                <a href="https://wa.me/966561213606" className="legal-link">+966 56 121 3606</a>.
              </p>
            </div>

            {/* 8 */}
            <div className="legal-section">
              <h2><span className="legal-num">8.</span> Security</h2>
              <div className="legal-divider" />
              <p>
                We take reasonable technical and organisational measures to protect your personal
                information including password-protected systems, access controls, and encrypted
                communication channels.
              </p>
              <p>
                No method of transmission over the internet is 100% secure. If you believe your
                data has been compromised, please contact us immediately.
              </p>
            </div>

            {/* 9 */}
            <div className="legal-section">
              <h2><span className="legal-num">9.</span> Changes to This Policy</h2>
              <div className="legal-divider" />
              <p>
                We may update this Privacy Policy from time to time. We will update the &ldquo;last
                updated&rdquo; date and notify you via WhatsApp or email where changes are significant.
                Continued use of our services constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* 10 */}
            <div className="legal-section">
              <h2><span className="legal-num">10.</span> Contact Us</h2>
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
