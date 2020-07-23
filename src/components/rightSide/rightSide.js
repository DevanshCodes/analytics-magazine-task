import React from "react";
import { Nav } from "react-bootstrap";
import "./rightSide.scss";
import { Card } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";

const RightSide = (props) => {
  return (
    <div className="rightSide">
      <Card>
        <Card.Body>
          <Doughnut
            data={{
              labels: ["Pizza", "Burger", "IceCream", "Pasta"],
              datasets: [
                {
                  label: "Percentages",
                  data: [20, 30, 40, 10],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                  ],
                },
              ],
            }}
            width={320}
            height={320}
            options={{
              title: {
                display: "Random Title",
                text: "Food Preferences",
                fontSize: 18,
              },
              legend: {
                display: "Food",
                position: "bottom",
              },
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
};
export default RightSide;
