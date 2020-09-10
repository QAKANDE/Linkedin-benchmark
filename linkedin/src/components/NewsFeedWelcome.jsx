import React, { Component } from "react";
import "./NewsFeedWelcome.css";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
class NewsFeedWelcome extends Component {
    state = {};
    render() {
        return (
            <div id="sideWelcomeWrapper">
                <div className="sidewelcome">
                    <Jumbotron className="feedjumbo"></Jumbotron>
                    <div className="container d-flex flex-column">
                        <p>Welcome,Quadri!</p>
                        <Link to={"/profile/user23"}>
                            <small className="mx-2">
                                <a>Update your profile</a>
                            </small>
                        </Link>
                    </div>
                    <hr></hr>
                    <div className="container">
                        <a href="/">
                            <div className="d-flex justify-content-between">
                                <small>Connections</small>
                                <small id="connection">94</small>
                            </div>
                            <small id="network">Grow your network</small>
                        </a>
                    </div>
                    <div className="container">
                        <a href="/">
                            <div className="d-flex justify-content-between">
                                <small>Who viewed your profile</small>
                                <small id="connection">60</small>
                            </div>
                        </a>
                    </div>
                    <div className="container mt-3">
                        <a href="/">
                            <div>
                                <small>Access Exclusive tools</small>
                            </div>
                            <small id="network">Activate Premium</small>
                        </a>
                    </div>
                    <hr></hr>
                    <div className="container">
                        <small>Saved Items</small>
                    </div>
                </div>
                <div className="sidewelcome mt-4 container">
                    <small>Recent</small>
                    <div>
                        <a href="/">
                            <small>
                                <i class="fa fa-ankh"></i>Babcock Uni
              </small>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <small>
                                <i class="fa fa-ankh"></i>Developer
              </small>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsFeedWelcome;
