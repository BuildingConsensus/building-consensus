import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Card.css";

export function CardComponent({ title, description, link }) {
  return (
    <Card className="card">
      <Card.Body>
        <Card.Title className="text-center"><b>{title}</b> <hr/> </Card.Title>
        <Card.Text><p style={{fontSize: 18}}>{description}</p></Card.Text>
      </Card.Body>
      <Button
        as={Link}
        to={link}
        variant="primary"
        className="card-button stretched-link mb-2"
      >
        Learn more
      </Button>
    </Card>
  );
}
