import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
 
const Login=()=>{
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/Home")
        }
    }, [])

    const handleLogin = async () => {
        let result = await fetch("https://e-classroom-backend.herokuapp.com/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if (result.auth) {
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.auth));
            navigate("/Dashboard")
        } else {
            alert("Please enter correct details")
        }
    }
    
    return(
        <div className='login' align='center'>
        <h1>Login</h1>
        <input type="text" className="inputBox" placeholder='Enter Email'
            onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" className="inputBox" placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)} value={password} />
                <h3>Don't have account? Click on Register to create one</h3>

        <button onClick={handleLogin}  className="appButton" type="button">Login</button>
    </div>
    )
}
export default Login