import React, { useEffect } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ParticlesComponent from './components/Particles';
import Projects from './components/Projects';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <ThemeProvider>
      <div>
        <ParticlesComponent />
        <Navbar />
        <div id="home" className="h-screen flex items-center justify-center relative mb-144">
          <Home />
        </div>
        <div id="about" className="h-screen flex items-center justify-center relative mb-166">
          <About />
        </div>
        <div id="projects" className="h-screen flex items-center justify-center relative mb-166">
          <Projects/>
        </div>
        <div id="experience" className="h-screen flex items-center justify-center relative">
          <Experience/>
        </div>
        <div id="contact" className="h-screen flex items-center justify-center relative">
          <h1 className="text-4xl">Contact Section</h1>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
