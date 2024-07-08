import { useState } from 'react'
import Interests from '../components/Interests'
import Educations from '../components/Educations';

export default function About() {
  const[interests] = useState([
    {id: 1, img: "/images/iconMusic.svg", header: "Music", text: "Indie rock | Reggae"},
    {id: 2, img: "/images/iconArt.svg", header: "Art", text: "Edvard Munch | Frida Kahlo"},
    {id: 3, img: "/images/iconPhoto.svg", header: "Photography", text: "Portraits"},
  ]);
  const[educations] = useState([
    {id: 1, data: "2008-Present", header: "Middle Frontend developer", subHeader: "Ozon", border: "none"},
    {id: 2, data: "2006-2007", header: "Junior Frontend developer", subHeader: "Facebook", border: "1px solid #E5E7EB"},
    {id: 3, data: "2000-2005", header: "Frontend developer", subHeader: "Stanford University", border: "1px solid #E5E7EB"},
  ]);
  return (
    <div id="about" className='mt-12 flex flex-col items-center justify-center mb-15 w-full section'>
        <h1 className='mr-auto ml-5 font-Mont font-bold text-[20px] lg:ml-[5vw] lg:text-[32px]'>About me</h1>
        <div className='flex flex-col md:flex-row lg:flex-row mt-10 w-full'>
            <div className='ml-5 mr-5 md:w-10/12 lg:w-5/12 lg:ml-[5vw]'>
                <img src={'./images/photo2.png'} alt='' id='frontImg' />
            </div>
            <div className='flex flex-col lg:justify-center lg:ml-[10vw] ml-5 mt-5'>
              <div className='lg:w-7/12 md:w-8/12 flex flex-col ml-1/10'>
                  <div className='border-[2px] border-lavanda w-[25px] mt-2 mb-4 lg:mb-[4vh]'></div>
                  <p className='font-Mont text-[14px] text-greydark md:text-[20px]'><span className='text-black font-Mont font-semibold text-[14px] md:text-[20px] lg:text-[20px]'>Nick Richardson</span> - specialist in Frontend development. 
                  Clear code is my passion. Solving issues through negotiations </p>
              </div>
              <div className='hidden md:flex md:ml-1/10 md:mt-12 md:w-44'>
                <button onClick={() => {document.getElementById('getInTouch').scrollIntoView({ behavior: 'smooth'})}} className='bg-lavanda hover:bg-[#6C2BD9] focus:outline-none focus:shadow-3xl border-none text-white md:text-[16px] w-full flex justify-center lg:font-semibold items-center rounded-[50px]'>Get in touch<img className="ml-2 lg:ml-4 lg:mt-[1px] lg:mb-[0.5]" src='./images/paper-airplane.svg' alt=''/></button>
              </div>
            </div>  
        </div>
        <div className='flex flex-col lg:flex-row mt-10 w-full'>
          <div className='w-full lg:ml-20'>
            <h3 className='text-left font-Mont font-semibold text-[20px] ml-5 lg:ml-0 md:text-[24px] lg:font-bold'>Interests</h3>
            <ul className='ml-5 lg:ml-0'>
              {interests.map((interest) => <li key={interest.id}><Interests interest={interest}/></li>)}
            </ul>
          </div>
          <div className='w-full mt-10 lg:mt-0'>
            <h3 className='text-left font-Mont font-semibold text-[20px] ml-5 lg:ml-0 lg:text-[24px] lg:font-bold lg:mb-0.5'>Education & Experience</h3>
            <ul className='ml-5 lg:ml-0'>
              {educations.map((education) => <li key={education.id}><Educations education={education} /></li>)}
            </ul>
          </div>
          <div className='w-auto mt-12 ml-5 lg:hidden'>
            <button  onClick={() => {document.getElementById('getInTouch').scrollIntoView({ behavior: 'smooth'})}} className='bg-lavanda hover:bg-[#6C2BD9] focus:outline-none focus:shadow-3xl border-none text-white flex items-center rounded-[50px]'>Get in touch<img className="ml-2" src='./images/paper-airplane.svg' alt=''/></button>
          </div>
        </div>
    </div>
  )
}
