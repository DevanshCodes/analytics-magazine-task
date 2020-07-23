import React from "react";
import logo from "./logo.svg";
import machineLogo from "./machineLogo.png";
import more from "./more.svg";
import loupe from "./loupe.svg";
import "./App.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar from "./components/sidebar/sidebar";
import Avatar from "@material-ui/core/Avatar";
import { FiSearch } from "react-icons/fi";
import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <Main />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
