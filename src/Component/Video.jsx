export default function VideoSection() {
  const videos = [
    "https://www.youtube.com/embed/RIUtD_F6P2Y",
    "https://www.youtube.com/embed/yE0RCW66Tv4",
    "https://www.youtube.com/embed/UTd8mL2itUo",
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Watch Our Videos</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((url, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
          >
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={url}
                title={`YouTube Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
