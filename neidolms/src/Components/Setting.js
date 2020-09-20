import React from 'react'
import './Setting.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import profilePic from './img/Profile2.jpg'
import { MdFeedback } from 'react-icons/md';
import Badge from 'react-bootstrap/Badge'
import course from './img/book1.png'
import {FcSettings} from 'react-icons/fc';
import {FcFeedIn} from 'react-icons/fc';
import {FcAssistant} from 'react-icons/fc';
import {FiLogOut} from 'react-icons/fi';

function Setting() {
    return (
        <div className='Setting'>

            <Container>
                <Row>
                   
                    <div className='col-md-2'><Image style={{width:'60px',height:'60px'}} src={profilePic} roundedCircle /></div>
                        <div className="col-md-9">
                        <div className="row" style={{height:"20px"}}>
                            <div className="col-md-12">
                            <div className='col-md-12' style={{marginLeft:"15px"}}>
                            
                            <a href="#profile" className="profileLink" style={{textDecoration:'none'}}><h5>Yshan Pramodya</h5>
                            <p>Visit Your Profile</p> </a>
                        </div>
                            </div>
                        </div>
                    </div>

                    
                    <a href='#setting' style={{textDecoration:"none"}}> 
                        <div className='row' style={{marginTop:'20px'}}>
                        <div className='col-md-2'></div>
                        <div className='col-md-2 left' style={{borderRadius:'20px'}}><h5 style={{position:'relative',left:'-8px',top:'2px'}}><FcSettings/></h5></div>
                        <div className='col-md-8 right'><h6 style={{position:'relative',top:'4px'}}>Setting & privacy</h6></div>

                        </div>
                    </a>
                    <a href='#setting' style={{textDecoration:"none"}}> 
                        <div className='row' style={{marginTop:'20px'}}>
                        <div className='col-md-2'></div>
                        <div className='col-md-2 left' style={{borderRadius:'20px'}}><h5 style={{position:'relative',left:'-8px',top:'2px'}}><FcFeedIn/></h5></div>
                        <div className='col-md-8 right'><h6 style={{position:'relative',top:'4px'}}>Give us Feedback</h6></div>

                        </div>
                    </a>
                    <a href='#setting' style={{textDecoration:"none"}}> 
                        <div className='row' style={{marginTop:'20px'}}>
                        <div className='col-md-2'></div>
                        <div className='col-md-2 left' style={{borderRadius:'20px'}}><h5 style={{position:'relative',left:'-8px',top:'2px'}}><FcAssistant/></h5></div>
                        <div className='col-md-8 right'><h6 style={{position:'relative',top:'4px'}}>Help & Support</h6></div>

                        </div>
                    </a>
                    <a href='#setting' style={{textDecoration:"none"}}> 
                        <div className='row' style={{marginTop:'20px'}}>
                        <div className='col-md-2'></div>
                        <div className='col-md-2 left' style={{borderRadius:'20px'}}><h5 style={{position:'relative',left:'-8px',top:'2px'}}><FcAssistant/></h5></div>
                        <div className='col-md-8 right'><h6 style={{position:'relative',top:'4px'}}>LogOut</h6></div>

                        </div>
                    </a>
                    
                   


                   
                    
                   
                            
                </Row>
            </Container>
            
        </div>
    )
}

export default Setting
