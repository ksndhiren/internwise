import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check, ChevronDown, Rocket, User, Lightbulb, TrendingUp, Handshake } from "lucide-react";
import FoundersNavbar from "@/components/layout/FoundersNavbar";
import FoundersFooter from "@/components/layout/FoundersFooter";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

const WEB3FORMS_KEY = "47c76559-ba1e-4db7-9d54-9fc446383c31";

const SECTIONS = [
  { id: 1, title: "The Founder(s)", subtitle: "Founders Resilience", icon: User },
  { id: 2, title: "Business Idea & Product", subtitle: "Problem-Solution Fit", icon: Lightbulb },
  { id: 3, title: "Traction & Feasibility", subtitle: "Evidence of Progress", icon: TrendingUp },
  { id: 4, title: "Internwise Fit", subtitle: "Ethical & Responsible Alignment", icon: Handshake },
];

const WordCounter = ({ text, max }: { text: string; max: number }) => {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const over = words > max;
  return (
    <span className={`text-xs font-body ${over ? "text-red-500 font-semibold" : "text-foreground/40"}`}>
      {words}/{max} words
    </span>
  );
};

const FieldLabel = ({ children, required = true }: { children: React.ReactNode; required?: boolean }) => (
  <label className="block text-sm font-semibold font-body text-foreground/80 mb-1.5">
    {children} {required && <span className="text-coral">*</span>}
  </label>
);

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition-all placeholder:text-foreground/30";
const textareaClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition-all resize-none placeholder:text-foreground/30";
const selectClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-sky/40 focus:border-sky transition-all appearance-none";

const PHONE_CODES = [
  { code: "+44", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "+1", flag: "https://flagcdn.com/w40/us.png" },
  { code: "+353", flag: "https://flagcdn.com/w40/ie.png" },
  { code: "+33", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "+49", flag: "https://flagcdn.com/w40/de.png" },
  { code: "+34", flag: "https://flagcdn.com/w40/es.png" },
  { code: "+39", flag: "https://flagcdn.com/w40/it.png" },
  { code: "+31", flag: "https://flagcdn.com/w40/nl.png" },
  { code: "+91", flag: "https://flagcdn.com/w40/in.png" },
];

const PhoneInput = ({
  ext,
  phone,
  onExtChange,
  onPhoneChange,
}: {
  ext: string;
  phone: string;
  onExtChange: (v: string) => void;
  onPhoneChange: (v: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const selected = PHONE_CODES.find((p) => p.code === ext) || PHONE_CODES[0];
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex gap-2">
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 w-[6rem] rounded-xl border border-border bg-white px-2.5 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-sky/40"
        >
          <img src={selected.flag} alt="" className="w-5 h-3.5 object-cover rounded-[2px]" />
          <span>{selected.code}</span>
          <ChevronDown size={14} className="ml-auto text-foreground/40" />
        </button>
        {open && (
          <div className="absolute top-full left-0 mt-1 w-[6rem] bg-white border border-border rounded-xl shadow-lg z-50 py-1 max-h-48 overflow-y-auto">
            {PHONE_CODES.map((p) => (
              <button
                key={p.code}
                type="button"
                onClick={() => { onExtChange(p.code); setOpen(false); }}
                className={`flex items-center gap-1.5 w-full px-2.5 py-2 text-sm font-body hover:bg-sky/10 transition-colors ${p.code === ext ? "bg-sky/5 font-medium" : ""}`}
              >
                <img src={p.flag} alt="" className="w-5 h-3.5 object-cover rounded-[2px]" />
                <span>{p.code}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <input
        type="tel"
        value={phone}
        onChange={(e) => onPhoneChange(e.target.value)}
        className={`flex-1 ${inputClass}`}
        placeholder="Phone number"
        required
      />
    </div>
  );
};

/* ---------- Main Form Component ---------- */
const FoundersApply = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Section 1
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneExt, setPhoneExt] = useState("+44");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [status, setStatus] = useState("");
  const [rightToWork, setRightToWork] = useState("");
  const [whyNow, setWhyNow] = useState("");
  const [resilience, setResilience] = useState("");

  // Section 2
  const [oneLiner, setOneLiner] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [targetMarket, setTargetMarket] = useState("");

  // Section 3
  const [currentStage, setCurrentStage] = useState("");
  const [traction, setTraction] = useState("");
  const [customerFeedback, setCustomerFeedback] = useState("");
  const [profitResponsible, setProfitResponsible] = useState("");
  const [productLink, setProductLink] = useState("");
  const [vision12, setVision12] = useState("");
  const [vision35, setVision35] = useState("");
  const [viable, setViable] = useState("");
  const [challenges, setChallenges] = useState("");
  const [whyYou, setWhyYou] = useState("");

  // Section 4
  const [whyInternwise, setWhyInternwise] = useState("");
  const [expectations, setExpectations] = useState("");
  const [commitment, setCommitment] = useState("");
  const [anythingElse, setAnythingElse] = useState("");

  const validateStep = (s: number): boolean => {
    if (s === 1) {
      if (!fullName || !email || !phone || !location || !status || !rightToWork || !whyNow || !resilience) {
        setError("Please fill in all required fields.");
        return false;
      }
    }
    if (s === 2) {
      if (!oneLiner || !problem || !solution || !targetMarket) {
        setError("Please fill in all required fields.");
        return false;
      }
    }
    if (s === 3) {
      if (!currentStage || !traction || !customerFeedback || !profitResponsible || !vision12 || !vision35 || !viable || !challenges || !whyYou) {
        setError("Please fill in all required fields.");
        return false;
      }
    }
    if (s === 4) {
      if (!whyInternwise || !expectations || !commitment) {
        setError("Please fill in all required fields.");
        return false;
      }
    }
    setError("");
    return true;
  };

  const next = () => {
    if (validateStep(step)) {
      setStep((s) => Math.min(s + 1, 4));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const prev = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;
    setSending(true);
    setError("");

    const payload = {
      access_key: WEB3FORMS_KEY,
      from_name: "Internwise Founders Application",
      subject: `New Founder Application: ${fullName}`,
      // Section 1
      "Full Name": fullName,
      Email: email,
      Phone: `${phoneExt} ${phone}`,
      "Location / Country": location,
      "LinkedIn Profile": linkedin || "Not provided",
      "Current Status": status,
      "Right to Work in UK": rightToWork,
      "Why Now (The Why)": whyNow,
      "Resilience Check": resilience,
      // Section 2
      "One-Sentence Pitch": oneLiner,
      "The Problem": problem,
      "The Solution": solution,
      "Target Market": targetMarket,
      // Section 3
      "Current Stage": currentStage,
      Traction: traction,
      "Customer Feedback": customerFeedback,
      "Profitable & Responsible Factor": profitResponsible,
      "Product/Website Link": productLink || "Not provided",
      "12-Month Vision": vision12,
      "3-5 Year Ambition": vision35,
      "Commercial Viability": viable,
      "Biggest Challenges": challenges,
      "Why You": whyYou,
      // Section 4
      "Why Internwise Founders": whyInternwise,
      "Expectations from Partner": expectations,
      "Weekly Commitment": commitment,
      "Anything Else": anythingElse || "Nothing additional",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <>
        <FoundersNavbar />
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-20">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
                <Check size={40} className="text-green-600" />
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
                Application Received!
              </h1>
              <div className="bg-white rounded-2xl border border-border p-8 text-left font-body text-foreground/70 leading-relaxed shadow-sm">
                <p className="mb-4">
                  Hi <span className="font-semibold text-navy">{fullName}</span>, thanks for applying to Internwise Founders.
                </p>
                <p className="mb-4">
                  We are looking for founders who don't just want to start a business, but want to solve real problems responsibly.
                </p>
                <p>
                  We'll review your application and get back to you within <span className="font-semibold text-navy">5 working days</span> regarding a 15-minute chemistry call.
                </p>
              </div>
              <Link to="/founders-program">
                <Button variant="navy-outline" size="lg" className="mt-8">
                  Back to Founders Program
                </Button>
              </Link>
            </div>
          </Container>
        </div>
        <FoundersFooter />
      </>
    );
  }

  return (
    <>
      <FoundersNavbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-28 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-coral/10 text-coral rounded-full px-4 py-1.5 text-sm font-body font-semibold mb-4">
                <Rocket size={16} /> Founders Application
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-2">
                Start Your Application
              </h1>
              <p className="text-foreground/50 font-body">Takes less than 10 minutes · Thoughtful answers only</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                {SECTIONS.map((s) => {
                  const Icon = s.icon;
                  const isActive = step === s.id;
                  const isDone = step > s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => { if (isDone) { setError(""); setStep(s.id); } }}
                      className={`flex flex-col items-center gap-1.5 flex-1 transition-all ${isDone ? "cursor-pointer" : isActive ? "cursor-default" : "cursor-default opacity-40"}`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all text-sm font-bold ${
                          isDone
                            ? "bg-green-500 text-white"
                            : isActive
                            ? "bg-navy text-white shadow-lg shadow-navy/20"
                            : "bg-gray-200 text-foreground/40"
                        }`}
                      >
                        {isDone ? <Check size={18} /> : <Icon size={18} />}
                      </div>
                      <span className={`text-xs font-body hidden sm:block ${isActive ? "text-navy font-semibold" : "text-foreground/50"}`}>
                        {s.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-navy to-sky rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* Form Card */}
            <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
              <div className="bg-white rounded-2xl border border-border shadow-sm p-8 sm:p-10">
                {/* Section Header */}
                <div className="mb-8 pb-6 border-b border-border">
                  <p className="text-xs font-body font-semibold text-coral uppercase tracking-wider mb-1">
                    Section {step} of 4 · {SECTIONS[step - 1].subtitle}
                  </p>
                  <h2 className="font-display text-2xl font-bold text-navy">
                    {SECTIONS[step - 1].title}
                  </h2>
                </div>

                {/* ---------- SECTION 1 ---------- */}
                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <FieldLabel>Full Name</FieldLabel>
                      <input className={inputClass} value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your full name" required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <FieldLabel>Email</FieldLabel>
                        <input type="email" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                      </div>
                      <div>
                        <FieldLabel>Phone Number</FieldLabel>
                        <PhoneInput ext={phoneExt} phone={phone} onExtChange={setPhoneExt} onPhoneChange={setPhone} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <FieldLabel>Current Location / Country</FieldLabel>
                        <input className={inputClass} value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. London, UK" required />
                      </div>
                      <div>
                        <FieldLabel required={false}>LinkedIn Profile</FieldLabel>
                        <input type="url" className={inputClass} value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="https://linkedin.com/in/..." />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <FieldLabel>Current Status</FieldLabel>
                        <div className="relative">
                          <select className={selectClass} value={status} onChange={(e) => setStatus(e.target.value)} required>
                            <option value="">Select your status</option>
                            <option>Recent Graduate</option>
                            <option>Final Year Student</option>
                            <option>Working Professional (full-time)</option>
                            <option>Working Professional (part-time)</option>
                            <option>Full-time Founder</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/30 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <FieldLabel>Right to live and work in the UK?</FieldLabel>
                        <div className="flex gap-3 mt-1">
                          {["Yes", "No"].map((v) => (
                            <button
                              key={v}
                              type="button"
                              onClick={() => setRightToWork(v)}
                              className={`flex-1 py-3 rounded-xl border text-sm font-body font-medium transition-all ${
                                rightToWork === v
                                  ? "border-navy bg-navy/5 text-navy"
                                  : "border-border text-foreground/50 hover:border-foreground/20"
                              }`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-end justify-between mb-1.5">
                        <FieldLabel>The "Why": Why are you choosing to build a business now instead of following a traditional career path?</FieldLabel>
                      </div>
                      <textarea className={textareaClass} rows={4} value={whyNow} onChange={(e) => setWhyNow(e.target.value)} placeholder="What drives you to build rather than follow a conventional path?" required />
                      <WordCounter text={whyNow} max={150} />
                    </div>
                    <div>
                      <FieldLabel>Resilience Check: Describe a time you built something from scratch or solved a difficult problem with limited resources.</FieldLabel>
                      <textarea className={textareaClass} rows={4} value={resilience} onChange={(e) => setResilience(e.target.value)} placeholder="Tell us about a time you showed resourcefulness and determination..." required />
                      <WordCounter text={resilience} max={150} />
                    </div>
                  </div>
                )}

                {/* ---------- SECTION 2 ---------- */}
                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <FieldLabel>The One-Sentence Pitch: What does your business do, and for whom?</FieldLabel>
                      <input className={inputClass} value={oneLiner} onChange={(e) => setOneLiner(e.target.value)} placeholder='e.g. "We are building [Product] to help [Audience] solve [Problem]."' required />
                      <p className="text-xs text-foreground/40 font-body mt-1">Example: "We are building [Product] to help [Audience] solve [Problem]."</p>
                    </div>
                    <div>
                      <FieldLabel>The Problem: What is the specific pain point you've identified? How do people solve this problem today?</FieldLabel>
                      <textarea className={textareaClass} rows={4} value={problem} onChange={(e) => setProblem(e.target.value)} placeholder="Describe the specific pain point and current solutions..." required />
                    </div>
                    <div>
                      <FieldLabel>The Solution: Describe your product or service. How is it better or different from what currently exists?</FieldLabel>
                      <textarea className={textareaClass} rows={4} value={solution} onChange={(e) => setSolution(e.target.value)} placeholder="What are you building and what makes it unique?" required />
                    </div>
                    <div>
                      <FieldLabel>Target Market: Who is your first paying customer?</FieldLabel>
                      <textarea className={textareaClass} rows={3} value={targetMarket} onChange={(e) => setTargetMarket(e.target.value)} placeholder='Be specific, e.g., "SMEs in the UK fashion sector," not just "everyone."' required />
                      <p className="text-xs text-foreground/40 font-body mt-1">Be specific — e.g., "SMEs in the UK fashion sector," not just "everyone."</p>
                    </div>
                  </div>
                )}

                {/* ---------- SECTION 3 ---------- */}
                {step === 3 && (
                  <div className="space-y-5">
                    <div>
                      <FieldLabel>Current Stage</FieldLabel>
                      <div className="relative">
                        <select className={selectClass} value={currentStage} onChange={(e) => setCurrentStage(e.target.value)} required>
                          <option value="">Select your stage</option>
                          <option>Idea only</option>
                          <option>Research & Validation</option>
                          <option>Prototype / MVP built</option>
                          <option>Generating Revenue</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/30 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <FieldLabel>What traction do you currently have?</FieldLabel>
                      <textarea className={textareaClass} rows={3} value={traction} onChange={(e) => setTraction(e.target.value)} placeholder="Users, revenue, growth metrics, partnerships, LOIs, waitlist..." required />
                      <p className="text-xs text-foreground/40 font-body mt-1">E.g. users, revenue, growth metrics, partnerships, LOIs, waitlist</p>
                    </div>
                    <div>
                      <FieldLabel>Evidence of Interest: Have you spoken to potential customers? If so, what is the #1 thing they told you?</FieldLabel>
                      <textarea className={textareaClass} rows={3} value={customerFeedback} onChange={(e) => setCustomerFeedback(e.target.value)} placeholder="What did potential customers say?" required />
                    </div>
                    <div>
                      <FieldLabel>How will this business make money, and how does it contribute positively to society or its industry?</FieldLabel>
                      <textarea className={textareaClass} rows={3} value={profitResponsible} onChange={(e) => setProfitResponsible(e.target.value)} placeholder="The profitable & responsible factor..." required />
                    </div>
                    <div>
                      <FieldLabel required={false}>Do you have a product, website or prototype? (Link)</FieldLabel>
                      <input type="url" className={inputClass} value={productLink} onChange={(e) => setProductLink(e.target.value)} placeholder="https://..." />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <FieldLabel>What is your 12-month vision for this business?</FieldLabel>
                        <textarea className={textareaClass} rows={3} value={vision12} onChange={(e) => setVision12(e.target.value)} placeholder="Where do you see this in 1 year?" required />
                      </div>
                      <div>
                        <FieldLabel>What is your long-term ambition (3–5 years)?</FieldLabel>
                        <textarea className={textareaClass} rows={3} value={vision35} onChange={(e) => setVision35(e.target.value)} placeholder="Where could this go in 3-5 years?" required />
                      </div>
                    </div>
                    <div>
                      <FieldLabel>What makes this business commercially viable?</FieldLabel>
                      <textarea className={textareaClass} rows={3} value={viable} onChange={(e) => setViable(e.target.value)} placeholder="Revenue model, market size, competitive advantage..." required />
                    </div>
                    <div>
                      <FieldLabel>What are your biggest current challenges?</FieldLabel>
                      <textarea className={textareaClass} rows={3} value={challenges} onChange={(e) => setChallenges(e.target.value)} placeholder="Be honest — what's blocking you right now?" required />
                    </div>
                    <div>
                      <FieldLabel>Why are you the right person to build this business?</FieldLabel>
                      <textarea className={textareaClass} rows={3} value={whyYou} onChange={(e) => setWhyYou(e.target.value)} placeholder="What makes you uniquely qualified?" required />
                    </div>
                  </div>
                )}

                {/* ---------- SECTION 4 ---------- */}
                {step === 4 && (
                  <div className="space-y-5">
                    <div>
                      <FieldLabel>Why Internwise Founders? What is the specific gap in your knowledge or resources that you hope this program will fill?</FieldLabel>
                      <textarea className={textareaClass} rows={4} value={whyInternwise} onChange={(e) => setWhyInternwise(e.target.value)} placeholder="What do you need that Internwise can provide?" required />
                    </div>
                    <div>
                      <FieldLabel>What do you expect from us as a partner?</FieldLabel>
                      <textarea className={textareaClass} rows={4} value={expectations} onChange={(e) => setExpectations(e.target.value)} placeholder="Be specific about what support you're looking for..." required />
                    </div>
                    <div>
                      <FieldLabel>Are you able to commit at least 15 hours per week to this venture over the next 6 months?</FieldLabel>
                      <div className="flex gap-3 mt-1">
                        {["Yes", "No"].map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setCommitment(v)}
                            className={`flex-1 py-3 rounded-xl border text-sm font-body font-medium transition-all ${
                              commitment === v
                                ? "border-navy bg-navy/5 text-navy"
                                : "border-border text-foreground/50 hover:border-foreground/20"
                            }`}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <FieldLabel required={false}>Anything else we should know? (Optional but encouraged)</FieldLabel>
                      <textarea className={textareaClass} rows={3} value={anythingElse} onChange={(e) => setAnythingElse(e.target.value)} placeholder="Is there anything else that would help us understand you or your venture?" />
                    </div>
                  </div>
                )}

                {/* Error */}
                {error && (
                  <div className="mt-6 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-body">
                    {error}
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prev}
                      className="flex items-center gap-2 text-sm font-body font-medium text-foreground/50 hover:text-foreground transition-colors"
                    >
                      <ArrowLeft size={16} /> Previous
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <Button type="button" variant="navy" size="lg" onClick={next}>
                      Continue <ArrowRight size={16} />
                    </Button>
                  ) : (
                    <Button type="button" variant="coral" size="lg" onClick={handleSubmit} disabled={sending}>
                      {sending ? "Submitting..." : "Submit Application"} {!sending && <ArrowRight size={16} />}
                    </Button>
                  )}
                </div>
              </div>
            </form>

            {/* Bottom note */}
            <p className="text-center text-xs text-foreground/30 font-body mt-6">
              Your data is secure and will only be used for application review purposes.
            </p>
          </div>
        </Container>
      </div>
      <FoundersFooter />
    </>
  );
};

export default FoundersApply;
