import { useRef } from 'react';
import './styles/App.css';
import MainPage from './pages/MainPage';
import About from './pages/About';
import GetInTouch from './pages/GetInTouch';
import Navbar from './components/Navbar';

function App() {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const getRef = useRef(null);
  return (
    <div className="m-0 p-0 bg-white box-border">
      <Navbar mainRef={mainRef} aboutRef={aboutRef} getRef={getRef} />
      <MainPage ref={mainRef}/>
      <About  ref={aboutRef}/>
      <GetInTouch  ref={getRef}/>
      <footer>
        <div className='border-greylight w-full border-[1px]'></div>
        <p className='font-Mont text-greydark pt-[21px] pb-[21px] pl-[15px] lg:pt-[28.35px] lg:pb-[28.35px] lg:pl-[85px]'>© 2022 JetRuby. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
