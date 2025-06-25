import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Card.css";

export function CardComponent({ title, description, link, buttonText, alt }) {
  let cardClass = "card";
  if(alt === true) cardClass = "card my-3";
  return (
    <Card className={cardClass}>
      <Card.Body>
        <Card.Title className="text-center fs-2"><b>{title}</b> <hr/> </Card.Title>
        <Card.Text><p className="fs-5">{description}</p></Card.Text>
      </Card.Body>
      <Button
        as={Link}
        to={link}
        variant="primary"
        className="card-button stretched-link mb-2"
      >
      { buttonText != null ? buttonText : "Learn more" }
      </Button>
    </Card>
  );
}
