import Image from "next/image";
import Hero from "./components/Hero";
import GlobeImg from "./components/GlobeImg";

export default function Home() {
  return (
    <main className="">
      {/* HERO SECTION */}
      <section className="h-[300px] lg:h-[600px] relative text-center md:text-left mx-[10px] md:mx-[120px] xl:mx-[200px] 2xl:mx-[320px]">
        <Hero />

        {/* GLOBE IMAGE */}
        <div className="absolute top-[-15%] right-[-40%] 2xl:right-[-20%] z-[-1]">
          <GlobeImg />
        </div>
      </section>

      {/* DIVIDER */}
      <section
        id="about"
        className="w-full h-[1px] bg-[#111111] mt-10"
      ></section>

      {/* ABOUT SECTION */}
      <section className=" mt-10 sm:mt-20 md:mt-40 w-full h-screen flex justify-center items-center">
        <div className=" h-full container mx-auto h-full p-2 flex-col lg:grid grid-cols-2 gap-4">

          {/* LEFT SIDE */}

          <div className="col-span-1 flex-col justify-center ">
            <h1 className="text-center">About Me</h1>
            <p className="px-4 py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ipsum consequuntur dolor odit, officiis mollitia nulla
              sunt commodi, vitae illo eos cupiditate assumenda amet provident
              natus ea explicabo fuga facilis?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Id voluptas ullam culpa itaque odio
              quae perspiciatis eius incidunt tempora rerum ex laudantium, et,
              eligendi vero quibusdam obcaecati magnam nihil quos?
            </p>

            <div
              id="skills"
              className="flex justify-between items-center gap-10 w-full h-[50px] bg-red-50 rounded-2xl px-8 mt-10 lg:mt-20 "
            >
              <div className="text-black ">Icon</div>

              <div className="text-black ">Icon</div>

              <div className="text-black ">Icon</div>

              <div className="text-black ">Icon</div>

              <div className="text-black ">Icon</div>
            </div>
          </div>

            {/* RIGHT SIDE */}

          <div className="col-span-1 flex items-center justify-center">
            <Image
              src="/test.jpg"
              width={200}
              height={20}
              alt="Picture"
            />
          </div>
        </div>
      </section>

      {/* Project Section */}
      {/* Add your project section here */}
    </main>
  );
}
