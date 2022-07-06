
import React from 'react'
// import { useState } from "react"
import Student from './pages/Student'
import Login from './pages/Login'
import Nav from './pages/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './pages/Footer'
import Logout from './pages/Logout'
import UpdateComponent from './pages/UpdateComponent'
import Subjects from './pages/Subjects'
import Dashboard from './pages/Dashboard'
import Home from "./pages/Home";

import Register from './pages/Register'
// import PrivateComponent from './pages/PrivateComponent'
import './App.css'
function App() {



  return (
    <div className="App"   >
      <BrowserRouter>
        <Nav />



        <Routes>

          {/* <Route element={<PrivateComponent />}> */}
          <Route path="/Home" element={ <Home />}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/student" element={<Student />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Subjects" element={<Subjects />} />
            <Route path="/UpdateComponent" element={<UpdateComponent />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={ <Home />}/>
            <Route path="/Logout" element={<Logout />} />
          {/* </Route> */}
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>


  );
}
export default App