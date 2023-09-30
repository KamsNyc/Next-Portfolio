import React from "react";

const Projects = () => {
  return (
    <div className="w-full h-[600px] xl:flex">
      <section className=" xl:flex-[50%] flex items-center justify-center">
        <div
          id="wrapper"
          className="w-[70%] flex-col items-center justify-center"
        >
          <div
            id="tags"
            className="flex items-center justify-around w-full p-6 mb-8 gap-8 ">
            <div className="flex rounded-2xl bg-red-400 p-[.2rem] px-[1rem] gap-2 justify-between cursor-pointer hover:scale-105 ease-in duration-300">
              <h3 className="p-[2px]">name</h3>
            </div>

            <div className="flex rounded-2xl bg-red-400 p-[.2rem] px-[1rem] gap-2 justify-between cursor-pointer hover:scale-105 ease-in duration-300">
              <h3 className="p-[2px]">name</h3>
            </div>

            <div className="flex rounded-2xl bg-red-400 p-[.2rem] px-[1rem] gap-2 justify-between cursor-pointer hover:scale-105 ease-in duration-300">
              <h3 className="p-[2px]">name</h3>
            </div>

            <div className="flex rounded-2xl bg-red-400 p-[.2rem] px-[1rem] gap-2 justify-between cursor-pointer hover:scale-105 ease-in duration-300">
              <h3 className="p-[2px]">name</h3>
            </div>
          </div>

          <h1 className="text-4xl text-center mb-4">TITLE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            itaque! Quasi corporis magnam amet minima, error architecto eligendi
            laborum, eveniet ipsum atque ipsa nihil provident veniam a iusto?
            Doloribus, maxime.
          </p>
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className=" xl:flex-[50%] flex items-center  justify-center p-10 px-40">
        <img
          className="w-full h-[400px] object-fill rounded-xl cursor-pointer hover:scale-105 ease-in duration-300"
          src="https://source.unsplash.com/800x400/?abstract"
          alt="project"
        />
      </section>
    </div>
  );
};

export default Projects;
