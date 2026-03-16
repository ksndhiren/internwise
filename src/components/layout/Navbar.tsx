import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Mission", href: "#mission" },
  { label: "Platforms", href: "#platforms" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return;
      }
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background shadow-lg shadow-navy/5"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/logo-horizontal.png"
              alt="Internwise"
              className={`h-8 transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
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
            <Link
              to="/founders"
              className={`px-4 py-2 text-sm font-medium font-body rounded-full transition-colors ${
                scrolled
                  ? "text-coral hover:bg-coral/5"
                  : "text-coral hover:bg-white/10"
              }`}
            >
              ✨ Founder Partnership
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://internwise.co.uk" target="_blank" rel="noopener noreferrer">
              <Button variant={scrolled ? "navy-outline" : "ghost-hero"} size="sm">
                Find Internships
              </Button>
            </a>
            <a href="https://internwise.co.uk/employers" target="_blank" rel="noopener noreferrer">
              <Button variant="coral-sm" size="sm">
                Post a Role
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border shadow-xl">
          <Container className="py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleAnchorClick(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium font-body text-navy/70 hover:text-navy hover:bg-navy/5 rounded-xl"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/founders"
              className="block px-4 py-3 text-sm font-medium font-body text-coral hover:bg-coral/5 rounded-xl"
            >
              ✨ Founder Partnership
            </Link>
            <div className="pt-2 space-y-2">
              <a href="https://internwise.co.uk" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="navy-outline" size="default" className="w-full">
                  Find Internships
                </Button>
              </a>
              <a href="https://internwise.co.uk/employers" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="coral" size="default" className="w-full">
                  Post a Role
                </Button>
              </a>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
