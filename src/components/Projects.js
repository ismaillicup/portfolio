import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-base text-white scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                rounded-lg p-6
                flex flex-col justify-between
                transition-all duration-300
                hover:border-navhover
                hover:-translate-y-1
              "
            >
              <div>
                <h3 className="font-bold text-xl mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-4">
                  {project.description}
                </p>
              </div>

              {/* Project Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block mt-auto
                    text-navhover font-medium
                    hover:underline
                  "
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
