import gsap from "gsap";
import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import { appear } from "../gsap/appear";

interface Props {
  containerRef: any;
}

export const OfficeScene: FC<Props> = ({ containerRef }) => {
  const noiseOne = useRef(null);
  const noiseTwo = useRef(null);
  const fog = useRef(null);
  const jessica = useRef(null);

  useEffect(() => {
    appear(noiseOne.current, containerRef.current, 1, 2, "top center-=10px");
    appear(noiseTwo.current, containerRef.current, 1, 2, "top center-=60px");
    appear(fog.current, containerRef.current, 1, 2, "top center-=100px");
    appear(jessica.current, containerRef.current, 1, 2, "top center-=150px");
  }, []);

  return (
    <>
      <div className="w-[340px]  xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[800px] relative h-[300px] mt-[-5px] mx-auto">
        <Image
          src="/23a.jpeg"
          alt="city"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>
      <div className="absolute left-[0px] bottom-0" ref={noiseOne}>
        <div className="w-[340px]  xs:w-[440px] xs:h-[350px] h-[300px] xl:w-[975px] xl:h-[800px] relative  mx-auto">
          <Image
            src="/23b.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
      <div className="absolute left-[0px] bottom-0" ref={noiseTwo}>
        <div className="w-[340px]  xs:w-[440px] xs:h-[350px] h-[300px] xl:w-[975px] xl:h-[800px] relative  mx-auto">
          <Image
            src="/23c.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
      <div className="absolute left-[0px] bottom-0" ref={fog}>
        <div className="w-[360px] h-[300px]  xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[800px] relative  mx-auto">
          <Image
            src="/23d.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
      <div className="absolute left-[0px] bottom-0" ref={jessica}>
        <div className="w-[360px] h-[300px]  xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[800px] relative  mx-auto">
          <Image
            src="/23e.png"
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
