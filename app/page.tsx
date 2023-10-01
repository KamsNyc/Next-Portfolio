import React from "react";
import GlobeImg from "./(components)/GlobeImg";
import Hero from "./(components)/Hero";
import Projects from "./(components)/Projects";
import About from "./(components)/About";
import BlurCircle from "./(components)/BlurCircle";

const home = () => {
  return (
    <main className="w-full min-h-full">
      {/* HERO SECTION */}
      <section className="h-[300px] lg:h-[600px] relative text-center md:text-left mx-[10px] md:mx-[120px] xl:mx-[200px] 2xl:mx-[320px]">
        <Hero />

        {/* GLOBE IMAGE */}
        <section className="absolute top-[-15%] right-[-40%] 2xl:right-[-20%] z-[-1]">
          <GlobeImg />
        </section>
      </section>

      {/* DIVIDER */}
      <section id="about" className="w-full h-[1px] bg-[#111111] mt-2 md:mt-20 lg:mt-[-1rem] " />


      {/* #ABOUT SECTION HEADER */}

      <section id="infobox" className="relative my-2 md:my-2 text-center md:text-left lg:text-right mx-[10px] md:mx-[120px] xl:mx-[200px] 2xl:mx-[320px]">
        <h3 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold py-2 pb-[1px] h-regular tracking-tight">ABOUT ME</h3>
        <p className=" text-red-500 p-regular text-xl md:text-2xl lg:text-3xl">get to know me</p>

        {/* BLUR CIRCLE */}
          <BlurCircle />

      </section>

       {/* DIVIDER */}
       <section id="about" className="w-full h-[1px] bg-[#111111] mt-5 " />

      {/* ABOUT SECTION */}

      <section className="h-[300px] lg:h-[600px] relative text-center md:text-left mx-[10px] md:mx-[120px] xl:mx-[200px] 2xl:mx-[320px]">

      <About />

      </section>

      {/* PROJECTS SECTION */}

      <section>
        <Projects />
      </section>
    </main>
  );
};

export default home;
