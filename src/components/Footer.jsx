import { Container, Col, Row, Image } from "react-bootstrap";
import Facebook from "../assets/Facebook.png";
import "../App.css"

export function Footer() {
  return (
    <Container fluid className="bg-primary">
      <Row className="mx-5 pt-2">
        {/*
        <Col>
          <h5 className="text-white"> OFFICE LOCATIONS </h5>
          <Row>
            <Col md={3}>
              <p className="text-white"> Saskatoon Office:</p>
            </Col>
            <Col>
              <p className="text-white">
                210 - 335 Packham Ave. <br />
                Saskatoon, Saskatchewan S7N 4S1. <br />
                PHONE: 306-373-8511. <br />
                FAX: 306-373-8510
              </p>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={3}>
              <p className="text-white"> Edmonton Office:</p>
            </Col>
            <Col>
              <p className="text-white">
                85902 - 335 Packham Ave. <br />
                Edmonton, Alberta T7A 3B2. <br />
                PHONE: 306-373-8511. <br />
                FAX: 306-373-8510
              </p>
            </Col>
          </Row>
        </Col>
        */}
        <Col className="text-white">
          <h4> Contact Us </h4>
          <h4> Reach Out to Building Consensus </h4>
          <h5> Building Consensus </h5>
            <p>
                Tel: +1 (306) 307-2979 <br/>
                Fax: +1 (306) 801-7711 <br/>
                Email: admin@buildingconsensus.ca
            </p>
          {/* TODO: link to facebook page once created.*/}
          <a href="https://www.facebook.com">
            <Image src={Facebook} width="50px" height="50px" />
          </a>
        </Col>
      </Row>
      <Row className="mt-2 px-5">
        <p className="text-white"> © 2025 – Building Consensus   </p>
      </Row>
    </Container>
  );
}
