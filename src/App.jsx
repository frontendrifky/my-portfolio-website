import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Navbar from './component/header';
import Landing from './component/landing';
import About from './component/about';
import Project from './component/project';
import Contact from './component/contact';
import Footer from './component/footer';
import './App.css';

function App() {
  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Smooth scroll speed
      direction: 'vertical', // Scroll direction
      smoothTouch: true, // Enable touch support
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up Lenis on component unmount
    };
  }, []);

  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
