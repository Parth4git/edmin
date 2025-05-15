import React from "react";

const AchieversSection = () => {
  // Sample student data
  const achievers = [
    {
      id: 1,
      name: "Rahul Sharma",
      achievement: "Placed at Google",
      image: "https://edumin.in/img/51/CMS/51g6CSideImg.jpg",
    },
    {
      id: 2,
      name: "Priya Patel",
      achievement: "Placed at Microsoft",
      image: "https://edumin.in/img/51/CMS/51jekSideImg.jpg",
    },
    {
      id: 3,
      name: "Amit Singh",
      achievement: "Placed at Amazon",
      image: "https://edumin.in/img/51/CMS/51bfBSideImg.jpg",
    },
    {
      id: 4,
      name: "Neha Gupta",
      achievement: "Placed at Adobe",
      image: "https://edumin.in/img/51/CMS/51cLdSideImg.jpg",
    },
    {
      id: 5,
      name: "Sandhya Kumari",
      achievement: "Placed at Infosys",
      image: "https://edumin.in/img/51/CMS/51FXySideImg.jpg",
    },
    {
      id: 6,
      name: "Anjali Mishra",
      achievement: "Placed at TCS",
      image: "https://edumin.in/img/51/CMS/51nkdNu6r7fVr2ZDHSideImg.jpeg",
    },
    {
      id: 7,
      name: "Vikram Joshi",
      achievement: "Placed at Wipro",
      image: "https://www.omitec.org/img/students/rahul.webp",
    },
    {
      id: 8,
      name: "Divya Nair",
      achievement: "Placed at IBM",
      image: "https://edumin.in/img/51/CMS/51HEPSideImg.jpg",
    },
  ];

  // Duplicate the array to create seamless looping
  const doubleAchievers = [...achievers, ...achievers];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Achievers
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
            Students who made us proud with their accomplishments
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Marquee Track */}
          <div className="py-6">
            <div className="flex animate-marquee whitespace-nowrap">
              {doubleAchievers.map((student, index) => (
                <div
                  key={`${student.id}-${index}`}
                  className="inline-flex flex-col items-center mx-6 w-48 flex-shrink-0"
                >
                  <div className="relative group">
                    <img
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      src={student.image}
                      alt={student.name}
                    />
                    <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all duration-300"></div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {student.name}
                    </h3>
                    <p className="text-cyan-600 font-medium">
                      {student.achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Fades */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-500 transition-colors duration-300 border-1 border-gray-900 hover:border-cyan-500">
            View More Success Stories
          </button>
        </div>
      </div>

      {/* Add this to your global CSS or Tailwind config */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AchieversSection;
