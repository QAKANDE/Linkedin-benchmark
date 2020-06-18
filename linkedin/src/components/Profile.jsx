import React, { Component } from 'react';
import {Container,Jumbotron,Button,DropdownButton,Dropdown} from 'react-bootstrap'
import './Profile.css'
import About from './About';
class Profile extends Component {
    state = { 
        profile:null,
        details:[]
     }
     handleUpload = async () => {
        const photo = new FormData()
        photo.append("profile", this.state.profile)
        let resp = await fetch("https://striveschool.herokuapp.com/api/profile/user16/picture", {
            method: "POST",
            body: photo,
            headers: new Headers({
                'Authorization': 'Basic ' + "dXNlcjE2OmM5V0VVeE1TMjk0aE42ZkY=",
            }),
        })
        console.log(resp)
    }
    handleChange = (e) => {
        const profile = e.target.files[0]
        this.setState({
            profile
        });
    }
     componentDidMount = async () => {
        const userID = this.props.match.params.userId;
        let response = await fetch("https://striveschool.herokuapp.com/api/profile/" +userID, {
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
                        <div id="imageWrapper">
                            <div id="profile-image-wrapper">
                            <img id="profilePic" src={this.state.details.image} alt="Profile pic"/>
                            <div id='bottom-right'>
                            <i class="fas fa-camera-retro"></i>
                            </div>
                            </div>
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
        <span className="ml-3">{this.state.details.email}</span>
               </div>
               <div className='container d-flex justify-content-between'>
               <h5 style={{fontWeight:"normal"}} className="ml-3">{this.state.details.area}</h5>
        <h5 style={{fontWeight:"normal"}} className="ml-3">{this.state.details.title}</h5>
               </div>
            
            </div>
        
      
         
         );
    }
}
 
export default Profile;