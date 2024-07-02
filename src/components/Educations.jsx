import React from 'react'
import "../styles/Educations.css"

export default function Educations(props) {
  return (
    <div>
        <div style={{border: props.education.border}} id='educationLine'></div>
        <div className='educationWrapper'>
            <p>{props.education.data}</p>
            <div className='educationTextWrapper'>
                <p id='header'>{props.education.header}</p>
                <p id='subHeader'>{props.education.subHeader}</p>
            </div>
        </div>
    </div>
  )
}
