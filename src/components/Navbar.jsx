import "../styles/Navbar.css"

export default function Navbar() {
  return (
    <nav className='w-full fixed bg-white'>
      <ul className='menuItems'>
          <img src={"/images/Logo.png"} alt='No-image'/>
          <li id="currentPage">Main</li>
          <li>About</li>
          <li>Get in touch</li>
      </ul>
      <div id="separator"></div>
    </nav>
  )
}
