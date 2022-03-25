import React from 'react'
import '../css/HistoryCard.css'
import {useNavigate} from 'react-router-dom'
function HistoryCard(props) {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate('/edit-log/'+props.id)} className='history-card'>
        <h2>{props.date}</h2>
        <p>{props.title}</p>
    </div>
  )
}

export default HistoryCard