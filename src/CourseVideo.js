import React from 'react';
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import InstructorProfile from './InstructorProfile'

function CourseVideo(){
    return (
        <div>
            <img src={'/video.png'} className="col-md-12 pr-5"></img>
            <InstructorProfile/>
        </div>
    )
}

export default CourseVideo;
