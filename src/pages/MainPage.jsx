import Title from '../components/Title';

export default function MainPage() {
  return (
    <div id='main' className='section'>
        <div className='flex flex-row'>   
            <div className='bg-white w-full fixed menu z-20 hidden md:hidden'>
              <ul className='list-none w-full mt-[8vh] text-greydark font-semibold flex border-b-2 font-Mont text-[16px] flex-col'>
                <li href="#main" className="nav_item w-auto h-[21px] text-center cursor-pointer hover:text-lavanda" onClick={() => {document.getElementById('main').scrollIntoView({behavior: 'smooth'})}}>Main</li>
                <li href="#about" className="nav_item w-auto h-[21px] text-center cursor-pointer hover:text-lavanda" onClick={() => {document.getElementById('about').scrollIntoView({ behavior: 'smooth'})}}>About</li>
                <li href="#getInTouch" className="nav_item w-auto h-[21px] text-center cursor-pointer mb-1 hover:text-lavanda" onClick={() => {document.getElementById('getInTouch').scrollIntoView({ behavior: 'smooth'})}}>Get in touch</li>
              </ul>
            </div>  
            <Title />
            <img className="hidden 2xl:block 2xl:w-full xl:block md:w-6/12 xl:w-8/12 xl:mt-[10vh]" src={"/images/photo.png"} alt=''/>
        </div>
        <img className="hidden md:block md:w-8/12 md:h-1/4 md:mt-[-30vh] md:ml-auto lg:w-9/12 lg:h-1/2 xl:hidden" src={"/images/photoTable.png"} alt=''/>
        <img className="mt-[-100px] md:hidden w-full lg:hidden" src={"/images/photoMob.png"} alt=''/>
    </div>
  )
}
