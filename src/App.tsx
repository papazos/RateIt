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
