import { FloatButton } from "antd";
import AboutUs from "../landingPage/AboutUs";
import Banner from "../landingPage/Banner";
import Customize from "../landingPage/Customize";
import HowItWorks from "../landingPage/HowItWorks";
import Landing from "../landingPage/Landing";
import MessageForm from "../landingPage/MessageForm";
import NavBar from "../landingPage/NavBar";
import WhyItsImportant from "../landingPage/WhyItsImportant";
import Footer from "../landingPage/Footer";
import { createContext, useRef } from "react";

type RefContextType = {
  howItWorksRef: React.RefObject<HTMLDivElement>;
  whyItsImportantRef: React.RefObject<HTMLDivElement>;
  customizeRef: React.RefObject<HTMLDivElement>;
  aboutUsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
};

export const RefContext = createContext<RefContextType | null>(null);

export default function App() {
  const howItWorksRef = useRef(null);
  const whyItsImportantRef = useRef(null);
  const customizeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);

  const value = {
    howItWorksRef,
    whyItsImportantRef,
    customizeRef,
    aboutUsRef,
    contactRef,
  };

  return (
    <RefContext.Provider value={value}>
      <NavBar />
      <Landing />
      <HowItWorks ref={howItWorksRef} />
      <WhyItsImportant ref={whyItsImportantRef} />
      <Customize ref={customizeRef} />
      <Banner />
      <AboutUs ref={aboutUsRef} />
      <MessageForm ref={contactRef} />
      <Footer />
      <FloatButton.BackTop />
    </RefContext.Provider>
  );
}
