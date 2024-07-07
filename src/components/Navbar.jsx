import { useRef } from "react"
import "../styles/Navbar.css"

export default function Navbar() {
  const burger = useRef(null);   
  function clickHandle(){
    burger.current.classList.toggle("burgerActive");
    const sidebar = document.querySelector(".menu");
    sidebar.classList.toggle("hidden");
  }
  return (
    <nav className='w-full fixed z-30 bg-white'>
      <ul className='flex flex-end list-none font-Mont font-semibold text-[16px] text-greydark items-center h-[7vh] md:min-h-[7vh]'>
          <img className="mr-auto ml-[5vw]" src={"/images/Logo.png"} alt='No-image'/>
          <div onClick={clickHandle} ref={burger} className="flex flex-col h-[24px] mt-[14px] mr-2 w-1/12 fixed top-0 right-0 cursor-pointer md:hidden">
            <div className="bg-black w-full h-[4px] rounded absolute burgerLine1"></div>
            <div className="bg-black w-full h-[4px] rounded absolute burgerLine2"></div>
            <div className="bg-black w-full h-[4px] rounded absolute burgerLine3"></div>
            <div className="bg-black w-full h-[4px] rounded absolute burgerLine4"></div>
          </div>
          <li href="#main" className="nav_item w-auto h-[21px] mr-[5vw] text-center cursor-pointer hover:text-lavanda hidden md:block" onClick={() => {document.getElementById('main').scrollIntoView({behavior: 'smooth'})}}>Main</li>
          <li href="#about" className="nav_item w-auto h-[21px] mr-[5vw] text-center cursor-pointer hidden hover:text-lavanda md:block" onClick={() => {document.getElementById('about').scrollIntoView({ behavior: 'smooth'})}}>About</li>
          <li href="#getInTouch" className="nav_item w-auto h-[21px] mr-[5vw] text-center cursor-pointer hidden hover:text-lavanda md:block" onClick={() => {document.getElementById('getInTouch').scrollIntoView({ behavior: 'smooth'})}}>Get in touch</li>
      </ul>
      <div id="separator"></div>
    </nav>
  )
}
