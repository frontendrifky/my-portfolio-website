import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGSAP = (targets, config) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: config.scrollTrigger,
    });

    // Loop through targets and apply the animation
    if (targets) {
      targets.forEach(({ ref, animation }) => {
        tl.from(ref.current, animation).to(ref.current); // Ensure opacity is 1 at the end
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [targets, config]);
};

export default useGSAP;
