import { Col, Container } from "react-bootstrap";

export function Textbox({
  title = "Default Title",
  text = "Default text",
  variant = "normal",
}) {
  return (
    <Col
      xs={12}
      sm={8}
      lg={4}
      className={`textbox-${variant} text-background shadow-lg my-3 p-3`}
    >
      {title != "" && (
        <h2 className="fs-1 fw-bold text-center text-black">{title}</h2>
      )}
      {text != "" && <p className="fs-5">{text}</p>}
      {variant != "nobar" && (
        <Container className="p-1 w-75 bg-bar mt-auto"></Container>
      )}
    </Col>
  );
}
