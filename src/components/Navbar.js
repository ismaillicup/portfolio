import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const navItemClass = `
    relative px-3 py-1.5 rounded-md
    text-white
    transition-all duration-300 ease-out

    hover:text-navhover
    hover:bg-white/5

    focus:text-navhover
    focus:bg-white/10
    focus:outline-none

    after:absolute after:left-1/2 after:-bottom-1
    after:h-[2px] after:w-0
    after:bg-navhover
    after:transition-all after:duration-300
    hover:after:w-full hover:after:left-0
    focus:after:w-full focus:after:left-0
  `;

  const goToSection = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  const activeClass = (id) => (activeSection === id ? "text-navhover" : "");

  return (
    <nav className="fixed top-0 w-full bg-base text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-bold text-lg tracking-wide hover:text-navhover transition">
          Ismail
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-2">
          <button onClick={() => goToSection("about")} className={`${navItemClass} ${activeClass("about")}`}>About</button>
          <button onClick={() => goToSection("skills")} className={`${navItemClass} ${activeClass("skills")}`}>Skills</button>
          <button onClick={() => goToSection("education")} className={`${navItemClass} ${activeClass("education")}`}>Education</button>
          <button onClick={() => goToSection("experience")} className={`${navItemClass} ${activeClass("experience")}`}>Experience</button>
          <button onClick={() => goToSection("projects")} className={`${navItemClass} ${activeClass("projects")}`}>Projects</button>
          <Link to="/ict-club" className={navItemClass}>ICT Club</Link>

          {/* ✅ Resources Link */}
          <a
            href="https://1drv.ms/f/c/6c8ce4d2dad616bc/IgAok95tGlogTqA2uRcheor_ATvOd1hBnVjpA6YeISXfkBc?e=E7jRwS"
            target="_blank"
            rel="noopener noreferrer"
            className={navItemClass}
          >
            Resources
          </a>

          <Link to="/reflection" className={navItemClass}>Reflection</Link>
          <button onClick={() => goToSection("contact")} className={`${navItemClass} ${activeClass("contact")}`}>Contact</button>
        </div>

        {/* Hamburger */}
        <button className="md:hidden text-2xl hover:text-navhover transition" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-base px-6 pb-6 space-y-3">
          <button onClick={() => goToSection("about")} className={`block ${navItemClass} ${activeClass("about")}`}>About</button>
          <button onClick={() => goToSection("skills")} className={`block ${navItemClass} ${activeClass("skills")}`}>Skills</button>
          <button onClick={() => goToSection("education")} className={`block ${navItemClass} ${activeClass("education")}`}>Education</button>
          <button onClick={() => goToSection("experience")} className={`block ${navItemClass} ${activeClass("experience")}`}>Experience</button>
          <button onClick={() => goToSection("projects")} className={`block ${navItemClass} ${activeClass("projects")}`}>Projects</button>
          <Link to="/ict-club" onClick={() => setMenuOpen(false)} className={`block ${navItemClass}`}>ICT Club</Link>

          {/* ✅ Resources Link - Mobile */}
          <a
            href="https://1drv.ms/f/c/6c8ce4d2dad616bc/IgAok95tGlogTqA2uRcheor_ATvOd1hBnVjpA6YeISXfkBc?e=E7jRwS"
            target="_blank"
            rel="noopener noreferrer"
            className={`block ${navItemClass}`}
            onClick={() => setMenuOpen(false)}
          >
            Resources
          </a>

          <Link to="/reflection" onClick={() => setMenuOpen(false)} className={`block ${navItemClass}`}>Reflection</Link>
          <button onClick={() => goToSection("contact")} className={`block ${navItemClass} ${activeClass("contact")}`}>Contact</button>
        </div>
      )}
    </nav>
  );
}