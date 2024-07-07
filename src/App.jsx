import './styles/App.css';
import MainPage from './pages/MainPage';
import About from './pages/About';
import GetInTouch from './pages/GetInTouch';
import Navbar from './components/Navbar';
import { useEffect } from 'react';

function App() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav_item').forEach((link) => {
          let id = link.getAttribute('href').replace('#', '');
          if (id === entry.target.id) {
            link.classList.add('text-lavanda');
          } else {
            link.classList.remove('text-lavanda');
          }
        });
      }
    });
  }, {
    threshold: 0.5
  });
  
  useEffect(() => {
    document.querySelectorAll('.section').forEach(section => { observer.observe(section)} );
  },[]);

  return (
    <div className="m-0 p-0 bg-white box-border">
      <Navbar />
      <MainPage />
      <About />
      <GetInTouch />
      <footer>
        <div className='border-greylight w-full border-[1px]'></div>
        <p className='font-Mont text-greydark pt-[21px] pb-[21px] pl-[15px] lg:pt-[28.35px] lg:pb-[28.35px] lg:pl-[85px]'>© 2022 JetRuby. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
