import React, {useState} from 'react'
import '../css/Tag.css'
function Tag({text, func}) {
    const [selected, setSelected] = useState(false)
  return (
    <p onClick={()=>{func(text); setSelected(!selected);}} className={selected ? "issue-tag yellow selected" : "issue-tag yellow"}>{text}</p>
  )
}

export default Tag