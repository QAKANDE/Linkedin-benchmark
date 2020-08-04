import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Row, Col } from "react-bootstrap";
import "./Experience.css";
import ModalUI from "./ModalUI";
import ExperienceLayout from "./ExperienceLayout";

class Experience extends Component {
  state = {
    experience: [],
    selected: false,
  };
  hideModal = () => {
    this.setState({
      selected: false,
    });
  };
  componentDidMount = async () => {
    this.fetchExperiences();
  };

  fetchExperiences = async () => {
    const userID = this.props.match.params.userId;
    let response = await fetch(
      "https://localhost:3004/profile/experience/admin",
      {
        method: "GET",
        headers: new Headers({
          "content-type": "application/json",
        }),
      }
    );
    let experience = await response.json();
    this.setState({
      experience,
    });
  };

  render(props) {
    console.log(this.state.experience);
    return (
      <>
        <div className="experience-wrapper">
          <div className="mx-3 d-flex justify-content-between">
            <h3>Experience</h3>
            <button
              type="button"
              onClick={() => {
                this.setState({ selected: !this.state.selected });
              }}
            >
              <i class="fa mt-2 fa-2x fa-edit"></i>
            </button>
          </div>
          <ModalUI
            show={this.state.selected}
            hideModal={this.hideModal}
            onHide={this.hideModal}
            {...props}
          />
          {this.state.experience.map((data, index) => (
            <ExperienceLayout
              bridgerole={data.role}
              bridgecompany={data.company}
              bridgedata={data.date}
              bridgearea={data.area}
              bridgedescription={data.description}
              key={index}
              experienceId={data._id}
              image={data.image}
              fetchExperiences={this.fetchExperiences}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Experience;
