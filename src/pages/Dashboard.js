import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = async () => {
        let result = await fetch('http://localhost:3000/students',{
            // headers:{
            //     authorization:JSON.parse(localStorage.getItem('token'))
            // }
        });
        result = await result.json();
        setStudents(result);
    }

    const deleteStudent = async (id) => {
        console.warn(id)
        let result = await fetch(`http://localhost:3000/student/${id}`, {
            method: "Delete",
            // headers:{
            //     authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            // }
        });
        result = await result.json();
        if (result) {
            getStudents();
        }
    }

    // const searchHandle = async (event)=>{
    //     let key = event.target.value;
    //     if(key){
    //         let result = await fetch(`http://localhost:3000/search/${key}`,{
    //             // headers:{
    //             //     authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    //             // }
    //         });
            
    //         result = await result.json()
    //         if(result){
    //             setStudents(result)
    //         }
    //     }else{
    //         getStudents();
    //     }
        
    // }

    return (
        <div className="product-list">
            <h3>Student List</h3>
            {/* <input type="" className='search-product-box' placeholder='Search Product' */}
            {/* onChange={searchHandle}
             /> */}
            <ul>
                <li>S. No.</li>
                <li>Name</li>
                <li>USN</li>
                <li>Email</li>
                <li>Operation</li>
            </ul>
            {
                students.length>0 ? students.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.usn}</li>
                        <li>{item.email}</li>
                        <li>
                            <button className="delete" onClick={() => deleteStudent(item._id)}>Delete</button>
                            {/* <Link to={"/UpdateComponent/"+item._id} >Update </Link> */}
                            </li>

                    </ul>
                )
                :<h1>No Result Found</h1>
            }
        </div>
    )
}

export default Dashboard;