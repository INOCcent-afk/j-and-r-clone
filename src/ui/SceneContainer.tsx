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
        <div className="relative w-[350px] h-[5px] mb-[0px] mt-[-10px]">
          <Image
            src="/frame-top.png"
            alt="frame-top"
            objectFit="fill"
            layout="fill"
          />
        </div>
        <div className="relative w-[346px] mx-auto overflow-hidden border-x-[0.1px] border-x-yellow">
          {children}
        </div>
        <div className="relative w-[350px] h-[5px] mt-[0px]">
          <Image
            src="/frame-bottom.png"
            alt="frame-bottom"
            objectFit="fill"
            layout="fill"
          />
        </div>
      </section>
    );
  }
);
