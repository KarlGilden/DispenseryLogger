import React, {useEffect, useState} from 'react'
import HistoryCard from '../components/HistoryCard'
import '../css/History.css'
import {useAuth} from '../contexts/AuthContext'
function History() {
    const {user} = useAuth()
    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [noDataError, setNoDataError] = useState("")
    const sampleData = [
        {
          "date": "2022-03-01",
          "data": 2
        },
        {
          "date": "2022-03-02",
          "data": 8
        },
        {
          "date": "2022-03-03",
          "data": 10
        },
        {
          "date": "2022-03-04",
          "data": 5
        },
        {
          "date": "2022-03-05",
          "data": 7
        },
        {
          "date": "2022-03-06",
          "data": 5
        },
        {
          "date": "2022-03-07",
          "data": 7
        },
        {
          "date": "2022-03-08",
          "data": 15
        },
        {
          "date": "2022-03-09",
          "data": 13
        },
        {
          "date": "2022-03-10",
          "data": 11
        },
        {
          "date": "2022-03-11",
          "data": 12
        },
        {
          "date": "2022-03-12",
          "data": 11
        },
        {
          "date": "2022-03-13",
          "data": 10
        },
        {
          "date": "2022-03-14",
          "data": 11
        },
        {
          "date": "2022-03-15",
          "data": 10
        },
        {
          "date": "2022-03-16",
          "data": 7
        },
        {
          "date": "2022-03-17",
          "data": 10
        },
        {
          "date": "2022-03-18",
          "data": 13
        },
        {
          "date": "2022-03-19",
          "data": 9
        },
        {
          "date": "2022-03-20",
          "data": 7
        },
        {
          "date": "2022-03-21",
          "data": 14
        },
        {
          "date": "2022-03-22",
          "data": 7
        },
        {
          "date": "2022-03-23",
          "data": 10
        },
        {
          "date": "2022-03-24",
          "data": 12
        },
        {
          "date": "2022-03-25",
          "data": 17
        },
        {
          "date": "2022-03-26",
          "data": 14
        },
        {
          "date": "2022-03-27",
          "data": 10
        },
        {
          "date": "2022-03-28",
          "data": 2
        },
        {
          "date": "2022-03-29",
          "data": 7
        },
        {
          "date": "2022-03-30",
          "data": 10
        },
        {
          "date": "2022-03-31",
          "data": 6
        },
        
      ]
    useEffect(()=>{
        fetchLogs();
    })

    const fetchLogs = () => {
        setLoading(true)
        fetch('https://dispenseryloggerapi20220401231831.azurewebsites.net/api/GetAllLogs/'+user.uid)
        .then(response => response.json())
        .then(data => {
            setLogs(data)
        }).catch(()=>{
            setNoDataError("The backend is currently down and sample data is being displayed")
            setLogs(sampleData)
        })
        setLoading(false)
    }
    
  return (
    <div className='history-page'>
        {loading ? 
            <p>Loading...</p> 
            :
            <>
            <p className='no-data-error'>{noDataError}</p>
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