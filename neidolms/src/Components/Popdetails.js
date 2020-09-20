import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

import './pro.css'
import profilePic from './img/Profile2.jpg'
import course from './img/book1.png'
import comcourse from './img/book2.png'
import credits from './img/medal.png'
import subject from './img/subject.jpg'
import exam from './img/exam.png'
import save from './img/save.png'
import event from './img/event.png'
import Image from 'react-bootstrap/Image'
import { FcReadingEbook } from 'react-icons/fc';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Popdetails() {
    return (
        <div className='profileCard' style={{overflowY:'scroll',height:'100%'}}>
            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={profilePic} />Yashan Promodya
                </div>
                
            </div>
            </Container>
            </a> 
            
            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={course} />My Courses
                </div>
                
            </div>
            </Container>
            </a>
            
            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={comcourse} />Complete Courses
                </div>
                
            </div>
            </Container>
            </a>
            
            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={credits} />Credits
                </div>
                
            </div>
            </Container>
            </a>
           
            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={subject} />My Subjects
                </div>
                
            </div>
            </Container>
            </a>

            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={exam} />My Exams
                </div>
                
            </div>
            </Container>
            </a>

            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={save} />Saved Courses
                </div>
                
            </div>
            </Container>
            </a>

            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={event} />Events
                </div>
                
            </div>
            </Container>
            </a>

            {/* Testing */}
            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={course} />My Courses
                </div>
                
            </div>
            </Container>
            </a>
            
            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={comcourse} />Complete Courses
                </div>
                
            </div>
            </Container>
            </a>
            
            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={credits} />Credits
                </div>
                
            </div>
            </Container>
            </a>
           
            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={subject} />My Subjects
                </div>
                
            </div>
            </Container>
            </a>

            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={exam} />My Exams
                </div>
                
            </div>
            </Container>
            </a>

            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={save} />Saved Courses
                </div>
                
            </div>
            </Container>
            </a>

            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={event} />Events
                </div>
                
            </div>
            </Container>
            </a>
            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={save} />Saved Courses
                </div>
                
            </div>
            </Container>
            </a>

            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={event} />Events
                </div>
                
            </div>
            </Container>
            </a>
            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={save} />Saved Courses
                </div>
                
            </div>
            </Container>
            </a>

            <a href='#profile' className='Links' style={{ textDecoration: 'none' }}>
            <Container>
            <div className ='row pcc'>
                <div className ='col-md-12 listItem'>
                    <img className='profilePic' src={event} />Events
                </div>
                
            </div>
            </Container>
            </a>
            

        </div>
    )
}

export default Popdetails
