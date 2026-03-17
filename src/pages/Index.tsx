import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { ArrowRight, ExternalLink, Check, Mail, MapPin, Globe, GraduationCap, Shield, Heart, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import DotGrid from "@/components/shared/DotGrid";
import BlobDecoration from "@/components/shared/BlobDecoration";
import ScrollIndicator from "@/components/shared/ScrollIndicator";
import { Button } from "@/components/ui/button";

/* ---------- Hero ---------- */
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy-mid to-navy-dark overflow-hidden">
    <DotGrid />
    <BlobDecoration color="sky" className="w-96 h-96 top-20 -left-48 animation-delay-2000" />
    <BlobDecoration color="sky" className="w-72 h-72 bottom-32 right-10" />
    <BlobDecoration color="coral" className="w-80 h-80 top-1/3 right-1/4 animation-delay-4000" />

    <Container className="relative z-10 text-center py-20 lg:py-24">
      <div className="animate-fade-in-up max-w-4xl mx-auto">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-sky animate-pulse-dot" />
          <span className="text-white/80 text-sm font-body">Your Internship Specialist - Since 2010</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="text-primary-foreground">Connecting Global Employers</span>
          <br />
          <span className="text-sky">with Global Talent</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-3 font-body">
          Internwise is the internship recruitment specialist helping graduates take their first career step and giving employers direct access to fresh, motivated talent.
        </p>
        <p className="text-white/50 text-base max-w-2xl mx-auto mb-8 font-body">
          Operating across the UK and Europe with a single mission: reduce youth unemployment by making internship connections simple, fast, and effective.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="https://internwise.co.uk" target="_blank" rel="noopener noreferrer">
            <Button variant="coral" size="xl">
              Find Your Internship <ArrowRight size={18} />
            </Button>
          </a>
          <a href="https://internwise.co.uk/employers" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost-hero" size="xl">Post a Role</Button>
          </a>
        </div>

        {/* Region pills */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="text-white/40 text-sm font-body">Available in</span>
          <a href="https://internwise.co.uk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm hover:bg-white/15 transition-colors font-body">
            <img src="/united-kingdom.png" alt="UK flag" className="w-5 h-5 rounded-full object-cover" /> United Kingdom
          </a>
          <a href="https://internwise.eu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm hover:bg-white/15 transition-colors font-body">
            <img src="/european.png" alt="EU flag" className="w-5 h-5 rounded-full object-cover" /> Europe
          </a>
        </div>
      </div>
    </Container>
    <ScrollIndicator />
  </section>
);

/* ---------- Mission ---------- */
const stats = [
  { value: "15,000+", label: "Employers" },
  { value: "500K+", label: "Candidates" },
  { value: "2", label: "Active Platforms" },
  { value: "Since 2010", label: "Established" },
];

const MissionSection = () => (
  <section id="mission" className="py-24 lg:py-32 bg-background">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <div>
          <SectionLabel>Why We Exist</SectionLabel>
          <SectionHeading className="mt-4 mb-6">
            Reducing Youth Unemployment, One Internship at a Time
          </SectionHeading>
          <div className="w-16 h-1 bg-coral rounded-full" />
        </div>
        <div className="space-y-5 font-body text-foreground/70 leading-relaxed">
          <p>Youth unemployment remains one of the most pressing challenges across the UK and Europe. Millions of graduates leave university each year with qualifications but without the practical experience employers are looking for. The result is a frustrating cycle where talent goes untapped and businesses struggle to find the fresh perspectives they need.</p>
          <p>Since 2010, Internwise has worked to break this cycle. We built a platform dedicated entirely to internship recruitment, because we believe that every graduate deserves a fair chance to prove themselves, and every employer deserves access to motivated, capable talent.</p>
          <p className="font-semibold text-navy">We believe that connecting the right graduate with the right opportunity at the right time can change the trajectory of a career, and the future of a business.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-light-gray rounded-2xl p-6 text-center group hover:bg-navy transition-all duration-300 cursor-default"
          >
            <div className="text-3xl lg:text-4xl font-display font-bold text-navy group-hover:text-coral transition-colors">
              {stat.value}
            </div>
            <div className="text-sm font-body text-foreground/60 mt-2 group-hover:text-white/80 transition-colors">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ---------- About ---------- */
const values = [
  { icon: GraduationCap, title: "Graduate-First", desc: "Everything we build starts with the graduate experience. We design our platforms to make their first career step as simple as possible." },
  { icon: Shield, title: "Trusted by Employers", desc: "Over 15,000 employers trust Internwise to connect them with quality candidates who are ready to contribute." },
  { icon: Globe, title: "UK & Europe Focus", desc: "We operate dedicated platforms for the UK and Europe, ensuring localised, relevant opportunities for every user." },
  { icon: Heart, title: "Independent & Purpose-Driven", desc: "We are an independent business driven by a genuine mission to reduce youth unemployment, not by venture capital or short-term gains." },
];

const AboutSection = () => (
  <section id="about" className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-mid to-navy-dark overflow-hidden">
    <DotGrid />
    <BlobDecoration color="sky" className="w-96 h-96 -top-20 -right-48" />
    <BlobDecoration color="coral" className="w-72 h-72 bottom-10 left-10 animation-delay-2000" />

    <Container className="relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <div>
          <SectionLabel>About Us</SectionLabel>
          <SectionHeading light className="mt-4 mb-6">
            An Entrepreneur's Passion, Built into a Platform
          </SectionHeading>
          <blockquote className="border-l-4 border-coral pl-4 text-white/70 font-body italic leading-relaxed">
            "I started Internwise because I saw too many talented graduates struggling to get their foot in the door. I knew there had to be a better way to connect them with employers who genuinely wanted to invest in fresh talent." - Nuno Dhiren, Founder
          </blockquote>
        </div>
        <div className="space-y-5 font-body text-white/70 leading-relaxed">
          <p>Internwise was founded in 2010 by Nuno Dhiren, an entrepreneur who recognised that the traditional recruitment model was failing both graduates and the employers who wanted to hire them. The idea was simple: build a platform dedicated entirely to internships, where quality matters more than volume.</p>
          <p>What started as a single UK platform has grown into a multi-market operation spanning the UK and Europe. Today, Internwise serves over 15,000 employers and half a million candidates, all without losing the personal, purpose-driven approach that defined it from day one.</p>
          <p>Internwise operates as part of the Kape Strategy Ltd group, maintaining its independence and mission-first culture while benefiting from the stability and strategic support of a broader business structure.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {values.map((v) => (
          <div key={v.title} className="bg-white/[0.08] border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <v.icon className="text-sky mb-4" size={28} />
            <h3 className="text-white font-display font-bold mb-2">{v.title}</h3>
            <p className="text-white/60 text-sm font-body">{v.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ---------- Platforms ---------- */
const PlatformsSection = () => (
  <section id="platforms" className="py-24 lg:py-32 bg-light-gray">
    <Container>
      <div className="text-center mb-16">
        <SectionLabel>Our Platforms</SectionLabel>
        <SectionHeading className="mt-4">Where Opportunities Live</SectionHeading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* UK */}
        <div className="bg-navy rounded-2xl p-8 text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <span className="inline-block bg-coral text-white text-xs font-semibold font-body px-3 py-1 rounded-full mb-4">Flagship</span>
          <img src="/united-kingdom.png" alt="UK flag" className="w-12 h-12 rounded-full mb-4 object-cover" />
          <h3 className="font-display text-2xl font-bold mb-3">United Kingdom</h3>
          <p className="text-white/70 text-sm font-body mb-6">Our flagship platform connecting UK-based graduates with internship opportunities across every sector and region.</p>
          <a href="https://internwise.co.uk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sky text-sm font-semibold font-body hover:underline">
            internwise.co.uk <ExternalLink size={14} />
          </a>
        </div>

        {/* Europe */}
        <div className="bg-background rounded-2xl p-8 border border-border hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <img src="/european.png" alt="EU flag" className="w-12 h-12 rounded-full mb-4 object-cover" />
          <h3 className="font-display text-2xl font-bold text-navy mb-3">Europe</h3>
          <p className="text-foreground/70 text-sm font-body mb-6">Expanding our mission across Europe, connecting graduates with cross-border internship opportunities and international employers.</p>
          <a href="https://internwise.eu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sky text-sm font-semibold font-body hover:underline">
            internwise.eu <ExternalLink size={14} />
          </a>
        </div>

        {/* Founders */}
        <Link to="/founders" className="block bg-gradient-to-br from-coral to-coral-dark rounded-2xl p-8 text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <span className="text-3xl mb-4 block">🚀</span>
          <h3 className="font-display text-2xl font-bold mb-3">Founder Partnership</h3>
          <p className="text-white/80 text-sm font-body mb-6">A structured programme backing ambitious graduates to build profitable, responsible businesses from day one.</p>
          <span className="inline-flex items-center gap-2 text-white font-semibold text-sm font-body">
            Learn more <ArrowRight size={14} />
          </span>
        </Link>
      </div>
    </Container>
  </section>
);

/* ---------- Audience ---------- */
const audiences = [
  {
    emoji: "🎓",
    label: "For Graduates",
    title: "Graduates & Students",
    desc: "Whether you are in your final year or recently graduated, Internwise gives you direct access to internships that match your skills and ambitions.",
    points: ["Search thousands of internship listings", "Filter by sector, location, and duration", "Apply directly to employers", "Get career guidance and resources"],
    cta: "Find Internships",
    ctaLink: "https://internwise.co.uk",
    variant: "navy" as const,
    dark: false,
  },
  {
    emoji: "🏢",
    label: "For Employers",
    title: "Employers",
    desc: "Reach motivated, qualified graduates ready to contribute to your team. Post roles and connect with talent that fits your business.",
    points: ["Post internship roles in minutes", "Access a pool of 500,000+ candidates", "Manage applications seamlessly", "Build your early-careers pipeline"],
    cta: "Post a Role",
    ctaLink: "https://internwise.co.uk/employers",
    variant: "coral" as const,
    dark: true,
  },
  {
    emoji: "🏫",
    label: "For Universities",
    title: "Universities",
    desc: "Partner with Internwise to give your students a head start. Integrate our platform into your careers service and track student outcomes.",
    points: ["Dedicated university partnerships", "Branded careers portal integration", "Student outcome tracking", "Employer networking opportunities"],
    cta: "Explore Partnerships",
    ctaLink: "#contact",
    variant: "navy" as const,
    dark: false,
  },
];

const AudienceSection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <Container>
      <div className="text-center mb-16">
        <SectionLabel>Who We Serve</SectionLabel>
        <SectionHeading className="mt-4">Built for Everyone in the Internship Ecosystem</SectionHeading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {audiences.map((a) => (
          <div
            key={a.title}
            className={`rounded-2xl p-8 ${
              a.dark
                ? "bg-navy text-white"
                : "bg-background border border-border"
            } hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
          >
            <span className="text-3xl mb-3 block">{a.emoji}</span>
            <SectionLabel>{a.label}</SectionLabel>
            <h3 className={`font-display text-2xl font-bold mt-2 mb-3 ${a.dark ? "text-white" : "text-navy"}`}>
              {a.title}
            </h3>
            <p className={`text-sm font-body mb-6 ${a.dark ? "text-white/70" : "text-foreground/70"}`}>
              {a.desc}
            </p>
            <ul className="space-y-3 mb-8">
              {a.points.map((p) => (
                <li key={p} className={`flex items-start gap-2 text-sm font-body ${a.dark ? "text-white/80" : "text-foreground/70"}`}>
                  <Check size={16} className="text-sky mt-0.5 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            {a.ctaLink.startsWith("#") ? (
              <button onClick={() => document.querySelector(a.ctaLink)?.scrollIntoView({ behavior: "smooth" })}>
                <Button variant={a.variant} size="default">{a.cta}</Button>
              </button>
            ) : (
              <a href={a.ctaLink} target="_blank" rel="noopener noreferrer">
                <Button variant={a.variant} size="default">{a.cta}</Button>
              </a>
            )}
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ---------- Contact ---------- */
const WEB3FORMS_KEY = "a0bbdc70-4da9-44a5-89ed-e317ed922a50";

const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef<HCaptcha | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      setError("Please complete the captcha verification.");
      return;
    }

    setSending(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("from_name", "Internwise Contact Form");
    formData.append("h-captcha-response", captchaToken);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
        captchaRef.current?.resetCaptcha();
        setCaptchaToken("");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
      captchaRef.current?.resetCaptcha();
      setCaptchaToken("");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-mid to-navy-dark overflow-hidden">
      <DotGrid />
      <BlobDecoration color="sky" className="w-96 h-96 top-10 right-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionLabel>Get in Touch</SectionLabel>
            <SectionHeading light className="mt-4 mb-8">
              We'd Love to Hear From You
            </SectionHeading>
            <div className="space-y-6">
              <a href="mailto:help@internwise.co.uk" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors font-body">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={20} className="text-sky" />
                </div>
                help@internwise.co.uk
              </a>
              <div className="flex items-center gap-4 text-white/80 font-body">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={20} className="text-sky" />
                </div>
                London, UK
              </div>
              <a href="https://internwise.co.uk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors font-body">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Globe size={20} className="text-sky" />
                </div>
                internwise.co.uk
              </a>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-navy mb-2">Message Sent</h3>
                <p className="text-foreground/60 font-body">Thank you for getting in touch. We will respond as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="subject" value="New Contact Form Submission - Internwise" />
                <input type="checkbox" name="botcheck" className="hidden" />
                <div>
                  <label className="block text-sm font-medium font-body text-foreground/70 mb-1.5">Name</label>
                  <input type="text" name="name" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-sky/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium font-body text-foreground/70 mb-1.5">Email</label>
                  <input type="email" name="email" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-sky/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium font-body text-foreground/70 mb-1.5">Subject</label>
                  <select name="subject" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-sky/50">
                    <option value="">Select a subject</option>
                    <option>General Enquiry</option>
                    <option>Employer Partnership</option>
                    <option>University Partnership</option>
                    <option>Founder Partnership</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium font-body text-foreground/70 mb-1.5">Message</label>
                  <textarea name="message" required rows={4} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-sky/50 resize-none" />
                </div>
                <div>
                  <HCaptcha
                    sitekey={HCAPTCHA_SITEKEY}
                    reCaptchaCompat={false}
                    onVerify={(token) => setCaptchaToken(token)}
                    onExpire={() => setCaptchaToken("")}
                    ref={captchaRef}
                  />
                </div>
                {error && <p className="text-red-500 text-sm font-body">{error}</p>}
                <Button variant="coral" size="lg" type="submit" className="w-full" disabled={sending || !captchaToken}>
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ---------- Home Page ---------- */
const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <MissionSection />
    <AboutSection />
    <PlatformsSection />
    <AudienceSection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
