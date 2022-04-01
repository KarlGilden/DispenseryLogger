import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import '../css/Dashboard.css'
import { useAuth } from '../contexts/AuthContext'

import { Tooltip, CartesianGrid, XAxis, YAxis, LineChart, Line } from 'recharts';

function Dashboard() {
  const {user} = useAuth()
  const [loading, setLoading] = useState()
  const [data, setData] = useState([])
  const [selection, setSelection] = useState('Aclasta')
  const [startDate, setStartDate] = useState('2022-03-01')
  const [endDate, setEndDate] = useState('2022-03-31')
  const [dataTimeframe, setDataTimeframe] = useState("GetGraphData")
  useEffect(()=>{
    getSingleStat()
  },[startDate, endDate, selection, dataTimeframe])

  const getSingleStat =  async () => {
    setLoading(true)
    console.log(user.uid)
    await fetch('https://localhost:44326/api/'+dataTimeframe+'/'+selection +'/'+startDate+'/'+endDate+'/'+user.uid)
    .then(response => response.json())
    .then(data => {
      setData(data)  
      console.log(data) 
   })
    setLoading(false)
  }
  return (
    <div className="dashboard-page">
        {loading ? 
          <p>loading...</p> 
          : 
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
            <LineChart width={730} height={250} data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="data" stroke="#8884d8" />
            </LineChart>

            <div className="time-buttons">
              <Button func={()=>setDataTimeframe("GetGraphData")} text={"Daily"} />
              <Button func={()=>setDataTimeframe("GetGraphDataByMonth")} text={"Monthly"} />
            </div>

          </div>
          
        }
    </div>
    
  )
}

export default Dashboard