import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FaRegThumbsUp} from 'react-icons/fa'
import {BsChatSquareDots} from 'react-icons/bs'
import './thumbsUp.css'
import Button from 'react-bootstrap/Button'

function Thumbsup() {
    return (
        <div className='like'>
            <Container>
                <Row>
                    <Col>
                    <Button variant="outline-dark" size="sm" className='lernmore'><FaRegThumbsUp/> Like</Button>
                    
                    </Col>
                    <Col>
                    <Button variant="outline-dark" size="sm" className='lernmore'><BsChatSquareDots/> Comment</Button>
                    
                    </Col>
                    <Col><Button variant="outline-dark" size="sm" className='lernmore'>Viwe</Button></Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Thumbsup
