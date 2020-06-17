import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import './Navbar.css';
import { FaLinkedin, FaHome, FaUser, FaSuitcase, FaCommentAlt, FaBell, FaVideo } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from 'react-icons/bs'

class NavBar extends Component {
  render() {
    return (
      <>

        <Navbar bg="dark" expand="lg" className='navBar'>
          <div className='container'>
            <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_200_200/0?e=2159024400&v=beta&t=itrwplyUUwPAVxqxN8THySQds9p401UaOtZIurSBVnA" style={{ width: "40px", borderRadius: "5px" }}></img>
            <Navbar.Brand href="#home">

            </Navbar.Brand>
            <Dropdown show={this.props.status} className="mt-5">
              <Dropdown.Menu>

                {this.props.users}
              </Dropdown.Menu>
            </Dropdown>
            <Form inline>
              <FormControl onChange={(e) => this.props.search(e.currentTarget.value)} type="text" placeholder="Search" className="mr-sm-2" />
            </Form>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div className="spacer">
            </div>
            <div className="navbar_icons">

              <Nav className="icon-navigation">
                <Nav.Link className='text-navigation' href="#home">
                  <FaHome size={18} />Home</Nav.Link>
                <Nav.Link className='text-navigation' href='#mynetwork'>
                  <FaUser size={18} />Network</Nav.Link>
                <Nav.Link className='text-navigation'>
                  <FaSuitcase size={18} />Jobs</Nav.Link>
                <Nav.Link className='text-navigation'>
                  <FaCommentAlt size={18} />Messaging</Nav.Link>
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
          </div>
        </Navbar>
      </>
    )
  }
}
export default NavBar;