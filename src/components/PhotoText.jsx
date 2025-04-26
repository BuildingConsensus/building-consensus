import { Col, Container, Row } from "react-bootstrap";
import "./PhotoText.css";
import { useState, useLayoutEffect, useRef } from "react";

/*
variant: "normal" | "reverse"
  - normal: image on the left, text on the right
  - reverse: image on the right, text on the left
*/
export function PhotoText({
  photoURL,
  title = "Default Title",
  text = "Default text",
  phone = "780-123-4567",
  email = "johnsmith@gmail.com",
  points = [],
  variant = "normal",
}) {
  // Setting the column size based on the variant || 3 for portrait and 7 for landscape
  const [height, setHeight] = useState(0);
  const refContainer = useRef();
  useLayoutEffect(() => {
    function updateHeight() {
      setHeight(refContainer.current.offsetHeight);
    }
    window.addEventListener("resize", updateHeight);
    updateHeight();
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  const imgColSize = variant === "portrait" ? 3 : 7;
  const bulletPoints = points.map((point) => <li>{point}</li>);

  return (
    // Do not ask me why only if its in portrait mode it needs to have w-100, If it has it in landscape mode it uncenters the entire thing
    // but in portrait mode without w-100 it squishes the entire thing into the center. I literally have no idea why.
    <Row
      className={`flex-row-${variant} mb-3 justify-content-center align-content-center ${
        variant == "portrait" ? "w-100" : ""
      }`}
    >
      <Col
        xs={variant == "portrait" ? imgColSize : 12}
        lg={imgColSize}
        className="p-0 h-100"
      >
        {photoURL && (
          <Container
            className="photo"
            style={{ backgroundImage: `url(${photoURL})`, height: height }}
          />
        )}
        {!photoURL && (
          <Container className="d-flex justify-content-center align-items-center bg-default vh-50">
            <h2 className="text-center text-white">Replace with Image</h2>
          </Container>
        )}
      </Col>
      <Col
        ref={refContainer}
        className="shadow-lg text-background text-col"
        xs={variant == "portrait" ? 12 - imgColSize : 12}
        sm={9}
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
              className={`title fs-1 fw-bold ${
                variant === "portrait" ? "ps-4 mb-0" : "text-primary"
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
