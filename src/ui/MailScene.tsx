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
        y: -100,
        duration: 2,
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
    <div className="relative w-full mt-[200px]" ref={container}>
      <div className="absolute left-2/4 bottom-[50px] translate-x-[-50%]">
        <div className="w-[350px] h-[300px] relative mx-auto">
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
        <div className="w-[180px] h-[150px] relative mx-auto">
          <Image
            src="/34c.png"
            alt="stars"
            layout="fill"
            objectFit="fill"
            priority
          />
          <div className="absolute top-[30%]">
            <p className="text-black text-[11px] px-10 text-center">
              Guests, please enter your password to RSVP.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[350px] relative h-[150px] mt-[-5px] mx-auto">
        <Image
          src="/34d.png"
          alt="city"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>

      <div className="absolute bottom-0 right-0 z-10 w-[110px] h-[100px] xs:w-[170px] xs:h-[150px] md:w-[280px] md:h-[250px] xl:w-[450px] xl:h-[397px]">
        <Image
          src="/ornament1.png"
          alt="swirl"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 z-10 w-[110px] h-[100px] xs:w-[170px] xs:h-[150px] md:w-[280px] md:h-[250px] xl:w-[450px] xl:h-[397px]">
        <Image
          src="/ornament2.png"
          alt="swirl"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
};
