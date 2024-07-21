import AboutOverview from "./components/AboutOverview";
import ContactUs from "./components/ContactUs";
import EventOverview from "./components/EventOverview";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NewsTeller from "./components/NewsTeller";

function App() {
  return (
    <>
      <Hero />
      <EventOverview />
      <AboutOverview />
      <NewsTeller />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
