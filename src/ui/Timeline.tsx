import React, { FC, ReactNode } from "react";

interface Props {
  titleOne: string;
  descOne: ReactNode;
  titleTwo: string;
  descTwo: ReactNode;
  reverse?: boolean;
  addinationalClassname?: string;
  timelineHeight?: string;
  ulCn?: string;
  timelineMT?: string;
}

export const Timeline: FC<Props> = ({
  titleOne,
  descOne,
  titleTwo,
  descTwo,
  reverse = false,
  addinationalClassname,
  timelineHeight = "h-[150px]",
  timelineMT = "mt-[-51px]",
  ulCn,
}) => {
  const Reverse = () => (
    <>
      <li className="w-full text-left">
        <div className="w-[40%] ml-auto relative">
          <div className="h-[5px] left-[-31px] top-[5px] w-[5px] bg-yellow rounded-full absolute"></div>
          <span className="text-yellow">{titleTwo}</span>
          {descOne}
        </div>
      </li>
      <li className="w-full text-right">
        <div className="w-[40%] relative">
          <div className="h-[5px] right-[-31px] top-[5px] w-[5px] bg-yellow rounded-full absolute"></div>
          <span className="text-yellow">{titleOne}</span>
          {descTwo}
        </div>
      </li>
    </>
  );

  return (
    <section
      className={`max-w-[300px] mx-auto relative ${addinationalClassname}`}
    >
      <div
        className={`absolute ${timelineHeight} ${timelineMT} 
        w-[1px] xs:w-[0.1px]
         bg-brown top-0 left-[49.5%] translate-x-[-50%]`}
      ></div>
      <div
        className={`absolute ${timelineHeight} ${timelineMT} 
          w-[1px] xs:w-[0.1px]
         bg-brown top-0 left-[50.43%] translate-x-[-50%]`}
      ></div>
      <ul className={`mt-[-100px] ${ulCn}`}>
        {reverse ? (
          <Reverse />
        ) : (
          <>
            <li className="w-full text-right">
              <div className="w-[40%] relative">
                <div className="h-[5px] right-[-31px] top-[5px] w-[5px] bg-yellow rounded-full absolute"></div>
                <span className="text-yellow">{titleOne}</span>
                {descTwo}
              </div>
            </li>
            <li className="w-full text-left">
              <div className="w-[40%] ml-auto relative">
                <div className="h-[5px] left-[-31px] top-[5px] w-[5px] bg-yellow rounded-full absolute"></div>
                <span className="text-yellow">{titleTwo}</span>
                {descOne}
              </div>
            </li>
          </>
        )}
      </ul>
    </section>
  );
};
