import React from "react";
import { Nav, Row } from "react-bootstrap";

import { SlOptionsVertical } from "react-icons/sl";
import Messages from "./Message";
import Inputes from "./Inpute";

const ChatScreen = () => {
  return (
    <>
      <Row id="nav">
        <Nav
          style={{ background: "#40E0d0" }}
          className="text-dark d-flex justify-content-between align-items-center px-4"
        >
          <p className="my-2">jane</p> <SlOptionsVertical />
        </Nav>
      </Row>
      <div className="p-4">
        <Messages />
      </div>
      <Inputes />
    </>
  );
};

export default ChatScreen;
