import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Landing() {
  const linesRef = useRef([]); // Create an array to hold refs for each line
  const circle1 = useRef();
  const circle2 = useRef();

  useGSAP(() => {
    const lines = linesRef.current; // Access all lines

    // Animate each line
    gsap.from(lines, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.3, // Delay each line's animation
    });

    gsap.from(circle1.current, {
      opacity: 0,
      x: -200,
      duration: 3,
    })

    gsap.from(circle2.current, {
      opacity: 0,
      x: 200,
      duration: 3,
    })


  }, []); // Run only once on mount

  return (
    <div className='landing'> {/* Set ref for landing */}
      <div className='headline'>
        <h1 ref={(el) => (linesRef.current[0] = el)}>Create <span>beautiful, responsive, and user-friendly</span></h1>
        <h1 ref={(el) => (linesRef.current[1] = el)}>websites using the latest web technologies. Let&apos;s</h1>
        <h1 ref={(el) => (linesRef.current[2] = el)}>bring your <span>ideas</span> to life!</h1>
        <div ref={circle1} className='shiny-circle' id='circle-1'></div>
        <div ref={circle2} className='shiny-circle' id='circle-2'></div>
      </div>
    </div>
  );
}

export default Landing;
