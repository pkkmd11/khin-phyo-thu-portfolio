import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { SelectedWork } from "./components/SelectedWork";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-ivory text-charcoal">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <SelectedWork />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;