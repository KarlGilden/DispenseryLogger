import React from 'react'
import '../css/Button.css'
function Button(props) {
  return (
    <button onClick={props.func} className={props.size, props.invert ? "invert" : ""}>{props.text}</button>
  )
}

export default Button