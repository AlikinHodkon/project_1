export default function Title() {
  return (
    <div className='w-full ml-5 mt-20'>
        <div className=''>
            <h1 className='font-Mont font-bold text-[24px] text-black'>Hey, I&apos;m Nick</h1>
            <h3 className='font-Mont text-[14px] mt-2 text-greydark'>Frontend developer</h3>
        </div>  
        <div className='mt-10 w-11/12'>
            <div className='border-[2px] border-lavanda w-[25px] mt-2 mb-4'></div>  
            <p className='font-Mont text-[14px] text-greydark'>Help you to create high-quality digital products that your clients will love and let your business thrive </p>
        </div>
        <div className='w-auto mt-12'>
            <button className='bg-lavanda  border-none text-white flex items-center rounded-[50px]'>Get in touch<img className="ml-2" src='/images/paper-airplane.svg' alt=''/></button>
        </div>
    </div>
  )
}
