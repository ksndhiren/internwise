import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import DotGrid from "@/components/shared/DotGrid";

const sections = [
  { num: 1, title: "Acceptance of Terms", text: "By accessing or using the Internwise platform, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services. These terms apply to all users, including graduates, employers, and visitors." },
  { num: 2, title: "Service Description", text: "Internwise provides an online platform connecting graduates and students with internship opportunities offered by employers. We act as an intermediary and do not guarantee employment outcomes. The relationship between candidates and employers is separate from our platform services." },
  { num: 3, title: "User Accounts", text: "You may be required to create an account to access certain features of our platform. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately if you suspect unauthorised access." },
  { num: 4, title: "Eligibility", text: "Our platform is intended for individuals who are at least 18 years old or have reached the age of majority in their jurisdiction. Employers must be legitimate businesses registered in their respective jurisdictions. We reserve the right to verify eligibility at any time." },
  { num: 5, title: "User Conduct", text: "You agree to use our platform lawfully and respectfully. You must not post false, misleading, or discriminatory content, attempt to circumvent our systems, or use the platform for any purpose other than legitimate internship recruitment or job seeking." },
  { num: 6, title: "Content Submission", text: "By submitting content to our platform, including CVs, job listings, and profile information, you grant Internwise a non-exclusive licence to use, display, and distribute that content for the purpose of providing our services. You retain ownership of your content." },
  { num: 7, title: "Employer Responsibilities", text: "Employers using Internwise agree to post accurate and lawful internship listings, comply with all applicable employment laws including minimum wage requirements, provide safe and professional working environments, and not discriminate against candidates on any unlawful basis." },
  { num: 8, title: "Intellectual Property", text: "All content, design, logos, and software on the Internwise platform are the property of Kape Strategy Ltd or its licensors. You may not reproduce, modify, distribute, or create derivative works from any part of our platform without our prior written consent." },
  { num: 9, title: "Limitation of Liability", text: "To the maximum extent permitted by law, Internwise and Kape Strategy Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our platform. Our total liability shall not exceed the amount you paid to us in the twelve months preceding the claim." },
  { num: 10, title: "Payment Terms", text: "Where applicable, employer subscription fees and premium services are billed in advance. All fees are non-refundable unless otherwise stated. We reserve the right to change our pricing with reasonable notice. Continued use of the platform after a price change constitutes acceptance." },
  { num: 11, title: "Data Protection", text: "We process personal data in accordance with our Privacy Policy and applicable data protection legislation, including the UK GDPR and the Data Protection Act 2018. By using our platform, you acknowledge that you have read and understood our Privacy Policy." },
  { num: 12, title: "Termination", text: "We may suspend or terminate your access to our platform at any time, with or without cause, and with or without notice. Upon termination, your right to use the platform ceases immediately. Provisions of these terms that by their nature should survive termination shall remain in effect." },
  { num: 13, title: "Modifications", text: "We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated effective date. Your continued use of the platform after changes are posted constitutes acceptance of the modified terms." },
  { num: 14, title: "Indemnification", text: "You agree to indemnify, defend, and hold harmless Internwise, Kape Strategy Ltd, and their officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising from your use of the platform or violation of these terms." },
  { num: 15, title: "Third-Party Links", text: "Our platform may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or availability of these external sites. Accessing third-party links is at your own risk, and we encourage you to review their terms and policies." },
  { num: 16, title: "Force Majeure", text: "Internwise shall not be liable for any failure or delay in performing our obligations under these terms caused by circumstances beyond our reasonable control, including natural disasters, pandemics, government actions, internet failures, or acts of terrorism." },
  { num: 17, title: "Severability", text: "If any provision of these Terms and Conditions is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect." },
  { num: 18, title: "Entire Agreement", text: "These Terms and Conditions, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and Internwise regarding your use of our platform and supersede all prior agreements and understandings." },
  { num: 19, title: "Governing Law", text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales." },
  { num: 20, title: "Contact", text: "If you have any questions about these Terms and Conditions, please contact us at help@internwise.co.uk. Internwise is operated by Kape Strategy Ltd, registered in England and Wales, with its principal office in London, United Kingdom." },
];

const Terms = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Internwise";
  }, []);

  return (
    <>
      <Navbar />

      <section className="relative pt-28 pb-24 bg-gradient-to-br from-navy via-navy-mid to-navy-dark overflow-hidden">
        <DotGrid />
        <Container className="relative z-10 text-center">
          <SectionLabel>Legal</SectionLabel>
          <SectionHeading light className="mt-4">Terms & Conditions</SectionHeading>
        </Container>
      </section>

      <section className="py-24 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            {sections.map((s) => (
              <div key={s.num}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-navy text-white text-xs font-bold font-body flex items-center justify-center">
                    {s.num}
                  </span>
                  <h2 className="font-display text-xl font-bold text-navy">{s.title}</h2>
                </div>
                <p className="font-body text-foreground/70 leading-relaxed pl-11">{s.text}</p>
              </div>
            ))}

            <div className="bg-light-gray rounded-2xl p-8 text-center mt-16">
              <p className="font-body text-foreground/60 mb-4">Have questions about our terms?</p>
              <a href="mailto:help@internwise.co.uk" className="text-coral font-semibold font-body hover:underline">
                help@internwise.co.uk
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Terms;
