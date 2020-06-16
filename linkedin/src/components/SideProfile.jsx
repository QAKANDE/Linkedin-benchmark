import React, { Component } from 'react';
import{Button} from 'react-bootstrap'
import './SideProfile.css'
import Viewed from './Viewed'

class SideProfile extends Component {
    render() { 
        return ( 
            <div className='wrapper'>
            <div>
                <p className="d-inline">Edit public profile & URL</p>
                <i className="fa fa-edit d-inline mx-5"></i>
            <hr></hr>
            </div>
            <div>
            <p className="d-inline">Add profile in another language</p>
                <i className="fa fa-edit mx-5 d-inline"></i>
            </div>
            <div id='discount'>
            <div className='d-flex flex-row-reverse'>
                <i className="fa fa-ellipsis-h mx-2"></i>
                <span>Ad</span>
            </div>
            <div className="d-flex flex-column">
            <span>Quadri,invest in your future with this exclusive offer</span>
            <img className='logo mx-5' alt='' src="https://lh3.googleusercontent.com/8YxVXk8qc-a7YXIrZ9eaqNY4NNkDR6kjooHE5Weg_Pz6R5yd1I2QwZ9vSjfK0aiFkLbdhQ=s85"></img>
            </div>
            <p>Enjoy 50% off 2 months of Linkedin Premium!</p>
            <Button variant="outline-secondary">Get 50% off today</Button>
            </div>
                <Viewed/>
            </div>
     
        
         );
    }
}
 
export default SideProfile;