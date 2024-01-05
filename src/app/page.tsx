import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-home-bg-mobile bg-no-repeat bg-center bg-[length:100%_100%] font-normal text-center flex flex-col justify-around items-center">
      <section>
        <p className="font-barlowCondensed text-base font-normal uppercase tracking-[2.7px] text-light-blue">
          So, you want to travel to{" "}
          <span className="font-bellefair text-[80px] leading-[100px] uppercase tracking-normal text-white">
            space
          </span>
        </p>
        <p className="text-light-blue font-barlow text-base text-center leading-6	max-w-[90%] m-auto">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </section>

      <Link
        href="#"
        className="text-dark font-bellefair text-center text-[20px] tracking-[1.25px] uppercase leading-[150px] bg-white h-[150px] w-[150px] rounded-full block"
      >
        Explore
      </Link>
    </main>
  );
}
