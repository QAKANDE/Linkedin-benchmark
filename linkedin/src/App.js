import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col, Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Footer from './components/Footer'
import SideProfile from './components/SideProfile'
import Experience from './components/Experience'
import About from './components/About'

import{BrowserRouter as Router, Route} from 'react-router-dom'
import SideNews from './components/SideNews'
function App() {
  return (
    <>
    <div className="App">
      <NavBar />
      <Container>
        <Post />
        <Row className="mx-2">
          <Col lg={8}>
            <div className='profilewrap mt-5'>
              <Profile />
            </div>
            <div className='aboutwrap mt-3'>
              <About />
            </div>
            <div className='experiencewrap mt-3'>
              <Experience />
            </div>
          </Col>
          <Col lg={4}>
            <div className="mt-5">
              <SideProfile />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
      <Footer/>
   </div>
   
  
   </>


  );
}

export default App;
