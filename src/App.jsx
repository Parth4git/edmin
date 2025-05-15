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
import Counter from "./Component/Counter";
import OfferPopup from "./Component/PopUp";

function App() {
  return (
    <>
      <OfferPopup />
      <Header />
      <Hero />
      <Info />
      <AboutUs />
      <ChooseUs />
      <Courses />
      <Gallery />
      <Counter />
      <Testimonial />
      <AchieversSection />
      <VideoSection />
      {/* <ContactUs /> */}
      <Footer />
    </>
  );
}

export default App;
