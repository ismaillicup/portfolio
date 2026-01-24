import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { socialLinks } from "../data/portfolioData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-base text-white scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        {/* NETLIFY FORM */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="max-w-xl mx-auto grid gap-4"
        >
          {/* REQUIRED HIDDEN INPUT */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot (spam protection) */}
          <input type="hidden" name="bot-field" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-white/5 border border-white/10 text-white focus:border-navhover focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-white/5 border border-white/10 text-white focus:border-navhover focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded bg-white/5 border border-white/10 text-white focus:border-navhover focus:outline-none"
          />

          <button
            type="submit"
            className="
              bg-accent text-base font-semibold py-3 rounded
              hover:opacity-90 transition
            "
          >
            Send Message
          </button>
        </form>

        {/* QUICK CONTACT ICONS */}
        <div className="mt-8 flex justify-center gap-6 text-2xl">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-navhover" />
          </a>

          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-navhover" />
          </a>

          <a href="mailto:ismail.icup@gmail.com">
            <FaEnvelope className="hover:text-navhover" />
          </a>

          <a
            href="https://wa.me/923447475135"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="hover:text-green-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
