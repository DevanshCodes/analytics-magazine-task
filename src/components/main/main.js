import React, { Component } from "react";
import bgvector from "../../bgvector.png";
import { Card, Button, Tabs, Tab } from "react-bootstrap";
import headerImage2 from "../../headerImage2.png";
import { Line } from "react-chartjs-2";
import "./main.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="headerImage">
          <div className="ontheimage">
            <div className="textHeader">Lorem Ipsum</div>
            <div className="headerImage2">
              <img src={headerImage2} className="image"></img>
            </div>
          </div>
          <div className="tabsCard">
            <Card>
              <Card.Body>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                  <Tab eventKey="home" title="HOME"></Tab>
                  <Tab eventKey="Data" title="DATA"></Tab>
                  <Tab eventKey="Leaderboard" title="LEADERBOARD"></Tab>
                  <Tab eventKey="participate" title="PARTICIPATE"></Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Card className="LineChartCard">
          <Card.Body className="lineChartCardBody">
            <Line
              data={{
                labels: [
                  "Boston",
                  "Worcester",
                  "Springfield",
                  "Lowell",
                  "Cambridge",
                  "New Bedford",
                ],
                datasets: [
                  {
                    label: "Population",
                    data: [617594, 181045, 153060, 106519, 105162, 95072],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.6)",
                      "rgba(54, 162, 235, 0.6)",
                      "rgba(255, 206, 86, 0.6)",
                      "rgba(75, 192, 192, 0.6)",
                      "rgba(153, 102, 255, 0.6)",
                      "rgba(255, 159, 64, 0.6)",
                      "rgba(255, 99, 132, 0.6)",
                    ],
                  },
                ],
              }}
              width={3}
              height={1}
              options={{
                title: {
                  responsive: true,
                  maintainAspectRatio : false,
                  display: "Random Title",
                  text: "Largest Cities In " + "India",
                  fontSize: 18,
                },
                legend: {
                  display: "Agra",
                  position: "bottom",
                },
              }}
            />
          </Card.Body>
        </Card>
        <Card className="LineChartCard">
          <Card.Body>
            <div class="row">
              <h5 className="headingTimeline">Rules</h5>
              <ul class="timeline">
                <li>
                  <div className="heading">ONE ACCOUNT PER PARTICIPATION</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque scelerisque diam non nisi semper, et elementum lorem
                    ornare. Maecenas placerat facilisis mollis. Duis sagittis
                    ligula in sodales vehicula....
                  </p>
                </li>
                <li>
                  <div className="heading">
                    NO PRIVATE SHARING OUTSIDE TEAMS
                  </div>
                  <p>
                    Curabitur purus sem, malesuada eu luctus eget, suscipit sed
                    turpis. Nam pellentesque felis vitae justo accumsan, sed
                    semper nisi sollicitudin...
                  </p>
                </li>
                <li>
                  <div className="heading">SUBMISSION LIMITS</div>
                  <p>
                    Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed
                    nulla odio, tincidunt vitae nunc vitae, mollis pharetra
                    velit. Sed nec tempor nibh...
                  </p>
                </li>
                <li>
                  <div className="heading">COMPETITION TIMELINE</div>
                  <p>
                    Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed
                    nulla odio, tincidunt vitae nunc vitae, mollis pharetra
                    velit. Sed nec tempor nibh...
                  </p>
                </li>
                <li>
                  <div className="heading">COMPETITION SPECIFIC TERMS</div>
                  <p>
                    Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed
                    nulla odio, tincidunt vitae nunc vitae, mollis pharetra
                    velit. Sed nec tempor nibh...
                  </p>
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Main;
