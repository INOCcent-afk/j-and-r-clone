import gsap from "gsap";
import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";

interface Props {
  containerRef: any;
}

export const Chasing: FC<Props> = ({ containerRef }) => {
  const chasingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      chasingRef.current,
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
  }, []);

  return (
    <>
      <div className="w-[340px] xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative h-[300px] mt-[-5px] mx-auto">
        <Image
          src="/11a.jpeg"
          alt="city"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>
      <div
        className="absolute left-[-80px] bottom-0 xl:bottom-[-120px]"
        ref={chasingRef}
      >
        <div
          className="w-[320px] xs:w-[440px] xs:h-[350px] h-[300px] xl:w-[975px] xl:h-[1000px] relative z-0 mx-auto"
          ref={chasingRef}
        >
          <Image
            src="/11b.png"
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
