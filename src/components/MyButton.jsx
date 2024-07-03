import React from 'react'
import "../styles/MyButton.css"

export default function MyButton(props) {
  return (
    <div className='buttonWrapper'>
        <button id='buttonMain'>{props.value.text}
        </button>
    </div>
  )
}
