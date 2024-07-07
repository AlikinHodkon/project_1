export default function Title() {
  return (
    <div className='w-full md:w-7/12 ml-5 mt-20 lg:ml-[5vw]'>
        <div className='xl:mt-[20vh] md:mt-[10vh] md:w-11/12'>
            <h1 className='font-Mont font-bold text-[24px] text-black md:text-[60px]'>Hey, I&apos;m Nick</h1>
            <h3 className='font-Mont text-[14px] mt-2 lg:mt-3 text-greydark md:text-[20px]'>Frontend developer</h3>
        </div>  
        <div className='mt-10 w-11/12'>
            <div className='border-[2px] border-lavanda w-[25px] mt-2 mb-4 lg:mb-[4vh]'></div>  
            <p className='font-Mont text-[14px] text-greydark md:text-[20px]'>Help you to create high-quality digital products that your clients will love and let your business thrive </p>
        </div>
        <div className='mt-12 z-10 relative md:w-44'>
            <button onClick={() => {document.getElementById('getInTouch').scrollIntoView({ behavior: 'smooth'})}} className='bg-lavanda hover:bg-[#6C2BD9] focus:outline-none focus:shadow-3xl border-none text-white md:text-[16px] md:w-full justify-center flex items-center rounded-[50px]'>Get in touch<img className="ml-2 lg:ml-4 mt-[1px] mb-[0.5]" src='/images/paper-airplane.svg' alt=''/></button>
        </div>
    </div>
  )
}
