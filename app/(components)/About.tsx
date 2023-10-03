import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-full h-full md:h-[600px] lg:flex">
      {/* LEFT SIDE  */}
      <section className="w-full flex items-center justify-center text-center">
        <div id="wrapper">
          <h1 className="h-regular tracking-normal pb-2 text-center">Hello</h1>
          <p className="p-medium py-2 text-lg text-left pl-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at
            dicta molestias, dolores ipsam praesentium architecto incidunt
            fugiat asperiores? Cum nemo aut nobis voluptatem adipisci quos
            recusandae eius, delectus ipsam.
          </p>

          <button className="mt-10 w-[40%] text-center h-medium tracking-wide button-hover">
            Let's Talk
          </button>
        </div>
      </section>

      {/* RIGHT SIDE */}

      <div className="w-full flex  items-top justify-center py-20 object-contain">
        
        <Image className="rounded-2xl"
          src="/200x400.jpg"
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
};

export default About;
