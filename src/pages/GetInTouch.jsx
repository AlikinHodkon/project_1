export default function GetInTouch() {
  return (
    <div id="getInTouch" className='mt-20 bg-no-repeat bg-cover bg-form flex justify-center w-full min-h-[320px]'>
        <form className='bg-white flex flex-col justify-center xl:mt-20 xl:mb-20 xl:pl-6 xl:pr-6 w-11/12 mt-14 mb-14 rounded-2xl'>
            <h2 className="font-Mont text-[20px] xl:text-3xl/[32px] font-bold ml-5 mt-12">Let&apos;s discuss your project</h2>
            <div className="flex flex-col xl:flex-row justify-between w-full mt-6">
              <div className="flex flex-col ml-5 mt-5 mr-5 xl:w-1/2">
                <label htmlFor='name' className="font-Mont text-[14px] font-semibold mb-1">Your full name</label>
                <input type='text' required name='name' className="text-[14px] h-10 placeholder-font-Mont pl-[20px] placeholder-greydark border rounded-2xl border-greydlight" placeholder='Name Surname' />
              </div>
              <div className="flex flex-col ml-5 mt-5 mr-5 xl:w-1/2">
                <label htmlFor='email' className="font-Mont text-[14px] font-semibold mb-1">Your email</label>
                <input type="text" required name="email" className="h-10 text-[14px] placeholder-font-Mont pl-[20px] placeholder-greydark border rounded-2xl border-greylight" placeholder='name@examle.com' />
              </div>
            </div>
            <div className="flex flex-col m-5 mt-5">
              <label htmlFor="describeProject" className="font-Mont text-[14px] font-semibold mb-1">Tell me about your project</label>
              <input type='textarea' name="describeProject" id="placeholder" className="text-[14px] bg-person min-h-[124px] w-full placeholder-font-Mont placeholder-greydark border rounded-2xl border-greylight" placeholder='Add here a general description of your idea and target aim' />
            </div>
            <div className="ml-5 mb-5" >
              <button className="bg-lavanda rounded-[50px] text-white flex items-center" value="Get in touch">Get in touch<img className="ml-2" src='/images/paper-airplane.svg' alt=''/></button>
            </div>  
        </form>
    </div>
  )
}
