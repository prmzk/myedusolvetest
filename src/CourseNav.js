import React from 'react';
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import course from './content.json'

import CourseContent from './CourseContent'


function CourseNav(){
    return (
        <div>
            <p className="course-name">{course.name}</p>
            <div className='d-flex mb-4'>
                <p className="course-headers mr-auto">Konten Kelas</p>
                <p className="course-text mr-4">4 Materi | Total Durasi 10 min</p>
            </div>
            <CourseContent title="Perkenalan"></CourseContent>

            <div className='d-flex justify-content-center align-items-center course-content-expand course-content-expand-selected mr-4'>
                <p className="course-headers-expand mr-auto">{course.selectedContent.name}</p>
                <img src={'/dropdown.png'} style={{ width: '10px', height: '7px' }} className="mr-3"></img> 
            </div>
            <div className='d-flex justify-content-center align-items-center course-content-expand mr-4'
            style={{borderTopWidth: 0, borderRadius: 0}}>
                <img src={'/mdi_check_circle.png'} className="mr-3"></img> 
                <p className="course-text mr-auto">{course.selectedContent.subcontent.name}</p>
                <p className="course-text">{course.selectedContent.subcontent.time}</p>
            </div>
            <div className='d-flex justify-content-center align-items-center course-content-expand mr-4 mb-4'
            style={{borderTopWidth: 0, borderTopRightRadius: '0', borderTopLeftRadius: '0'}}>
                <img src={'/mdi_check_circle.png'} className="mr-3"></img> 
                <p className="course-text mr-auto">{course.selectedContent.subcontent.name}</p>
                <p className="course-text">{course.selectedContent.subcontent.time}</p> 
            </div>

            {course.content.map(content => (
                <CourseContent title={content.name}></CourseContent>
            ))}

            <div className='d-flex justify-content-center align-items-center course-content-expand mr-4 mb-4'>
                <img src={'/mdi_star.png'} className="mr-3"></img> 
                <p className="course-headers-expand mr-auto">Rating dan Ulasan</p>
            </div>

            <div className='d-flex justify-content-center align-items-center course-content-expand mr-4 mb-4'>
                <img src={'/mdi_note.png'} className="mr-3"></img> 
                <p className="course-headers-expand mr-auto">Exam</p>
            </div>

        </div>
        
    )
}

export default CourseNav;
