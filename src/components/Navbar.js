import React from "react";

import { Navbar, NavDropdown, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  const img = { height: "35px", width: "35px", objectFit: "cover" };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar
      className="bg-success text-dark d-flex justify-content-evenly align-items-center"
      id="nav"
    >
      <Col className="d-inline-flex align-items-center justify-content-between">
        <img
          src="https://images.pexels.com/photos/13616572/pexels-photo-13616572.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="img"
          className="rounded-circle m-2"
          style={img}
        />
        <p className="my-2">Jemienachukwu</p>
      </Col>
      <Col className="ms-5 d-flex justify-content-end">
        <div>
          <NavDropdown title="" id="adminMenu">
            <Link to="/admin/userlist">
              <NavDropdown.Item>user</NavDropdown.Item>
            </Link>

            <Link to="/admin/productlist">
              <NavDropdown.Item>Products</NavDropdown.Item>
            </Link>

            <Link to="/admin/orderlist">
              <NavDropdown.Item>Orders</NavDropdown.Item>
            </Link>
          </NavDropdown>
        </div>
      </Col>
    </Navbar>
  );
};

export default Navbars;
