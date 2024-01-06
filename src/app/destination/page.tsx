import Image from "next/image";
import Moon from "../../assets/destination/image-moon.webp";
function Destination() {
  return (
    <main className="min-h-screen bg-destination-mobile md:bg-destination-tablet xl:bg-destination-desktop bg-no-repeat bg-center bg-[length:100%_100%] pt-20">
      <section className="font-barlowCondensed text-center text-white text-base uppercase tracking-[2.7px] font-normal">
        <h1>
          <strong className="opacity-25 pe-4">01</strong>Pick your destination
        </h1>
        <Image
          src="/destination/image-moon.webp"
          alt="Moon"
          width={250}
          height={250}
          className="m-auto mt-10"
        />
      </section>

      <section className="mt-9">
        <nav className="font-barlowCondensed tracking-[2.362px] text-base text-white uppercase font-normal">
          <ul className="flex justify-center gap-x-9">
            <li className="hover:border-b-2 focus:border-b-2  pb-2 border-white">
              Moon
            </li>
            <li className="hover:border-b-2 focus:border-b-2  pb-2 border-white">
              Mars
            </li>
            <li className="hover:border-b-2 focus:border-b-2  pb-2 border-white">
              Europa
            </li>
            <li className="hover:border-b-2 focus:border-b-2  pb-2 border-white">
              Titan
            </li>
          </ul>
        </nav>

        <h2 className="font-bellefair font-normal text-white text-[80px] uppercase text-center">
          Moon
        </h2>

        <p className="font-barlow text-light-blue text-base leading-7 text-center mx-10">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>

        <div className="divider mx-10 my-5"></div>
        <div className="flex flex-wrap justify-center items-center gap-x-28 flex-col md:flex-row">
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
