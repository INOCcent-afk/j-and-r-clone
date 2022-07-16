import gsap from "gsap";
import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";

interface Props {
  containerRef: any;
}

export const RingScene: FC<Props> = ({ containerRef }) => {
  const ring1 = useRef(null);
  const ring2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ring1.current,
      { y: 0, x: 0 },
      {
        y: 110,
        x: 45,
        duration: 2,
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
          scrub: true,
          start: "start center",
          end: "bottom center",
        },
      }
    );

    gsap.fromTo(
      ring1.current,
      { opacity: 1 },
      {
        opacity: 0,

        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
          scrub: true,
          start: "start center",
          end: "center center-=10px",
        },
      }
    );

    gsap.fromTo(
      ring2.current,
      { y: 0, x: 0 },
      {
        y: 110,
        x: 45,
        duration: 2,
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
          scrub: true,
          start: "start center",
          end: "bottom center",
        },
      }
    );
  }, []);

  return (
    <div className="bg-black">
      <div className="w-[340px] relative h-[300px] mt-[-5px] mx-auto">
        <Image
          src="/25b.png"
          alt="city"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>
      <div className="absolute left-[-100px] top-[-180px]" ref={ring1}>
        <div className="relative mx-auto z-50">
          <img src="/25a.png" alt="" />
        </div>
      </div>
      <div className="absolute left-[-100px] top-[-180px]" ref={ring2}>
        <div className="relative  mx-auto">
          <img src="/25c.png" alt="" />
        </div>
      </div>
    </div>
  );
};
