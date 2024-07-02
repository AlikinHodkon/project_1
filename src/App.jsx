import './styles/App.css';
import MainPage from './pages/MainPage';
import About from './pages/About';
import GetInTouch from './pages/GetInTouch';

function App() {
  return (
    <div className="App">
      <MainPage />
      <About />
      <GetInTouch />
      <footer>
        <div></div>
        <p className='font-Mont text-greydark mt-[28.35px] mb-[28.35px] ml-[85px]'>© 2022 JetRuby. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
