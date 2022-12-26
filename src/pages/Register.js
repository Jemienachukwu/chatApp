import React from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AiFillPicture } from "react-icons/ai";

const Register = () => {
  return (
    <Container className="p-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h1>Register</h1>

          <Form>
            <Form.Group controlId="name" className="my-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name"></Form.Control>
            </Form.Group>

            <Form.Group controlId="email" className="my-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password" className="my-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="file" className="my-3">
              <Form.Label>
                <AiFillPicture style={{ fontSize: "23px" }} className="m-2" />
                Upload Avatar
              </Form.Label>
              <Form.Control type="file"></Form.Control>
            </Form.Group>
            <Row>
              <Button
                type="submit"
                variant="primary"
                className="br-3 rounded bg-success"
              >
                Sign Up
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>

      <Row className="justify-content-center py-3">
        <Col xs={12} md={8}>
          already have an account ? <Link to="/login">login</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
