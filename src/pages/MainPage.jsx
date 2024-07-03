import Title from '../components/Title';

export default function MainPage() {
  return (
    <div id='main'>
        <div className='flex flex-row'>     
            <Title />
            <img className="hidden 2xl:block 2xl:w-full xl:block md:w-6/12 xl:w-8/12 xl:mt-[10vh]" src={"/images/photo.png"} alt=''/>
        </div>
        <img className="hidden md:block md:w-8/12 md:h-1/4 md:mt-[-30vh] md:ml-auto lg:w-9/12 lg:h-1/2 xl:hidden" src={"/images/photoTable.png"} alt=''/>
        <img className="mt-[-100px] md:hidden w-full lg:hidden" src={"/images/photoMob.png"} alt=''/>
    </div>
  )
}
