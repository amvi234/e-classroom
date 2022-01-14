import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Nav = () => {
    // const auth = localStorage.getItem('user');
    // const navigate = useNavigate();
    // const logout = ()=>{
    //     localStorage.clear();
    //     navigate('/login')
    // }

    return (
        <div >
            <ul  className="nav-ui">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/To-do">To-do</Link></li>
                <li><Link to="/Subjects">Subjects</Link></li>
                <li><Link to="/Student">Attendance</Link></li>
                <li><Link to ="/Logout">Logout</Link> </li> :
                 {/* <Link to="/login">Login</Link>}</li> */}
                
            </ul>
        </div>
    )
}
export default Nav