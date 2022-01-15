
import { useState } from "react"
import React from 'react'
import {useNavigate} from 'react-router-dom'
function Student() {
  const [Name, setName] = useState("")
  const [USN, setUSN] = useState("")
  const [email, setEmail] = useState("")
  const [Phno, setphno] = useState("")
  const navigate = useNavigate();
  // const collectData = async  ()=> {

  //   console.warn(Name, USN, email, Phno)


  //   let result = await fetch("http://localhost:3000/Student",{
  //     method:'POST',
  //     body:JSON.stringify(item),
  //     headers:{
  //       "Content-Type":'application/json',
  //       "Accept":'application/json'
  //     }
  //   })
  //   result = await result.json()
  //   console.warn("result",result)
  // }
  return (
    <div className="col-sm-6 offset-sm-3" >
      <h1>ATTENDANCE MARKING PORTAL</h1>
      <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" />
      <br />
      <input type="text" value={USN} onChange={(e) => setUSN(e.target.value)} className="form-control" placeholder="USN" />
      <br />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
      <br />
      <input type="number" value={Phno} onChange={(e) => setphno(e.target.value)} className="form-control" placeholder="Phone no" />
      <br />
      <button  className="btn-primary" >Submit</button>
    </div >
  )
}
export default Student