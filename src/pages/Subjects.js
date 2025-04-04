// import { width } from '@mui/system';
import React from 'react'
import dsa from "../assests/images/dsa.jpg";
import os from "../assests/images/os.jpg";
import dbms from "../assests/images/dbms.jpg";
import './subject.css'
function Subjects(){
    return(
        <div  className='subjectimg'>
           {/* <h1  align={"center"}>Courses</h1> */}
           
   <figure> <img src={dsa} alt="Forest" width={"500"} height="400" border-style={" ridge"}></img><figcaption>Learn the DSA course free here<a href="https://www.interviewbit.com/blog/best-courses-for-data-structures-and-algorithms/"><button>Link</button></a></figcaption></figure>
   <figure> <img src={os} alt="Forest" width={"600"} height="400" padding={"40px"} border={"10px solid transparent"}></img><figcaption>Learn the OS course free here<a href="https://www.interviewbit.com/operating-system-interview-questions/"><button>Link</button></a></figcaption></figure>
   <figure><img src={dbms} alt="Forest" width={"500"} height="400" padding={"40px"} border={"10px solid transparent"}></img><figcaption>Learn the DBMS course free here<a href="https://www.interviewbit.com/dbms-interview-questions/"><button>Link</button></a></figcaption></figure>
       </div>
    )
}
export default Subjects