import Image from "react-bootstrap/Image";
import Sunrise from "../assets/sunrise-large-cropped.jpg";
import "./Logo.css";
import { Container } from "react-bootstrap";

export function Logo() {
  return (
    <Container className=" d-flex justify-content-center bg-primary p-0" fluid>
      <Image src={Sunrise} alt="Sunrise" className="sunrise-image m-0" fluid />
    </Container>
  );
}
