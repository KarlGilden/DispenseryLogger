import React, {useEffect, useState} from 'react'
import HistoryCard from '../components/HistoryCard'
import '../css/History.css'
function History() {
    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetchLogs();
    })
    const fetchLogs = () => {
        setLoading(true)
        fetch('https://localhost:44326/api/GetAllLogs')
        .then(response => response.json())
        .then(data => {
            setLogs(data)
        })
        setLoading(false)
    }
  return (
    <div className='history-page'>
        {loading ? 
            <p>Loading...</p> 
            :
            <>
            {logs.map(value=>{
                    return(
                        <HistoryCard key={value.id} id={value.id} date={value.date} title={value.title}/>
                    )
                })}
            </>

        }
    </div>
  )
}

export default History