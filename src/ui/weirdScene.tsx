import Image from "next/image";
import React, { FC } from "react";

interface Props {}

export const WeirdScene: FC<Props> = () => {
  return (
    <>
      <div className="w-[340px] relative h-[300px] mt-[-5px] mx-auto">
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
