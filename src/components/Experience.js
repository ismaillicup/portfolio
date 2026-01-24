import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-base text-white scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Experience
        </h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="
                relative pl-6
                border-l-2 border-navhover
              "
            >
              <h3 className="text-xl font-semibold">
                {exp.role}
              </h3>

              <p className="text-navhover">
                {exp.organization}
              </p>

              <p className="text-sm text-slate-400 mb-2">
                {exp.duration}
              </p>

              <p className="text-slate-300 leading-relaxed">
                {exp.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
