import React from "react";

import { Navbar, NavDropdown, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  const img = { height: "35px", width: "35px", objectFit: "cover" };

  return (
    <Navbar
      className=" d-flex justify-content-evenly align-items-center"
      id="nav"
    >
      <Col className="d-inline-flex align-items-center">
        <img
          src="https://images.pexels.com/photos/13616572/pexels-photo-13616572.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="img"
          className="rounded-circle m-2"
          style={img}
        />
        <p className="my-2">name</p>
      </Col>
      <Col className="ms-5 d-flex justify-content-end">
        <div>
          <NavDropdown title="" id="adminMenu" style={{ color: "#fff" }}>
            <Link to="/admin/orderlist">
              <NavDropdown.Item>logout</NavDropdown.Item>
            </Link>
          </NavDropdown>
        </div>
      </Col>
    </Navbar>
  );
};

export default Navbars;
