import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Timeline } from "../ui/Timeline";
import Banner from "../ui/Banner";
import { SceneContainer } from "../ui/SceneContainer";
import { GirlScene } from "../ui/GirlScene";
import { SingScene } from "../ui/SingScene";
import { KeyboardScene } from "../ui/KeyboardScene";
import { XOScene } from "../ui/XOScene";

gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  const girlContainerRef = useRef(null);
  const singContainerRef = useRef(null);
  const keyboardContainerRef = useRef(null);
  const xoContainerRef = useRef(null);

  return (
    <div>
      <Head>
        <title>Jess & Russ</title>
        <meta name="description" content="Jess & Russ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute top-0 left-0 z-10 w-[110px] h-[100px] xs:w-[170px] xs:h-[150px] md:w-[280px] md:h-[250px] xl:w-[450px] xl:h-[397px]">
        <Image
          src="/topswirl-left.png"
          alt="swirl"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute top-0 right-0 z-10 w-[110px] h-[100px] xs:w-[170px] xs:h-[150px] md:w-[280px] md:h-[250px] xl:w-[450px] xl:h-[397px]">
        <Image
          src="/topswirl-right.png"
          alt="swirl"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <main className="flex items-center justify-center flex-col mt-[20px]">
        <section className="relative w-[320px] h-[400px] xs:w-[450px] xs:h-[600px] md:w-[600px] md:h-[732px] xl:w-[1000px] xl:h-[832px]">
          <Image
            src="/1b.png"
            alt="jess and russ"
            layout="fill"
            objectFit="contain"
          />
        </section>

        <Timeline
          titleOne="September 1996"
          descOne={
            <p className="text-gray text-[11px]">
              She bought a Smashing Pumpkins album, painted stars on her bedroom
              ceiling, and <span>felt emotional.</span>
            </p>
          }
          titleTwo="April 1998"
          descTwo={
            <p className="text-gray text-[11px]">
              He kissed a real girl at the annual latin camp dance social.
              Spoiler alert: he didn't marry her.
            </p>
          }
        />

        <Banner
          desc="Almost four years ago, fate and a few mouse clicks brought Russ
          Maschmeyer and Jessica Hische together. They went from complete
          strangers to inseparable companions in work and love. This is how
          it all began."
        />

        <Timeline
          addinationalClassname="mt-[100px]"
          timelineHeight="h-[250px]"
          timelineMT="mt-[-110px]"
          titleOne="August 2005"
          ulCn="mt-[0px]"
          descOne={
            <p className="text-gray text-[11px]">
              He graduated from NYU and shlepped his belongings to
              <span> Greenpoint Brooklyn.</span>
            </p>
          }
          titleTwo="February 2007"
          descTwo={
            <p className="text-gray text-[11px]">
              She packed her bags and her bike, waved 'farewell' to Philly and
              'hello' to
              <span> Brooklyn.</span>
            </p>
          }
          reverse
        />

        <SceneContainer ref={girlContainerRef}>
          <GirlScene containerRef={girlContainerRef} />
        </SceneContainer>

        <Timeline
          addinationalClassname="mt-[150px]"
          timelineHeight="h-[350px]"
          timelineMT="mt-[-150px]"
          titleOne="March 2007"
          ulCn="mt-[0px]"
          descOne={
            <p className="text-gray text-[11px]">
              She set up her first studio: a shared workspace with a gaggle of
              new illustration friends.
            </p>
          }
          titleTwo="June 2007"
          descTwo={
            <p className="text-gray text-[11px]">
              He experienced the most surreal day of his life shooting
              <span className="text-yellow">this epic music video.</span>
            </p>
          }
        />

        <Banner desc="he worked for Louise Fili from 9-6 and spent 7-2am at her studio in Greenpoint. It was an intense but rewarding work schedule. She was beginning to make a name for herself." />

        <Timeline
          addinationalClassname="mt-[100px]"
          timelineHeight="h-[230px]"
          timelineMT="mt-[-110px]"
          titleOne="January 2008"
          ulCn="mt-[0px]"
          descOne={
            <p className="text-gray text-[11px]">
              Dressed as a sparkly penguin, she marched in
              <span className="text-yellow">The Mummer Parade</span> in
              Philadelphia. Quite possibly the most hipstery thing she will ever
              do.
            </p>
          }
          titleTwo="March 2008"
          descTwo={
            <p className="text-gray text-[11px]">
              His band finished their first national tour. They survived, but{" "}
              <span className="text-yellow">their van wasn't so lucky.</span>
            </p>
          }
        />

        <SceneContainer additionalClassnames="mt-[50px]" ref={singContainerRef}>
          <SingScene containerRef={singContainerRef} />
        </SceneContainer>

        <Timeline
          addinationalClassname="mt-[110px]"
          timelineHeight="h-[250px]"
          timelineMT="mt-[-110px]"
          titleOne="May 2008"
          ulCn="mt-[0px]"
          descOne={
            <p className="text-gray text-[11px]">
              Due to her work schedule, a long distance relationship blossomed
              and fizzled. She was back to square one.
            </p>
          }
          titleTwo="May 2008"
          descTwo={
            <p className="text-gray text-[11px]">
              After a tumultuous relationship came to a close, he decided to
              take a break from dating, and took up bread baking.
            </p>
          }
          reverse
        />

        <Banner
          additionalClassnames="mt-[8px]"
          desc="They barely had time to eat (let alone date) with their crazy schedules. They both wanted to meet someone special, but couldn’t figure out how to make it happen."
        />

        <Timeline
          addinationalClassname="mt-[100px]"
          timelineHeight="h-[250px]"
          timelineMT="mt-[-110px]"
          titleOne="September 2008"
          ulCn="mt-[0px]"
          descOne={
            <p className="text-gray text-[11px]">
              She posted her profile and was barraged by a boatload of d-bags.
              It seemed like match.com would turn out to be another dead end.
            </p>
          }
          titleTwo="September 2008"
          descTwo={
            <p className="text-gray text-[11px]">
              On his 112th attempt at making a decent Ciabatta loaf, he tossed
              his apron aside and joined Match.com.
            </p>
          }
        />

        <SceneContainer
          additionalClassnames="mt-[50px]"
          ref={keyboardContainerRef}
        >
          <KeyboardScene containerRef={keyboardContainerRef} />
        </SceneContainer>

        <Timeline
          addinationalClassname="mt-[130px]"
          timelineHeight="h-[250px]"
          timelineMT="mt-[-130px]"
          titleOne="May 2008"
          ulCn="mt-[0px]"
          descOne={
            <p className="text-gray text-[11px]">
              Due to her work schedule, a long distance relationship blossomed
              and fizzled. She was back to square one.
            </p>
          }
          titleTwo="May 2008"
          descTwo={
            <p className="text-gray text-[11px]">
              After a tumultuous relationship came to a close, he decided to
              take a break from dating, and took up bread baking.
            </p>
          }
          reverse
        />

        <Banner
          additionalClassnames="mt-[8px]"
          desc="After a few messages, he invited her to see his band perform on the Lower East Side. Sparks flew, but fate was against them—he left the next morning for a month-long tour."
        />

        <Timeline
          addinationalClassname="mt-[120px]"
          timelineHeight="h-[250px]"
          timelineMT="mt-[-130px]"
          titleOne="May 2008"
          ulCn="mt-[0px]"
          descOne={
            <p className="text-gray text-[11px]">
              Due to her work schedule, a long distance relationship blossomed
              and fizzled. She was back to square one.
            </p>
          }
          titleTwo="May 2008"
          descTwo={
            <p className="text-gray text-[11px]">
              After a tumultuous relationship came to a close, he decided to
              take a break from dating, and took up bread baking.
            </p>
          }
        />

        <SceneContainer additionalClassnames="mt-[30px]" ref={xoContainerRef}>
          <XOScene containerRef={xoContainerRef} />
        </SceneContainer>

        <Timeline
          addinationalClassname="mt-[120px]"
          timelineHeight="h-[250px]"
          timelineMT="mt-[-130px]"
          titleOne="May 2008"
          ulCn="mt-[0px]"
          descOne={
            <p className="text-gray text-[11px]">
              Due to her work schedule, a long distance relationship blossomed
              and fizzled. She was back to square one.
            </p>
          }
          titleTwo="May 2008"
          descTwo={
            <p className="text-gray text-[11px]">
              After a tumultuous relationship came to a close, he decided to
              take a break from dating, and took up bread baking.
            </p>
          }
        />

        <Banner
          additionalClassnames="mt-[8px]"
          desc="After a few messages, he invited her to see his band perform on the Lower East Side. Sparks flew, but fate was against them—he left the next morning for a month-long tour."
        />

        <Timeline
          addinationalClassname="mt-[120px]"
          timelineHeight="h-[250px]"
          timelineMT="mt-[-130px]"
          titleOne="May 2008"
          ulCn="mt-[0px]"
          descOne={
            <p className="text-gray text-[11px]">
              Due to her work schedule, a long distance relationship blossomed
              and fizzled. She was back to square one.
            </p>
          }
          titleTwo="May 2008"
          descTwo={
            <p className="text-gray text-[11px]">
              After a tumultuous relationship came to a close, he decided to
              take a break from dating, and took up bread baking.
            </p>
          }
        />
      </main>
    </div>
  );
};

export default Home;
