import Title from '../components/Title';
import "../styles/MainPage.css";

export default function MainPage() {
  return (
    <div id='main'>
        <div className='flex flex-row'>     
            <Title />
            <img className="hidden" src={"/images/photo.png"} alt=''/>
        </div>
        <img className="mt-[-100px]" src={"/images/photoMob.png"} alt=''/>
    </div>
  )
}
