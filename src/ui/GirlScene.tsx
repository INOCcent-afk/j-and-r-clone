import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import { parallax } from "../gsap/parallax";

interface Props {
  containerRef: any;
}

export const GirlScene: FC<Props> = ({ containerRef }) => {
  const moonRef = useRef(null);
  const angelRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    parallax(moonRef.current, containerRef.current, -100, 2, false);
    parallax(angelRef.current, containerRef.current, 100, 2, false);
    parallax(starsRef.current, containerRef.current, 30, 2, false);
  }, []);

  return (
    <>
      <div className="w-[340px] relative h-[300px] mt-[-5px] mx-auto">
        <Image src="/3a.jpeg" alt="city" layout="fill" objectFit="fill" />
      </div>
      <div className="absolute top-0">
        <div
          className="w-[320px] h-[300px] relative  mt-[-30px] mx-auto"
          ref={starsRef}
        >
          <Image src="/3b.png" alt="stars" layout="fill" objectFit="fill" />
        </div>
      </div>
      <div className="absolute top-0">
        <div
          className="w-[320px] h-[300px] relative mt-[100px] mx-auto "
          ref={moonRef}
        >
          <Image src="/3c.png" alt="moon" layout="fill" objectFit="fill" />
        </div>
      </div>
      <div className="absolute top-0">
        <div
          className="w-[320px] h-[300px] relative mt-[-100px] mx-auto "
          ref={angelRef}
        >
          <Image src="/3d.png" alt="girl" layout="fill" objectFit="fill" />
        </div>
      </div>
    </>
  );
};
