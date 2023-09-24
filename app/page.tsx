import Image from 'next/image'

export default function Home() {
  return (
    <main className='block text-center md:text-left mx-[10px] md:mx-[120px] xl:mx-[200px] 2xl:mx-[340px]'>

        <p className=' mb-0 xl:mb-[2px] 2xl:mb-[-10px] h-extralight text-[24px] 2xl:text-[30px] pl-0 md:pl-[6px] 2xl:pl-[12px]'>I'M KAMEL SINGH</p>

        <h1 className='mb-[5px] text-main h-bold text-[60px] sm:text-[86px] md:text-[96px] lg:text-[124px] xl:text-[160px] 2xl:text-[180px] leading-[.9]'>DESIGNING & <br/>DEVELOPING</h1>

        <p className='lg:pr-[20%] text-[18px] md:text-[26px] lg:text-[42px] pl-0 md:pl-[6px] 2xl:pl-[12px] h-light'>WEBSITES, APPLICATIONS, AND MORE</p>

        <div className=" hidden z-[-2] absolute w-[200px] h-[200px] top-[30%] left-[60%] bg-white"></div>

    </main>
  )
}
