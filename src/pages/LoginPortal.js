// import React, {useEffect} from 'react'
// import  { useState } from "react"
// import {useNavigate} from 'react-router-dom'
// function LoginPortal (){
//     const [Username,setUserName] = useState("")
//   const[Password,setPassword] = useState("")
//   const navigate = useNavigate();

//     useEffect(()=>{
//         const auth = localStorage.getItem('user');
//         if(auth)
//         {
//             navigate('/dashboard')
//         }
//     })

//   //  const signUp = async  ()=> {
//   //   let item = {Username,Password}
//   //   console.warn(item)
//   //   let result = await fetch("http://localhost:3000/login", {
//   //     method: 'post',
//   //     body: JSON.stringify({ Username,Password }),
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     },
//   //   })
//   //   result = await result.json()
//   //   console.warn(result);
//     // localStorage.setItem("user",JSON.stringify(result));
//     // if(result)
//     // {
//     //     navigate('/dashboard')
//     // }
  
//     return(
//         <div className="col-sm-6 offset-sm-3" align="CENTER">
          
//      <h1>LOGIN PORTAL</h1>
//       <input type ="text"  value={Username} onChange={(e)=>setUserName(e.target.value)} className="form-control" placeholder="Username"/> 
//       <br/>
//       <input type ="Password"  value={Password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/> 
//       <br/>
//       <button className="normalBtn" >Login</button>
      
//       </div>
      
//     )
 
// }
// export default LoginPortal