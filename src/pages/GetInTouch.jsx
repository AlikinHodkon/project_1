import MyButton from "../components/MyButton";

export default function GetInTouch() {
  return (
    <div className='bg-no-repeat bg-form flex justify-center w-full h-full'>
        <form className='bg-white flex flex-col justify-center mt-20 mb-20 pl-6 pr-6 w-6/12 h-3/6 rounded-2xl'>
            <h2 className="font-Mont text-3xl/[32px] font-bold ml-5 mt-12">Let&apos;s discuss your project</h2>
            <div className="flex flex-row justify-between w-full mt-6">
              <div className="flex flex-col ml-5 mt-5 mr-5 w-1/2">
                <label htmlFor='name' className="font-Mont text-base font-semibold mb-1">Your full name</label>
                <input type='text' required name='name' className="h-10 placeholder-font-Mont pl-[20px] placeholder-greydark border rounded-2xl border-greydlight" placeholder='Name Surname' />
              </div>
              <div className="flex flex-col mt-5 mr-5 w-1/2">
                <label htmlFor='email' className="font-Mont text-base font-semibold mb-1">Your email</label>
                <input type="text" required name="email" className="h-10 placeholder-font-Mont pl-[20px] placeholder-greydark border rounded-2xl border-greylight" placeholder='name@examle.com' />
              </div>
            </div>
            <div className="flex flex-col m-5 mt-5">
              <label htmlFor="describeProject" className="font-Mont text-base font-semibold mb-1">Tell me about your project</label>
              <input type='textarea' name="describeProject" id="placeholder" className="bg-person min-h-[124px] w-full placeholder-font-Mont placeholder-greydark border rounded-2xl border-greylight" placeholder='Add here a general description of your idea and target aim' />
            </div>
            <div className="bg-white w-3/12 ml-5 mb-5 h-2" >
              <MyButton value={{text: "Sumbit"}}/>
            </div>
            <br />
            <br />
            <br />
        </form>
    </div>
  )
}
