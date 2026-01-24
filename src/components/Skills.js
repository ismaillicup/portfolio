import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-base text-white scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                rounded-lg p-4 text-center
                text-slate-200 font-medium
                transition-all duration-300
                hover:border-navhover
                hover:text-navhover
                hover:-translate-y-1
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
