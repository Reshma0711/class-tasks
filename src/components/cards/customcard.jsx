
import React from "react";
import { Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";




const CustomCard=()=>{
    const toastHandler=()=>{
        
      toast.success("success")
        
    }
  return (
    <Card
      style={{
        width: "18rem",
        margin: "20px auto",
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/150"
        alt="Card image"
      />
      <Card.Body>
        <Card.Title>Custom Card Title</Card.Title>
        <Card.Text>
          This is a custom card example using React-Bootstrap. You can add your
          own content, text, or images here.
        </Card.Text>
        <Button variant="primary" onClick={toastHandler}>Click</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;

