import Image from "next/image";
import React, { FC } from "react";

interface Props {
  desc: string;
}

const Banner: FC<Props> = ({ desc }) => {
  return (
    <section className="max-w-[150px]">
      <div className="relative w-[150px] h-[50px] ">
        <Image
          src="/story-top.png"
          alt="story-top"
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className="border-r-[0.3px] border-yellow border-l-[0.3px]">
        <p className="text-[10px] text-white p-4 mt-[-10px] first-letter:text-yellow first-letter:text-xl first-letter:mr-[2px]">
          {desc}
        </p>
      </div>
      <div className="relative w-[150px] h-[50px] mt-[-10px]">
        <Image
          src="/story-bottom.png"
          alt="story-bottom"
          objectFit="contain"
          layout="fill"
        />
      </div>
    </section>
  );
};

export default Banner;
