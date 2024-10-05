import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);



function Project(){
    const container = useRef();


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
        tl.fromTo(container.current, 
          { y: 100, opacity: 1 },   // Initial state
          { y: 0, opacity: 1, duration: 1 } // Final state
        )
    
        // Clean up on unmount
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers associated with the timeline
        };
      }, []);

    return(
        <div className='project' id='project' ref={container}>
            <h1>My <span>Projects</span></h1>
            <div className='my-project'>
                <ul>
                    <li>
                        <h2><a href="https://u-fin-tracking.vercel.app/">U-Fin</a></h2>
                        <p>A personal finance asistance</p>
                    </li>
                    <li>
                        <h2><a href="https://github.com/frontendrifky">GitHub</a></h2>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Project;