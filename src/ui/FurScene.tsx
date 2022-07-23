import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import { parallax } from "../gsap/parallax";

interface Props {
  containerRef: any;
}

export const FurScene: FC<Props> = ({ containerRef }) => {
  const peopleRef = useRef(null);
  const lettersRef = useRef(null);

  useEffect(() => {
    parallax(peopleRef.current, containerRef.current, 100, 2, false);
    parallax(lettersRef.current, containerRef.current, -70, 2, false);
  }, []);

  return (
    <>
      <div className="w-[350px] h-[350px] xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative  mt-[-5px] mx-auto">
        <Image
          src="/19a.jpeg"
          alt="city"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>
      <div className="absolute top-[-100px]" ref={peopleRef}>
        <div className="w-[350px] h-[300px] xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative  mt-[-30px] mx-auto">
          <Image
            src="/19b.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
      <div className="absolute top-[150px]" ref={lettersRef}>
        <div className="w-[350px] h-[300px] xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative  mt-[-30px] mx-auto">
          <Image
            src="/19c.png"
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
