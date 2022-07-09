import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import { parallax } from "../gsap/parallax";

interface Props {
  containerRef: any;
}

export const KeyboardScene: FC<Props> = ({ containerRef }) => {
  const keyboardRef = useRef(null);

  useEffect(() => {
    parallax(keyboardRef.current, containerRef.current, 80, 2, false);
  }, []);

  return (
    <>
      <div className="w-[340px] relative h-[300px]  mx-auto">
        <Image
          src="/7a.png"
          alt="sing"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>
      <div className="absolute top-[-80px] left-[1.9px]" ref={keyboardRef}>
        <div className="w-[340px] relative h-[300px] mx-auto">
          <Image
            src="/7b.png"
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
