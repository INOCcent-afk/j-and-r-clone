import { gsap } from "gsap";

export const parallax = (
  elementToAnimate: any,
  elementContainer: any,
  y?: number,
  duration?: number,
  markers?: boolean,
  delay?: number
) => {
  return gsap.fromTo(
    elementToAnimate,
    { y: 0 },
    {
      y: y,
      duration: duration,
      delay: delay,
      scrollTrigger: {
        trigger: elementContainer,
        toggleActions: "play none none reverse",
        markers: markers,
        scrub: 1,
        start: "top center",
        end: "bottom center",
      },
    }
  );
};
