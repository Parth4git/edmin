import { BiStrikethrough } from "react-icons/bi";
import { coursesCard } from "../assets/dummydata";

const Course = () => {
  return (
    <>
      <section className="py-12 bg-gray-900 px-4 md:px-12 lg:px-16">
        <h1 className="text-5xl font-semibold text-gray-50 text-center mb-12">
          Explore Our Top Courses
        </h1>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {coursesCard.map((val, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden p-4 flex flex-col justify-between hover:shadow-xl shadow-cyan-500 transition ease-in-out hover:scale-105"
            >
              <div className="flex flex-col gap-4 mb-4">
                <div className="w-full h-32 flex-shrink-0">
                  <img
                    src={val.cover}
                    alt="course"
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                <h2 className="text-xl font-semibold mb-2 text-black">
                  {val.coursesName}
                </h2>
              </div>
              <div className="mt-auto">
                <h3 className="text-lg font-semibold mb-2 text-black">
                  <del className="text-gray-600 mr-2">₹{val.Initalprice}</del>
                  <span className="text-3xl font-semibold text-black">
                    ₹{val.Offerprice}
                  </span>
                </h3>
                <button className="w-full py-2 border border-gray-900 text-black rounded bg-cyan-400 hover:bg-cyan-400 transition">
                  ENROLL NOW !
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Course;
