import React from 'react'
import '../css/Navbar.css'
import {useNavigate} from 'react-router-dom'
function Navbar() {
    const navigate = useNavigate()
  return (
    <div className='nav-wrapper'>
        <li className='nav-item' onClick={()=>navigate('/')}>Dashboard</li>
        <li className='nav-item' onClick={()=>navigate('/history')}>History</li>
        <li className='nav-item' onClick={()=>navigate('/add-log')}>New Log</li>
    </div>
  )
}

export default Navbar