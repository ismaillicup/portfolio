import { heroData, socialLinks } from "../data/portfolioData";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import ImageCarousel from "../components/ImageCarousel";

export default function Hero() {
  const images = [
    "/images/hero/hero1.jpeg",
    "/images/hero/hero2.jpeg",
    "/images/hero/hero3.jpeg",
    "/images/hero/hero4.jpeg",
    "/images/hero/hero5.jpeg",
    "/images/hero/hero6.jpeg",
  ];

  return (
    <section className="min-h-screen bg-hero text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE — TEXT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {heroData.name}
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-accent font-medium">
            {heroData.role}
          </p>

          <p className="mt-6 text-slate-300 leading-relaxed max-w-xl">
            {heroData.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="/Muhammad Ismail_CV.pdf"
              download
              className="
                bg-accent text-base
                px-6 py-3 rounded-md font-semibold
                transition hover:scale-105
              "
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="
                border border-accent
                px-6 py-3 rounded-md
                text-accent
                transition hover:bg-accent hover:text-base
              "
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex gap-6 text-2xl">
            <a href={socialLinks.github} target="_blank" rel="noreferrer"
               className="hover:text-navhover">
              <FaGithub />
            </a>

            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"
               className="hover:text-navhover">
              <FaLinkedin />
            </a>

            <a href="mailto:ismail.icup@gmail.com"
               className="hover:text-navhover">
              <FaEnvelope />
            </a>

            <a
              href="https://wa.me/923447475135"
              target="_blank"
              rel="noreferrer"
              className="hover:text-navhover"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — CAROUSEL */}
        <div className="w-full">
          <ImageCarousel images={images} />
        </div>

      </div>
    </section>
  );
}
