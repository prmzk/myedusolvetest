import React from 'react';
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function Footer(){
    return (
        <div>
        <Row className="appFooter">
            <Col md={{span: 6, order: 'first'}} xs={{span: 12, order: 'last'}}>
                <p className="course-headers-expand">PT DWI INTI PUTRA</p>
                <Row className="mt-4">
                    <Col md={{span: 6, order: 'first'}}>
                        <p className="course-headers-expand">Head Office</p>
                        <p className="course-text" style={{fontSize: '16px'}}>Gedung Kresna</p>
                        <p className="course-text" style={{fontSize: '16px'}}>Jl. Arjuna Utara No. 28</p>
                    </Col>
                    <Col md={{span: 6, order: 'first'}}>
                        <p className="course-headers-expand">Marketing Office</p>
                        <p className="course-text" style={{fontSize: '16px'}}>BLOCK71 Jakarta</p>
                        <p className="course-text" style={{fontSize: '16px'}}>Ariobimo Sentral</p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={{span: 2, order: 'first'}}>
                        <p className="course-text" style={{fontSize: '16px'}}>Email:</p>
                    </Col>
                    <Col md={{span: 10, order: 'first'}}>
                        <p className="course-headers-expand">hello@myedusolve.com</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 2, order: 'first'}}>
                        <p className="course-text" style={{fontSize: '16px'}}>WhatsApp:</p>
                    </Col>
                    <Col md={{span: 10, order: 'first'}}>
                        <p className="course-headers-expand">+62 877-8890-9020</p>
                    </Col>
                </Row>
            </Col>
            <Col md={{span: 6, order: 'last'}} xs={{span: 12, order: 'first'}}>
                <Row>
                    <Col md={{span: 6, order: 'first'}}>
                        <p className="course-name" style={{fontSize: '24px'}}>MyEduSolve X</p>
                        <p className="course-text" style={{fontSize: '16px'}}>Tentang Kami</p>
                        <p className="course-text" style={{fontSize: '16px'}}>Kontak Kami</p>
                        <p className="course-text" style={{fontSize: '16px'}}>Jadi Instruktur</p>
                        <p className="course-text" style={{fontSize: '16px'}}>Faq</p>
                    </Col>
                    <Col md={{span: 6, order: 'first'}}>
                        <p className="course-name" style={{fontSize: '24px'}}>Program</p>
                        <p className="course-text" style={{fontSize: '16px'}}>Kelas</p>
                        <p className="course-text" style={{fontSize: '16px'}}>Events</p>
                        <p className="course-text" style={{fontSize: '16px'}}>Sertifikasi</p>
                        <p className="course-text" style={{fontSize: '16px'}}>Ambassador</p>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row style={{backgroundColor: 'white', padding: '28px 180px'}}>
            <Col md={{span: 4}} xs={{span: 12}}>
                <div className="d-flex">
                    <p className="course-text mr-auto">Term and Conditions</p>
                    <p className="course-text">Privacy and Policy</p>
                </div>
            </Col>
            <Col md={{span: 8}} xs={{span: 12}}>
                <div className="d-flex">
                    <img src={'/twitter.png'} className="ml-auto"></img> 
                    <img src={'/facebook.png'} className="ml-5"></img> 
                    <img src={'/instagram.png'} className="ml-5"></img> 
                    <img src={'/youtube.png'} className="ml-5"></img> 
                </div>
            </Col>
        </Row>
        </div>
    )
}

export default Footer;
