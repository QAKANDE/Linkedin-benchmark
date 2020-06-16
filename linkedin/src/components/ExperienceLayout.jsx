import React, { Component } from 'react';
import './ExperienceLayout.css'
class ExperienceLayout extends Component {
    render() { 
        return ( 
            <div className="d-flex flex-row">
    <img className="profilePic mx-1" src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg" alt="Profile pic" />
           <ul id="experience-list">
        <li id="job">{this.props.bridgerole}</li>
        <li>{this.props.bridgecompany}</li>
               <li id="experience-date">{this.props.bridgedate}</li>
               <li id="experience-area">{this.props.bridgearea}</li>
               <li id="experience-description"><span>{this.props.bridgedescription}</span></li>
           </ul>
        </div>
         );
    }
}
 
export default ExperienceLayout;