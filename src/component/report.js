import React,{useState} from "react"

import './reportform.css';
export default function Report(){
    const[state,setState]=useState(5);
    const[value,setValue]=useState(5);
    const[count,setCount]=useState(5);

    return( 
        <div className="report">
           <div className="sidebar">
                <img  alt="Logo"></img>
                <ul>
                    <li><i class="fa-solid fa-user-group"></i></li>
                    <li>Student Management</li><br></br>
                    <li><i class="fa-solid fa-coins"></i></li>
                    <li>Financial Management</li><br></br>
                    <li><i class="fa-solid fa-certificate"></i></li>                    
                    <li>Quality Control</li><br></br>              
                    <li><i class="fa-solid fa-comments"></i></li>                    
                    <li>Report Delivery</li><br></br>
                    <li><i class="fa-solid fa-clipboard"></i></li>
                    <li>Attendance</li>                    
                </ul>
                <div className='menu'>
                    <i class="fa-solid fa-circle-question"></i>
                    <i class="fa-solid fa-gear"></i>
                    <i class="fa-solid fa-right-from-bracket"></i>
                </div>
            </div>
            <div className="content2">
                <div className="content2-1">
                    <h1>Student Management</h1>
                </div>
                <div className="reportbar">
                    <div className="bar1">
                        <div className="icon">

                        </div>
                        <div className="count">
                            <p>{state}</p>
                            <p>Regular Students</p>
                        </div>
                    </div>
                    <div className="bar2">
                        <div className="icon">

                        </div>
                        <div className="count">
                            <p >{value}</p>
                            <p>Remedical Student</p>
                        </div>
                    </div>
                    <div className="bar3">
                        <div className="icon">

                        </div>
                        <div className="count">
                            <p>{count}</p>
                            <p>in paid clubs</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="menu">
                    <h3>Menu</h3>
                    <div className="menulist">
                        <div className="list1">
                            <i></i>
                            <p>Regular Enrollment</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}