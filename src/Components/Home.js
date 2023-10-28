import React from "react";
import dr from "../Asset/dr1.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Home.css";
export const Home = () => {
  return (
    <div className="abc">
      <div className="abc1">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dr} />
          <Card.Body>
            <Card.Title>Doctor</Card.Title>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="abc1">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dr} />
          <Card.Body>
            <Card.Title>Doctor</Card.Title>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="abc1">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dr} />
          <Card.Body>
            <Card.Title>Doctor</Card.Title>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Home;
