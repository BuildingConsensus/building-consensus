// Importing necessary modules
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";

// DO NOT USE THIS IMAGE IT IS NOT FREE USE CHANGE IT LATER
// --------------------------------------------------------
import Steps from "../../assets/Steps Diagram.png";
// --------------------------------------------------------
import Tribunal from "../../assets/tribunal.jpg";

import CircleNumber1 from "../../assets/CircleNumber1.png";
import CircleNumber2 from "../../assets/CircleNumber2.png";
import CircleNumber3 from "../../assets/CircleNumber3.png";
import CircleNumber4 from "../../assets/CircleNumber4.png";
import { PhotoText } from "../../components/PhotoText";

export function ElectionAppeals() {
  return (
    <Container fluid className="background-tile">
      <Row className="p-lg-5 p-3 mb-5">
        <Col xs="auto" lg={6} className="border rounded-3 border-dark mb-5">
          <h1 className="text-center fs-2 fw-bold">
            We aim to resolve disputes by consensus building in communities with
            a simplified process:
          </h1>
          <Row className="align-items-center">
            <Col sm="auto">
              <Image src={CircleNumber1} />
            </Col>

            <Col>
              <h1>Step 1</h1>
              <p>
                Within the time limit as set out in your election code, an
                Appeal of an election is served by any member of that community
                to the Electoral officer and the governing body of the
                community;
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col sm="auto">
              <Image src={CircleNumber2} />
            </Col>

            <Col>
              <h1>Step 2</h1>
              <p>
                The community election code specifies the appeal procedure may
                be by independent tribunal; this tribunal is appointed during
                the nomination stage of elections. Your election code will
                provide this information
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col sm="auto">
              <Image src={CircleNumber3} />
            </Col>

            <Col>
              <h1>Step 3</h1>
              <p>
                There is an option to negotiate or mediate the disagreement with
                the election outcome
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col sm="auto">
              <Image src={CircleNumber4} />
            </Col>

            <Col>
              <h1>Step 4</h1>
              <p>
                Contact Building Consensus with the appeal document and our
                staff and independent tribunal starts the adjudication process
                for your community with intentions to resolve the election
                issues within an agreed upon time frame
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="align-self-center text-center">
          <Image src={Steps} fluid />
        </Col>
      </Row>
      <PhotoText
        photoURL={Tribunal}
        title="What is a Tribunal?"
        text="Tribunals are specialized bodies that resolve disputes by making decisions based on the evidence presented. 
        They operate independently and impartially, ensuring that decisions are made in a fair manner. 
        Adjudicative tribunals are designed to provide an alternative to traditional court proceedings, 
        offering a more flexible and efficient means of dispute resolution."
      />
    </Container>
  );
}
