import React, {useEffect, useState} from 'react'
import HistoryCard from '../components/HistoryCard'
import '../css/History.css'
import {useAuth} from '../contexts/AuthContext'
function History() {
    const {user} = useAuth()
    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetchLogs();
    })

    const fetchLogs = () => {
        setLoading(true)
        fetch('https://dispenseryloggerapi20220401231831.azurewebsites.net/api/GetAllLogs/'+user.uid)
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