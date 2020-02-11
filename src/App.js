import React from "react";
import GlobalStyles from "./GlobalStyle";
import IntroSection from "./components/organisms/IntroSection";
import OurServicesSection from "./components/organisms/OurServicesSection";
import AboutUsSection from "./components/organisms/AboutUsSection";
import OurCustomersSection from "./components/organisms/OurCustomersSection";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <IntroSection />
      <main>
        <OurServicesSection />
        <AboutUsSection />
        <OurCustomersSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
