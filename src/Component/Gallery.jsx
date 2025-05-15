export default function Gallery() {
  const images = [
    "https://www.omitec.org/img/Gallery/Lab.webp",

    "https://www.omitec.org/img/Gallery/Lab4.webp",
    "https://www.omitec.org/img/Gallery/Lab1.webp",
    "https://www.omitec.org/img/Gallery/Class4.webp",
    "https://www.omitec.org/img/Gallery/Lab2.webp",
    "https://www.omitec.org/img/Gallery/NewYear2.webp",
    "https://www.omitec.org/img/Gallery/NewYear1.webp",
    "https://www.omitec.org/img/Gallery/Lab4.webp",
    "https://www.omitec.org/img/Gallery/Lab5.webp",
    "https://www.omitec.org/img/Gallery/Lab4.webp",
  ];

  return (
    <section className="p-6 bg-white">
      <h2 className="text-5xl font-bold text-center mb-12">Gallery</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="rounded-xl w-full hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
      <div className="text-center mt-6">
        <a
          href="https://www.omitec.org/gallery"
          className="inline-block px-4 py-2 bg-yellow-300 text-white rounded-lg hover:bg-yellow-500 transition"
        >
          View More
        </a>
      </div>
    </section>
  );
}
