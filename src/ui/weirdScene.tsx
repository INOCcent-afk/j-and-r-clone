import Image from "next/image";
import React, { FC } from "react";

interface Props {}

export const WeirdScene: FC<Props> = () => {
  return (
    <>
      <div className="w-[340px] relative h-[300px] xs:w-[440px] xs:h-[350px] xl:w-[1000px] xl:h-[800px] mt-[-5px] mx-auto">
        <Image
          src="/33a.jpeg"
          alt="city"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>
    </>
  );
};
