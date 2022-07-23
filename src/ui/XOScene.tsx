import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import { parallax } from "../gsap/parallax";

interface Props {
  containerRef: any;
}

export const XOScene: FC<Props> = ({ containerRef }) => {
  const xo1Ref = useRef(null);
  const xo2Ref = useRef(null);
  const xo3Ref = useRef(null);

  useEffect(() => {
    parallax(xo1Ref.current, containerRef.current, 640, 1, false);
    parallax(xo2Ref.current, containerRef.current, 640, 2, false);
    parallax(xo3Ref.current, containerRef.current, 640, 3, false);
  }, []);

  return (
    <>
      <div className="w-[340px] xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative h-[300px] mx-auto">
        <Image
          src="/9a.jpeg"
          alt="girl"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>
      <div
        className="absolute top-[0px] left-[1.9px] xl:top-[-300px]"
        ref={xo1Ref}
      >
        <div className="w-[340px] xs:w-[440px] xs:h-[300px]  xl:w-[975px] xl:h-[1000px] relative h-[300px] mx-auto">
          <Image
            src="/9b.png"
            alt="sing"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
      <div
        className="absolute top-[-300px] left-[1.9px] xl:top-[-700px]"
        ref={xo2Ref}
      >
        <div className="w-[340px] xs:w-[440px] xs:h-[300px]  xl:w-[975px] xl:h-[1000px] relative h-[300px] mx-auto">
          <Image
            src="/9b.png"
            alt="sing"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>

      <div
        className="absolute top-[-700px] left-[1.9px] xl:top-[-1400px]"
        ref={xo3Ref}
      >
        <div className="w-[340px] xs:w-[440px] xs:h-[300px]  xl:w-[975px] xl:h-[1000px] relative h-[300px] mx-auto">
          <Image
            src="/9b.png"
            alt="sing"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
    </>
  );
};
