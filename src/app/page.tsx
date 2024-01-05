import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-home-mobile md:bg-home-tablet bg-no-repeat bg-center bg-[length:100%_100%] font-normal text-center flex flex-col justify-around items-center">
      <section>
        <p className="font-barlowCondensed text-base md:text-[20px] uppercase tracking-[2.7px] md:tracking-[3.375px] text-light-blue">
          So, you want to travel to{" "}
        </p>
        <p className="font-bellefair text-[80px] md:text-[150px] leading-[100px] md:leading-[150px] mt-4 uppercase tracking-normal text-white">
          space
        </p>
        <p className="text-light-blue font-barlow text-base text-center leading-6 md:leading-[28px]	max-w-[90%] md:max-w-[54%] lg:max-w-[43%] m-auto">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </section>

      <Link
        href="#"
        className="text-dark font-bellefair text-center text-[20px] md:text-[32px] tracking-[1.25px] uppercase leading-[150px] md:leading-[242px] bg-white h-[150px] w-[150px] md:h-[242px] md:w-[242px] rounded-full block"
      >
        Explore
      </Link>
    </main>
  );
}
