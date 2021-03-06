import React, { useState } from 'react'
import '../css/Home.css'
import { useAuth } from '../contexts/AuthContext'
import {useNavigate} from 'react-router-dom'
import graphLogo from '../graph.svg'
import {ImEnter} from 'react-icons/im'
function Home() {
    const navigate = useNavigate()
    const { login } = useAuth()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const demoLogin = async() =>{
        setLoading(true)
        const error = await login("guest-user@guest.com", "guest-password")
        if(error){
            setLoading(false)
            return setError(error.message)
        }else{
            setLoading(false)
            navigate('/user')
        }
    }
  return (
    <div className='home-page'>
        <div className="info-container">
            <div className="title-and-desc">
                <div className="header">
                    <img className='logo' src={graphLogo} alt="" />
                    <h1 className='title'>Dispensary Logger</h1>
                </div>
                <p className='login-header'>A webapp designed to help pharmacies keep logs of their sales and prescriptions as well as report any issues on any given day. Once enough logs are entered the data is displayed in the user's dashboard, allowing them to analyse their day to day operations and make more informed business decisions.</p>
            </div>
            <div className="demo-description">
                <h3>Want to try it for yourself?</h3>
                <p>Simply click on the "Demo Login" button and you will be directed to a fully functioning version of the webapp with prepopulated dataset.</p>
            </div>

        </div>
        <div className="right">
            <div className="login-container">
                <h1 className='login-header'>Login</h1>
                <label htmlFor="">Email:</label>
                <input className='login-input' type="text" />
                <label htmlFor="">Password:</label>
                <input className='login-input' type="text" />
                <div className="login-btns">
                    <button>Log in</button>
                    <button className='demo-btn' onClick={demoLogin}>Demo Login <ImEnter className='demo-icon'/></button>
                </div>
                {error}
            </div>
        </div>

    </div>
  )
}

export default Home