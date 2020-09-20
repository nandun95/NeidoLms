import React from 'react'
import './notification.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Notification() {
    return (
        <div className='Notification'>
            <Container>
                <Row>
                    <Col xs={12}><h4 className='heding'>Notification</h4></Col>
                    <Col xs={12}><h6>New</h6></Col>
                    <Col xs={12}><p>Welcome to neido, Happy jurny with us</p></Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Notification
