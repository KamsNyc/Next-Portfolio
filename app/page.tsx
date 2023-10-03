import React from "react";
import GlobeImg from "./(components)/GlobeImg";
import Hero from "./(components)/Hero";
import Projects from "./(components)/Projects";
import About from "./(components)/About";
import BlurCircle from "./(components)/BlurCircle";

const Home = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center">
      {/* BLUR BG CIRCLE */}
      <BlurCircle />

      {/* HERO SECTION */}
      <section className="h-[300px] lg:h-[400px] relative text-center md:text-left mx-[10px] md:mx-[120px] xl:mx-[200px] 2xl:mx-[320px]">
        <Hero />

        {/* GLOBE IMAGE */}
        <section className="absolute top-[-15%] right-[-40%] 2xl:right-[-20%] z-[-1]">
          <GlobeImg />
        </section>
      </section>

      {/* DIVIDER */}
      <section id="about" className="w-full h-[1px] bg-[#111111] mt-[-1rem] md:mt-40 lg:mt-[6rem]" />

      {/* #ABOUT SECTION HEADER */}
      <section className="w-full flex flex-col items-center justify-center text-center md:text-start">
        <div className="mx-[10px] md:mx-[120px] xl:mx-[200px] 2xl:mx-[320px] h-[800px] lg:flex items-center justify-center gap-24">
          <h1 className="py-8 text-main">WHO</h1>
          <p className=" text-3xl lg:text-4xl tracking-tightest p-0 lg:pr-10">
            I'm Kamel, a web developer based in Queens, NYC. I'm all about user-friendly interfaces and full-stack websites. I thrive on learning and embrace new challenges in web development, UI/UX design, and tech collaborations. Off the screen, I'm on the basketball court, staying active, and exploring creative opportunities.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
