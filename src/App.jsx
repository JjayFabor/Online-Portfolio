import React, { useEffect } from 'react';
import About from './components/About';
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
        <div id="about" className="h-screen flex items-center justify-center relative">
          <About />
        </div>
        <div id="projects" className="h-screen flex items-center justify-center relative">
          <Projects/>
        </div>
        <div id="resume" className="h-screen flex items-center justify-center relative">
          <h1 className="text-4xl">Resume Section</h1>
        </div>
        <div id="contact" className="h-screen flex items-center justify-center relative">
          <h1 className="text-4xl">Contact Section</h1>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
