import Image from 'next/image'

export default function Home() {
  return (
    <main className='text-center md:text-left mx-[60px] md:mx-[180px] 2xl:mx-[340px]'>

        <p className='h-bold text-[24px] 2xl:text-[30px] pl-0 md:pl-[8px] 2xl:pl-[12px]'>I'M KAMEL SINGH</p>

        <h1 className='text-main h-bold text-[70px] sm:text-[96px] lg:text-[144px] 2xl:text-[180px] leading-[.9]'>DESIGNING & <br/>DEVELOPING</h1>

        <p className=''>WEBSITES, APPLICATIONS, AND MORE</p>

        <div className=" hidden z-[-2] absolute w-[200px] h-[200px] top-[30%] left-[60%] bg-white"></div>

    </main>
  )
}
