import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./PhotoText.css";

export function PhotoText({
  photoURL,
  altText = "No alt text provided",
  title = "Default Title",
  text = "Default text",
  variant = "normal",
}) {
  return (
    <Row className={`photo-text-${variant}`} fluid>
      <Col xs={12} md={7} className="p-0">
        {photoURL && (
          <Image src={photoURL} alt={altText} className="photo" fluid />
        )}
        {!photoURL && (
          <Container className="d-flex justify-content-center align-items-center bg-default h-100 vh-50">
            <h2 className="text-center text-white">Replace with Image</h2>
          </Container>
        )}
      </Col>
      <Col xs={12} md={5} className="pt-5 px-4 text-background shadow-lg">
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
      </Col>
    </Row>
  );
}
