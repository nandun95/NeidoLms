import React from 'react';
import logo from './logo.svg';
import './App.css'
import Navbar from './Components/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CourseCard from './Components/CourseCard'
import Popdetails from './Components/Popdetails'
import Courses from './Components/Courses'
import Calander from './Components/calander'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='lbody'>
        
     
        <Row className="justify-content-md-center sec">
          <Col className='stkey' >
            <Popdetails/>
            
            
          </Col>
          <Col  xs={6} >
            <Courses/>
          </Col>
          <Col >
            <Calander/>
          </Col>
        </Row>
    
      </div>
    </div>
  );
}

export default App;
