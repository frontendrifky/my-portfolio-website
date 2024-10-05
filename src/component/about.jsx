import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const container = useRef();
  const text = useRef();
  const aboutContainer = useRef(); // Using ref for about-container
  const photo = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',    // Start the animation when container top reaches 80% of viewport
        end: 'bottom 20%',   // End when the container bottom reaches 20% of viewport
        once: false,         // Removed once for now, for better debugging
      },
    });

    // Using fromTo to ensure correct animation from initial to final state
    tl.fromTo(text.current, 
      { x: -200, opacity: 0 },   // Initial state
      { x: 0, opacity: 1, duration: 1 } // Final state
    )
    tl.fromTo(aboutContainer.current, 
      { y: 200, opacity: 0 },    // Initial state
      { y: 0, opacity: 1, duration: 1 }, '-=1'); // '-=2' means start the second animation 2 seconds before the previous finishes
    
    tl.fromTo(photo.current,
      {x: -100, opacity: 0, rotate: -5},
      {x: 0, opacity: 1, rotate: 0, duration: 1}, '-=1');
    // Clean up on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers associated with the timeline
    };
  }, []);

  return (
    <div className="about" id='about' ref={container}>
      <h1 ref={text}>
        About <span>Me</span>
      </h1>
      <div className="about-container" ref={aboutContainer}>
        <div className="about-body" ref={photo}>
          <img src="/src/assets/photo.jpg" alt="face" height="180px" width="150px" />
        </div>
        <div className="about-me">
          <p>
            Hi, I&apos;m Rifky Raihan, A <span>Web Developer</span> and <span>Web Designer</span> passionate about creating <span>responsive</span>, <span>dynamic websites</span> and applications that not only look great but also perform <span>flawlessly</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
