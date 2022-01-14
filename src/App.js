
import React from 'react'
// import { useState } from "react"
import Student from './pages/Student'
import LoginPortal from './pages/LoginPortal'
import Nav from './pages/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from'./pages/Footer'
import Logout from './pages/Logout'
import Assignment from './pages/Assignments'
import Subjects from './pages/Subjects'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import PrivateComponent from './pages/PrivateComponent'
import './App.css'
function App() {



  return (
    <div className="App" >
      <BrowserRouter>
      <Nav/>
      
      
      
        <Routes>

          {/* <Route element ={<PrivateComponent/>}> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Subjects" element={<Subjects/>} />
          <Route path="/To-do" element={<Assignment/>} />
          <Route path="/Logout" element={<Logout/> } />
          {/* </Route> */}
          {/* <Route path="/login" element={<LoginPortal />} /> */}
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>


  )
}
export default App