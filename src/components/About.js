import { aboutData } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-base text-white scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-6 inline-block border-b-2 border-accent pb-2">
          About Me
        </h2>

        <p className="mt-6 text-slate-300 leading-relaxed">
          {aboutData.text}
        </p>

      </div>
    </section>
  );
}
