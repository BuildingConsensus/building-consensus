import Image from "react-bootstrap/Image";
import Sunrise from "../assets/Sunrise-cropped.png";
import "./Logo.css";
import { Container } from "react-bootstrap";

export function Logo() {
  return (
    <Container className=" d-flex justify-content-center bg-primary" fluid>
      <Image src={Sunrise} alt="Sunrise" className="sunrise-image" />
    </Container>
  );
}
