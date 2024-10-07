



import React from "react";
import { Card, Button } from "react-bootstrap";

const CustomCard = (props) => {
    const {title}=props
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">Click</Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
