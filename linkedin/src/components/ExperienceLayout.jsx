import React, { Component } from 'react';
import './ExperienceLayout.css'
class ExperienceLayout extends Component {
    constructor(props){
        super(props)
         console.log("word",this.state)
    }
    state = {
        experience: null,
        id:this.props.experienceId
    }
 
    handleExperienceUpload = async () => {
        const ID = this.props.experienceId
        console.log('ID', ID)
        const photo = new FormData()
        photo.append("experience", this.state.experience)
        let response = await fetch("https://striveschool.herokuapp.com/api/profile/user23/experiences/" + this.state.id + "/picture", {
            method: "POST",
            body: photo,
            headers: new Headers({
                "Authorization": "Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
            })
        })
        if (response.ok) {
            alert("success")
            this.props.fetchExperiences()
        }
        else {
            alert("something wrong")
        }
        console.log("Image", response)
    }
    handleChangeInExperience = (e) => {
        console.log('other id',this.props.experienceId)
        const experience = e.target.files[0]
        this.setState({
            experience
        });
        // , () => {
        //     console.log("I'm here")
        setTimeout(() => this. handleExperienceUpload(), 1000)

    }
    render() {
        return (
            <div className="d-flex flex-row">
                <img className="profilePicture mx-1" src={this.props.image || "https://placebear.com/640/360"} alt="Profile pic" />
                <div id="experience-edit-input">
                <label htmlFor="file-input2">
                        <i class="fa fa-camera fa-2x " id="edit-experience-icon"></i>
                    </label>
                    <input id="file-input2" type="file" profile="file" onChange={(e) => this.handleChangeInExperience(e)} accept="image/*" />
                </div>
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