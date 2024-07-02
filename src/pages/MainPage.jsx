import React from 'react'
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import "../styles/MainPage.css";

export default function MainPage() {
  return (
    <div>
        <Navbar />
        <div className='mainWrapper'>     
            <Title />
            <img src={"/images/photo.png"} alt=''/>
        </div>
    </div>
  )
}
