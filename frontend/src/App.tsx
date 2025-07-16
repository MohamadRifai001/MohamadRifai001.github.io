import React from "react";
import { ThemeProvider } from "./hooks/useTheme";
import Header from "./components/common/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
// import Contact from "./components/Contact";
import Contact from "./components/Contact"; // Assuming this is the old contact component
import Footer from "./components/common/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
