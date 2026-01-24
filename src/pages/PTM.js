import ImageCarousel from "../components/ImageCarousel";

const images = [
  "/images/ptm/ptm1.jpeg",
  "/images/ptm/ptm2.jpeg",
  "/images/ptm/ptm3.jpeg",
  "/images/ptm/ptm4.jpeg",
  "/images/ptm/ptm5.jpeg",
  "/images/ptm/ptm6.jpeg",  
  "/images/ptm/ptm7.jpeg",
];

export default function PTM() {
  return (
    <section className="py-20 bg-base text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">
          Parents–Teachers Meetings
        </h2>

        <p className="text-slate-300 mb-8">
          Regular PTMs strengthen collaboration between parents and teachers,
          ensuring student progress and well-being.
        </p>

        <ImageCarousel images={images} />

        <p className="mt-8 text-slate-300">
          Discussions focused on academic performance, digital behavior,
          and individualized learning strategies.
        </p>
      </div>
    </section>
  );
}
