import { gsap } from "gsap";

export const parallax = (
  elementToAnimate: any,
  elementContainer: any,
  y?: number,
  duration?: number,
  markers?: boolean
) => {
  return gsap.fromTo(
    elementToAnimate,
    { y: 0 },
    {
      y: y,
      duration: duration,
      scrollTrigger: {
        trigger: elementContainer,
        toggleActions: "play none none reverse",
        markers: markers,
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    }
  );
};
