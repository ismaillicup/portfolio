import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { socialLinks } from "../data/portfolioData";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `📩 New Portfolio Message\n\n` +
      `👤 Name: ${name}\n` +
      `📧 Email: ${email}\n\n` +
      `💬 Message:\n${message}`
    );

    window.open(
      `https://wa.me/923447475135?text=${text}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-base text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto grid gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded bg-white/5 border border-white/10"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded bg-white/5 border border-white/10"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 rounded bg-white/5 border border-white/10"
          />

          <button
            type="submit"
            className="bg-green-500 text-black py-3 rounded font-semibold flex items-center justify-center gap-2 hover:bg-green-400"
          >
            <FaWhatsapp />
            Send via WhatsApp
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-6 text-2xl">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:ismail.icup@gmail.com">
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/923447475135"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}
