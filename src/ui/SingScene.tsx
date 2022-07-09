import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import { parallax } from "../gsap/parallax";

interface Props {
  containerRef: any;
}

export const SingScene: FC<Props> = ({ containerRef }) => {
  const backgroundRef = useRef(null);
  const micRef = useRef(null);
  const manRef = useRef(null);

  useEffect(() => {
    parallax(backgroundRef.current, containerRef.current, 20, 2, false);
    parallax(micRef.current, containerRef.current, -10, 2, false);
    parallax(manRef.current, containerRef.current, -30, 2, false);
  }, []);

  return (
    <>
      <div className="absolute top-0" ref={backgroundRef}>
        <div className="w-[340px] relative h-[300px] mt-[-25px] mx-auto">
          <Image src="/5a.jpeg" alt="sing" layout="fill" objectFit="fill" />
        </div>
      </div>
      <div className="absolute top-0" ref={micRef}>
        <div className="w-[340px] relative h-[300px] mt-[35px] mx-auto">
          <Image src="/5c.png" alt="sing" layout="fill" objectFit="fill" />
        </div>
      </div>
      <div
        className="w-[340px] relative h-[300px] mt-[30px] mx-auto"
        ref={manRef}
      >
        <Image src="/5b.png" alt="sing" layout="fill" objectFit="fill" />
      </div>
    </>
  );
};
