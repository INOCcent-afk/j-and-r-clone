import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <main className="relative">
      <Head>
        <title>Jess & Russ</title>
        <meta name="description" content="Jess & Russ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute top-0 left-0 z-10 w-[110px] h-[100px] xs:w-[230px] xs:h-[200px] md:w-[330px] md:h-[300px] xl:w-[450px] xl:h-[397px]">
        <Image
          src="/topswirl-left.png"
          alt="swirl"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute top-0 right-0 z-10  w-[110px] h-[100px] xs:w-[230px] xs:h-[200px] md:w-[330px] md:h-[300px] xl:w-[450px] xl:h-[397px]">
        <Image
          src="/topswirl-right.png"
          alt="swirl"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </main>
  );
};

export default Home;
