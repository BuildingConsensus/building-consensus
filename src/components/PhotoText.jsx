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
  phone = "780-123-4567",
  email = "johnsmith@gmail.com",
  points = [],
  variant = "normal",
}) {
  // Setting the column size based on the variant || 3 for portrait and 7 for landscape
  const imgColSize = variant === "portrait" ? 3 : 7;
  const bulletPoints = points.map((point) => <li>{point}</li>);

  return (
    <Row className={`flex-row-${variant} mb-3 centered`}>
      <Col xs={12} lg={imgColSize} className="p-0 h-50">
        {photoURL && (
          <Image src={photoURL} alt={altText} className="photo w-100" />
        )}
        {!photoURL && (
          <Container className="d-flex justify-content-center align-items-center bg-default vh-50">
            <h2 className="text-center text-white">Replace with Image</h2>
          </Container>
        )}
      </Col>
      <Col
        className="shadow-lg text-background"
        xs={12}
        sm={8}
        lg={12 - imgColSize}
      >
        <Row
          className={`flex-row-${variant} mb-3 ${
            variant === "portrait" ? "border-top border-dark border-3" : ""
          }`}
        >
          <Col
            xs={12}
            lg={11}
            xl={10}
            className={`${
              variant === "portrait" ? "pt-3" : "pt-5"
            } ps-4 text-start `}
          >
            <h2
              className={`title fs-1 fw-bold text-primary ${
                variant === "portrait" ? "ps-4 mb-0" : ""
              }`}
            >
              {title}
            </h2>
            {variant === "portrait" && (
              <>
                <Container className="ps-5">
                  <p className="m-0">{phone}</p>
                  <p>{email}</p>
                </Container>
                <ul className="fs-5 ps-4">{bulletPoints}</ul>
              </>
            )}
            {variant != "portrait" && <p className="text fs-5">{text}</p>}
          </Col>
          <Col xs={0} lg={1} xl={2}></Col>
        </Row>
      </Col>
    </Row>
  );
}
