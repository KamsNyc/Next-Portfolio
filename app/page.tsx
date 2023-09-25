import Image from 'next/image'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className=''>

         {/* HERO SECTION */}
        <section className='mt-40 relative text-center mx-[10px] md:mx-[120px] xl:mx-[200px] 2xl:mx-[320px]' >
        <Hero />

       

        {/* GLOBE IMAGE */}
        <div className="absolute top-[-20%] right-[-40%] 2xl:right-[-20%] z-[-1]">

          <img className='hidden md:flex opacity-40' src={'https://cdn.dribbble.com/users/2433051/screenshots/4872252/spinning-globe-white.gif'} alt='test img' />
        </div>

        </section>  

        {/* ABOUT SECTION */}

       
        
    </main>
  )
}
