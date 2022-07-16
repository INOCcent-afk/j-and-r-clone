import gsap from "gsap";
import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import { parallax } from "../gsap/parallax";

interface Props {
  containerRef: any;
}

export const BushScene: FC<Props> = ({ containerRef }) => {
  const ring = useRef(null);

  useEffect(() => {
    parallax(ring.current, containerRef.current, 120, 2);
  }, []);

  return (
    <>
      <div className="w-[340px] relative h-[300px] mt-[-5px] mx-auto">
        <Image
          src="/29a.jpeg"
          alt="city"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>
      <div className="absolute  bottom-0">
        <div className="w-[340px] h-[300px] relative  mx-auto">
          <Image
            src="/29b.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
      <div className="absolute  top-[-120px] bottom-0" ref={ring}>
        <div className="w-[340px] h-[300px] relative  mx-auto">
          <Image
            src="/29c.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
      <div className="absolute bottom-0">
        <div className="w-[340px] h-[300px] relative  mx-auto">
          <Image
            src="/29d.png"
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
