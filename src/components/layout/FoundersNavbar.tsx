import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programme", href: "#how-it-works" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "FAQs", href: "#faq" },
];

const FoundersNavbar = ({ forceScrolled = false }: { forceScrolled?: boolean }) => {
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (forceScrolled) { setScrolled(true); return; }
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [forceScrolled]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background shadow-lg shadow-navy/5" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/logo-horizontal.png"
                alt="Internwise"
                className={`h-10 transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
              />
            </Link>
            <span className={`hidden sm:inline text-sm font-semibold font-body ${scrolled ? "text-coral" : "text-coral"}`}>
              Founder Partnership
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium font-body rounded-full transition-colors ${
                scrolled
                  ? "text-navy/70 hover:text-navy hover:bg-navy/5"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleAnchorClick(link.href)}
                className={`px-4 py-2 text-sm font-medium font-body rounded-full transition-colors ${
                  scrolled
                    ? "text-navy/70 hover:text-navy hover:bg-navy/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <button onClick={() => handleAnchorClick("#apply")}>
              <Button variant="coral-sm" size="sm">Apply Now</Button>
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-navy" : "text-white"}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border shadow-xl">
          <Container className="py-4 space-y-2">
            <Link to="/" className="block px-4 py-3 text-sm font-medium font-body text-navy/70 hover:text-navy hover:bg-navy/5 rounded-xl">
              Home
            </Link>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleAnchorClick(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium font-body text-navy/70 hover:text-navy hover:bg-navy/5 rounded-xl"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button onClick={() => handleAnchorClick("#apply")} className="w-full">
                <Button variant="coral" size="default" className="w-full">Apply Now</Button>
              </button>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default FoundersNavbar;
