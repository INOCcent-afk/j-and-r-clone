import Image from "next/image";
import React, { forwardRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  additionalClassnames?: string;
}

export const SceneContainer = forwardRef<HTMLDivElement, Props>(
  ({ children, additionalClassnames }, ref) => {
    return (
      <section className={`relative mt-24 ${additionalClassnames}`} ref={ref}>
        <div className="relative w-[350px] xs:w-[450px] h-[5px] mb-[0px] mt-[-10px] xl:w-[1000px] xl:h-[10px]">
          <Image
            src="/frame-top.png"
            alt="frame-top"
            objectFit="fill"
            layout="fill"
            priority
          />
        </div>
        <div className="relative w-[346px] xs:w-[446px] mx-auto overflow-hidden border-x-[0.1px] xl:w-[988px] xl:h-[800px] border-x-yellow">
          {children}
        </div>
        <div className="relative w-[350px] xs:w-[450px] h-[5px] mt-[0px] xl:w-[1000px] xl:h-[10px]">
          <Image
            src="/frame-bottom.png"
            alt="frame-bottom"
            objectFit="fill"
            layout="fill"
            priority
          />
        </div>
      </section>
    );
  }
);
