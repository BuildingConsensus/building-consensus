import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Card.css";

export function CardComponent({ title, description, link }) {
  return (
    <Card style={{ width: "20rem" }} className="card">
      <Card.Body>
        <Card.Title className="mb-3 text-center">{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <Button
          as={Link}
          to={link}
          variant="primary"
          className="card-button stretched-link"
        >
          Learn more
        </Button>
      </Card.Body>
    </Card>
  );
}
