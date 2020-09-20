import React from 'react'
import *as ReactBootstrap from 'react-bootstrap';
import './nav.css'
import Image from 'react-bootstrap/Image'
import logo from './img/logo.png'
import {AiFillHome} from 'react-icons/ai'
import {FaBookOpen} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsPencilSquare} from 'react-icons/bs'
import {BsBellFill} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import {AiTwotoneSetting} from 'react-icons/ai'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'
import Notification from './notification'
import Setting from './Setting'




function Navbar() {
    return (
        <div>
            <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <ReactBootstrap.Navbar.Brand href="#home"> <Image src={logo} rounded  className='logo'/></ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootstrap.Form inline>
                <ReactBootstrap.FormControl type="text" placeholder="Search Cources" className="mr-sm-2" />
                <ReactBootstrap.Button variant="outline-info">Search</ReactBootstrap.Button>
                </ReactBootstrap.Form>
                <ReactBootstrap.Nav className="navbar-nav ml-auto">
                {/* <Button variant="outline-info" size="lg" className='icon'><AiFillHome/></Button>
                <Button variant="outline-info" size="lg" className='icon'><FaBookOpen/></Button>
                <Button variant="outline-info" size="lg" className='icon'><BsFillPersonFill/></Button>
                <Button variant="outline-info" size="lg" className='icon'><BsPencilSquare/></Button> */}
                
               

                
                <ReactBootstrap.Nav.Link href="#home" ><div className='icon2'><AiFillHome  className='icon'/> </div>
                    </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="#Cources"  className='icon2'><FaBookOpen className='icon'/><Badge className='badge' pill variant="danger ">4</Badge></ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="#Profile"  className='icon2'><BsFillPersonFill className='icon'/><Badge className='badge' pill variant="danger ">9</Badge> </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="#Exams"  className='icon2'><BsPencilSquare className='icon'/><Badge className='badge' pill variant="danger ">23</Badge> </ReactBootstrap.Nav.Link>
                
                
                </ReactBootstrap.Nav>
                <ReactBootstrap.Nav>
                <ReactBootstrap.NavDropdown alignRight title={<BsBellFill />} id="dropdown-menu-align-left" className='icon2'>
                {/* <ReactBootstrap.NavDropdown.Item style={{width:'400px'}}><Notification/></ReactBootstrap.NavDropdown.Item> */}
                <Notification />
                   
                </ReactBootstrap.NavDropdown>
                <ReactBootstrap.NavDropdown alignRight title={<AiTwotoneSetting/>} id="dropdown-menu-align-left" className='icon2'>
                    <Setting/>
                </ReactBootstrap.NavDropdown>
                
                
                </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
            
               
                
            
        </div>
            
            
    )
}

export default Navbar
