import React from 'react';
import './App.css';

import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Custom components
import NavbarHome from './Navbar'
import CourseNav from './CourseNav'
import CourseVideo from './CourseVideo'
import Footer from './Footer'

function App() {
  return (
    <div>
      <NavbarHome/>
      <Row>
        <Col md={{span: 4, order: 'first'}} xs={{span: 12, order: 'last'}} className="class-content">
          <CourseNav/>        
        </Col>
        <Col md={{span: 8, order: 'last'}} xs={{span: 12, order: 'first'}} className="class-content-video">
          <CourseVideo/>
        </Col>
      </Row>
      <Footer/>
    </div>
  );
}

export default App;
