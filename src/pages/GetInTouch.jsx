import "../styles/GetInTouch.css";
import { useRef } from "react";

export default function GetInTouch() {
  const name = useRef(null);
  const email = useRef(null);
  const invalidName = useRef(null);
  const invalidEmail =useRef(null);

  function check(){
    if (name.current.value === "") {
      name.current.classList.remove('name');
      name.current.classList.add('invalid');
      invalidName.current.classList.remove('hidden');
    }else{
      name.current.classList.remove('invalid');
      name.current.classList.add('name');
      invalidName.current.classList.add('hidden');
    }
    if (email.current.value === ""){
      email.current.classList.remove('email');
      email.current.classList.add('invalid');
      invalidEmail.current.classList.remove('hidden');
    }else{
      email.current.classList.remove('invalid');
      email.current.classList.add('email');
      invalidEmail.current.classList.add('hidden');
    }
  }

  function handleChange(e){
    if (e.target.value !== ""){
      e.target.classList.remove('invalid');
      e.target.classList.add(''+e.target.name);
      e.target.nextSibling.classList.add('hidden');
      e.target.classList.add(e.target.name+"Filled")
    }else{
      e.target.classList.remove(e.target.name+"Filled")
    }
  }

  return (
    <div id="getInTouch" className='mt-20 bg-no-repeat bg-cover bg-center bg-form flex justify-center w-full min-h-[320px] section'>
        <form className='bg-white flex flex-col justify-center lg:mt-20 lg:mb-20 lg:w-[60%] lg:pl-6 lg:pr-6 w-11/12 mt-14 mb-14 rounded-2xl'>
            <h2 className="font-Mont text-[20px] lg:text-3lg/[32px] font-bold ml-5 mt-12">Let&apos;s discuss your project</h2>
            <div className="flex flex-col lg:flex-row justify-between w-full mt-6">
              <div className="flex flex-col ml-5 mt-5 mr-5 lg:w-1/2 inputContainer">
                <label htmlFor='name' className="font-Mont text-[14px] font-semibold mb-1">Your full name<span className="text-red font-semibold text-[14px]"> * </span></label>
                <input ref={name} onChange={(e) => {handleChange(e)}} type='text' name='name' className="text-[14px] name md:pl-[70px] lg:pl-[50px] h-[7vh] md:max-h-[5vh] lg:max-h-[7vh] placeholder-font-Mont pl-[50px] placeholder-greydark border rounded-2xl border-greydlight" placeholder='Name Surname' />
                <p ref={invalidName} className="mt-0 clear-both text-red font-Mont text-[14px] font-semibold hidden">Please fill this mandatory field</p>
              </div>
              <div className="flex flex-col ml-5 mt-5 mr-5 lg:w-1/2">
                <label htmlFor='email' className="font-Mont text-[14px] font-semibold mb-1">Your email<span className="text-red font-semibold text-[14px]"> * </span></label>
                <input ref={email} onChange={(e) => {handleChange(e)}} type="text" name="email" className="h-[7vh] email md:pl-[70px] lg:pl-[50px] md:max-h-[5vh] lg:max-h-[7vh] required:border-red required:border text-[14px] placeholder-font-Mont pl-[50px] placeholder-greydark border rounded-2xl border-greylight" placeholder='name@examle.com' />
                <p ref={invalidEmail} className="mt-0 clear-both text-red font-Mont text-[14px] font-semibold hidden">Please fill this mandatory field</p>
              </div>
            </div>
            <div className="flex flex-col m-5 mt-5">
              <label htmlFor="describeProject" className="font-Mont text-[14px] font-semibold mb-1">Tell me about your project</label>
              <textarea type='textarea' name="describeProject" id="placeholder" className="required:border-red required:border text-[14px] pt-[13px] pl-[26px] pb-[13px] pr-[26px] rounded-2xl bg-person h-[124px] resize-none w-full placeholder-font-Mont placeholder-greydark border rounded-2lg border-greylight" placeholder='Add here a general description of your idea and target aim' />
            </div>
            <div className="ml-5 mb-5 lg:w-32" >
              <button type="sumbit" onClick={(e) => {e.preventDefault(); check()}} className="bg-lavanda hover:bg-[#6C2BD9] focus:outline-none focus:shadow-3xl 3px 2px 22px 1px rgba(0, 0, 0, 0.24) rounded-[50px] font-semibold outline-none text-white lg:text-[16px] lg:w-full justify-center flex items-center border-none">Sumbit<img className="ml-2 lg:ml-3 lg:mt-[1px] lg:mb-[0.5]" src='./images/paper-airplane.svg' alt=''/></button>
            </div>  
        </form>
    </div>
  )
}
