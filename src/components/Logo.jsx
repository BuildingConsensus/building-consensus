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
      <Row className="img-text align-items-center g-0 justify-content-center">
        <Image src={Sunrise} className="sunrise-image" />
        <Col>
          <h1 className="fw-bold title">Building Consensus</h1>
          <h6 className="mx-2 subtitle">
            Alternative Dispute Resolution Professionals <br />
            Mediation, adjudication, conflict resolution, and tribunal services
          </h6>
        </Col>
      </Row>
    </Container>
  );
}
