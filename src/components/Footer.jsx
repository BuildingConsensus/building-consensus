// import { useMediaQuery } from "react-responsive";
import { Stack, Container } from "react-bootstrap";
import { Textbox } from "./Textbox";
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
      <Stack className="mx-5 pt-2" direction="horizontal" gap={3}>
        <Stack direction="Verticle" gap={0}>
          <h5 className="text-white"> OFFICE LOCATIONS </h5>
          <Stack className="mx-5 pt-2" direction="horizontal" gap={0}>
            <p className="text-white"> Saskatoon Office: </p>
            <p className="text-white">
              210 - 335 Packham Ave. <br/>
              Saskatoon, Saskatchewan S7N 4S1. <br/>
              PHONE: 306-373-8511. <br/>
              FAX: 306-373-8510
            </p>
          </Stack>
        </Stack>
        <Stack direction="Verticle" gap={0}>
          <p className="text-white"> Item 1 </p>
          <p className="text-white"> Item 2 </p>
          <p className="text-white"> Item 3 </p>
          <p className="text-white"> Item 4 </p>
        </Stack>
      </Stack>
    </Container>
  );
}
