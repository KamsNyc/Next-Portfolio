import React from 'react'
import GlobeImg from './components/GlobeImg'
import Hero from './components/Hero'

const home = () => {
  return (
    <main>
        {/* HERO SECTION */}
        <section className="h-[300px] lg:h-[600px] relative text-center md:text-left mx-[10px] md:mx-[120px] xl:mx-[200px] 2xl:mx-[320px]">
        <Hero />

        {/* GLOBE IMAGE */}
        <section className="absolute top-[-15%] right-[-40%] 2xl:right-[-20%] z-[-1]">
          <GlobeImg />
        </section>
      </section>

      {/* DIVIDER */}
      <section
        id="about"
        className="w-full h-[1px] bg-[#111111] mt-5"
      ></section>


      {/* ABOUT SECTION */}

      <section className='w-full h-screen xl:flex'>

        {/* LEFT SECTION */}
        
        <section className=" xl:flex-[50%] flex items-center justify-center">
          
          <div id="wrapper" className="w-[70%] flex-col items-center justify-center">

          <div id="tags" className="flex items-center justify-around w-full p-10 mb-8 gap-8 ">

            <div className="flex rounded-2xl bg-fuchsia-400 p-[.2rem] px-[1rem] gap-2 justify-between cursor-pointer hover:scale-105 ease-in duration-300">
            <h3 className='p-[2px]'>name</h3>
            </div>

            <div className="flex rounded-2xl bg-fuchsia-400 p-[.2rem] px-[1rem] gap-2 justify-between cursor-pointer hover:scale-105 ease-in duration-300">
            <h3 className='p-[2px]'>name</h3>
            </div>

            <div className="flex rounded-2xl bg-fuchsia-400 p-[.2rem] px-[1rem] gap-2 justify-between cursor-pointer hover:scale-105 ease-in duration-300">
            <h3 className='p-[2px]'>name</h3>
            </div>

            <div className="flex rounded-2xl bg-fuchsia-400 p-[.2rem] px-[1rem] gap-2 justify-between cursor-pointer hover:scale-105 ease-in duration-300">
            <h3 className='p-[2px]'>name</h3>
            </div>
            
          </div>

          <h1 className='text-4xl text-center mb-4'>TITLE</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, itaque! Quasi corporis magnam amet minima, error architecto eligendi laborum, eveniet ipsum atque ipsa nihil provident veniam a iusto? Doloribus, maxime.</p>

          
          </div>


        </section>
        
          {/* RIGHT SECTION */}
        <section className=" xl:flex-[50%] flex items-center justify-center p-10 px-40">

         
              <img className='w-full h-[400px] object-fill rounded-xl cursor-pointer hover:scale-105 ease-in duration-300' src="https://source.unsplash.com/800x400/?abstract" alt="project" />

              
    
        </section>
       

      </section>
      
    </main>
  )
}

export default home
