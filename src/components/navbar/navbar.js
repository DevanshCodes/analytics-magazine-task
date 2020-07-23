import React, { Component } from "react";
import machineLogo from "../../machineLogo.png";
import more from "../../more.svg";
import bellicon from "../../bellicon.png";
import settings from "../../settings.png";

import { Nav, Form, InputGroup, NavDropdown } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import { FiSearch } from "react-icons/fi";
import "./navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className="navreact"
      >
        <Nav.Item>
          <img src={machineLogo} className="App-logo" alt="logo" />
        </Nav.Item>
        <Nav.Item>
          <img src={more} className="more" alt="logo" />
        </Nav.Item>
        <Nav.Item className="searchbox">
          <input
            type="text"
            name="whatever"
            id="search"
            className="search"
            placeholder="Type Here for Search"
          />
        </Nav.Item>
        <Nav.Item>
          <div className="users">
            <div className="user">
              <Avatar className="avatar">R</Avatar>
            </div>
            <NavDropdown title="randomuser" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <div>Logout</div>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Nav.Item>
        <Nav.Item>
          <img src={bellicon} className="bellicon" alt="logo" />
        </Nav.Item>
        <Nav.Item>
          <img src={settings} className="bellicon" alt="logo" />
        </Nav.Item>
      </Nav>
    );
  }
}

export default Navbar;
