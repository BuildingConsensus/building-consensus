import Image from "react-bootstrap/Image";
import Sunrise from "../assets/sunrise-book-nobg.png";
import "./Logo.css";
import { Container, Row } from "react-bootstrap";

export function Logo() {
  return (
    <Container
      className=" d-flex align-items-center flex-column align-p-0 bg-con"
      fluid
    >
      <Image src={Sunrise} alt="Sunrise" className="sunrise-image m-0" />
      <h1 className="fw-bold">Building Consensus</h1>
      <p className="fs-5 text-center">
        Alternative Dispute Resolution Professionals <br />
        Mediation, adjudication, conflict resolution, and tribunal services
      </p>
    </Container>
  );
}
