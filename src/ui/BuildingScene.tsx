import gsap from "gsap";
import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import { parallax } from "../gsap/parallax";

interface Props {
  containerRef: any;
}

export const BuildingScene: FC<Props> = ({ containerRef }) => {
  const chair = useRef(null);

  useEffect(() => {
    parallax(chair.current, containerRef.current, 80, 2);
  }, []);

  return (
    <>
      <div className="w-[340px] relative h-[300px] mt-[-5px] mx-auto">
        <Image
          src="/31a.jpeg"
          alt="city"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>
      <div className="absolute  top-[-80px]" ref={chair}>
        <div className="w-[340px] h-[300px] relative  mx-auto">
          <Image
            src="/31b.png"
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
