import { Link } from "react-router-dom";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

const FoundersFooter = () => (
  <footer className="bg-navy-darker text-white/70 font-body">
    <Container className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo-horizontal.png" alt="Internwise" className="h-10 brightness-0 invert" />
          </div>
          <span className="text-coral text-sm font-semibold">Founder Partnership</span>
          <p className="text-sm text-white/50 leading-relaxed mt-3">
            Backing ambitious graduates to build profitable, responsible businesses from day one.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Programme</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">About</button></li>
            <li><button onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">How It Works</button></li>
            <li><button onClick={() => document.querySelector("#philosophy")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Philosophy</button></li>
            <li><button onClick={() => document.querySelector("#faq")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">FAQs</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Internwise Group</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Internwise Home</Link></li>
            <li><a href="https://internwise.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">UK Platform</a></li>
            <li><a href="https://internwise.eu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Europe Platform</a></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Apply</h4>
          <p className="text-sm text-white/50 mb-4">Ready to build something real?</p>
          <button onClick={() => document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" })}>
            <Button variant="coral-sm" size="sm">Apply Now</Button>
          </button>
          <ul className="space-y-2 text-sm mt-6">
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
    </Container>

    <div className="border-t border-white/10">
      <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <p>&copy; 2026 Internwise. A brand under Kape Strategy Ltd.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
        </div>
      </Container>
    </div>
  </footer>
);

export default FoundersFooter;
