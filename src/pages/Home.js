import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChatScreen from "../components/ChatScreen";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <Container className="shadow rounded my-md-5 " id="main">
      <Row>
        <Col sm={4}>
          <Sidebar />
        </Col>
        <Col sm={8} className="bg-white">
          <ChatScreen />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
