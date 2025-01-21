
import React from 'react'

const Button = (props) => {
  return (
    <div >
        
        <button onClick={props.clickMe}  style={{
        width: props.width,
        height: props.height,
        borderRadius: '15px',
        backgroundColor: props.bgcolor,
        color: props.color,
        border: '2px solid #126A10',
        cursor: 'pointer',
        marginRight: '20px',
        boxShadow:'1px 1px 12px lightgrey '
    }}   >{props.name}</button>
    </div>
  )
}

export default Button

