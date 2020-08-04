import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Navbar.css';
import { FaLinkedin, FaHome, FaUser, FaSuitcase, FaCommentAlt, FaBell, FaVideo } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from 'react-icons/bs'

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" className='navBar'>
        <div className="navbar_logo_search">
          <FaLinkedin className='linkedIn' />
          <Form inline style={{ paddingLeft: "10px" }}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </div>
        <div className="spacer">
        </div>
        <div className="navbar_icons">
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="icon-navigation">
            <Link to={"/home/"} className='text-navigation nav-link'>
              <FaHome size={18} />Home</Link>
            <Link to={"/NetworkP"} className='text-navigation nav-link' href='#mynetwork'>
              <FaUser size={18} />Network</Link>
            <Nav.Link className='text-navigation'>
              <FaSuitcase size={18} />Jobs</Nav.Link>
            <Link to="/Messages" className='text-navigation nav-link'>
              <FaCommentAlt size={18} />Messaging </Link>
            <Nav.Link className='text-navigation'>
              <FaBell size={18} />Notifications</Nav.Link>
            <Nav.Link className="text-navigation">
              <div id="profile-pic-sm" className="profile-pic-sm">
                <img id="profile-pic-sm" src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg" alt="Profile pic" />
              </div>
              <NavDropdown className='text-navigation' title="Me" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">My</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
            <div className="navbar-me"></div>
            <Nav.Link className="text-navigation">
              <BsFillGrid3X3GapFill size={18} /><NavDropdown title="Work" className='text-navigation' id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
            <Nav.Link className='text-navigation' href="#link">
              <FaVideo size={18} />Learning</Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </div>
      </Navbar >
    )
  }
}
export default NavBar;