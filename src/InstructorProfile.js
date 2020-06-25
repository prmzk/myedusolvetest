import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import course from './content.json'

function InstructorProfile(){
    return (
        <div className="instructor mt-4 shadow-sm">
            <p className="course-headers mb-2" style={{fontSize: '24px'}}>Instruktur</p>
            <div className="d-flex ml-4 align-items-center">
                <img src={'/instructor.png'} className="mr-3"></img>
                <div className="d-flex flex-column">
                    <p className="course-headers" style={{fontSize: '24px'}}>{course.instructor.name}</p>
                    <p className="course-text">{course.instructor.desc}</p>
                </div>  
            </div>  
        </div>
    )
}

export default InstructorProfile;
