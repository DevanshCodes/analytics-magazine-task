import React from "react";
import { Nav } from "react-bootstrap";
import homeIcon from "../../homeIcon.png";
import hackathonIcon from "../../hackathonIcon.png";
import globalrankingIcon from "../../globalrankingIcon.png";
import "./sidebar.scss";

const Sidebar = (props) => {
  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link>
            <div className="navItem home">
              <img src={homeIcon} className="icon home" alt="logo" />
              <div className="homeText">Home</div>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <div className="navItem hackathon">
              <img src={hackathonIcon} className="icon home" alt="logo" />
              <div className="homeText">Hackathon</div>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <div className="navItem globalranking">
              <img src={globalrankingIcon} className="icon home" alt="logo" />
              <div className="homeText">Global Ranking</div>
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
export default Sidebar;
