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
            //  src='https://cdn-0.emojis.wiki/emoji-pics/facebook/woman-teacher-facebook.png'/>
            src = 'https://99designs-start-attachments.imgix.net/alchemy-pictures/2019%2F01%2F31%2F23%2F16%2F56%2Fa003b801-789a-4fbe-bdeb-55436d0a69b1%2FSpoon%20Lancer.png?auto=format&ch=Width%2CDPR&w=250&h=250'/>
            {auth ? <ul className="nav-ui">
            <li><Link to="/Home">Home</Link></li>
                <li><Link to="/dashboard">Students</Link></li>
                {/* <li><Link to="/UpdateComponent">Update Student</Link></li> */}
                <li><Link to="/Subjects">Courses</Link></li>
                <li><Link to="/Student">Add Student</Link></li>
                
                <li ><Link onClick={logout} to="/Register">Logout (admin)</Link></li>
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