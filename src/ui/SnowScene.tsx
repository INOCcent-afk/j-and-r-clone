import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import { parallax } from "../gsap/parallax";

interface Props {
  containerRef: any;
}

export const SnowScene: FC<Props> = ({ containerRef }) => {
  const snowRef = useRef(null);

  useEffect(() => {
    parallax(snowRef.current, containerRef.current, 200, 2, false);
  }, []);

  return (
    <>
      <div className="w-[340px] xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative h-[300px] mt-[-30px] mx-auto">
        <Image
          src="/13a.jpeg"
          alt="city"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute top-[-200px]" ref={snowRef}>
        <div className="w-[300px] h-[340px] xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative mt-[-30px] mx-auto">
          <Image
            src="/13b.png"
            alt="stars"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </>
  );
};
