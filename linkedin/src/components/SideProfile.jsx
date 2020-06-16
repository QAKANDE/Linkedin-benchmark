import React, { Component } from 'react';
import{Button,Row,Col} from 'react-bootstrap'
import './SideProfile.css'
import Viewed from './Viewed'

class SideProfile extends Component {
    render() { 
        return ( 
            <div className='wrapper'>
            {/* <div className="d-flex justify-content-between">
                <p>Edit public profile & URL</p>
                <i className="fa fa-edit mx-5"></i>
            <hr></hr>
            </div>
            <div>
            <p className="d-inline">Add profile in another language</p>
                <i className="fa fa-edit mx-5 d-inline"></i>
            </div> */}
            <Row>
                <Col>
                <span>Edit public profile & URL</span>
                </Col>
                <Col>
                <i className="fa fa-edit "></i>
                </Col>
            </Row>
            <div className='discount container'>
            <div className='d-flex flex-row-reverse'>
                <i className="fa fa-ellipsis-h mx-2"></i>
                <span>Ad</span>
            </div>
            <div className="d-flex flex-column">
            <span>Quadri,invest in your future with this exclusive offer</span>
            <img className='logo mx-5' alt=''src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg"></img>
            </div>
            <p>Enjoy 50% off 2 months of Linkedin Premium!</p>
            <div className="d-flex justify-content-center">
            <Button variant="outline-secondary">Get 50% off today</Button>
            </div>
            </div>
                <Viewed/>
            </div>
     
        
         );
    }
}
 
export default SideProfile;