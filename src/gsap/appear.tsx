import { gsap } from "gsap";

export const appear = (
  elementToAnimate: any,
  elementContainer: any,
  opacity?: number,
  duration?: number,
  start?: string
) => {
  return gsap.fromTo(
    elementToAnimate,
    { opacity: 0 },
    {
      opacity: opacity,
      duration: duration,
      scrollTrigger: {
        trigger: elementContainer,
        toggleActions: "play none none reverse",
        scrub: 1,
        start: start,
        end: "bottom center",
      },
    }
  );
};
