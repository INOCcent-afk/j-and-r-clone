import gsap from "gsap";
import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";

interface Props {}

export const MailScene: FC<Props> = () => {
  const paper = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      paper.current,
      { y: 0 },
      {
        y: -50,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          toggleActions: "play none none reverse",
          scrub: 1,
          start: "top center-=-800px",
          end: "bottom center",
        },
      }
    );
  }, []);

  return (
    <div className="relative w-full mt-[200px] xl:mt-[350px]" ref={container}>
      <div className="absolute left-2/4 bottom-[50px] xs:bottom-0 translate-x-[-50%]">
        <div className="w-[350px] h-[300px] xs:w-[400px] xs:h-[400px] xl:mr-[2px] xl:w-[900px] xl:h-[900px]  relative mx-auto">
          <Image
            src="/34b.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
        </div>
      </div>
      <div
        className="absolute left-2/4 bottom-[0px] translate-x-[-50%]"
        ref={paper}
      >
        <div className="w-[180px] h-[200px] xl:w-[350px]  xl:h-[400px]  relative mx-auto">
          <Image
            src="/34c.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
          <div className="absolute top-[30%]">
            <p className="text-black text-[11px] xl:text-[30px] px-10 text-center">
              Guests, please enter your password to RSVP.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[350px] xs:w-[390px] xs:h-[140px] xl:w-[900px] xl:h-[300px]  relative h-[150px] mt-[-5px] mx-auto">
        <Image
          src="/34d.png"
          alt="city"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>

      <div className="absolute bottom-0 right-0 xs:right-[-10px]  z-10 w-[110px] h-[100px] xs:w-[180px] xs:h-[180px] md:w-[280px] md:h-[250px] xl:w-[450px] xl:h-[397px]">
        <Image
          src="/ornament1.png"
          alt="swirl"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 xs:left-[-10px]  z-10 w-[110px] h-[100px] xs:w-[180px] xs:h-[180px] md:w-[280px] md:h-[250px] xl:w-[450px] xl:h-[397px]">
        <Image
          src="/ornament2.png"
          alt="swirl"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>
    </div>
  );
};
