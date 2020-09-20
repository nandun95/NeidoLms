import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import './likeBar.css';
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

function Likes() {

    return (
        <div className="likeBar">
            <Container>
                <Row >
                    <Col sm>483 Likes</Col>
                    <Col sm>112 Coments</Col>
                    <Col sm className='rating'>4.6 <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/>
                    </Col>
                </Row>
                </Container>
            
        </div>
    )
}

export default Likes
