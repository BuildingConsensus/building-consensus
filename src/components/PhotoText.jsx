import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./PhotoText.css";

/*
variant: "normal" | "reverse"
  - normal: image on the left, text on the right
  - reverse: image on the right, text on the left
*/
export function PhotoText({
  photoURL,
  altText = "No alt text provided",
  title = "Default Title",
  text = "Default text",
  variant = "normal",
}) {
  return (
    <Row className={`flex-row-${variant} mb-3`}>
      <Col xs={12} md={7} className="p-0">
        {photoURL && <Image src={photoURL} alt={altText} className="photo" />}
        {!photoURL && (
          <Container className="d-flex justify-content-center align-items-center bg-default h-100 vh-50">
            <h2 className="text-center text-white">Replace with Image</h2>
          </Container>
        )}
      </Col>
      <Col
        xs={12}
        md={4}
        className="pt-5 pe-4 ps-5 mx-auto text-start text-background"
      >
        <h2 className="title fs-1 fw-bold text-primary">{title}</h2>
        <p className="text fs-5">{text}</p>
      </Col>
      <Col xs={0} md={1} className="text-background"></Col>
    </Row>
  );
}
