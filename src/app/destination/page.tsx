import Image from "next/image";
function Destination() {
  return (
    <main className="min-h-screen bg-destination-mobile md:bg-destination-tablet xl:bg-destination-desktop bg-no-repeat bg-center bg-[length:100%_100%] pt-20 xl:pt-40 flex justify-between flex-col xl:flex-row">
      <section className="font-barlowCondensed text-center xl:text-start text-white text-base xl:text-[28px] uppercase tracking-[2.7px] xl:tracking-[4.725px] font-normal flex-1 xl:ms-32">
        <h1>
          <strong className="opacity-25 pe-4">01</strong>Pick your destination
        </h1>
        <Image
          src="/destination/image-moon.webp"
          alt="Moon"
          width={250}
          height={250}
          className="m-auto xl:mx-0 mt-10 xl:w-[378px] xl:ms-16"
        />
      </section>

      <section className="mt-9 flex-1">
        <nav className="font-barlowCondensed tracking-[2.362px] text-base text-white uppercase font-normal">
          <ul className="flex justify-center xl:justify-start gap-x-9">
            <li className="hover:border-b-2 focus:border-b-2  pb-2 border-white cursor-pointer">
              Moon
            </li>
            <li className="hover:border-b-2 focus:border-b-2  pb-2 border-white cursor-pointer">
              Mars
            </li>
            <li className="hover:border-b-2 focus:border-b-2  pb-2 border-white cursor-pointer">
              Europa
            </li>
            <li className="hover:border-b-2 focus:border-b-2  pb-2 border-white cursor-pointer">
              Titan
            </li>
          </ul>
        </nav>

        <h2 className="font-bellefair font-normal text-white text-[80px] xl:text-[100px] uppercase text-center xl:text-start">
          Moon
        </h2>

        <p className="font-barlow text-light-blue text-base xl:text-[18px] leading-7 text-center xl:text-start mx-10 xl:mx-0 xl:w-[440px]">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>

        <div className="divider mx-10 my-5 xl:mx-0 xl:me-44"></div>
        <div className="flex flex-wrap justify-center xl:justify-start items-center gap-x-28 flex-col md:flex-row">
          <div>
            <p className="font-barlowCondensed text-light-blue text-sm tracking-[2.362px] uppercase text-center">
              Avg. distance
            </p>
            <p className="font-bellefair text-[28px] uppercase text-white text-center">
              384,400 km
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-barlowCondensed text-light-blue text-sm tracking-[2.362px] uppercase text-center">
              Est. travel time
            </p>
            <p className="font-bellefair text-[28px] uppercase text-white text-center">
              3 days
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Destination;
