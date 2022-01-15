import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/Register')
    }
    // const navigate = useNavigate();
    // useEffect(()=>{
    //     const auth = localStorage.getItem('user');
    //     if(auth){
    //         navigate('/dashboard');
    //     }
    // })
    return (
        <div >
             <img
            alt='logo'
            className='logo'
             src='https://cdn-0.emojis.wiki/emoji-pics/facebook/woman-teacher-facebook.png'/>
            {auth ? <ul className="nav-ui">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/To-do">To-do</Link></li>
                <li><Link to="/Subjects">Subjects</Link></li>
                <li><Link to="/Student">Attendance</Link></li>
                <li><Link onClick={logout} to="/Register">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
                :
                <ul className="nav-ui nav-right">
                    <li><Link to="/Register">Register</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav