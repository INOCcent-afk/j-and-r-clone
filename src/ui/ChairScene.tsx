import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import { parallax } from "../gsap/parallax";

interface Props {
  containerRef: any;
}

export const ChairScene: FC<Props> = ({ containerRef }) => {
  const twoRef = useRef(null);
  const sixRef = useRef(null);
  const chairRef = useRef(null);

  useEffect(() => {
    parallax(twoRef.current, containerRef.current, -100, 2, false);
    parallax(sixRef.current, containerRef.current, 100, 2, false);
    parallax(chairRef.current, containerRef.current, 30, 2, false);
  }, []);

  return (
    <>
      <div className="w-[340px] xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative h-[300px] mt-[-5px] mx-auto">
        <Image
          src="/15a.jpeg"
          alt="city"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>
      <div className="absolute top-0 xl:left-[20px]" ref={twoRef}>
        <div className="w-[320px]  h-[300px] xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative  mt-[-30px] mx-auto">
          <Image
            src="/15b.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
      <div className="absolute top-0" ref={sixRef}>
        <div className="w-[320px] h-[300px] xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative  mt-[-30px] mx-auto">
          <Image
            src="/15c.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
      <div className="absolute top-0" ref={chairRef}>
        <div className="w-[320px] h-[300px] xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative mt-[-30px] mx-auto">
          <Image
            src="/15d.png"
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
