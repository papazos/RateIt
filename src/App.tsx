import { FloatButton } from "antd";
import AboutUs from "./app/landingPage/AboutUs";
import Banner from "./app/landingPage/Banner";
import Customize from "./app/landingPage/Customize";
import HowItWorks from "./app/landingPage/HowItWorks";
import Landing from "./app/landingPage/Landing";
import MessageForm from "./app/landingPage/MessageForm";
import NavBar from "./app/landingPage/NavBar";
import WhyItsImportant from "./app/landingPage/WhyItsImportant";
import Footer from "./app/landingPage/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <HowItWorks />
      <WhyItsImportant />
      <Customize />
      <Banner />
      {/* Responsive */}
      <AboutUs />
      <MessageForm />
      <Footer />
      <FloatButton.BackTop />
    </>
  );
}
