import Image from 'next/image';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="">
      {/* HERO SECTION */}
      <section className="h-[600px] relative text-center mx-[10px] md:mx-[120px] xl:mx-[200px] 2xl:mx-[320px]">
        <Hero />

        {/* GLOBE IMAGE */}
        <div className="absolute top-[-20%] right-[-40%] 2xl:right-[-20%] z-[-1]">
          <Image className="hidden md:flex opacity-40" src="/Globe.gif" width={800} height={600} alt="test" />
        </div>
      </section>

      {/* DIVIDER */}
      <section className="w-full h-[1px] bg-[#111111] mt-10"></section>

     
      {/* ABOUT SECTION */}
      <section id="about" className="w-full h-screen flex justify-center items-center">
        <div className="container mx-auto p-2 grid grid-cols-2 gap-4">
    
          <div className="col-span-1 flex-col ">
            <h1 className='text-center'>About Me</h1>
            <p className='px-4 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum consequuntur dolor odit, officiis mollitia nulla sunt commodi, vitae illo eos cupiditate assumenda amet provident natus ea explicabo fuga facilis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas ullam culpa itaque odio quae perspiciatis eius incidunt tempora rerum ex laudantium, et, eligendi vero quibusdam obcaecati magnam nihil quos?
            </p>

            <div id='skills' className="flex justify-between items-center gap-20 w-full h-[50px] bg-red-50 rounded-2xl px-8 mt-20 ">

              <div className="text-black">
                Icon</div>

                <div className="text-black">
                Icon</div>

                <div className="text-black">
                Icon</div>

                <div className="text-black">
                Icon</div>

                <div className="text-black">
                Icon</div>

            </div>
          </div>

          <div className="col-span-1 flex justify-center">
            <Image src="/your-image.jpg" width={600} height={600} alt="Your Picture" />
          </div>

        </div>
      </section>

      {/* Project Section */}
      {/* Add your project section here */}
    </main>
  );
}
