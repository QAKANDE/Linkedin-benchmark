import React, { Component } from "react";
import { } from "react-bootstrap";
import './FeedPost.css';
import FeedInfo from './FeedInfo';
import FeedPost from './FeedPost';
import './Message.css';
import { FaRegHeart, FaRegLightbulb, FaGlassCheers } from "react-icons/fa"
class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            data: {},
            updated: false
        };
    }
    async componentDidMount() {
        let object = await fetch("https://striveschool.herokuapp.com/api/posts/", {
            method: "GET",
            headers: {
                "Authorization": "Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
            }
        });
        let received = await object.json();
        this.setState({ data: received })
    }
    Data = (e5) => { this.setState({ updated: e5 }); }
    async componentDidUpdate() {
        if (this.state.updated === true) {
            let object = await fetch("https://striveschool.herokuapp.com/api/posts/", {
                method: "GET",
                headers: {
                    "Authorization": "Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
                }
            });
            let received = await object.json();
            this.setState({ data: received, updated: false, })
        }
    }
    render() {
        return (
            this.state.data[0] !== undefined ?
                (this.state.data[0].username !== undefined && <>
                    <div id="feedMain" className="p-3">
                        <FeedPost data1={this.Data} />
                        {this.state.data.sort(function (a, b) { return 0.5 - Math.random() }).slice(0, 10).map(e =>
                            <aside class="profile-card p-5 ml-5 mt-5" key={e._id}>
                                <FeedInfo username={e.username} className="my-5" />
                                <p className="mt-5 mb-0" style={{ fontSize: "20px" }, { color: "grey" }}><br></br>{e.text}</p>
                                <ul class="profile-social-links mt-5">
                                    <li>
                                        <FaRegHeart className="mx-1 ml-2" size={35} style={{ color: "#007BFE" }} />
                                    </li>
                                    <li>
                                        <FaRegLightbulb className="mx-1 ml-2" size={35} style={{ color: "#007BFE" }} />
                                    </li>
                                    <li>
                                        <FaGlassCheers className="mx-1 ml-2" size={35} style={{ color: "#007BFE" }} />
                                    </li>
                                </ul>
                                {e.username === "user23" && <div className=""></div>}
                            </aside>
                        )}
                    </div>
                </>)
                :
                <div id="errorMessage" style={{ color: "blue" }}><div id="errorMessage">
                    <div className="spinnerWrapper">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}
export default Feed;