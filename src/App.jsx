import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Testimonials from "./components/Testimonials";
import FunKit from "./components/FunKit";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/common/BackToTop";

export default function App() {
  return (
    <div style={{ background: "#030712", minHeight: "100vh", color: "#F1F5F9" }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stack />
      <Projects />
      <Journey />
      <Testimonials />
      <FunKit />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
