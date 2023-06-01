import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/Home')
        }
    }, []);

    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch("https://e-classroom-backend.herokuapp.com/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result))
        // localStorage.setItem("token", JSON.stringify(result.auth))

        navigate('/Dashboard')
    }

    return (
        <div className="register" align='center'>
            <h1>Register</h1>
            <input className="inputtab" type="text" placeholder="Enter Name" padding-left={"20px"}
                value={name} onChange={(e) => setName(e.target.value)}
            />
            <input className="inputtab" type="text" placeholder="Enter Email"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <input className="inputtab" type="password" placeholder="Enter password"
                value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
            <h3>Click on Login if Already having an account </h3>
        </div>
    )
}
export default Register