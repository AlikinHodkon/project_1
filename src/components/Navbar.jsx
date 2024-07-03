import { forwardRef } from "react"
import "../styles/Navbar.css"

export default forwardRef(function Navbar(mainRef, aboutRef, getRef) {
  return (
    <nav className='w-full fixed bg-white'>
      <ul className='flex flex-end list-none font-Mont font-semibold text-[16px] text-greydark items-center min-h-[7vh]'>
          <img className="mr-auto ml-[5vw]" src={"/images/Logo.png"} alt='No-image'/>
          <li className="w-auto h-[21px] mr-[5vw] text-center cursor-pointer text-lavanda" id="currentPage" onClick={() => {document.getElementById('main').scrollIntoView({behavior: 'smooth'})}}>Main</li>
          <li className="w-auto h-[21px] mr-[5vw] text-center cursor-pointer" onClick={() => {document.getElementById('about').scrollIntoView({ behavior: 'smooth'})}}>About</li>
          <li className="w-auto h-[21px] mr-[5vw] text-center cursor-pointer" onClick={() => {document.getElementById('getInTouch').scrollIntoView({ behavior: 'smooth'})}}>Get in touch</li>
      </ul>
      <div id="separator"></div>
    </nav>
  )
})
