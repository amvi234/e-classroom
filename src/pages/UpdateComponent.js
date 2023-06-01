import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const UpdateStudent = () => {
    const [name, setname] = React.useState('');
    const [usn, setusn] = React.useState('');
    const [email, setemail] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getStudentDetails();
    }, [])

    const getStudentDetails = async () => {
        console.warn(params)
        let result = await fetch(`https://e-classroom-backend.herokuapp.com/student/${params.id}`,{
            // headers:{
            //     authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            // }
        });
        result = await result.json();
        setname(result.name);
        setusn(result.usn);
        setemail(result.email)
    }

    const updatestudent = async () => {
        console.warn(name, usn, email)
        let result = await fetch(`https://e-classroom-backend.herokuapp.com/student/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name, usn, email }),
            headers: {
                'Content-Type': 'Application/json',
                // authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if (result) {
            navigate('/Dashboard')
        }

    }

    return (
        <div className='product'>
            <h1>Update Student</h1>
            <input type="text" placeholder='Enter student name' className='inputBox'
                value={name} onChange={(e) => { setname(e.target.value) }}
            />

            <input type="text" placeholder='Enter student usn' className='inputBox'
                value={usn} onChange={(e) => { setusn(e.target.value) }}
            />

            

            <input type="text" placeholder='Enter student email' className='inputBox'
                value={email} onChange={(e) => { setemail(e.target.value) }}
            />


            <button onClick={updatestudent} className='appButton'>Update student</button>
        </div>
    )
}

export default UpdateStudent;