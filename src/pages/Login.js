import React from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center py-3">
        <Col xs={12} md={8}>
          <h1>Sign In</h1>
          <Form>
            <Form.Group controlId="email" className="m-2">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password" className="m-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
              ></Form.Control>
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              className="m-2 rounded bg-success"
            >
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="justify-content-center py-3">
        <Col xs={12} md={8}>
          New Customer ?<Link to="/register">Register</Link>
        </Col>
      </Row>
    </Container>
  );
}
export default Login;
