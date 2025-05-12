import Image from "react-bootstrap/Image";
import Sunrise from "../assets/sunrise-book-nobg.png";
import Skyline from "../assets/skyline-cropped.jpg";
import "./Logo.css";
import { Container, Row, Col } from "react-bootstrap";

export function Logo() {
  return (
    <Container
      className="parent d-flex align-items-center justify-content-center align-p-0"
      fluid
    >
      <Image src={Skyline} className="bg-image" />
      <Row className="img-text align-items-center">
        <Image src={Sunrise} className="sunrise-image" />
        <Col className="align-items-start pt-4">
          <h1 className="fw-bold">Building Consensus</h1>
          <p className="fs-5 mx-2">
            Alternative Dispute Resolution Professionals <br />
            Mediation, adjudication, conflict resolution, and tribunal services
          </p>
        </Col>
      </Row>
    </Container>
  );
}
