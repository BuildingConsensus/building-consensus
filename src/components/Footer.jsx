import { Stack, Container, Col, Row, Image } from "react-bootstrap";
import Facebook from "../assets/Facebook.png";
import "../App.css"

export function Footer() {
  return (
    <Container fluid className="bg-primary">
      <Row className="mx-5 pt-2">
        <Col>
          <h5 className="text-white"> OFFICE LOCATIONS </h5>
          <Stack className="mx-5 pt-2" direction="horizontal" gap={0}>
            <p className="text-white px-2"> Saskatoon Office: <br /> <br /> <br /> <br /> </p>
            <p className="text-white">
              210 - 335 Packham Ave. <br />
              Saskatoon, Saskatchewan S7N 4S1. <br />
              PHONE: 306-373-8511. <br />
              FAX: 306-373-8510
            </p>
          </Stack>
          <Stack className="mx-5 pt-2" direction="horizontal" gap={0}>
            <p className="text-white px-2"> Edmonton Office: <br /> <br /> <br /> <br /> </p>
            <p className="text-white">
              85902 - 335 Packham Ave. <br />
              Edmonton, Alberta T7A 3B2. <br />
              PHONE: 306-373-8511. <br />
              FAX: 306-373-8510
            </p>
          </Stack>
        </Col>
        <Col>
          <h5 className="text-white"> CONTACT US </h5>
          <Stack className="mx-5 pt-2" direction="horizontal" gap={0}>
            <p className="text-white px-2"> Marilyn P. Adsit:<br /> <br /></p>
            <p className="text-white">
              780-123-4567 <br />
              adsit@outlook.ca
            </p>
          </Stack>
          <Stack className="mx-5 pt-2" direction="horizontal" gap={0}>
            <p className="text-white px-2"> Partner 2:<br /> <br /></p>
            <p className="text-white">
              780-123-4567 <br />
              adsit@outlook.ca
            </p>
          </Stack>
          <a href="https://www.facebook.com">
            <Image src={Facebook} width="50px" height="50px"/>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
