import React from 'react'
import "../styles/Interests.css"

export default function Interests(props) {
  return (
    <div className='interestWrapper'>
        <img src={props.interest.img} alt=''/>
        <div className='interestTextWrapper'>
            <h4>{props.interest.header}</h4>
            <p>{props.interest.text}</p>
        </div>
    </div>
  )
}
