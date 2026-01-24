import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-base text-white scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="
                relative pl-6
                border-l-2 border-navhover
              "
            >
              <h3 className="text-xl font-semibold">
                {edu.degree}
              </h3>

              <p className="text-navhover">
                {edu.institute}
              </p>

              <p className="text-sm text-slate-400">
                {edu.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
