// import { useMediaQuery } from "react-responsive";
import { Stack, Container, Col, Row } from "react-bootstrap";
import "../App.css"

/*
210 - 335 Packham Ave.
Saskatoon, Saskatchewan S7N 4S1.
PHONE: 306-373-8511.
FAX: 306-373-8510
*/

export function Footer() {
  /* Not sure if will be used later
  const lgBreakpoint = getComputedStyle(document.body).getPropertyValue(
    "--bs-breakpoint-lg"
  );
  const isDesktop = useMediaQuery({ query: `(min-width: ${lgBreakpoint})` });
  */

  return (
    <Container fluid className="bg-primary">
      <Row className="mx-5 pt-2">
        <Col>
          <h5 className="text-white"> OFFICE LOCATIONS </h5>
          <Stack className="mx-5 pt-2" direction="horizontal" gap={0}>
            <p className="text-white px-2"> Saskatoon Office: <br/> <br/> <br/> <br/> </p>
            <p className="text-white">
              210 - 335 Packham Ave. <br/>
              Saskatoon, Saskatchewan S7N 4S1. <br/>
              PHONE: 306-373-8511. <br/>
              FAX: 306-373-8510
            </p>
          </Stack>
          <Stack className="mx-5 pt-2" direction="horizontal" gap={0}>
            <p className="text-white px-2"> Edmonton Office: <br/> <br/> <br/> <br/> </p>
            <p className="text-white">
              85902 - 335 Packham Ave. <br/>
              Edmonton, Alberta T7A 3B2. <br/>
              PHONE: 306-373-8511. <br/>
              FAX: 306-373-8510
            </p>
          </Stack>
        </Col>
        <Col>
          <p className="text-white"> Item 1 </p>
          <p className="text-white"> Item 2 </p>
          <p className="text-white"> Item 3 </p>
          <p className="text-white"> Item 4 </p>
        </Col>
      </Row>
    </Container>
  );
}
