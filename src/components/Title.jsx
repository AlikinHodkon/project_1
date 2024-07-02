import React from 'react'
import MyButton from './MyButton'
import "../styles/Title.css"

export default function Title() {
  return (
    <div className='titleWrapper'>
        <div className='nameWrapper'>
            <h1>Hey, I'm Nick</h1>
            <h3>Frontend developer</h3>
        </div>  
        <div className='description'>
            <div id='line'></div>  
            <p>Help you to create high-quality digital products that your clients will love and let your business thrive </p>
        </div>
        <div id='titleButton'>
          <MyButton value={{text: "Get in touch"}} />
        </div>
    </div>
  )
}
