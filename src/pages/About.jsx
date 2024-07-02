import React, { useState } from 'react'
import '../styles/About.css'
import MyButton from "../components/MyButton"
import Interests from '../components/Interests'
import Educations from '../components/Educations';

export default function About() {
  const[interests] = useState([
    {id: 1, img: "/images/iconMusic.png", header: "Music", text: "Indie rock | Reggae"},
    {id: 2, img: "/images/iconArt.png", header: "Art", text: "Edvard Munch | Frida Kahlo"},
    {id: 3, img: "/images/iconPhotograph.png", header: "Photography", text: "Portraits"},
  ]);
  const[educations] = useState([
    {id: 1, data: "2008-Present", header: "Middle Frontend developer", subHeader: "Ozon", border: "none"},
    {id: 2, data: "2006-2007", header: "Frontend development courses", subHeader: "Stepik", border: "1px solid #E5E7EB"},
    {id: 3, data: "2000-2005", header: "Frontend developer", subHeader: "Saint Petersburg State University", border: "1px solid #E5E7EB"},
  ]);
  return (
    <div className='aboutWrapper'>
        <h1 id='titleAbout'>About me</h1>
        <div className='blockWrapper_1'>
            <div className='photoWrapper'>
                <img src={'/images/photo2.png'} alt='' id='frontImg' />
            </div>
            <div className='textWrapper'>
              <div className='aboutText'>
                  <div id='line'></div>
                  <p><span id='name'>Nick Richardson</span> - specialist in Frontend development. 
                  Clear code is my passion. Solving issues through negotiations </p>
              </div>
              <div id="blockButton">
                <MyButton value={{text: "Get in touch"}} />
              </div>
            </div>  
        </div>
        <div className='blockWrapper_2'>
          <div className='interestsWrapper'>
            <h3>Interests</h3>
            <ul>
              {interests.map((interest) => <li><Interests interest={interest}/></li>)}
            </ul>
          </div>
          <div className='educationsWrapper'>
            <h3>Education & Experience</h3>
            <ul>
              {educations.map((education) => <li><Educations education={education} /></li>)}
            </ul>
          </div>
        </div>
    </div>
  )
}
