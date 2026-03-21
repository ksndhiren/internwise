import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Check, X, GraduationCap, Lightbulb, MapPin,
  Zap, Users, Globe, Plus
} from "lucide-react";
import FoundersNavbar from "@/components/layout/FoundersNavbar";
import FoundersFooter from "@/components/layout/FoundersFooter";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import DotGrid from "@/components/shared/DotGrid";
import BlobDecoration from "@/components/shared/BlobDecoration";
import ScrollIndicator from "@/components/shared/ScrollIndicator";
import { Button } from "@/components/ui/button";

/* ---------- Hero ---------- */
const FoundersHero = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy-mid to-navy-dark overflow-hidden">
    <DotGrid />
    <BlobDecoration color="sky" className="w-96 h-96 top-20 -left-48 animation-delay-2000" />
    <BlobDecoration color="coral" className="w-80 h-80 bottom-20 right-10 animation-delay-4000" />

    <Container className="relative z-10 text-center py-32">
      <div className="animate-fade-in-up max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-sky animate-pulse-dot" />
          <span className="text-white/80 text-sm font-body">Now Accepting Applications</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-primary-foreground">Turn Your Idea Into</span>
          <br />
          <span className="relative text-sky">
            A Real Business
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M2 8c50-6 100-6 150-2s100 2 146-4" stroke="hsl(var(--coral))" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-body">
          The Internwise Founder Partnership backs ambitious graduates with the structure, mentorship, and resources to build profitable, responsible businesses, from day one.
        </p>
        <p className="text-white/50 text-base max-w-2xl mx-auto mb-10 font-body">
          No prior experience required. No corporate track record needed. Just a genuine drive to build something that matters.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link to="/founders-program/apply">
            <Button variant="coral" size="xl">
              Start Your Application <ArrowRight size={18} />
            </Button>
          </Link>
          <button onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}>
            <Button variant="ghost-hero" size="xl">Learn More</Button>
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 flex-wrap text-white/60 text-sm font-body">
          <span>12 Months of Support</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>UK Based Programme</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>2 Structured Phases</span>
        </div>
      </div>
    </Container>
    <ScrollIndicator />
  </section>
);

/* ---------- What This Is / Isn't ---------- */
const thisIs = [
  "A structured partnership with clear expectations on both sides",
  "Real mentorship from experienced business operators",
  "Idea-stage welcome - you do not need a finished product",
  "Built for graduates who want to build, not just learn",
  "Responsibility-led, focused on sustainable, ethical business",
];
const thisIsnt = [
  "Not a course, an accelerator, or a bootcamp",
  "Not a funding round or investment deal",
  "Not casual - this requires genuine commitment",
  "Not for those without any business idea at all",
  "Not a guarantee of success - it is a partnership",
];

const WhatThisIsSection = () => (
  <section id="about" className="py-24 lg:py-32 bg-background">
    <Container>
      <div className="text-center mb-16">
        <SectionLabel>What to Expect</SectionLabel>
        <SectionHeading className="mt-4">Setting the Right Expectations</SectionHeading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-navy rounded-2xl p-8">
          <h3 className="font-display text-2xl font-bold text-white mb-6">This Is</h3>
          <ul className="space-y-4">
            {thisIs.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/80 font-body text-sm">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-green-400" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-light-gray rounded-2xl p-8">
          <h3 className="font-display text-2xl font-bold text-navy mb-6">This Isn't</h3>
          <ul className="space-y-4">
            {thisIsnt.map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground/70 font-body text-sm">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X size={14} className="text-red-500" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  </section>
);

/* ---------- Who It's For ---------- */
const whoCards = [
  { icon: GraduationCap, title: "A Graduate", desc: "Recently finished or about to complete your degree." },
  { icon: Lightbulb, title: "Idea-Stage Ready", desc: "You have a business idea, even if it is rough and unfinished." },
  { icon: MapPin, title: "UK-Based", desc: "Currently living in the United Kingdom." },
  { icon: Zap, title: "Entrepreneurially Driven", desc: "You have the drive to build something from scratch." },
  { icon: Users, title: "Coachable", desc: "Open to feedback, mentorship, and honest guidance." },
  { icon: Globe, title: "Purpose-Led", desc: "You want to build a business that does good, not just makes money." },
];

const WhoItsForSection = () => (
  <section className="py-24 lg:py-32 bg-light-gray">
    <Container>
      <div className="text-center mb-16">
        <SectionLabel>Ideal Candidates</SectionLabel>
        <SectionHeading className="mt-4">Who This Is For</SectionHeading>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {whoCards.map((c) => (
          <div
            key={c.title}
            className="bg-background rounded-2xl p-6 border border-border group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-light-gray flex items-center justify-center mb-4 group-hover:bg-navy transition-colors">
              <c.icon size={24} className="text-navy group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-display text-lg font-bold text-navy mb-2">{c.title}</h3>
            <p className="text-foreground/60 text-sm font-body">{c.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ---------- What You Bring ---------- */
const youBring = [
  { num: "01", title: "Your Idea", desc: "A business concept you are genuinely passionate about. It does not need to be perfect, polished, or proven. It just needs to be real." },
  { num: "02", title: "Your Commitment", desc: "This is not a side project. We expect you to show up, do the work, and treat this partnership with the seriousness it deserves." },
  { num: "03", title: "Your Honesty", desc: "We value transparency above everything. Be honest about your challenges, your progress, and your needs. That is how partnerships work." },
  { num: "04", title: "Your Ambition", desc: "You want to build something meaningful. Not just a quick win, but a business that can grow, sustain itself, and make a positive impact." },
];

const WhatYouBringSection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <SectionLabel>Your Part</SectionLabel>
          <SectionHeading className="mt-4 mb-6">What You Bring to the Table</SectionHeading>
          <p className="text-foreground/70 font-body leading-relaxed mb-6">
            The Founder Partnership is a two-way commitment. We invest heavily in your development, and in return, we expect you to bring these four things.
          </p>
          <div className="w-16 h-1 bg-coral rounded-full" />
        </div>
        <div className="space-y-4">
          {youBring.map((item) => (
            <div
              key={item.num}
              className="group bg-light-gray rounded-2xl p-6 hover:bg-navy transition-all duration-300 cursor-default"
            >
              <span className="text-sky text-sm font-bold font-body">{item.num}</span>
              <h3 className="font-display text-lg font-bold text-navy group-hover:text-white mt-1 mb-2 transition-colors">{item.title}</h3>
              <p className="text-foreground/60 text-sm font-body group-hover:text-white/70 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

/* ---------- What We Bring ---------- */
const weBring = [
  { title: "Expert Mentorship", desc: "Direct access to experienced business operators who will guide you through every stage of building your company.", gradient: "from-navy to-sky" },
  { title: "Industry Network", desc: "Connections to our network of 15,000+ employers, investors, and industry professionals across the UK and Europe.", gradient: "from-sky to-sky" },
  { title: "Practical Resources", desc: "From business planning tools to legal templates, we provide the practical resources you need to build efficiently.", gradient: "from-coral to-coral-hover" },
  { title: "A Clear Structure", desc: "A 12-month programme with defined phases, milestones, and check-ins that keep you accountable and on track.", gradient: "from-navy to-sky" },
];

const WhatWeBringSection = () => (
  <section className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-mid to-navy-dark overflow-hidden">
    <DotGrid />
    <BlobDecoration color="sky" className="w-96 h-96 -top-20 -right-48" />
    <BlobDecoration color="coral" className="w-72 h-72 bottom-10 left-10 animation-delay-2000" />

    <Container className="relative z-10">
      <div className="text-center mb-16">
        <SectionLabel>Our Part</SectionLabel>
        <SectionHeading light className="mt-4">What We Bring to the Partnership</SectionHeading>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {weBring.map((w) => (
          <div key={w.title} className="bg-white/[0.08] border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${w.gradient} flex items-center justify-center mb-4`}>
              <div className="w-4 h-4 rounded-full bg-white/30" />
            </div>
            <h3 className="text-white font-display font-bold mb-2">{w.title}</h3>
            <p className="text-white/60 text-sm font-body">{w.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ---------- How It Works ---------- */
const phase1 = [
  { text: "Define and refine your business idea with mentor support", done: true },
  { text: "Conduct market research and validate your concept", done: true },
  { text: "Build your minimum viable product or service offering", done: false },
  { text: "Develop your business model and financial projections", done: false },
  { text: "Establish your brand identity and online presence", done: false },
  { text: "Begin early customer conversations and testing", done: false },
];
const phase2 = [
  { text: "Launch your product or service to real customers", done: true },
  { text: "Develop your marketing and growth strategy", done: true },
  { text: "Build operational systems and processes", done: false },
  { text: "Explore funding options and revenue models", done: false },
  { text: "Scale your customer base and refine your offering", done: false },
  { text: "Prepare for independent operation beyond the programme", done: false },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 lg:py-32 bg-background">
    <Container>
      <div className="text-center mb-16">
        <SectionLabel>The Programme</SectionLabel>
        <SectionHeading className="mt-4">How It Works</SectionHeading>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Center connector (desktop) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-light-gray z-10 items-center justify-center shadow-md">
          <span className="text-navy font-bold text-sm">&raquo;</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Phase 1 */}
          <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="bg-white border-l-4 border-navy p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-navy/60 text-xs font-semibold tracking-widest uppercase font-body">Months 1-6</span>
                <span className="bg-navy text-white text-xs font-semibold px-3 py-1 rounded-full font-body">Phase 1</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-navy">Validate & Build</h3>
            </div>
            <div className="p-6 space-y-3 bg-white">
              {phase1.map((item) => (
                <div key={item.text} className="flex items-start gap-3 text-sm font-body text-foreground/70">
                  {item.done ? (
                    <Check size={16} className="text-sky mt-0.5 flex-shrink-0" />
                  ) : (
                    <span className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-navy/30" />
                    </span>
                  )}
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Phase 2 */}
          <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="bg-white border-l-4 border-coral p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-coral/60 text-xs font-semibold tracking-widest uppercase font-body">Months 7-12</span>
                <span className="bg-coral text-white text-xs font-semibold px-3 py-1 rounded-full font-body">Phase 2</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-coral">Launch & Grow</h3>
            </div>
            <div className="p-6 space-y-3 bg-white">
              {phase2.map((item) => (
                <div key={item.text} className="flex items-start gap-3 text-sm font-body text-foreground/70">
                  {item.done ? (
                    <Check size={16} className="text-coral mt-0.5 flex-shrink-0" />
                  ) : (
                    <span className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-coral/30" />
                    </span>
                  )}
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-light-gray rounded-2xl p-6 text-center">
          <p className="text-sm font-body text-foreground/70">
            <span className="font-semibold text-navy">Throughout both phases:</span> Regular group sessions, one-to-one mentorship, access to resources and tools, and ongoing accountability check-ins.
          </p>
        </div>
      </div>
    </Container>
  </section>
);

/* ---------- Profit with Purpose ---------- */
const sectors = [
  "Technology & Digital", "Social Impact", "Education", "Health & Wellbeing",
  "Sustainability", "Creative Industries", "Professional Services",
  "E-commerce & Retail", "Community & Society", "Food & Hospitality",
  "Fashion & Luxury",
];

const ProfitWithPurposeSection = () => (
  <section id="philosophy" className="py-24 lg:py-32 bg-light-gray">
    <Container>
      <div className="text-center mb-16">
        <SectionLabel>Our Philosophy</SectionLabel>
        <SectionHeading className="mt-4">Profit with Purpose</SectionHeading>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-5 font-body text-foreground/70 leading-relaxed">
          <p>We believe that the best businesses are built with purpose at their core. Making money and making a difference are not mutually exclusive. In fact, we think they are inseparable.</p>
          <p>The Founder Partnership is designed around this principle. We back founders who want to build businesses that are financially sustainable and socially responsible. Businesses that create value for their customers, their communities, and the people who work in them.</p>
          <p>This is not about charity or social enterprise exclusively. It is about building real, profitable businesses that happen to give a damn about the world they operate in.</p>
          <blockquote className="border-l-4 border-coral pl-4 italic text-foreground/60">
            "We are not looking for the next unicorn. We are looking for the next generation of responsible business owners who will build companies that last."
          </blockquote>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-navy mb-6">Sectors We Welcome</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {sectors.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full border border-border bg-background text-sm font-body text-foreground/70 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="bg-background rounded-2xl p-6 border border-border">
            <p className="text-sm font-body text-foreground/60">
              <span className="font-semibold text-navy">Not your sector?</span> If your idea does not fit neatly into one of these categories, we still want to hear from you. What matters most is the quality of your idea and the strength of your commitment.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

/* ---------- Selection Process ---------- */
const selectionSteps = [
  { num: "01", title: "Submit", time: "10-15 mins", desc: "Complete the short application form with details about yourself and your business idea." },
  { num: "02", title: "Initial Review", time: "Up to 2 weeks", desc: "Our team reviews your application and assesses alignment with the programme." },
  { num: "03", title: "Discovery Conversation", time: "30 mins", desc: "A candid conversation to understand your vision, commitment, and expectations." },
  { num: "04", title: "Final Decision", time: "1 week", desc: "We make our decision and, if successful, welcome you to the partnership." },
];

const SelectionProcessSection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <Container>
      <div className="text-center mb-16">
        <SectionLabel>The Process</SectionLabel>
        <SectionHeading className="mt-4">How Selection Works</SectionHeading>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectionSteps.map((step) => (
          <div
            key={step.num}
            className="group bg-light-gray rounded-2xl p-6 hover:bg-navy transition-all duration-300 cursor-default relative"
          >
            <span className="text-sky text-sm font-bold font-body">{step.num}</span>
            <h3 className="font-display text-lg font-bold text-navy group-hover:text-white mt-1 mb-1 transition-colors">{step.title}</h3>
            <span className="text-xs font-body text-foreground/40 group-hover:text-white/40 transition-colors">{step.time}</span>
            <p className="text-foreground/60 text-sm font-body group-hover:text-white/70 mt-3 transition-colors">{step.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ---------- FAQ ---------- */
const faqs = [
  { q: "Do I need a fully formed business idea?", a: "No. We welcome idea-stage founders. Your concept can be rough, unfinished, or early. What matters is that you have a genuine idea you are passionate about and the willingness to develop it with our support." },
  { q: "Does the programme cost anything?", a: "The Founder Partnership is free to join. There are no fees, no tuition costs, and no upfront payments. We invest in you because we believe in the long-term value of backing talented graduates." },
  { q: "Do I need to have graduated recently?", a: "We primarily work with recent graduates, but we consider applications from anyone within a few years of completing their degree. If you are unsure, apply and we will let you know." },
  { q: "Can I apply with a co-founder?", a: "Yes. If you have a co-founder, you can apply together. We will assess the team as a whole, including how you work together and the complementary skills you bring." },
  { q: "How much time do I need to commit?", a: "This is not a part-time hobby. We expect founders to treat this as their primary focus. While we understand that some may need part-time work alongside, your business should be your top priority." },
  { q: "Does Internwise take equity in my business?", a: "We will discuss commercial terms as part of the partnership agreement. These are fair, transparent, and designed to align our interests with yours. We do not take controlling stakes." },
  { q: "What happens after the 12-month programme?", a: "After the programme, you continue to run your business independently. We remain available as a resource and connection, but the day-to-day operation is yours. Many founders stay connected to our network long after the programme ends." },
  { q: "Do I need to be based in the UK?", a: "Yes. The programme is currently UK-based, and we require founders to be living in the United Kingdom for the duration of the partnership." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-mid to-navy-dark overflow-hidden">
      <DotGrid />
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <SectionLabel>Questions</SectionLabel>
          <SectionHeading light className="mt-4">Frequently Asked Questions</SectionHeading>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl transition-all duration-300 ${
                openIndex === i
                  ? "bg-background"
                  : "bg-white/[0.08] border border-white/10 backdrop-blur-sm"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-body font-medium text-sm pr-4 ${openIndex === i ? "text-navy" : "text-white"}`}>
                  {faq.q}
                </span>
                <Plus
                  size={18}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45 text-coral" : "text-white/60"
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-foreground/70 text-sm font-body leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-white/60 font-body">
            More questions?{" "}
            <Link to="/" onClick={() => setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 100)} className="text-sky font-semibold hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

/* ---------- Final CTA ---------- */
const FinalCTASection = () => (
  <section id="apply" className="py-24 lg:py-32 bg-background">
    <Container>
      <div className="relative bg-gradient-to-br from-navy via-navy-mid to-navy-dark rounded-3xl p-6 sm:p-12 lg:p-20 text-center overflow-hidden">
        <DotGrid />
        <BlobDecoration color="sky" className="w-72 h-72 -top-20 -right-20 animation-delay-2000" />
        <BlobDecoration color="coral" className="w-60 h-60 -bottom-20 -left-20" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-sky animate-pulse-dot" />
            <span className="text-white/80 text-sm font-body">Applications Open</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Something Real?
          </h2>
          <p className="text-white/60 font-body max-w-xl mx-auto mb-8">
            If you have the idea and the drive, we have the structure, mentorship, and resources to help you make it happen.
          </p>
          <Link to="/founders-program/apply">
            <Button variant="coral" size="xl">
              Start Your Application <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  </section>
);

/* ---------- Founders Page ---------- */
const Founders = () => (
  <>
    <FoundersNavbar />
    <FoundersHero />
    <WhatThisIsSection />
    <WhoItsForSection />
    <WhatYouBringSection />
    <WhatWeBringSection />
    <HowItWorksSection />
    <ProfitWithPurposeSection />
    <SelectionProcessSection />
    <FAQSection />
    <FinalCTASection />
    <FoundersFooter />
  </>
);

export default Founders;
