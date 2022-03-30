import React from 'react'
import '../css/Navbar.css'
import { useAuth } from '../contexts/AuthContext'
import {useNavigate} from 'react-router-dom'
function Navbar() {
    const navigate = useNavigate()
    const {logout} = useAuth()

    const signout = () =>{
        logout()
    }
  return (
    <div className='nav-wrapper'>
        <li className='nav-item' onClick={()=>navigate('/user')}>Dashboard</li>
        <li className='nav-item' onClick={()=>navigate('/user/history')}>History</li>
        <li className='nav-item' onClick={()=>navigate('/user/add-log')}>New Log</li>
        <li className='nav-item logout' onClick={signout}>Log out</li>

    </div>
  )
}

export default Navbar