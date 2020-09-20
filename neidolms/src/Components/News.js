import React from 'react'
import './calander.css'
import Carousel from 'react-bootstrap/Carousel'
import engineer from './img/engineer.jpg'
import it from './img/it.jpg'
import bio from './img/bio.jpg'


function News() {
    return (
        <div className='news'>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={engineer}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={bio}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <a href='#news' style={{color:'white'}}><p style={{fontWeight:'600',background:"rgba(38, 33, 33, 0.8)"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={it}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <a href='#news' style={{color:'white'}}><p style={{fontWeight:'600',background:"rgba(38, 33, 33, 0.8)"}}>Science first time in Neido</p></a>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            
        </div>
    )
}

export default News
