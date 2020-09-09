import React, { Component, useState, useEffect } from "react";
import {
    Row,
    Col,
    Container,
    Modal,
    Button,
    Form,
    FormControl,
    Alert,
    InputGroup,
} from "react-bootstrap";
import io from "socket.io-client";
import NewsFeedWelcome from "./NewsFeedWelcome";
import "./NewsFeed.css";
import TodayNews from "./TodayNews";
import Feed from "./Feed";

const connOpt = {
    transports: ["websocket"],
};

let socket = io("https://striveschool.herokuapp.com/", connOpt);
function NewsFeedPage() {
    const [show, setShow] = useState(false);
    const [showSecondModal, setShowSecondModal] = useState(false);
    const [message, setMessage] = useState("");
    //   const [username, setUsername] = useState("user23");
    const [messages, setMessages] = useState([]);
    const [receiver, setReciever] = useState("admin");
    const [messageFromHeroku, setMessageFromHeroku] = useState([]);
    useEffect(async () => {
        let res = await fetch(
            "https://striveschool-test.herokuapp.com/api/messages/user23",
            {
                method: "GET",
                headers: new Headers({
                    "content-type": "application/json",
                    Authorization: "Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k=",
                }),
            }
        );
        let data = await res.json();
        console.log(data);
        setMessageFromHeroku(data);
    }, []);
    useEffect(() => {
        socket.on("bmsg", (msg) => setMessages((messages) => messages.concat(msg)));
    }, [socket]);
    const updateMessage = (e) => {
        setMessage(e.currentTarget.value);
    };
    const sendMessage = (e) => {
        e.preventDefault();
        if (message !== "") {
            socket.emit("chatmessage", {
                user: receiver,
                text: message,
            });
            socket.emit("setUsername", {
                username: "user23",
            });
            setMessage("");
        }
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseSecondModal = () => setShowSecondModal(false);
    const handleShowSecondModal = () => setShowSecondModal(true);
    return (
        <Container>
            <Row className="mt-5">
                <Col id="welcome" xl={2}>
                    <NewsFeedWelcome />
                </Col>
                <Col id="feed mx-1" xl={6}>
                    <Feed />
                </Col>
                <Col className="todayNews " xl={3}>
                    <TodayNews />
                </Col>
            </Row>
            <div id="chatMessages" className="d-flex flex-column">
                <div>
                    <Row>
                        <Col
                            type="button"
                            onClick={() => {
                                return handleShow();
                            }}
                        >
                            Messaging
            </Col>
                        <Col>
                            <i
                                type="button"
                                class="fa fa-pencil-square-o"
                                aria-hidden="true"
                                onClick={() => {
                                    return handleShowSecondModal();
                                }}
                            ></i>
                        </Col>
                        <Col>
                            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </Col>
                    </Row>
                </div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    animation={false}
                    dialogClassName="modal-dialog"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Messaging</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" />
                            </Form>
                        </div>
                        <div>
                            <ul>
                                {messageFromHeroku.map((message, i) => (
                                    <li key={i}>
                                        <Alert variant="success">
                                            {message.from}" "{message.text}
                                        </Alert>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                </Modal>
                <Modal
                    show={showSecondModal}
                    onHide={handleCloseSecondModal}
                    animation={false}
                    dialogClassName="second-modal-dialog"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>New Message</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            {messages.map((message, i) => (
                                <li key={i}>
                                    <Alert variant="success">
                                        {message.from}" "{message.text}
                                    </Alert>
                                </li>
                            ))}
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <InputGroup className="my-2">
                            <FormControl
                                placeholder="Enter Message"
                                value={message}
                                onChange={(e) => updateMessage(e)}
                            ></FormControl>
                            <Button onClick={(e) => sendMessage(e)}>Send</Button>
                        </InputGroup>
                    </Modal.Footer>
                </Modal>
            </div>
        </Container>
    );
}

export default NewsFeedPage;