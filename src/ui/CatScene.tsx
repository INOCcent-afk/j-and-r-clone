import Image from "next/image";
import React, { FC } from "react";

interface Props {
  containerRef: any;
}

export const CatScene: FC<Props> = ({ containerRef }) => {
  return (
    <div className="w-[340px] relative h-[300px] mt-[-5px] mx-auto">
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
