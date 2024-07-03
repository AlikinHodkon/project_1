import { forwardRef } from "react"
import "../styles/Navbar.css"

export default forwardRef(function Navbar(mainRef, aboutRef, getRef) {
  return (
    <nav className='w-full fixed bg-white'>
      <ul className='menuItems'>
          <img src={"/images/Logo.png"} alt='No-image'/>
          <li id="currentPage" onClick={() => {
            document.getElementById('main').scrollIntoView({
              behavior: 'smooth'
            })
            }}>
            Main</li>
          <li onClick={() => {document.getElementById('about').scrollIntoView({ behavior: 'smooth'})}}>About</li>
          <li onClick={() => {document.getElementById('getInTouch').scrollIntoView({ behavior: 'smooth'})}}>Get in touch</li>
      </ul>
      <div id="separator"></div>
    </nav>
  )
})
