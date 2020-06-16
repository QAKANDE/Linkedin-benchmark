import React, { Component } from 'react';
import {Container,Jumbotron,Button,DropdownButton,Dropdown} from 'react-bootstrap'
import './Profile.css'
import About from './About';
class Profile extends Component {
    state = { 
        details:[]
     }

     componentDidMount = async () => {
        let response = await fetch("https://striveschool.herokuapp.com/api/profile/user23" , {
            method:"GET",
            headers:new Headers({
                "content-type":"application/json",
                "Authorization":"Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
            })
        })
        let details = await response.json()
        this.setState({
            details
        })

     }

    render() { 
        return ( 
           <div>       
               <Jumbotron className="jumbo">
        </Jumbotron>
        <div className="d-flex flex-row" style={{height:"75px"}}>
                        <div id="imageWrapper" className="">
                            <img id="profilePic" src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg" alt="Profile pic"/>
                        </div>
                        <div id="editWrapper" className="ml-auto d-flex flex-row">
                            <div className="my-3">  
                            <DropdownButton
                        variant="outline-secondary"
                        title="Add Profile Section"
                        id="input-group-dropdown-1"
                            >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
                            </div>  

                            <div className="m-3">  
                                <Button className='morebtn'>More...</Button>
                            </div> 
           </div>
           </div>
               <div className='container d-flex justify-content-between'>
               <h3 className="ml-3">{this.state.details.name} {this.state.details.surname}</h3>
               <h3 className="ml-3">placeholder</h3>
               </div>
               <div className='container d-flex justify-content-between'>
               <h5 style={{fontWeight:"normal"}} className="ml-3">{this.state.details.email}</h5>
        <h5 style={{fontWeight:"normal"}} className="ml-3">{this.state.details.title}</h5>
               </div>
               <div className='container d-flex justify-content-between'>
        <h5 style={{fontWeight:"normal"}} className="ml-3">{this.state.details.area}</h5>
               <h5 style={{fontWeight:"normal"}} className="ml-3">CTO</h5>
               </div>
            
            </div>
        
      
         
         );
    }
}
 
export default Profile;