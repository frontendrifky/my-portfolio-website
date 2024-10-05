import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Contact(){

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
          { y: 0, opacity: 0 },   // Initial state
          { y: 0, opacity: 1, duration: 2 } // Final state
        )
    
        // Clean up on unmount
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers associated with the timeline
        };
      }, []);

    return(
        <div className='contact' id='contact' ref={container}>
            <div className='contact-word'>
                <h1>Wanna work with <span>me?</span></h1>
                <p>Just click botton in below</p>
            </div>
            <div className='contact-button'>
            <a href="mailto:coderifky1001@gmail.com" style={{ textDecoration: 'none' }}>
              <button>
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                  </div>
                </div>
                <span>Email Me</span>
              </button>
            </a>

            </div>
            
        </div>
    )
}

export default Contact