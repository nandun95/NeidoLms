import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import pic from './img/2.jpg'
import pic2 from './img/student.png'
import per from './img/p1.jpg'
import per2 from './img/p2.jpg'
import p4 from './img/p4.jpg'
import p3 from './img/p3.png'
import Java from './img/Java.png'
import spring from './img/spring.png'
import Image from 'react-bootstrap/Image'
import Thumbsup from './Thumbsup'
import Likes from './likes'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './card.css'
import Badge from 'react-bootstrap/Badge'



function CourseCard() {
    return (
        <div >
             
           <Card>
                <Container> 
                    <Row>
                    <Col sm={8}><p className='name1'><Image src={per} roundedCircle className='person' />Indrajith Chathuranga</p></Col>
                    <Col sm={4}><Button variant="outline-primary" size="sm" className='follow'>+Follow</Button></Col>
                </Row>
                </Container>
               
                
           
            <Card.Img variant="top" src={pic}/>
            <Card.Body>
                <Card.Title><h4><Badge variant="danger">Chemistry</Badge></h4></Card.Title>
                <Card.Text>
                Start from very first bigining. A-Z oganic chemistry cover this lession. don't late. don't miss your chance. joine us!
                </Card.Text>
                
                <div className='likeBar'><Likes/></div>
                <div className='Thumbsup'><Thumbsup/></div>
            </Card.Body>
            </Card>

            <Card>
            <Container> 
                <Row>
                    <Col sm={8}><p className='name'><Image src={per2} roundedCircle className='person' />Iresha Bandara</p></Col>
                    <Col sm={4}><Button variant="outline-primary" size="sm" className='follow'>+Follow</Button></Col>
                </Row>
            </Container>
                
               
           
            <Card.Img variant="top" src={pic2}/>
            <Card.Body>
            <Card.Title><h4><Badge variant="danger">Biology</Badge></h4></Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                
                <div className='likeBar'><Likes/></div>
                <div className='Thumbsup'><Thumbsup/></div>
            </Card.Body>
            </Card>

            <Card>
            <Container> 
                <Row>
                    <Col sm={8}><p className='name'><Image src={p3} roundedCircle className='person' style={{fontWeight:'600'}}/>Mosh Viliam</p></Col>
                    <Col sm={4}><Button variant="outline-primary" size="sm" className='follow'>+Follow</Button></Col>
                </Row>
            </Container>
            <Card.Img variant="top" src={Java}/>
            <Card.Body>
            <Card.Title><h4><Badge variant="danger">Java Programming</Badge></h4></Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <div className='likeBar'><Likes/></div>
                <div className='Thumbsup'><Thumbsup/></div>
            </Card.Body>
            </Card>

            <Card>
            <Container> 
                <Row>
                    <Col sm={8}><p className='name'><Image src={p4} roundedCircle className='person' style={{fontWeight:'600'}}/>Adam Jonas</p></Col>
                    <Col sm={4}><Button variant="outline-primary" size="sm" className='follow'>+Follow</Button></Col>
                </Row>
            </Container>
            <Card.Img variant="top" src={spring}/>
            <Card.Body>
            <Card.Title><h4><Badge variant="danger">Spring Boots</Badge></h4></Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <div className='likeBar'><Likes/></div>
                <div className='Thumbsup'><Thumbsup/></div>
            </Card.Body>
            </Card>
           
           
        </div>
    )
}

export default CourseCard
