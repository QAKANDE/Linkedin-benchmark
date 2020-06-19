import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Row, Col } from 'react-bootstrap'
import './Experience.css'
import ModalUI from './ModalUI'
import ExperienceLayout from './ExperienceLayout';


class Experience extends Component {
    state = {
        experience: [],
        selected: false
    }
    hideModal = () => {
        this.setState({
            selected: false
        })
    }
    componentDidMount = async () => {
        const userID = this.props.match.params.userId;
        let response = await fetch("https://striveschool.herokuapp.com/api/profile/" + userID + "/experiences/", {
            method: "GET",
            headers: new Headers({
                "content-type": "application/json",
                "Authorization": "Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
            })
        })
        let experience = await response.json()
        this.setState({
            experience
        })
    }
    render() {
        return (
            <>
                <div className="experience-wrapper">
                    <div className="mx-3 d-flex justify-content-between">
                        <h3>Experience</h3>
                        <button type="button" onClick={() => {
                            this.setState({ selected: !this.state.selected })
                        }}>
                            <i class="fa mt-2 fa-2x fa-edit"></i>
                        </button>
                    </div>
                    <ModalUI show={this.state.selected}
                        hideModal={this.hideModal}
                        onHide={this.hideModal}
                    />
                    {this.state.experience.map((data, index) =>
                        <ExperienceLayout bridgerole={data.role} bridgecompany={data.company}
                            bridgedata={data.date} bridgearea={data.area} bridgedescription={data.description}
                            key={index} experienceId={data._id} />
                    )}
                </div>
            </>
        );
    }
}


export default Experience;