import React from 'react';
import { useNavigate } from 'react-router-dom'
const Student = () => {
    const [name, setName] = React.useState('');
    const [usn, setusn] = React.useState('');
    // const [sem, setsem] = React.useState('');
    const [email, setsection] = React.useState('');
    const [error,setError] = React.useState(false);
    const navigate = useNavigate();
    // useEffect(() => {
    //     const auth = localStorage.getItem('user');
        
    // }, [])
    const addstudent = async () => {
        if(!name || !usn || !email)
        {
            setError(true);
            return false
        }
        alert('Student Added');
       
        // console.warn(name, usn, sem, email);
        const sem = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:3000/add-student",{
          method:'post',
          body:JSON.stringify({name, usn, sem, email}),
          headers: {
            'Content-Type': 'application/json',
            // authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
        });
        result = await result.json();
        console.warn(result)
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            navigate("/dashboard")
        } 
    }
    
    return (
        <div className='student' align="center" style={{marginTop:"130px"}}>
            <h1>Add Student</h1>
            <input type="text" placeholder='Enter name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
             {error && !name && <span className='invalid-input'>Enter valid name</span>}
            <input type="text" placeholder='Enter usn' className='inputBox'
                value={usn} onChange={(e) => { setusn(e.target.value) }}
            />
             {error && !usn && <span className='invalid-input'>Enter valid usn</span>}
            {/* <input type="text" placeholder='Enter semester' className='inputBox'
                value={sem} onChange={(e) => { setsem(e.target.value) }}
            />
             {error && !sem && <span className='invalid-input'>Enter valid sem</span>} */}
            <input type="text" placeholder='Enter email' className='inputBox'
                value={email} onChange={(e) => { setsection(e.target.value) }}

            />
            {error && !email && <span className='invalid-input'>Enter valid email</span>}
            <button onClick={addstudent}  className='appButton'>Save</button>
        </div>
    )
}

export default Student;