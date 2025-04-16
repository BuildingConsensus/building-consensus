import { Col, Container } from "react-bootstrap";

export function Textbox({
  title = "Default Title",
  text = "Default text",
  variant = "normal",
}) {
  return (
    <Col
      xs={4}
      className={`textbox-${variant} text-background shadow-lg p-3 m-3 d-flex flex-column`}
    >
      <h2 className="title fs-1 fw-bold text-center text-primary">{title}</h2>
      <p className="text fs-5">{text}</p>
      <Container className="p-1 w-75 bg-bar mt-auto"></Container>
    </Col>
  );
}
