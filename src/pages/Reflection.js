import ImageCarousel from "../components/ImageCarousel";

export default function Reflection() {
  const images = [
    "/images/reflection/ref1.jpeg",
    "/images/reflection/ref2.jpeg",
    "/images/reflection/ref3.jpeg",
    "/images/reflection/ref4.jpeg",
    "/images/reflection/ref6.jpeg",
    "/images/reflection/ref7.jpeg",
    "/images/reflection/ref8.jpeg",
    "/images/reflection/ref9.jpeg",
    "/images/reflection/ref10.jpeg",
  ];

  return (
    <section className="py-20 bg-base text-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-6">
          Professional Reflection
        </h2>

        {/* CAROUSEL */}
        <div className="mb-8">
          <ImageCarousel images={images} />
        </div>

        {/* TEXT CONTENT */}
        <p className="text-slate-300 leading-relaxed mb-4">
          Reflective practice plays a vital role in my professional growth
          as an ICT educator. Through classroom experiences, student
          engagement, and extracurricular activities, I continuously
          evaluate and improve my teaching strategies.
        </p>

        <p className="text-slate-300 leading-relaxed mb-4">
          Organizing ICT Club activities and engaging with parents during
          PTMs has strengthened my understanding of learner diversity,
          digital responsibility, and inclusive education.
        </p>

        <p className="text-slate-300 leading-relaxed">
          These reflections guide my future practice and support lifelong
          professional development.
        </p>

      </div>
    </section>
  );
}
