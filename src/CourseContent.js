import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function CourseContent({ title }){
    return (
        <div className='d-flex justify-content-center align-items-center course-content-expand mr-4 mb-4'>
            <p className="course-headers-expand mr-auto">{title}</p>
            <img src={'/dropdown.png'} style={{ width: '10px', height: '7px' }} className="mr-3"></img> 
        </div>
    )
}

export default CourseContent;
