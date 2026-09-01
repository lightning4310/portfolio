import { useEffect } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import InteractiveGridBackground from "./components/InteractiveGridBackground";

function App() {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <InteractiveGridBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />

      <footer>
        <p>© 2026 Jeevan, Built with React.</p>
      </footer>
    </>
  );
}

export default App;