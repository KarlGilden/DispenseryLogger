import React from 'react'
import {Routes, Route} from 'react-router-dom';
import AddLog from '../pages/AddLog';
import Dashboard from '../pages/dashboard';
import Editlog from '../pages/Editlog';
import History from '../pages/History'
import Navbar from '../components/Navbar'

function User() {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/add-log" element={<AddLog/>} />
            <Route path="/history" element={<History/>} />
            <Route path="/edit-log/:id" element={<Editlog/>} />
        </Routes>
    </>
  )
}

export default User