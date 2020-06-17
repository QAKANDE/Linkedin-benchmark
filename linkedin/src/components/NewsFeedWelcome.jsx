import React, { Component } from 'react';
import './NewsFeedWelcome.css'
import {Jumbotron} from 'react-bootstrap'
class NewsFeedWelcome extends Component {
    state = {  }
    render() { 
        return (    
    <div>
        <div className='sidewelcome'>
        <Jumbotron className="feedjumbo">
        </Jumbotron>
        <div className="container d-flex flex-column">
            <p>Welcome,Quadri!</p>
            <small className="mx-2"><a>Update your profile</a></small>
        </div>
        <hr></hr>
        <div className="container">
            <a href='/'>
        <div className="d-flex justify-content-between">
            <small>Connections</small>
            <small>94</small>
        </div>
        <small>Grow your network</small>
            </a>
        </div>
        <div className="container">
            <a href='/'>
        <div className="d-flex justify-content-between">
            <small>Who viewed your profile</small>
            <small>60</small>
        </div>
            </a>
        </div>
        <div>
            <small>Quadri</small>
            <small>Quadri</small>
        </div>
        </div>
    </div>
        
        );
    }
}
 
export default NewsFeedWelcome;