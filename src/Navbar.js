import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

function NavbarHome(){
    return (
        <Navbar expand="lg" style={{backgroundColor: '#ffffff'}} className="shadow-sm nav-pad pt-3 pb-3">
        <Navbar.Brand href="#home">
            <img src={'/logo.png'} className={'AppLogo'}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavDropdown title={<span style={{ color: 'black', fontFamily: 'Montserrat'}}>KELAS</span>} id="basic-nav-dropdown" className="mr-3 dropdown-nav">
                </NavDropdown>
                <Nav.Link href="#home" style={{ color: 'black ', fontFamily: 'Montserrat'}} className="mr-3">EVENTS</Nav.Link>
                <Nav.Link href="#link" style={{ color: 'black ', fontFamily: 'Montserrat'}} className="mr-3">KONTAK</Nav.Link>
            </Nav>
            <Nav.Link href="#link" style={{ color: 'black ',  fontFamily: 'Montserrat'}} className="pl-0 profile-name">
            <img src={'/profile_placeholder.png'} style={{ width: '20px' }} className="mr-3"></img> 
            ARIYA PUTRA </Nav.Link>
        </Navbar.Collapse>

        </Navbar>
    )
}

export default NavbarHome;
