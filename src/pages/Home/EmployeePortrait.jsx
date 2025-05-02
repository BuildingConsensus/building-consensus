import { Row, Col, Container, Image } from "react-bootstrap";
import { useState, useLayoutEffect, useRef } from "react";

export function EmployeePortrait({
  photoURL,
  name = "John Smith",
  phone = "780-123-4567",
  email = "johnsmith@gmail.com",
  points = [],
}) {
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
  const bulletPoints = points.map((point) => <li>{point}</li>);

  return (
    <Row className="mb-3 justify-content-center align-content-center w-100">
      <Col className="p-0 align-items-center col-auto">
        <Image src={photoURL} style={{ height: height }} />
      </Col>
      <Col
        className="shadow-lg text-background text-col pt-3 ps-4 text-start"
        ref={refContainer}
      >
        <h2 className="title fs-1 fw-bold ps-4 mb-0">{name}</h2>
        <Container className="ps-5">
          <p className="m-0">{phone}</p>
          <p>{email}</p>
        </Container>
        <ul className="fs-5 ps-4">{bulletPoints}</ul>
      </Col>
    </Row>
  );
}
