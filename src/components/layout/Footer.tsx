import { Link, useNavigate } from "react-router-dom";
import Container from "@/components/shared/Container";

function Footer() {
  const navigate = useNavigate();

  const handleScrollLink = (hash: string) => {
    navigate("/");
    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="bg-navy-darker text-white/70 font-body">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/logo-horizontal.png"
              alt="Internwise"
              className="h-10 brightness-0 invert mb-4"
            />
            <p className="text-sm text-white/50 leading-relaxed">
              <span>We aim to help reducing the youth unemployment rates.</span>
              <br />
              <span>Connecting Graduates with Employers since 2010.</span>
            </p>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Platforms</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://internwise.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">United Kingdom</a></li>
              <li><a href="https://internwise.eu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Europe</a></li>
            </ul>
          </div>

          {/* Group */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Group</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleScrollLink("#about")} className="hover:text-white transition-colors">About Us</button></li>
              <li><Link to="/founders-program" className="hover:text-white transition-colors">Founder Partnership</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><button onClick={() => handleScrollLink("#contact")} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
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
}

export default Footer;
