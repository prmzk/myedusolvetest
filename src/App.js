import React from 'react';
import './App.css';

import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Custom components
import NavbarHome from './Navbar'
import CourseNav from './CourseNav'

function App() {
  return (
    <div>
      <NavbarHome/>
      <Row>
        <Col md={4} xs={12} className="class-content">
          <CourseNav/>        
        </Col>
        <Col md={8} xs={12} style={{backgroundColor: 'green'}}>
          2
        </Col>
      </Row>
      {/* <Row style={{backgroundColor: "black", padding: '40px'}}>
        <Col md={{span: 4, order: 'first'}} xs={{span: 12, order: 'last'}} style={{backgroundColor: "red", height: '60vh'}}>
          1
        </Col>
        <Col md={{span: 8, order: 'last'}} xs={{span: 12, order: 'first'}} style={{backgroundColor: "blue", height: '60vh'}}>
          2
        </Col>
      </Row> */}
    </div>
  );
}

export default App;
