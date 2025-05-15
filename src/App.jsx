import AboutUs from "./Component/AboutUs";
import ChooseUs from "./Component/ChooseUs";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Info from "./Component/Info";
import Courses from "./Component/Courses";
import Footer from "./Component/Footer";
import Gallery from "./Component/Gallery";
import Testimonial from "./Component/Testimonial";
import ContactUs from "./Component/ContactUs";
import AchieversSection from "./Component/Achiever";
import VideoSection from "./Component/Video";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <AboutUs />
      <ChooseUs />
      <Courses />
      <Gallery />
      <Testimonial />
      <AchieversSection />
      <VideoSection />
      {/* <ContactUs /> */}
      <Footer />
    </>
  );
}

export default App;
