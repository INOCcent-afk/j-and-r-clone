import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
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
        <section className="relative  w-[300px] h-[400px] xs:w-[450px] xs:h-[600px] md:w-[600px] md:h-[732px] xl:w-[1000px] xl:h-[832px]">
          <Image
            src="/1b.png"
            alt="jess and russ"
            layout="fill"
            objectFit="contain"
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
