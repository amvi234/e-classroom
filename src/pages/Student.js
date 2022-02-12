import React from 'react';

const Student = () => {
    const [name, setName] = React.useState('');
    const [usn, setusn] = React.useState('');
    const [sem, setsem] = React.useState('');
    const [section, setsection] = React.useState('');
    const addstudent = async () => {
        console.warn(name, usn, sem, section);
        let result = await fetch("http://localhost:3000/add-student",{
          method:'post',
          body:JSON.stringify({name, usn, sem, section}),
          headers: {
            'Content-Type': 'application/json'
        }
        });
        result = await result.json();
        console.warn(result)
    }
    return (
        <div className='student'>
            <h1>Add Your Attendance</h1>
            <input type="text" placeholder='Enter name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
            <input type="text" placeholder='Enter usn' className='inputBox'
                value={usn} onChange={(e) => { setusn(e.target.value) }}
            />
            <input type="text" placeholder='Enter semester' className='inputBox'
                value={sem} onChange={(e) => { setsem(e.target.value) }}
            />
            <input type="text" placeholder='Enter section' className='inputBox'
                value={section} onChange={(e) => { setsection(e.target.value) }}
            />
            <button onClick={addstudent} className='appButton'>Save Attendance</button>
        </div>
    )
}

export default Student;