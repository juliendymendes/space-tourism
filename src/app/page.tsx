import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-home-mobile md:bg-home-tablet  xl:bg-home-desktop bg-no-repeat bg-center bg-[length:100%_100%] font-normal text-center flex flex-col xl:flex-row justify-around items-center xl:items-end xl:pb-40">
      <section className="xl:w-[50%]">
        <p className="font-barlowCondensed text-base md:text-[20px] xl:text-[28px] uppercase tracking-[2.7px] md:tracking-[3.375px] xl:tracking-[4.725px] text-light-blue xl:w-fit">
          So, you want to travel to{" "}
        </p>
        <p className="font-bellefair text-[80px] md:text-[150px] leading-[100px] md:leading-[150px] mt-4 uppercase tracking-normal text-white xl:w-fit xl:my-6">
          space
        </p>
        <p className="text-light-blue font-barlow text-base xl:text-[18px] text-center xl:text-start leading-6 md:leading-[28px] xl:leading[32px]	max-w-[90%] md:max-w-[54%] lg:max-w-[43%] xl:max-w-[64%] m-auto xl:m-0">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </section>

      <Link
        href="#"
        className="text-dark font-bellefair text-center text-[20px] md:text-[32px] tracking-[1.25px] xl:tracking-[2px] uppercase leading-[150px] md:leading-[242px] xl:leading-[274px] bg-white h-[150px] w-[150px] md:h-[242px] md:w-[242px] xl:h-[274px] xl:w-[274px] rounded-full block hover:shadow-[0px_0px_5px_90px_rgba(255,255,255,0.1)] transition-shadow"
      >
        Explore
      </Link>
    </main>
  );
}
