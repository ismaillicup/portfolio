import { socialLinks } from "../data/portfolioData";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mb-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2 rounded-md
              transition-all duration-300
              hover:text-navhover
              hover:bg-white/5
            "
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2 rounded-md
              transition-all duration-300
              hover:text-navhover
              hover:bg-white/5
            "
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Muhammad Ismail. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
