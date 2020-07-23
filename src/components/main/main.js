import React, { Component } from "react";
import bgvector from "../../bgvector.png";
import { Card, Button, Tabs, Tab } from "react-bootstrap";
import headerImage2 from "../../headerImage2.png";
import "./main.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="headerImage">
        <div className="ontheimage">
          <div className="textHeader">Lorem Ipsum</div>
          <div className="headerImage2">
            <img src={headerImage2}></img>
          </div>
        </div>
        <div className="tabsCard">
          <Card>
            <Card.Body>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home"></Tab>
                <Tab eventKey="Data" title="Data"></Tab>
                <Tab eventKey="Leaderboard" title="Leaderboard"></Tab>
                <Tab eventKey="participate" title="participate"></Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Main;
