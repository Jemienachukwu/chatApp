import React from "react";
import { Row } from "react-bootstrap";

import Messages from "./Message";
import Inputes from "./Inpute";
import { AiOutlineUserAdd } from "react-icons/ai";

const ChatScreen = () => {
  return (
    <>
      <Row id="nav">
        <div
          style={{ background: "#5d5b8d" }}
          className="text-dark d-flex justify-content-between align-items-center px-4"
        >
          <p className="my-2" style={{ color: "#fff" }}>
            jane
          </p>
          <div>
            <AiOutlineUserAdd style={{ color: "#fff" }} />
          </div>
        </div>
      </Row>
      <Messages />
      <Row>
        <Inputes />
      </Row>
    </>
  );
};

export default ChatScreen;
