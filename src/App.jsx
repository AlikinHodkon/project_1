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
        <div></div>
        <p className='font-Mont text-greydark mt-[21px] mb-[21px] ml-[15px] xl:mt-[28.35px] xl:mb-[28.35px] xl:ml-[85px]'>© 2022 JetRuby. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
