import Image from "next/image";
import React, { FC } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

interface Props {
  desc: string;
  additionalClassnames?: string;
}

const Banner: FC<Props> = ({ desc, additionalClassnames }) => {
  const { width } = useWindowSize();

  return (
    <section
      className={`max-w-[150px] xs:max-w-[250px] xl:max-w-[470px] ${additionalClassnames}`}
    >
      <div className="relative w-full h-[50px] xl:h-[110px]">
        <Image
          src="/story-top.png"
          alt="story-top"
          objectFit={width < 500 ? "contain" : "fill"}
          layout="fill"
        />
      </div>
      <div className="border-r-[0.3px] border-yellow border-l-[0.3px]">
        <p className="text-[10px] text-white p-4 xl:p-8 mt-[-10px] xs:mt-[0px] xl:text-[22px] first-letter:text-yellow first-letter:text-xl first-letter:mr-[2px]">
          {desc}
        </p>
      </div>
      <div className="relative w-full h-[50px] xl:h-[120px] mt-[-10px] xs:mt-[0px] ">
        <Image
          src="/story-bottom.png"
          alt="story-bottom"
          objectFit={width < 500 ? "contain" : "fill"}
          layout="fill"
        />
      </div>
    </section>
  );
};

export default Banner;
