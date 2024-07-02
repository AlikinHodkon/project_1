import React from 'react'
import "../styles/MyButton.css"

export default function MyButton(props) {
  return (
    <div className='buttonWrapper'>
        <button id='buttonMain'>{props.value.text}
          <img src='/images/Vector.png' alt=''/>
        </button>
    </div>
  )
}
