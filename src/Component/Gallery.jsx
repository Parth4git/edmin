export default function Gallery() {
  const images = [
    "https://www.omitec.org/img/Gallery/Lab.webp",
    "https://www.omitec.org/img/Gallery/Lab4.webp",
    "https://www.omitec.org/img/Gallery/Lab1.webp",
    "https://www.omitec.org/img/Gallery/Class4.webp",
    "https://www.omitec.org/img/Gallery/Lab2.webp",
    "https://edumin.in/img/51/CMS/51ia4Photo.jpg",
    "https://edumin.in/img/51/CMS/51tmQPhoto.jpeg",
    "https://edumin.in/img/51/CMS/5109VPhoto.jpg",
    "https://www.omitec.org/img/Gallery/Lab5.webp",
    "https://edumin.in/img/51/CMS/51ljfPhoto.jpeg",
    "https://edumin.in/img/51/CMS/5109VPhoto.jpg",
  ];

  return (
    <div className="bg-gray-50">
      <section className="max-w-7xl mx-auto py-12 px-4 md:px-12 lg:px-16 gap-6 ">
        <h2 className="text-5xl font-semibold text-center mb-12">Gallery</h2>
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
        <div className="text-center mt-2">
          <a
            href="https://www.omitec.org/gallery"
            className="inline-block px-6 py-4 bg-cyan-400 text-black rounded-lg hover:bg-cyan-500 transition border-1 border-gray-900 hover:border-cyan-500"
          >
            View More
          </a>
        </div>
      </section>
    </div>
  );
}
