import React, { Component } from "react";
import { } from "react-bootstrap";
import './FeedPost.css';
class FeedInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            data: {},
        };
    }
    async componentDidMount() {
        let object = await fetch("https://striveschool.herokuapp.com/api/profile/" + this.state.username, {
            method: "GET",
            headers: {
                "Authorization": "Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
            }
        });
        let received = await object.json();
        this.setState({ data: received })
    }
    render() {
        return (
            this.state.data != null ?
                // <aside class="profile-card">
                <div className="row">
                    <div className="col-1 d-flex justify-content-between">
                        <div className="feedimage ml-0">
                            {"image" in this.state.data ?
                                <img className="profilePic" src={this.state.data.image} alt="Profile pic" />
                                :
                                <img className="profilePic" src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg" alt="Profile pic" />
                            }
                        </div>
                        <div className='d-flex flex-column'>
                            <div className="d-flex flex-row">
                                <div className="ml-5"><h5 style={{ color: "#007BFE" }}>{this.state.data.name} </h5></div>
                                <div className="mx-1 mr-0"><h5 style={{ color: "#007BFE" }}> {this.state.data.surname}</h5></div>
                            </div>
                            <div className="col-1" style={{ marginLeft: "35px" }}><p className="mr-0" style={{ color: "grey" }}>{this.state.data.area}</p></div>
                        </div>
                    </div>
                </div>
                :
                <div id="errorMessage">
                    <div className="spinnerWrapper">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            //         <!-- the username-- >
            //             <h1>John Doe</h1>
            //             <!--and role or location-- >
            //                 <h2>DEVELOPER</h2>
            //   </header >
            //   < !--bit of a bio; who are you ? -->
            //     <div class="profile-bio">
            //         <p>Terence is an avid reader of science fiction, especially anything to do with aliens and tweed jackets. Most weekends, he can be found cataloguing his collection of rodent skeletons.</p>
            //     </div>
            //     <!--some social links to show off-- >
            //         <ul class="profile-social-links">
            //             <!-- twitter - el clásico  -->
            //     <li>
            //                 <a href="https://twitter.com/tutsplus">
            //                     <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg">
            //       </a>
            //     </li>
            //                 <!-- codepen - your codepen profile-->
            //     <li>
            //                     <a href="https://codepen.io/tutsplus">
            //                         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg">
            //       </a>
            //     </li>
        )
    }
}
export default FeedInfo;