import gsap from "gsap";
import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import { parallax } from "../gsap/parallax";

interface Props {
  containerRef: any;
}

export const CyclingScene: FC<Props> = ({ containerRef }) => {
  const bikeRef = useRef(null);
  const moonRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bikeRef.current,
      { x: -80 },
      {
        x: 80,
        duration: 2,
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
          scrub: 1,
          start: "top center",
          end: "bottom center",
        },
      }
    );

    gsap.fromTo(
      carRef.current,
      { x: -40 },
      {
        x: 30,
        duration: 2,
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none reverse",
          scrub: 1,
          start: "top center",
          end: "bottom center",
        },
      }
    );

    parallax(moonRef.current, containerRef.current, 40, 2, false);
  }, []);

  return (
    <>
      <div className="w-[340px]  xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative h-[300px] mt-[-5px] mx-auto">
        <Image
          src="/21a.png"
          alt="city"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>
      <div className="absolute top-0" ref={moonRef}>
        <div className="w-[320px] h-[300px]  xs:w-[400px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative  mt-[-30px] mx-auto">
          <Image
            src="/21b.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
      <div className="absolute top-0">
        <div className="w-[320px] h-[300px]  xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative  mt-[-30px] mx-auto">
          <Image
            src="/21c.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
      <div className="absolute top-0" ref={carRef}>
        <div className="w-[320px] h-[300px]  xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative  mt-[-30px] mx-auto">
          <Image
            src="/21d.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
      <div className="absolute top-0" ref={bikeRef}>
        <div className="w-[320px] h-[300px]  xs:w-[400px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative  mt-[-30px] mx-auto">
          <Image
            src="/21e.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 ">
        <div className="w-[320px] h-[300px] xl:w-[600px] xl:h-[800px] relative  mt-[-30px] mx-auto">
          <Image
            src="/21f.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
    </>
  );
};
