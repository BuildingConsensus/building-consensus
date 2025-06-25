// Importing necessary modules
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";

import MedicineWheel from "../../assets/medicine-wheel.png";
import CircleNumber1 from "../../assets/CircleNumber1.png";
import CircleNumber2 from "../../assets/CircleNumber2.png";
import CircleNumber3 from "../../assets/CircleNumber3.png";
import CircleNumber4 from "../../assets/CircleNumber4.png";

// import { PhotoText } from "../../components/PhotoText";
import { Textbox } from "../../components/Textbox";
import { CardComponent } from "../../components/Card";

export function ElectionAppeals() {
  return (
    <Container fluid className="background-tile">
      <Row className="text-background pt-5 centered">
        <Col xs={15} sm={10} lg={7} className="text-background shadow-sm my-3 p-3">
          <h2 className="fs-1 fw-bold text-center text-black">Appealing an Election</h2>
          <p className="fs-5 text-justify">
            You or a member of your community may formally challenge the results or procedures of an election if there are grounds of something improper or illegal occurring during the election process. You may believe that the election outcome was affected by some mistake, fraud or violation of election laws or procedures that affected the results of an election.
          </p>
            <br/> <br/>
          <p className="fs-5 text-center">
            We offer a Professional and Independent Tribunal to adjudicate and resolve your community election appeal and get your community back to self governing stage quicker than court litigation
          </p>
        </Col>
      </Row>
      <Row className="centered justify-content-around">
        <Col xs={12} sm={8} lg={5} className="textbox-normal text-background shadow-lg my-3 p-3">
          <h2 className="fs-1 fw-bold text-center text-black">Better Than Court</h2>
          <p className="fs-5">
            First Nation and Indigenous Election appeals can be heard at the Federal Court however the costs and time for this procedure may sometimes take years to resolve in the Court,  and be a financial burden for your community. <br/>
            Building Consensus  offers a simplified procedure in which if your Election Code provides for an Election Tribunal;   We accept a Notice of Appeal of an election result and immediatly start working for your community.    If the process is started soon  then we are able to get your community back to self governing within months instead of years.
          </p>
          <Container className="p-1 w-75 bg-bar mt-auto"/>
        </Col>
        <Col xs={12} sm={8} lg={5} className="textbox-normal text-background shadow-lg my-3 p-3">
          <h2 className="fs-1 fw-bold text-center text-black">What is a Tribunal</h2>
          <p className="fs-5">
            Tribunals are specialized bodies that resolve disputes by making decisions based on the evidence presented.
            They operate independently and impartially, ensuring that decisions are made in a fair manner.
            Adjudicative tribunals are designed to provide an alternative to traditional court proceedings, offering a more flexible and efficient means of dispute resolution.
          </p>
        </Col>
      </Row>
      <Row className="p-lg-5 p-3 mb-5">
        <Col xs="auto" lg={6} className="border rounded-3 border-dark">
          <h1 className="text-center fs-2 fw-bold p-3">
            We aim to resolve disputes by consensus building in communities with
            a simplified process:
          </h1>
          <Row className="align-items-center">
            <Col sm="auto">
              <Image src={CircleNumber1} />
            </Col>

            <Col>
              <h1>Step 1</h1>
              <p className="fs-5">
                Within the time limit set out in your election code, an
                appeal of an election is served by any member of that community
                to the Electoral officer and the governing body of the
                community.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col sm="auto">
              <Image src={CircleNumber2} />
            </Col>

            <Col>
              <h1>Step 2</h1>
              <p className="fs-5">
                The community election code specifies the appeal procedure may
                be by independent tribunal; this tribunal is appointed during
                the nomination stage of elections. Your election code will
                provide this information.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col sm="auto">
              <Image src={CircleNumber3} />
            </Col>

            <Col>
              <h1>Step 3</h1>
              <p className="fs-5">
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
              <p className="fs-5">
                Contact Building Consensus with the appeal document and our
                staff and independent tribunal starts the adjudication process
                for your community with intentions to resolve the election
                issues within an agreed upon time frame
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="align-self-center text-center pt-3">
          <Image src={MedicineWheel} fluid />
        </Col>
      </Row>
      <Row className="centered">
        <Col xs={15} sm={10} lg={9} className="text-background shadow-sm p-3">
          <h2 className="fs-1 fw-bold text-center text-black">Why Choose a Tribunal</h2>
            <ul className="fs-5">
            <li> Promotes independent dispute resolution </li>
            <li> Cost effective as opposed to court </li>
            <li> Accessibility to remote communities </li>
            <li> Limits the need for travel </li>
            <li> Election appeals are dealt with within that community’s election code and not by  a distant court  </li>
            <li> Ability to start working on your community needs quickly and respond immediately to community needs </li>
            <li> Resolution of community conflicts more efficiently and cost effective than court processes </li>
            <li> We get your community back to self governing stage quicker than court litigation </li>
            <li> Professionally qualified tribunal members with Law Degrees and Alternative Dispute Resolution certifications </li>
            <li> Your community is involved in all steps of the process as defined by your community Election Code </li>
            </ul>
        </Col>
      </Row>
      <Row className="centered">
        <Textbox
          title="Virtual Services"
          text="We have head offices in Albert and Saskatchewan but we offer  online and virtual services so we can assist any community in Canada by using our online services  and “virtual” meeting services by Zoom, Webex and smoke signals."
          variant="nobar"
        />
        <CardComponent
          title="Sample Form"
          description="Interested in appealing your election? Fill out the sample form below and contact us by phone or email."
          link="https://albertametis.com/app/uploads/2024/10/Elections-Appeal-Form.pdf"
          buttonText="See Form"
          alt={true} />
      </Row>
    </Container>
  );
}
