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
      <li className="w-full text-left xl:ml-[-180px]">
        <div className="w-[40%] xl:w-[100%] ml-auto relative">
          <div className="h-[5px] left-[-31px] top-[5px] w-[5px] xl:left-[323px] bg-yellow rounded-full absolute"></div>
          <span className="text-yellow xl:text-[18px]">{titleTwo}</span>
          {descOne}
        </div>
      </li>
      <li className="w-full text-right xl:ml-[160px]">
        <div className="w-[40%] xl:w-[100%] relative">
          <div className="h-[5px] right-[-31px] top-[5px] w-[5px] xl:right-[0] xl:left-[-8px] bg-yellow rounded-full absolute"></div>
          <span className="text-yellow  xl:text-[18px]">{titleOne}</span>
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
        className={`absolute ${timelineHeight} ${timelineMT} w-[1px] xs:w-[0.5px] xl:w-[0.4px] bg-brown xl:bg-yellow top-0 left-[49.5%] xs:left-[49%] xl:left-[48.5%] translate-x-[-50%]`}
      ></div>
      <div
        className={`absolute ${timelineHeight} ${timelineMT} w-[1px] xs:w-[0.5px] xl:w-[0.4px] bg-brown xl:bg-yellow top-0 left-[50.43%] xs:left-[50.5%] xl:left-[51.5%] translate-x-[-50%]`}
      ></div>
      <ul className={`mt-[-100px] ${ulCn}`}>
        {reverse ? (
          <Reverse />
        ) : (
          <>
            <li className="w-full text-right xl:ml-[-180px]">
              <div className="w-[40%] xl:w-[100%] relative">
                <div className="h-[5px] right-[-31px] top-[5px] w-[5px] xl:right-[-28px] bg-yellow rounded-full absolute"></div>
                <span className="text-yellow  xl:text-[18px]">{titleOne}</span>
                {descTwo}
              </div>
            </li>
            <li className="w-full text-left xl:ml-[184px]">
              <div className="w-[40%] xl:w-[100%] ml-auto relative">
                <div className="h-[5px] left-[-31px] top-[5px] w-[5px]  xl:left-[-32px] bg-yellow rounded-full absolute"></div>
                <span className="text-yellow  xl:text-[18px]">{titleTwo}</span>
                {descOne}
              </div>
            </li>
          </>
        )}
      </ul>
    </section>
  );
};
