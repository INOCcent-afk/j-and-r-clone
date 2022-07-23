import Image from "next/image";
import React, { FC } from "react";

interface Props {
  containerRef: any;
}

export const CatScene: FC<Props> = ({ containerRef }) => {
  return (
    <div className="w-[340px] h-[300px] xs:w-[440px] xs:h-[350px] xl:w-[975px] xl:h-[1000px] relative mt-[-5px] mx-auto">
      <Image
        src="/17a.jpeg"
        alt="city"
        layout="fill"
        objectFit="fill"
        priority
      />
    </div>
  );
};
