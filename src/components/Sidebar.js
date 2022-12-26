import { React } from "react";
import { Row } from "react-bootstrap";
import Navbars from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
const Sidebar = () => {
  // const [toggle, setToggle] = useState(false);

  return (
    <Row id="sidebar">
      <Navbars />
      <Search />
      <Chats />
      <Chats />
      <Chats />
      <Chats />
    </Row>
  );
};

export default Sidebar;
