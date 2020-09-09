import React, { Component } from "react";
import { Container, Row, Col, Button, Form, CardImg } from "react-bootstrap";
import { Link } from 'react-router-dom';
import linkedin from '../assets/linkedin.png';
import "./Register.css"

export default class signin extends Component {

    render() {
        return (
            <Container className="text-center" style={{
                backgroundColor: "#067DA6"
            }}>
                <Row>
                    < Col lg={{ span: 6, offset: 3 }} className="text-center">
                        <img
                            className="img-fluid"
                            src={linkedin}
                            style={{ maxHeight: "45px", marginTop: "1rem", color: "white" }}
                            alt=""
                        />
                    </Col>
                    <div className="mt-3">
                        <h3 style={{ color: "white", textAlign: "center", margin: "0 20rem 1.5rem" }}>Make the most of your professional life</h3>
                    </div>
                </Row >


                <Row >
                    <Col md={{ span: 4, offset: 4 }} className="text-center" style={{ backgroundColor: "#EDF0F3" }}>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label style={{ fontSize: "14px" }}>Name</Form.Label>
                                    <Form.Control type="Name" required placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridUsername">
                                    <Form.Label style={{ fontSize: "14px" }}>Surname</Form.Label>
                                    <Form.Control type="Surname" required placeholder="Surname" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridBio1">
                                <Form.Label style={{ fontSize: "14px" }}>Bio</Form.Label>
                                <Form.Control placeholder="Curious" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} required controlId="formGridTitle">
                                    <Form.Label style={{ fontSize: "14px" }}>Title</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridArea">
                                    <Form.Label style={{ fontSize: "14px" }}>Area</Form.Label>
                                    <Form.Control as="select" required defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} required controlId="formGridUsername">
                                    <Form.Label style={{ fontSize: "14px" }}>Username</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <Form.File
                                        style={{ textAlign: "center" }}
                                        required
                                        name="file"
                                        label=""
                                        id="validationFormik107"
                                        feedbackTooltip></Form.File>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label style={{ fontSize: "14px" }}>Email</Form.Label>
                                    <Form.Control type="email" required placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label style={{ fontSize: "14px" }}>Password</Form.Label>
                                    <Form.Control type="password" required placeholder="Password" />
                                </Form.Group>
                            </Form.Row>
                        </Form>

                        <Button
                            className="w-100 mt-3"
                            style={{ borderRadius: "5px", fontSize: "20px", fontWeight: "500" }}
                        >
                            Agree & Join
                        </Button>

                        <Button className="button Facebook mt-3">
                            <i className="fab fa-facebook-square"></i>
                            <span>Continue with Facebook</span>
                        </Button>

                        <div className="mt-4" style={{ fontWeight: "500", color: "#0A66C2", fontSize: "20px" }}>
                            <p className="mt-3" style={{ fontWeight: "350" }}>
                                Already in LinkedIn? <a style={{ fontWeight: "500", color: "#0A66C2", fontSize: "20px" }}><Link to={"/signin"} className="button secondary text-center" style={{ fontWeight: "500", color: "#0A66C2", fontSize: "20px" }} >Sign In.</Link></a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container >
        );
    }
}
