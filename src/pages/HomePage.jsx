import React from "react";
import Hero from "../components/Hero";
import EventOverview from "../components/EventOverview";
import AboutOverview from "../components/AboutOverview";
import NewsTeller from "../components/NewsTeller";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <EventOverview />
      <AboutOverview />
      <NewsTeller />
      <ContactUs />
      <Footer />
    </div>
  );
}
