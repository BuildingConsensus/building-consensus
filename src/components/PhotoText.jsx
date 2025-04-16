import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

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
      <Col xs={12} lg={7} className="p-0 mb-3">
        {photoURL && <Image src={photoURL} alt={altText} className="photo" />}
        {!photoURL && (
          <Container className="d-flex justify-content-center align-items-center bg-default h-100 vh-50">
            <h2 className="text-center text-white">Replace with Image</h2>
          </Container>
        )}
      </Col>
      <Col className="shadow-lg text-background" xs={12} lg={5}>
        <Row className={`flex-row-${variant} mb-3`}>
          <Col xs={12} lg={11} xl={10} className="pt-5 ps-4 text-start">
            <h2 className="title fs-1 fw-bold text-primary">{title}</h2>
            <p className="text fs-5">{text}</p>
          </Col>
          <Col xs={0} lg={1} xl={2}></Col>
        </Row>
      </Col>
    </Row>
  );
}
