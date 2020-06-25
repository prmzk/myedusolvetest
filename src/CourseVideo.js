import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import InstructorProfile from './InstructorProfile'

function CourseVideo(){
    return (
        <div className="video-container">
            <img src={'/video.png'} className="video-img"></img>
            <InstructorProfile/>
        </div>
    )
}

export default CourseVideo;
