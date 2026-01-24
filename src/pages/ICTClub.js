import ImageCarousel from "../components/ImageCarousel";

export default function ICTClub() {
  const images = [
    "/images/ict/ict1.jpeg",
    "/images/ict/ict2.jpeg",
    "/images/ict/ict3.jpeg",
    "/images/ict/ict4.jpeg",
    "/images/ict/ict5.jpeg",
    "/images/ict/ict6.jpeg",
    "/images/ict/ict7.jpeg",
    "/images/ict/ict8.jpeg",
    "/images/ict/ict9.jpeg",
    "/images/ict/ict10.jpeg",
    "/images/ict/ict11.jpeg",
    "/images/ict/ict12.jpeg",
  ];

  return (
    <section className="py-20 bg-base text-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-6">
          ICT Club Activities
        </h2>

        <p className="text-slate-300 mb-8">
          The ICT Club promotes hands-on learning through coding,
          digital literacy, problem-solving, and collaborative activities.
        </p>

        {/* IMAGE CAROUSEL */}
        <ImageCarousel images={images} />

        {/* ACTIVITIES LIST */}
        <ul className="mt-8 list-disc list-inside text-slate-300 space-y-2">
          <li>HourofAI Session</li>
          <li>Basic web development sessions</li>
          <li>Web development sessions</li>
          <li>Cyber safety awareness</li>
          <li>Collaborative problem-solving activities</li>
        </ul>

      </div>
    </section>
  );
}
