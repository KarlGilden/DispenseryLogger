import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import '../css/Dashboard.css'
import { useAuth } from '../contexts/AuthContext'

import { Tooltip, CartesianGrid, XAxis, YAxis, LineChart, Line, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const {user} = useAuth()
  const [loading, setLoading] = useState()
  const [data, setData] = useState([])
  const [selection, setSelection] = useState('Aclasta')
  const [startDate, setStartDate] = useState('2022-03-01')
  const [endDate, setEndDate] = useState('2022-03-31')
  const [dataTimeframe, setDataTimeframe] = useState("GetGraphData")
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
    getSingleStat()
  },[startDate, endDate, selection, dataTimeframe])

  const getSingleStat =  async () => {
    setLoading(true)
    console.log(user.uid)
    await fetch('https://dispenseryloggerapi20220401231831.azurewebsites.net/api/'+dataTimeframe+'/'+selection +'/'+startDate+'/'+endDate+'/'+user.uid)
    .then(response => response.json())
    .then(data => {
      setData(data)  
   }).catch(()=>{
     setNoDataError("The backend is currently down and sample data is being displayed")
     setData(sampleData)
   })
    setLoading(false)
  }
  return (
    <div className="dashboard-page">
        {loading ? 
          <p>loading...</p> 
          : 
          <>
          <p className='no-data-error'>{noDataError}</p>
          <div className='data-display'>
            <h1>Statistics</h1>
            <div className="date-inputs">
              <div className="date-range-inputs">
                <input type="date" 
                  value={startDate}
                  onChange={(e)=>{
                    setStartDate(e.target.value)
                  }}/>
                <input type="date"  
                value={endDate}
                  onChange={(e)=>{
                    setEndDate(e.target.value)
                  }}/>
              </div>
              
              <select 
                name="select" 
                id="select" 
                value={selection}
                onChange={(e)=>{
                  setSelection(e.target.value)
                }}>
                <option value="Aclasta">Aclasta</option>
                <option value="Binocrit">Binocrit</option>
                <option value="Eylea">Eylea</option>
                <option value="BlisterPacks">Blister Packs</option>
                <option value="YellowCards">Yellow Cards</option>
                <option value="GP">GP</option>
                <option value="ED">ED</option>
                <option value="Outp">Outp</option>
                <option value="Discharge">Discharge</option>
                <option value="Paediatric">Paediatric</option>
                <option value="Ferinject">Ferinject</option>
                <option value="Bicillin">Bicillin</option>
              </select>


            </div>
            <ResponsiveContainer>

              <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis scaleToFit={true} dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="data" stroke="#8884d8" />
              </LineChart>
            
            </ResponsiveContainer>

            <div className="time-buttons">
              <Button func={()=>setDataTimeframe("GetGraphData")} text={"Daily"} />
              <Button func={()=>setDataTimeframe("GetGraphDataByMonth")} text={"Monthly"} />
            </div>

          </div>
          </>
          
        }
    </div>
    
  )
}

export default Dashboard