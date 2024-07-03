import { useState, forwardRef } from 'react'
import '../styles/About.css'
import MyButton from "../components/MyButton"
import Interests from '../components/Interests'
import Educations from '../components/Educations';

export default forwardRef(function About(ref) {
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
    <div id="about" className='mt-12 flex flex-col items-center justify-center mb-15'>
        <h1 className='mr-auto ml-5 font-Mont font-bold text-[20px]'>About me</h1>
        <div className='flex flex-col mt-10 w-full'>
            <div className='ml-5 mr-5'>
                <img src={'/images/photo2.png'} alt='' id='frontImg' />
            </div>
            <div className='flex flex-col ml-5 mt-5'>
              <div className=''>
                  <div className='border-[2px] border-lavanda w-[25px] mt-2 mb-4'></div>
                  <p className='font-Mont text-[14px] text-greydark'><span className='text-black font-Mont font-semibold text-[14px]'>Nick Richardson</span> - specialist in Frontend development. 
                  Clear code is my passion. Solving issues through negotiations </p>
              </div>
              <div className='hidden'>
                <MyButton value={{text: "Get in touch"}} />
              </div>
            </div>  
        </div>
        <div className='flex flex-col mt-10 ml-5'>
          <div className='w-full'>
            <h3 className='text-left font-Mont font-semibold text-[20px]'>Interests</h3>
            <ul>
              {interests.map((interest) => <li><Interests interest={interest}/></li>)}
            </ul>
          </div>
          <div className='w-full mt-10'>
            <h3 className='text-left font-Mont font-semibold text-[20px]'>Education & Experience</h3>
            <ul>
              {educations.map((education) => <li><Educations education={education} /></li>)}
            </ul>
          </div>
          <div className='w-auto mt-12'>
            <button className='bg-lavanda  border-none text-white flex items-center rounded-[50px]'>Get in touch<img className="ml-2" src='/images/paper-airplane.svg' alt=''/></button>
          </div>
        </div>
    </div>
  )
})
