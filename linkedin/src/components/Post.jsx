import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'
import { FaCamera, FaVideo, FaStickyNote, FaPenSquare } from 'react-icons/fa'
import "./Post.css"

class Post extends Component {
    state = {
        text: ""
    }

    render() {
        let { text } = this.state;
        return (
            <Form>
                <span className="a d-block">
                    <button className="btn-post">
                        <span>
                            <i><FaPenSquare className="pen mx-1" style={{ color: "#666666" }} size={30} /></i>
                        </span>
                        <span>
                            <i><div className="b px-1 py-1">Start a post</div></i>
                        </span>
                    </button>
                    <button className="btn"><i><FaCamera style={{ color: "#666666" }} size={25} /></i></button>
                    <button className="btn"><i><FaVideo style={{ color: "#666666" }} size={25} /></i></button>
                    <button className="btn"><i><FaStickyNote style={{ color: "#666666" }} size={25} /></i></button>
                </span>
                <button className="btn-post-article default py-0">
                    <span>
                        <i className="article-link">Write an article</i>
                    </span>
                    <span>
                        <small className="c" style={{ color: "#666666" }}>on LinkedIn</small>
                    </span>
                </button>

            </Form >
        )
    }
}

export default Post
