import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./SignIn.css"

export default class SignIn extends Component {

    render() {
        return (
            <Container style={{ margin: "auto" }}>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }} className="text-center">
                        <img
                            className="img-fluid"
                            src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2003%E2%80%932011.png"
                            style={{ maxHeight: "45px", marginTop: "4.7em" }}
                            alt=""
                        />
                        <div className="mt-3" style={{ fontSize: "32px", lineHeight: "32px" }}>
                            <h3>Welcome Back</h3>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center">
                    <p style={{ fontSize: "20px", lineHeight: "28px", opacity: "70%", textAlign: "center", margin: "0 auto 1.5rem", fontWeight: "400" }}>
                        Don't miss your next opportunity. Sign in to stay updated on your professional world.
                            </p>
                </Row>
                <Row>
                    <Col lg={{ span: 4, offset: 4 }} className="text-center">
                        <Form.Group style={{ marginTop: "0" }}>
                            <Form.Control
                                // isValid={this.state.Valid}
                                // onChange={(e) => {
                                // }}
                                className="mb-3"
                                type="email"
                                placeholder="Email or Phone"
                                size="lg"
                            />
                            <Form.Control
                                size="lg"
                                // isValid={this.state.pValid}
                                // onChange={()
                                // }}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Button
                            className="w-100 mt-3"
                            style={{ borderRadius: "20em", fontSize: "20px", fontWeight: "500" }}>
                            Sign in
                        </Button>
                        <label className="myCheckbox mt-3">

                            <input type="checkbox" />
                            <a style={{ fontWeight: "350", fontSize: "20px" }}> Remember Me.</a><a style={{ fontWeight: "500", color: "#0A66C2", fontSize: "20px" }}> Learn More.</a>

                        </label>
                        <div className="mt-4" style={{ fontWeight: "500", color: "#0A66C2", fontSize: "20px" }}>
                            <a>Forgot Password ?</a>
                            <p className="mt-3" style={{ fontWeight: "350" }}>
                                New to LinkedIn? <Link to={"/register"} className="button secondary text-center" style={{ fontWeight: "500", color: "#0A66C2", fontSize: "20px" }} >Join now.</Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container >
        );
    }
}
