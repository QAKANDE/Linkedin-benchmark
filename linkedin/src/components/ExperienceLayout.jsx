import React, { Component } from 'react';
class ExperienceLayout extends Component {
    render() { 
        return ( 
            <div className="d-flex flex-row">
        <img src="https://via.placeholder.com/150"></img>
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