import React, { Component } from "react";
import { Button, Card, Accordion } from "react-bootstrap";
import { FaCamera, FaVideo, FaStickyNote, FaPenSquare } from "react-icons/fa"
import './FeedPost.css';
class FeedPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            data: {},
            text: "",
            updated: false,
        };
    }
    update = (e) => { this.setState({ text: e.target.value }) }
    async handle(e2) {
        let text = { "text": this.state.text };
        let object = await fetch("https://striveschool.herokuapp.com/api/posts/", {
            method: "POST",
            body: JSON.stringify(text),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": "Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
            })
        });
        if (object.ok) {
            this.setState({ updated: true, text: "", })
            this.props.data1(this.state.updated)
        }
        else {
            console.log("there is a problem posting")
        }
    }
    render() {
        return (
            <section className="normalElement ml-5 mt-5 ">
                <div>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} style={{ fontSize: "30px" }, { fontWeight: "500" }} variant="link" eventKey="0">
                                    Write an article on LinkedIn                                </Accordion.Toggle>
                            </Card.Header>
                        </Card>
                    </Accordion>
                </div>
                <div className="p-3">
                    <textarea className="w-100 h-100 mx-2" placeholder="What do you want to talk about?" value={this.state.text} onChange={(e) => this.update(e)}></textarea>
                    <button className="btn"><i><FaCamera style={{ color: "#666666" }} size={30} /></i></button>
                    <button className="btn"><i><FaVideo style={{ color: "#666666" }} size={30} /></i></button>
                    <button className="btn"><i><FaStickyNote style={{ color: "#666666" }} size={30} /></i></button>
                    <button className="btn"><i><FaPenSquare className="pen mx-1" style={{ color: "#666666" }} size={30} /></i></button>
                    <Button className="mx-2" style={{ float: "right" }} onClick={() => this.handle()}>Post</Button>
                </div>
            </section >
        )
    }
}
export default FeedPost;