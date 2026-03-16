import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import DotGrid from "@/components/shared/DotGrid";

const sections = [
  { num: 1, title: "Introduction", text: "This Privacy Policy explains how Internwise, operated by Kape Strategy Ltd, collects, uses, and protects your personal data when you use our platforms and services. We are committed to protecting your privacy and handling your data responsibly." },
  { num: 2, title: "Data We Collect", text: "We collect personal information you provide directly, such as your name, email address, CV, and employment preferences. We also collect technical data automatically, including IP addresses, browser type, device information, and usage patterns through cookies and similar technologies." },
  { num: 3, title: "How We Use Your Data", text: "We use your data to provide and improve our services, match candidates with internship opportunities, communicate with you about relevant roles and updates, and ensure the security and integrity of our platforms." },
  { num: 4, title: "Legal Basis", text: "We process your personal data based on your consent, the performance of a contract with you, our legitimate business interests, and compliance with legal obligations. You may withdraw consent at any time where consent is the legal basis for processing." },
  { num: 5, title: "Data Sharing", text: "We share your data with employers when you apply for internship roles, with service providers who help us operate our platforms, and with legal or regulatory authorities when required by law. We do not sell your personal data to third parties." },
  { num: 6, title: "Data Retention", text: "We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When data is no longer needed, it is securely deleted or anonymised." },
  { num: 7, title: "Your Rights", text: "Under applicable data protection law, you have the right to access, correct, delete, or restrict the processing of your personal data. You also have the right to data portability and to object to processing in certain circumstances." },
  { num: 8, title: "Cookies", text: "Our platforms use cookies and similar technologies to enhance your experience, analyse usage, and deliver personalised content. You can manage your cookie preferences through your browser settings or our cookie consent tool." },
  { num: 9, title: "International Transfers", text: "Your data may be transferred to and processed in countries outside the UK and European Economic Area. Where this occurs, we ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection law." },
  { num: 10, title: "Security", text: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is completely secure." },
  { num: 11, title: "Changes to This Policy", text: "We may update this Privacy Policy from time to time. When we make significant changes, we will notify you through our platforms or by email. We encourage you to review this policy periodically." },
  { num: 12, title: "Contact Us", text: "If you have any questions about this Privacy Policy or your personal data, please contact us at help@internwise.co.uk. Our registered address is Kape Strategy Ltd, London, United Kingdom." },
];

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Internwise";
  }, []);

  return (
    <>
      <Navbar />

      <section className="relative pt-28 pb-24 bg-gradient-to-br from-navy via-navy-mid to-navy-dark overflow-hidden">
        <DotGrid />
        <Container className="relative z-10 text-center">
          <SectionLabel>Legal</SectionLabel>
          <SectionHeading light className="mt-4">Privacy Policy</SectionHeading>
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
              <p className="font-body text-foreground/60 mb-4">Have questions about your data or privacy?</p>
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

export default Privacy;
